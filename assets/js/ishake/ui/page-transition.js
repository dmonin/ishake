/**
 * 
 */
iShake.ui.PageTransition = function() {
    
    
};

iShake.ui.PageTransition.prototype = {
    /**
     * Slides page
     * 
     * @param {Object} opts Flip options
     */
    slide: function(opts) {
        var body = $(document.body),
            inEl = opts.to,
            outEl = opts.from,
            direction = opts.direction,
            slideWise = {
                rtl: ['slide-out-to-left', 'slide-in-from-right'],
                ltr: ['slide-out-to-right', 'slide-in-from-left']
            },
            wise = slideWise[direction],
            reset = function(){
                body.removeClass('sliding'),          
//                inEl.off('webkitAnimationEnd');
                outEl.addClass('hidden');                
                outEl.removeClass(wise[0]);
                inEl.removeClass(wise[1]);                                
            };

        body.addClass('sliding'),          
        inEl.removeClass('hidden');        
        
        // In webkit on android webkitAnimationEnd event was fire just after
        // animation has been completed and elements were set to their
        // original positions, that's why it has been replaced with timer
//        webkitAnimationEnd on android is fired when
//        inEl.on('webkitAnimationEnd', reset);

        setTimeout(reset, 350);
        outEl.addClass(wise[0]);
        inEl.addClass(wise[1]);
    },
    
    /**
     * Flips the page
     * @param {Object} opts Flip options
     */
    flip: function(opts)
    {
        var body = $(document.body),
            inEl = opts.to,
            outEl = opts.from,
            direction = opts.direction,
            flipWise = {
                clockwise: ['flip-out-to-left', 'flip-in-from-left'],
                anticlockwise: ['flip-out-to-right', 'flip-in-from-right']
            },
            wise = flipWise[direction],
            reset = function(){
                inEl.off('webkitAnimationEnd');
                body.removeClass('viewport-flip');
                outEl.addClass('hidden');
                inEl.removeClass('flip');
                outEl.removeClass('flip');
                outEl.removeClass(wise[0]);
                inEl.removeClass(wise[1]);                
            };

            body.addClass('viewport-flip');
            inEl.removeClass('hidden');
            outEl.addClass('flip');
            inEl.addClass('flip');
            inEl.on('webkitAnimationEnd', reset);
            outEl.addClass(wise[0]);
            inEl.addClass(wise[1]);
    }
}