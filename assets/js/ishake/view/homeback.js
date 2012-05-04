iShake.view.homeback = function(name, el)
{
    this.init(name, el);
    
    var currentItem = amplify.store('currentitem');
    
    var backsideText = $('#backside-text');
    backsideText.html(currentItem.backsideText.replace(/[\n]/g, '<br />'));
    
    var winHeight = $(window).height() || app.winHeight;
    var top = (winHeight - backsideText[0].offsetHeight) / 2 - 40;
    backsideText.css({
        top: top + 'px'
    });
        
    var me = this;
    
    this.el.on('touchmove', function(e) {
        e.preventDefault();
    });
    
    $('.scroll', this.el).on('click swipeRight swipeLeft', function(e) {
        me.unload();
        location.hash = '/home';
    });
    
}

iShake.view.homeback.prototype = {
    unload: function() {
        $('section', this.el).off('touchmove swipeRight swipeLeft click');        
    }
};

$.extend(iShake.view.homeback.prototype, iShake.view);