iShake.view.listedit = function(name, el, id)
{
    this.init(name, el);    
    
    this.form = new iShake.ui.Form($('form', el));
    
    if (!iShake.view.listedit.langsInitialized)
    {
        var options = $('select[name=language]')[0].options,
            langName;
            
        for (var isoCode in iShake.lang.de.isoLangs)
        {
            langName = iShake.lang.de.isoLangs[isoCode].name;
            
            // todo: improve perfomance
            if (langName.split(',').length > 1)
            {
                langName = langName.split(',')[0];
            }
            else if(name.split(';').length > 0)
            {
                langName = langName.split(';')[0];
            }
            
            options[options.length] = new Option(langName, isoCode);
        }
        
        iShake.view.listedit.langsInitialized = true;
    }
    
    iShake.repository.list.get(id, this.initForm, this);
}

iShake.view.listedit.prototype = {
    initForm: function(item)
    {
        this.item = item;
        
        var me = this;
        
        this.form.setData({
            'name': item.name,
            'language': item.language,
            'category': item.category,
            'is_public': item.isPublic
        });
        
        $('.header-button-right', this.el).on('click', function() {
            
            me.item.name = me.form.val('name');            
            me.item.language = me.form.val('language');
            me.item.category = me.form.val('category');
            me.item.isPublic = me.form.val('is_public');
            
            iShake.repository.list.update(me.item, function(listData) {
                iShake.ui.notify.alert('listedit.list-saved-bd', null, 'listedit.list-saved-hd');                
            }, me);
        });
                
        $('.red-button', this.el).on('click', function(e) {
            iShake.ui.notify.confirm('listedit.confirm-delete-list-hd', function() {
                iShake.repository.list.remove(me.item, function() {
                    history.go(-2);
                }, me);                
                   
            }, 'listedit.confirm-delete-list-bd');
        });
    },
    unload: function()
    {
        this.form.dispose();
        
        $('.red-button', this.el).off('click');
        $('.header-button-right', this.el).off('click');        
    }
};

$.extend(iShake.view.listedit.prototype, iShake.view);