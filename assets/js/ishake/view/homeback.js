iShake.view.homeback = function(name, el)
{
    this.init(name, el);
    
    var currentItem = amplify.store('currentitem');
    
    var backsideText = $('#backside-text');
    backsideText.html(currentItem.backsideText.replace(/[\n]/g, '<br />'));
    
    var top = (window.innerHeight - backsideText[0].offsetHeight) / 2 - 40;
    backsideText.css({
        top: top + 'px'
    });
    
    var me = this;
    
    $(me.el).on('swipeRight swipeLeft', function(e) {
        location.hash = '/home';
    });
    
    
}

iShake.view.homeback.prototype = {
    unload: function() {
//        $(this.el).off('swipeRight');
//        $(this.el).off('swipeLeft');
    }
};

$.extend(iShake.view.homeback.prototype, iShake.view);