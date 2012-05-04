/**
 * Form component
 * 
 * @param {Element} el Form element
 * @param {string} url Post-Back URL
 * @param {Function} callback Callback function
 * @param {Object} scope Callback scope
 */
iShake.ui.Form = function(el, url, callback, scope)
{
    this.el = el;
    this.url = url;
    this.callback = callback;
    this.scope = scope;
    
    var me = this;
    el.on('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        me.submit();
    });
    el.on('keydown keyup', function(e) {
        var target = $(e.target);
        target.parent().toggleClass('empty', !target.val());
    });
}

iShake.ui.Form.prototype = {
    /**
     * Disposes form
     */
    dispose: function()
    {
        this.el.off('keydown keyup submit');
        this.el[0].reset();
    },
    
    /**
     * Sets form data
     * @param {Object} data Object with form data, where key stands for name of
     *      field.
     */
    setData: function(data)
    {
        var formEl = this.el, el;
        
        for (var key in data)
        {
            el = formEl.find('[name=' + key + ']');
            
            switch (el.attr('type'))
            {
                case 'checkbox':
                    el[0].checked = !!data[key];
                    break;                    
                default:
                    el.val(data[key]);
                    el.parent().toggleClass('empty', !data[key]);
                    break;
            }
        }
    },
    
    /**
     * Submits form
     */
    submit: function()
    {
        app.setLoading(true);
        var data = this.el.serialize();
        app.request(this.url, function(data) {
            app.setLoading(false);
            
            if (!data.success)
            {
                iShake.ui.notify.alert(data.errors[0].message, null, 'error');
            }
            else
            {
                this.callback.call(this.scope, data);
            }  
        }, this, data);        
        
    },
    
    /**
     * Returns value of speicified field element
     * 
     * @param {string} name
     * @return {string}
     */
    val: function(name)
    {
        var el = this.el.find('[name=' + name + ']');
        switch (el.attr('type'))
        {
            case 'checkbox':
                return el.attr('checked') ? '1' : '0';
            default:
                return el.val();
        }
    }
};