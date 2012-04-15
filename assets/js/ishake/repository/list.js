iShake.repository.list = {
    lists: amplify.store('lists') || {},
    currentId_: amplify.store('currentListId') || 0,
    currentId: function(id)
    {
        if (id)
        {
            this.currentId_ = id;
            amplify.store('currentListId', id);
        }
        
        return this.currentId_ || 0;
        
    },
    add: function(lists)
    {
        for (var i = 0; i < lists.length; i++)
        {
            // storing lists
            this.lists[lists[i].id] = lists[i];
        }

        amplify.store('lists', this.lists);
    },
    create: function(name, callback, scope)
    {
        app.request('/list/add', function(data) {
            var listIds = iShake.repository.user.listIds();
            listIds.push(data.list.id);
            iShake.repository.user.listIds(listIds);
            this.add([data.list]);            
            
            if (callback)
            {
                callback.call(scope, data.list);
            }
        }, this, {
            name: name
        });
    },
    addItem: function(listId, name, callback, scope)
    {
        app.request('/list-item/add', function(data) {
            var list = this.lists[listId];
            if (list && list.items)
            {
                list.items.push(data.item);
                amplify.store('lists', this.lists);
            }
            
            if (callback)
            {
                callback.call(scope, data.item);
            }
            
        }, this, {
            listId: listId,
            text: name
        });
    },
    all: function(callback, scope, options)
    {
        /*
         * startLists
         */
        app.request('/list/all', function(data) {
            var lists = data.lists;
            
            this.add(lists);
            
            callback.call(scope, lists);
            
        }, this, options);
    },
    get: function(id, callback, scope, options)
    {
        options = options || {};
        
        if (this.lists[id] && this.lists[id].items && !options.remote)
        {
            callback.call(scope, this.lists[id]);
        }
        else
        {
            app.request('/list/get/id/' + id, function(data) {
                this.lists[id] = data.list;
                amplify.store('lists', this.lists);
                callback.call(scope, data.list);
            }, this, null, options.silent);
        }
    },
    item: function(id, callback, scope)
    {
        app.request('/list-item/get', function(data) {
            if (callback)
            {
                callback.call(scope, data.item);
            }
        }, this, {
            id: id
        });
    },
    update: function(list, callback, scope)
    {
        app.request('/list/update', function(data) {
            
            this.lists[data.id] = data;
            amplify.store('lists', this.lists);
            
            if (typeof callback == 'function')
            {
                callback.call(scope, data.list);
            }
        }, this, {
            id: list.id,
            name: list.name, 
            isPublic: list.isPublic
        });
    },
    updateItem: function(item, callback, scope)
    {
        app.request('/list-item/update', function(data) {
            this.lists[data.list.id]  = data.list;
            amplify.store('lists', this.lists);
            
            if (callback)
            {
                callback.call(scope, data.item);
            }
        }, this, {
            id: item.id,
            text: item.text,
            hasBackside: item.hasBackside,
            backsideText: item.backsideText
        });
    },
    remove: function(list, callback, scope)
    {
        delete this.lists[list.id];
        amplify.store('lists', this.lists);
        
        var listIds = iShake.repository.user.listIds(),
            index = iShake.util.indexOf(listIds, list.id);
        
        if (index != -1)
        {
            listIds.splice(index, 1);
            iShake.repository.user.listIds(listIds);
        }
        
        
        app.request('/list/delete', function(data) {
            if (typeof callback == 'function')
            {
                callback.call(scope);
            }
            
            }, this, {
                id: list.id
            }
        );
    },
    removeItem: function(item, callback, scope)
    {
        app.request('/list-item/delete', function(data) {
            this.lists[data.list.id]  = data.list;
            amplify.store('lists', this.lists);
           
            if (callback)
            {
                callback.call(scope, data.item);
            }
        }, this, {
            id: item.id
        });
    }
};