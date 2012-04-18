iShake.view = {
    init: function(name, el)
    {
        this.name = name;
        this.el = el;                        
    },
    initScroll: function()
    {
        if ($.os.android)
        {
            var scrollableEl = $('.scroll', this.el);
            this.scroller = new iScroll(scrollableEl[0]);
            this.scroller.refresh();
        }
    },
    disposeScroll: function()
    {
        if ($.os.android)
        {
            this.scroller.destroy();
        }
    }
};