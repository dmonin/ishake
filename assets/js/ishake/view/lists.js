/**
 * Lists view
 * 
 * @param {string} name View's name
 * @param {Element} el View's element
 * @param {integer} id optionally id of list to be added to users lists
 * 
 */
iShake.view.lists = function(name, el, id)
{
    this.init(name, el);
    
    app.updateLoginStatus();
    
    // If id provided, adding list with specified ID to user's lists
    if (id)
    {
        var listIds = iShake.repository.user.listIds();
        
        if (iShake.util.indexOf(listIds, id) == -1)
        {
            listIds.push(id);
            iShake.repository.user.listIds(listIds);            
        }        
    }
    
    this.listRepo = iShake.repository.list;
    
    $('section', el).html('');    
    
    // Back button
    $('.header-button-left', this.el).toggleClass('hidden', !iShake.repository.list.currentId());
    
    // Showing loading animation
    app.setLoading(true);
    
    // Displaying no connection warning after specified timeout
    this.timerId = setTimeout(function() {
        app.setLoading(false);
        app.showNoConnection(true);
    }, 5000);
    
    // Getting user lists
    iShake.repository.user.lists(this.initLists, this);
    
//    iShake.repository.user.repair();
}

iShake.view.lists.prototype = {
    /**
     * Initializes currently selected list and renders listview with lists
     * 
     * @param {Array.<Object>} lists Array of lists to be rendered
     */
    initLists: function(lists)
    {
        app.setLoading(false);
        clearTimeout(this.timerId);
        
        if (!this.listRepo.currentId())
        {
            this.listRepo.currentId(lists[0].id);
        }
        
        this.renderLists(lists);        
    },
    
    /**
     * Processes click event, when user selects one of the lists
     * @param {Event} e
     */
    onClick: function(e)
    {
        var target = $(e.target);
        var id = target.data('id');
        
        if (!id)
        {
            return;
        }
        
        e.preventDefault();
        
        // Storing selected list id in localStorage
        this.listRepo.currentId(id);
        
        amplify.store('currentitem', '');
        
        // Adding selected class
        $('#view-lists .selected').removeClass('selected');
        target.parent().addClass('selected');
        
        // Redirecting to homepage
        setTimeout(function() {
            location.hash = '/';
        }, 500);
    },
    
    /**
     * Processes an event when user created a new list
     * 
     * @param {string} name
     */
    onNewList: function(name)
    {
        this.listRepo.create(name, function(newListData) {
            
            // Creating new list item
            var li = document.createElement('li');
            li.innerHTML = '<span data-id="' + newListData.id + '" class="item-content">' + newListData.name + '</span>' +
                '<a href="#/list/' + newListData.id + '" class="disclosure icon-button"></a>';

            // Inserting list item
            var editorLi = $('li.new-item', this.el);
            editorLi.before(li);
            
            
            this.editor.reset();
            
            // Redirecting to list editor
            location.hash = '#/list/' + newListData.id;
        }, this);
    },
    
    /**
     * Renders list items
     * @param {Array.<Object>} lists An array with list objects
     */
    renderLists: function(lists)
    {
        var html = [],
            me = this;
        
        var selectedId = this.listRepo.currentId();
        
        // Checking wheter user has any lists
        if (lists.length == 0)
        {
            $('section', this.el).html(app.getMsg('lists.no-lists'));
        }
        else
        {
            $('section', this.el).html('<ul class="tableview"></ul>');
        }
        
        iShake.util.sortByAlphabet(lists, 'name');
        
        /**
         * Defines whether list is prefetched in localStorage
         * @type {boolean}
         */
        var hasList = false;
        
        // Rendering items
        for (var i = 0; i < lists.length; i++)
        {
            hasList = !!iShake.repository.list.lists[lists[i].id].items;
            
            html.push([
                '<li class="',
                ((lists[i].id == selectedId) ? ' selected' : ''),
                (hasList ? '' : ' online')
                ,'">',
                    '<span data-id="' + lists[i].id + '" class="item-content">' + lists[i].name + '</span>',
                    '<span class="disclosure-wrap"><a href="#/list/' + lists[i].id + '" class="disclosure icon-button online"></a></span>',
                '</li>'
            ].join(''));
        }
        
        $('section ul', this.el).html(html.join(''));
        
        // Adding event listeners
        $('.item-content', this.el).on('click', function(e) {
            me.onClick(e);
        });
        
        $('a', this.el).on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            location.hash = e.target.hash;
        });
        
        // If user is registered, rendering inline editor
        var user = app.user();
        if (user && user.registered)
        {
            this.editor = new iShake.ui.NewItemInput(
                app.getMsg('lists.new-list'),
                this.onNewList,
                this
            );
                
            this.editor.render($('section ul', this.el));                                
        }        
        
        this.initScroll();
    },
    unload: function()
    {
        this.disposeScroll();
    }
};

$.extend(iShake.view.lists.prototype, iShake.view);