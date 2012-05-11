/**
 * Input box for new list item
 * 
 * @param {string} defaultText Default empty text
 * @param {Function} callback Callback method
 * @param {Object} scope Callback's scope object
 */
iShake.ui.NewItemInput = function(defaultText, callback, scope)
{
    this.defaultText = defaultText;
    this.callback = callback;
    this.cbScope = scope;
    
}

/**
 * Renders component to specified parent element
 * 
 * @param {Element} parent Container element where input should be rendered
 */
iShake.ui.NewItemInput.prototype.render = function(parent)
{
    var html = [
        '<li class="new-item-li empty">',
            '<span class="new-item">',
                '<span class="item-loader"><span class="spinner"></span></span>',
                '<span class="new-item-wrap"><input type="text" class="new-item-input" name="new" value="" /></span>',
                '<span class="new-item-empty">' + this.defaultText + '</span>',
            '</span>',
            '<span class="disclosure-wrap"><span class="disclosure icon-button plus"></span></span>',
        '</li>'].join('');
    
    
    parent.append(html);
    
    
    var input = $('.new-item-input', parent),
        me = this;
    
//    input.on('change', function(e) {
//        input.parent().parent().parent().addClass('loading');        
//        me.callback.call(me.cbScope, e.target.value);        
//    });
    
    input.on('keyup keydown', function(e) {
        input.parent().parent().parent().toggleClass('empty', !input.val());

        if (e.keyCode == 13)
        {
            e.target.blur();
        }
    });
    
    $('.new-item-li .plus', parent).on('click', function() {
        input.parent().parent().parent().addClass('loading');        
        me.callback.call(me.cbScope, input.val());
    });
    
    this.input = input;
    
    
}

/**
 * Resets form
 */
iShake.ui.NewItemInput.prototype.reset = function()
{
    this.input.val('');
    
    var li = this.input.parent().parent().parent();
    li.removeClass('loading');
    li.addClass('empty');
}