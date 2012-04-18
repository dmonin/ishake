iShake.view.online = function(name, el)
{
    this.init(name, el);
    
    $('section', el).html('');  
    
    this.listRepo = iShake.repository.list;
    
    this.listRepo.all(function(lists) {
        this.data = lists;
        this.renderItems();
    }, this);
    
    
}

iShake.view.online.prototype = {
    onClick: function(e)
    {
//        e.preventDefault();
//        e.stopPropagation();
        
        var target = $(e.target), 
            index,
            userListIds = iShake.repository.user.listIds();
        
        if (target.hasClass('plus'))
        {
            // Adding list to my lists
            target.removeClass('plus');
            target.addClass('minus');
                        
            userListIds.push(target.data('id'));
            
            iShake.repository.user.listIds(userListIds);            
        }
        else if (target.hasClass('minus'))
        {
            target.addClass('plus');
            target.removeClass('minus');
            
            var id = target.data('id');
            index = $.inArray(id, userListIds);            
            userListIds.splice(index, 1);
            
            iShake.repository.user.listIds(userListIds);              
        }
    },
    renderItems: function()
    {
        var html = [],
            items = this.data, 
            me = this,
            userListIds = iShake.repository.user.listIds();
        
        $('section', this.el).html('<ul class="tableview"></ul>');
        
        for (var i = 0; i < items.length; i++)
        {
            var cls = iShake.util.indexOf(userListIds, items[i].id) != -1 ? 'minus' : 'plus';
            html.push([
                '<li>',
                    '<a href="#/list/' + items[i].id + '" data-id="' + items[i].id + '" class="item-content">' + items[i].name + '</a>',
                    '<span class="disclosure ' + cls + '" data-id="' + items[i].id + '"></span>',
                '</li>'
            ].join(''));
        }
        
        $('section ul', this.el).html(html.join(''));
        $('section li', this.el).on('click', function(e) {
            me.onClick(e);
        });
    },
    unload: function()
    {
        
    }
};

$.extend(iShake.view.online.prototype, iShake.view);