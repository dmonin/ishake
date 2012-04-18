iShake.view.lists = function(name, el)
{
    this.init(name, el);
    
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
                    '<a href="#/list/' + lists[i].id + '" class="disclosure online"></a>',
                '</li>'
            ].join(''));
        }
        
        var user = app.user();
        
        if (user && user.registered)
        {
            html.push([
                '<li class="new-item empty">',
                    '<span class="item-loader"><span class="spinner"></span></span>',
                    '<input type="text" class="list-edit" name="new" value="" />',
                    '<span class="new-item-empty">' + app.getMsg('lists.new-list') + '</span>',
                '</li>'].join('')        
            );
        }
        
        $('section ul', this.el).html(html.join(''));
        
        $('section li', this.el).on('click', function(e) {
            me.onClick(e);
        });
        
        
        
        if (user && user.registered)
        {
            var newInput = $('#view-lists .new-item input');
            this.editor = new iShake.ui.NewItemInput(
                newInput, 
                this.onNewList,
                this
            );
        }        
        
        this.initScroll();
    },
    unload: function()
    {
        this.disposeScroll();
    }
};

$.extend(iShake.view.lists.prototype, iShake.view);