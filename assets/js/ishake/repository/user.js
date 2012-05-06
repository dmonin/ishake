iShake.repository.user = {
    user_: null,
    listIds_: null,
    completedItemIds_: amplify.store('completedids') || [],
    
    /**
     * Returns currently loaded user
     * 
     * @param {Object} userData if provided stores currently loaded user
     */
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
        
        if (userData === null)
        {
            amplify.store('user', null, {expires: 0});
            this.user_ = null;
        }

        return this.user_;
    },
    
    /**
     * Stores that user has answered the question
     * 
     * @param {Array.<integer>} ids Array with list items
     */
    completedItemIds: function(ids) {
        if (ids)
        {
            this.completedItemIds_ = ids;        
            amplify.store('completedids', this.completedItemIds_);        
        }
            
        return this.completedItemIds_;
    },
    
    /**
     * Stores selected by user list ids
     * 
     * @param {Array} listIds Array of list ids
     */
    listIds: function(listIds) {
        var user = this.current();
        
        if (listIds)
        {
            var currentId = iShake.repository.list.currentId();
            if (listIds.length && $.inArray(currentId, listIds) == -1)
            {
                iShake.repository.list.currentId(listIds[0]);
            }            
        }
        
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
    
    /**
     * Loads user lists
     * 
     * @param {Function} callback Callback function
     * @param {Object} scope Callback object
     */
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
                
                }, this, {ids: [52, 13]}
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
                    listRepo.get(listIds[i], function() {
                        this.lists(callback, scope);                        
                    }, this);
                    return;
                }
                
                lists.push(list);
            }
            callback.call(scope, lists);
        }
    },
    
    /**
     * Removes doubly stored items
     */
    repair: function() {
        var listIds = this.listIds();
        
        //removes doubles (there should be no doubles in the list)
        for (var i = listIds.length - 1; i >= 0; i--) 
        {
            if ($.inArray(Number(listIds[i]), listIds, i + 1) != -1 ||
                $.inArray(String(listIds[i]), listIds, i + 1) != -1) 
            {
                listIds.splice(i, 1);
            }
        }
        
        this.listIds(listIds);
    },
    
    /**
     * Refreshes user data and lists
     *
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     */
    refresh: function(callback, scope) {
        app.request('/user/get', function(data) {
            this.current(data.user);
            iShake.repository.list.add(data.lists);

            if (callback) {
                callback.call(scope);
            }
        }, this);        
    },
    
    /**
     * Sets facebook
     */
    setFacebook: function() {
        app.request('/user/facebook-login', function(data) {
            iShake.repository.user.current(data.user);            
            iShake.repository.list.add(data.lists);
            app.updateLoginStatus();
        });
    }
};