iShake.repository.user = {
    user_: null,
    listIds_: null,
    current: function(userData) {
        
        
        if (userData)
        {
            this.user_ = userData;
            amplify.store('user', userData);
        }

        if (!this.user_)
        {
            this.user_ = amplify.store('user');
        }

        return this.user_;
    },
    listIds: function(listIds) {
        var user = this.current();
        
        if (listIds && user)
        {
            user.listIds = listIds;         
            app.request('/user/set-list-ids', null, null, {
                listIds: listIds
            });
            amplify.store('user', user);
        }
        else if (listIds)
        {
            this.listIds_ = listIds;                        
            amplify.store('listIds', listIds);
        }
        
        if (user)
        {
            this.listIds_ = this.current().listIds;            
        }
        else
        {
            this.listIds_ = this.listIds_ || amplify.store('listIds') || [];
        }
        
        return this.listIds_;
    },
    lists: function(callback, scope) {
        var listIds = this.listIds(),
            listRepo = iShake.repository.list;
            
        if (!listIds || listIds.length == 0)
        {
            listIds = listIds || [];
            
            listRepo.all(function(lists) {
                for (var i = 0; i < lists.length; i++)
                {
                    listIds.push(lists[i].id);
                }
                this.listIds(listIds);
                
                callback.call(scope, lists);
                
                }, this, {startLists: true}
            );
        }
        else
        {
            var lists = [], list;
            for (var i = 0; i < listIds.length; i++)
            {
                list = listRepo.lists[listIds[i]];
                
                // one of the lists is not in cache
                if (!list)
                {
                    this.refresh(function() {
                        this.lists(callback, scope);
                    }, this);
                    return;
                }               
                
                lists.push(list);
            }
            callback.call(scope, lists);
        }
    }, 
    refresh: function(callback, scope) {
        app.request('/user/get', function(data) {
            this.current(data.user);
            iShake.repository.list.add(data.lists);
            
            if (callback)
            {
                callback.call(scope);
            }
        }, this);
    },
    setFacebook: function()
    {
        app.request('/user/facebook-login', function(data) {
            iShake.repository.user.current(data.user);            
            iShake.repository.list.add(data.lists);
            app.updateLoginStatus();
        });
    }
};