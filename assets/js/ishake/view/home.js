iShake.view.home = function(name, el)
{
    this.init(name, el);
    
    // Getting current list
    var currentId = iShake.repository.list.currentId();
    if (!currentId)
    {
        location.hash = '/lists';
        return;
    }
    
    this.watchId = 0;
    
    $('#phone').removeClass('animate');    
    this.resultNode = $('#result');        
    
    app.setLoading(true);
    
    $('section', el).removeClass('has-backside');
    
    this.timerId = setTimeout(function() {
        app.setLoading(false);        
        app.showNoConnection();        
    }, 5000);
    
    // Getting list data
    iShake.repository.list.get(currentId, this.initMotion, this);
}

iShake.view.home.prototype = {
    isShaking: false,
    initMotion: function(list)
    {
        clearTimeout(this.timerId);
        
        this.el.toggleClass('ready', true);
        
        app.setLoading(false);
        
        if (navigator.onLine)
        {
            iShake.repository.list.get(list.id, function(list) {
                this.currentList = list;                
            }, this, {remote: true, silent: true});
        }

        this.currentList = list;
        this.currentItem = amplify.store('currentitem') || null;
        
        var me = this;
        
        $(window).on('devicemotion', function(e) {            
            me.onDeviceMotion(e.accelerationIncludingGravity);
        });
        
        if (this.currentItem)
        {
            this.el.toggleClass('ready', false);
            this.setResult(this.currentItem);
            $('section', this.el).toggleClass('has-backside', 
                this.currentItem.hasBackside);    
        }
        else
        {
            // Setting name of list       
            $('#phone').addClass('animate');
            var msg = $.os.android ? app.getMsg('common.start') : app.getMsg('common.shake');
            $('#phone-text').html(msg);
            
            // Disabling shaking after 8 seconds
            setTimeout(function() {
                $('#phone').removeClass('animate');            
            }, 16000);
        }
        
        
        // Adding listeners
        var evt = $.os.version ? 'tap' : 'click';
        $('section', this.el).on(evt, function(e) {
            if (!e.target.href && !$(e.target).hasClass('menu-button'))
            {
                me.startShake();
            }            
        });
        
        this.el.on('touchmove', function(e) {
            e.preventDefault();
        });
        
        this.el.on('swipeLeft swipeRight', function(e) {
            e.preventDefault();
            this.unload();
            
            if (me.currentItem && me.currentItem.hasBackside)
            {
                location.hash = '/homeback';
            }
            
        });
        
        // Android Webkit: Refresh layout
        me.el[0].style.webkitTransform = 'translate(0, 1)';
        setTimeout(function() {
            me.el[0].style.webkitTransform = 'translate(0, 0)';
        }, 300);
    },
    onDeviceMotion: function(acceleration)
    {
        if (!this.vector)
        {
            this.vector = new iShake.model.Vector(acceleration);
            return;
        }            
        
        
        var vector = this.vector,
            isShaking = (vector.isShaking(acceleration));
        
        if (isShaking == true)
        {
            this.startShake();         
        }

        vector.update(acceleration);       
    },
    random: function()
    {
        var index = Math.floor(Math.random() * this.currentList.items.length);
        return this.currentList.items[index];
    },
    setResult: function(item)
    {        
        this.resultNode.html(item.text);
        
        var top = (window.innerHeight - this.resultNode[0].offsetHeight) / 2 - 40;
        this.resultNode.css({
            top: top + 'px'
        });
    },
    startShake: function()
    {
        var me = this;
        
        $('section', me.el).removeClass('has-backside');
        
        this.resultNode.addClass('shaking');
        this.el.toggleClass('ready', false);

        if (this.timeout)
        {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(function() {
            clearInterval(me.interval);
            me.interval = 0;
            me.resultNode.removeClass('shaking');
            
            me.currentItem = me.random();
            me.setResult(me.currentItem);
            
            amplify.store('currentitem', me.currentItem);
            
            me.resultNode.toggleClass('rotate-left', false);
            me.resultNode.toggleClass('rotate-right', false);   
            
            me.isShaking = false;
            
            $('section', me.el).toggleClass('has-backside', me.currentItem.hasBackside);                                    
        }, 2000);

        this.isShaking = true;   
        
        if (!Modernizr.cssanimations)
        {
            me.resultNode.toggleClass('rotate-left', true);
        }
        
        
        if (!this.interval)
        {
            var intervalTime = Modernizr.cssanimations ? 300 : 80;
            this.interval = setInterval(function() {
                me.setResult(me.random());
                if (!Modernizr.cssanimations)
                {
                    me.resultNode.toggleClass('rotate-left');
                    me.resultNode.toggleClass('rotate-right');                    
                }
                
            }, intervalTime); 
        }
        
    },
    unload: function()
    {
        $('#phone').removeClass('animate');    
        $('section', this.el).off('tap');
        $('section', this.el).off('click');
        this.el.off('swipeLeft swipeRight touchmove');
        $(window).off('devicemotion');
        
    }
};

$.extend(iShake.view.home.prototype, iShake.view);