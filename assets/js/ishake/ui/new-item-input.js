iShake.ui.NewItemInput = function(input, callback, scope)
{
    input.on('keyup keydown', function(e) {
        input.parent().toggleClass('empty', !input.val());            
        if (e.keyCode == 13)
        {
            e.target.blur();
        }
    });
        
    input.on('change', function(e) {
        input.parent().addClass('loading');        
        callback.call(scope, e.target.value);        
    });
    
    this.input = input;
    
}

iShake.ui.NewItemInput.prototype.reset = function()
{
    this.input.val('');
    
    var li = this.input.parent();
    li.addClass('empty');
    li.removeClass('loading');
}