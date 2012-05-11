/**
 * View with list items
 * 
 * @param {string} name
 * @param {Element} el
 * @param {string} id
 */
iShake.view.list = function(name, el, id)
{
    this.init(name, el);

    $('section', el).html('');    
    
    this.listRepo = iShake.repository.list;
    this.initData(id);
}

iShake.view.list.prototype = {
    /**
     * Initializes lists data
     * @param {integer} id
     */
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
                
                location.hash = '/lists';
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
            li.innerHTML = '<a class="item-content" href="#/item/' + newItemData.id + '">' + newItemData.text + '</a><span class="disclosure-wrap"></span>';
            $(li).data('id', newItemData.id);

            var editorLi = $('li.new-item-li', this.el);
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
            listName = canEdit ? '<a class="item-content" href="#/item/' + 
                                    items[i].id + '">' + items[i].text + 
                                    '</a>' + 
                                  '<span class="disclosure-wrap">' + 
                                  '<a href="#/item/' + 
                                    items[i].id + '" class="disclosure icon-button"></a>' + 
                                  '</span>' :
                                    
                                 '<span class="item-content">' + items[i].text + '</span>';
            
            html.push([
                '<li data-id="' + items[i].id + '">',
                    listName,
                '</li>'
            ].join(''));
        }
        
        $('section ul', this.el).html(html.join(''));                
        
        if (canEdit)
        {
            this.editor = new iShake.ui.NewItemInput(
                app.getMsg('list.new-item'), 
                this.onNewItem,
                this
            );
            this.editor.render($('section ul', this.el));            
        }
    },
    unload: function()
    {
         
    }
};

$.extend(iShake.view.list.prototype, iShake.view);

