iShake.view = {
    init: function(name, el)
    {
        this.name = name;
        this.el = el;                        
    },
    
    /**
     * Initializes scrolling on android, iOS uses native scrolling via CSS
     */
    initScroll: function()
    {
        if ($.os.android)
        {
            var scrollableEl = $('.scroll', this.el);
            this.scroller = new iScroll(scrollableEl[0]);
            this.scroller.refresh();
        }
    },
    /**
     * Disposes scrolling
     */
    disposeScroll: function()
    {
        if ($.os.android)
        {
            this.scroller.destroy();
        }
    }
};