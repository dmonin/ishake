iShake.view.list = function(name, el, id)
{
    this.init(name, el);

    $('section', el).html('');    
    
    this.listRepo = iShake.repository.list;
    this.initData(id);
}

iShake.view.list.prototype = {
    getItem: function(itemId)
    {
        var items = this.listData.items;
        for (var i = 0; i < items.length; i++)
        {
            if (items[i].id == itemId)
            {
                return items[i];
            }
        }
        
        return null;
    },
    initData: function(id)
    {                
        this.listRepo.get(id, function(data) {
            if (!data)
            {
                iShake.ui.notify.alert('list-deleted');
                
                var listIds = iShake.repository.user.listIds(),
                    index = iShake.util.indexOf(listIds, id);
                
                if (index != -1)
                {
                    listIds.splice(index, 1);
                    iShake.repository.user.listIds(listIds)
                }
                
                location.hash = '#/lists';
                return;
            }
            
            var user = iShake.repository.user.current();
            var canEdit = user && user.username == data.username;
            
            $('.header-button-right', this.el).toggleClass('hidden', !canEdit);
            $('.header-button-right', this.el).attr('href', '#/listedit/' + id);
            
            this.listData = data;
            this.renderItems();            
        }, this);
    },
    onNewItem: function(name)
    {
        this.listRepo.addItem(this.listData.id, name, function(newItemData) {
            this.editor.reset();
            
            var li = document.createElement('li');
            li.innerHTML = '<a class="item-content" href="#/item/' + newItemData.id + '">' + newItemData.text + '</a>';
            $(li).data('id', newItemData.id);

            var editorLi = $('li.new-item', this.el);
            editorLi.before(li);

        }, this);
        
    },
    renderItems: function()
    {
        var html = [],
            items = this.listData.items;
        
        iShake.util.sortByAlphabet(items, 'text');
        
        $('#view-list h1').html(this.listData.name);
        
        var user = app.user(),
            canEdit = user && user.username == this.listData.username,
            listName;
            
        
        $('section', this.el).html('<ul class="tableview"></ul>');
        
        for (var i = 0; i < items.length; i++)
        {
            listName = canEdit ? '<a class="item-content" href="#/item/' + items[i].id + '">' + items[i].text + '</a>' :
                                 '<span class="item-content">' + items[i].text + '</span>';
            
            html.push([
                '<li data-id="' + items[i].id + '">',
                    listName,
                '</li>'
            ].join(''));
        }
        
        if (canEdit)
        {
            html.push([
                '<li class="new-item empty">',
                    '<span class="item-loader"><span class="spinner"></span></span>',
                    '<input type="text" class="list-edit" name="new" value="" />',
                    '<span class="new-item-empty">' + app.getMsg('list.new-item') + '</span>',
                '</li>'].join('')        
            );
        }
        
        $('section ul', this.el).html(html.join(''));                
        
        if (canEdit)
        {
            var newInput = $('#view-list .new-item input');
            this.editor = new iShake.ui.NewItemInput(
                newInput, 
                this.onNewItem,
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

$.extend(iShake.view.list.prototype, iShake.view);

