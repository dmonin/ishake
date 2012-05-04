iShake.view.lists = function(name, el, id)
{
    this.init(name, el);
    
    if (id)
    {
        var listIds = iShake.repository.user.listIds();
        
        if ($.inArray(id, listIds) == -1)
        {
            listIds.push(id);
            iShake.repository.user.listIds(listIds);            
        }
        
    }
    
    this.listRepo = iShake.repository.list;
    
    $('section', el).html('');    
    
    $('.header-button-left', this.el).toggleClass('hidden', !iShake.repository.list.currentId());
    
    app.updateLoginStatus();
    app.setLoading(true);
    
    this.timerId = setTimeout(function() {
        app.setLoading(false);
        $('#no-connection').css('display', 'block');
    }, 3000);
    
    // Getting user lists
    iShake.repository.user.lists(this.initLists, this);
    
//    iShake.repository.user.repair();
}

iShake.view.lists.prototype = {
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
    
    onClick: function(e)
    {
        var target = $(e.target);
        var id = target.data('id');
        
        if (!id)
        {
            return;
        }
        
        e.preventDefault();
        
        this.listRepo.currentId(id);
        
        amplify.store('currentitem', '');
        
        $('#view-lists .selected').removeClass('selected');
        target.parent().addClass('selected');
        
        setTimeout(function() {
            location.hash = '/';
        }, 500);
    },
    
    onNewList: function(name)
    {
        this.listRepo.create(name, function(newListData) {
            var li = document.createElement('li');
            li.innerHTML = '<span data-id="' + newListData.id + '" class="item-content">' + newListData.name + '</span>' +
                '<a href="#/list/' + newListData.id + '" class="disclosure"></a>';

            var editorLi = $('li.new-item', this.el);
            editorLi.before(li);
            
            this.editor.reset();
            
            location.hash = '#/list/' + newListData.id;
        }, this);
    },
    
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
        
        var hasList = false;
        
        for (var i = 0; i < lists.length; i++)
        {
            hasList = !!iShake.repository.list.lists[lists[i].id].items;
            
            html.push([
                '<li class="',
                ((lists[i].id == selectedId) ? ' selected' : ''),
                (hasList ? '' : ' online')
                ,'">',
                    '<span data-id="' + lists[i].id + '" class="item-content">' + lists[i].name + '</span>',
                    '<span class="disclosure-wrap"><a href="#/list/' + lists[i].id + '" class="disclosure online"></a></span>',
                '</li>'
            ].join(''));
        }
        
       
        
        $('section ul', this.el).html(html.join(''));
        
        $('.item-content', this.el).on('click', function(e) {
            me.onClick(e);
        });
        
        $('a', this.el).on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            location.hash = e.target.hash;
        });
        
        
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