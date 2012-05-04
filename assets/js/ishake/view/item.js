/**
 * Item view
 * @param {string} name View's name
 * @param {Element} el View's element
 * @param {string} id Item's id
 */
iShake.view.item = function(name, el, id)
{
    this.init(name, el);
    
    this.form = new iShake.ui.Form($('form', el));            
    this.enableBackText(false);
    
    this.listRepo = iShake.repository.list;
    this.listRepo.item(id, this.initForm, this);    
}

iShake.view.item.prototype = {
    /**
     * Controls visibility of backtext
     *
     * @param {boolean} isEnabled Defines whether backside text form should be 
     *      visible
     */
    enableBackText: function(isEnabled)
    {
        $('[name=backside_text]').parent().toggleClass('hidden', !isEnabled);
    },
    
    /**
     * Initializes editor form
     *
     * @param {Object} item Initializes
     */
    initForm: function(item)
    {
        this.item = item;
        
        // Setting form data
        this.form.setData({
            'text': item.text,
            'has_backside': item.hasBackside,
            'backside_text': item.backsideText
        });
        
        var me = this;
        
        this.enableBackText(item.hasBackside);
        
        $('[name=has_backside]', this.el).on('change', function(e) {
            me.enableBackText(e.target.checked);
        });
        
        // Save button
        $('.header-button-right', this.el).on('click', function() {            
            me.item.name = me.form.val('name');
            me.item.hasBackside = me.form.val('has_backside');
            me.item.backsideText = me.form.val('backside_text');
            
            me.listRepo.updateItem(me.item, function(listData) {
                iShake.ui.notify.alert('item.item-saved-bd', null, 'item.item-saved-hd');                
            }, me);
        });
        
        // Delete button
        $('.red-button', this.el).on('click', function(e) {            
            iShake.ui.notify.confirm('item.confirm-delete-item-hd', function() {
                me.listRepo.removeItem(me.item, function() {
                    history.back();
                }, me);           
            }, 'item.confirm-delete-item-bd');
        });
    },
    
    /**
     * Disposes view
     */
    unload: function()
    {
        $('.red-button', this.el).off('click');
        this.form.dispose();
        $('.header-button-right', this.el).off('click');        
    }
};

$.extend(iShake.view.item.prototype, iShake.view);