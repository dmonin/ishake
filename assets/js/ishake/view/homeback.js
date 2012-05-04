/**
 * Backside of flash card
 * @param {string} name Name of view
 * @param {Element} el View's element
 */
iShake.view.homeback = function(name, el)
{
    this.init(name, el);
    
    // Getting an item from localStorage
    var currentItem = amplify.store('currentitem');
    
    // Setting text
    var backsideText = $('#backside-text');
    backsideText.html(currentItem.backsideText.replace(/[\n]/g, '<br />'));
    
    // Centering position of text
    var winHeight = $(window).height() || app.winHeight;
    var top = (winHeight - backsideText[0].offsetHeight) / 2 - 40;
    backsideText.css({
        top: top + 'px'
    });
        
    var me = this;
    
    // Preventing vertical move of page on swipe events
    this.el.on('touchmove', function(e) {
        e.preventDefault();
    });
    
    // Switching page by swipeLeft / swipeRight events
    $('.scroll', this.el).on('click swipeRight swipeLeft', function(e) {
        me.unload();
        location.hash = '/home';
    });
}

iShake.view.homeback.prototype = {
    
    /**
     * Disposes view
     */
    unload: function() {
        $('section', this.el).off('touchmove swipeRight swipeLeft click');        
    }
};

$.extend(iShake.view.homeback.prototype, iShake.view);