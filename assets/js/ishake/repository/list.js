/**
 * List Repository
 *
 */
iShake.repository.list = {
    lists: amplify.store('lists') || {},
    currentId_: amplify.store('currentListId') || 0,
    
    /**
     * Returns currently selected list id
     * @param {integer} id Optional ID, if specified, stores new id value
     * @return {integer}
     */
    currentId: function(id) {
        if (id)
        {
            this.currentId_ = id;
            amplify.store('currentListId', id);
        }
        
        return this.currentId_ || 0;        
    },
    
    /**
     * Stores locally specified lists
     *
     * @param {Array} listData An array with list objects
     * @return {Array.<iShake.ui.model.List>}
     */
    add: function(listData) {
        var lists = [], list;
        for (var i = 0; i < listData.length; i++)
        {
            // storing lists
            list = listData[i];
            this.lists[listData[i].id] = list;
            
            lists.push(list);
        }

        amplify.store('lists', this.lists);
        
        return lists;
    },
    
    /**
     * Creates a new list with specified name
     * 
     * @param {string} name Name of the list
     * @param {Function} callback Callback funtion
     * @param {Object} scope Callback scope
     */
    create: function(name, callback, scope) {
        app.request('/list/add', function(data) {
            var listIds = iShake.repository.user.listIds();
            listIds.push(data.list.id);
            iShake.repository.user.listIds(listIds);
            var list = this.add([data.list])[0];            
            
            if (callback)
            {
                callback.call(scope, list);
            }
        }, this, {
            name: name,
            language: navigator.language
        });
    },
    
    /**
     * Adds a new item to the list
     *
     * @param {string} listId Id of list, where the item should be added
     * @param {string} name Name of item
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     */
    addItem: function(listId, name, callback, scope) {
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
    
    /**
     * Loads lists from server. Lists can be filterd with options object.
     * 
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     * @param {Object} options Configuration filter
     */
    all: function(callback, scope, options) {
        /*
         * startLists
         */
        app.request('/list/all', function(data) {
            var lists = data.lists;
            
            lists = this.add(lists);
            
            callback.call(scope, lists);
            
        }, this, options);
    },
    
    /**
     * Gets single list from server
     * @param {integer} id Id of list
     * @param {Function} callback Callback object
     * @param {Object} scope Callback scope object
     * @param {Object} options Object with fetch parameters
     */
    get: function(id, callback, scope, options) {
        if (!id)
        {
            throw new Error('id is undefined');
        }
        
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
                callback.call(scope, this.lists[id]);
            }, this, null, options.silent);
        }
    },
    
    /**
     * Returns list item with specified id
     * 
     * @param {integer} id Item's id
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     */
    item: function(id, callback, scope) {
        app.request('/list-item/get', function(data) {
            if (callback)
            {
                callback.call(scope, data.item);
            }
        }, this, {
            id: id
        });
    },
    
    /**
     * Updates list
     * 
     * @param {Object} list List data
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     */
    update: function(list, callback, scope) {
        app.request('/list/update', function(data) {
            
            this.lists[data.id] = data;
            amplify.store('lists', this.lists);
            
            if (typeof callback == 'function')
            {
                callback.call(scope, this.lists[data.id]);
            }
        }, this, {
            id: list.id,
            name: list.name, 
            isPublic: list.isPublic,
            category: list.category,
            language: list.language
        });
    },
    
    /**
     * Updates list item
     * 
     * @param {Object} item List item
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     */
    updateItem: function(item, callback, scope) {
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
    
    /**
     * Deletes list
     * 
     * @param {Object} list List data
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     */
    remove: function(list, callback, scope) {
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
    
    /**
     * Removes an item from specified list
     * 
     * @param {Object} item Item to be deleted
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     */
    removeItem: function(item, callback, scope) {
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