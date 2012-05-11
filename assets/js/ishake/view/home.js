/**
 * Home view
 */
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
    
    // Showing loading status
    app.setLoading(true);    
    $('section', el).removeClass('has-backside');
    
    // Display no connection warning after 5 seconds timeout
    this.timerId = setTimeout(function() {
        app.setLoading(false);
        app.showNoConnection(true);
    }, 5000);
    
    // Getting current list data (from local storage if possible)
    iShake.repository.list.get(currentId, this.initMotion, this);
}

iShake.view.home.prototype = {
    /**
     * Defines whether device is shaking
     * @type {boolean}
     */
    isShaking: false,
    
    /**
     * Current list
     */
    currentList_: null,
    
    /**
     * Sets current list
     */
    currentList: function(list)
    {
        if (list)
        {
            var completedIds = iShake.repository.user.completedItemIds(),
                items = list.items;

            // Removing completed items
            for (var i = items.length - 1; i >= 0; i--)
            {
                if (iShake.util.indexOf(completedIds, items[i].id) != -1)
                {
                    items.splice(i, 1);
                }
            }
            
            if (list.items.length == 0)                
            {
                iShake.ui.notify.alert('home.list-finished');
                iShake.repository.list.get(list.id, this.resetList, this, {
                    remote: true
                });
                
                location.hash = '/lists';
            }

            this.currentList_ = list;
        }
        
        
        return this.currentList_;
    },
    
    /**
     * Initializes motion events
     */
    initMotion: function(list)
    {
        // Setting current list and filtering completed items
        this.currentList(list);
        
        clearTimeout(this.timerId);
        
        // Displays ready to shake animation
        this.el.toggleClass('ready', true);
        
        app.setLoading(false);
        
        // Refreshing current list from server
        if (navigator.onLine)
        {
            iShake.repository.list.get(list.id, function(list) {
                this.currentList(list);                
            }, this, {remote: true, silent: true});
        }
        
        this.currentItem = amplify.store('currentitem') || null;
        
        var me = this;
        
        // Adding Motion listeners
        $(window).on('devicemotion', function(e) {            
            me.onDeviceMotion(e.accelerationIncludingGravity);
        });
        
        // If user comes from homeback view, display current item
        if (this.currentItem)
        {
            this.el.toggleClass('ready', false);
            this.setResult(this.currentItem);
            $('section', this.el).toggleClass('has-backside', 
                this.currentItem.hasBackside);    
            
            
            var completedIds = iShake.repository.user.completedItemIds(),
                alreadyAnswered = iShake.util.indexOf(completedIds, this.currentItem.id) != -1;
            $('.complete', this.el).toggleClass('completed', alreadyAnswered);
        }
        else
        {
            // Displaying shaking phone    
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
            if (!e.target.href && 
                !$(e.target).hasClass('menu-button') &&
                !$(e.target).hasClass('complete'))
            {
                me.startShake();
            }
        });
        
        // Disables vertical move of page while swipeLeft / swipeRight
        this.el.on('touchmove', function(e) {
            e.preventDefault();
        });
        
        $('.complete', this.el).on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            var ids = iShake.repository.user.completedItemIds(),
                target = $(e.target);
            
            if (target.hasClass('completed'))
            {
                var index = iShake.util.indexOf(ids, me.currentItem.id);
                
                if (index != -1)
                {
                    ids.splice(index, 1);
                }
            }
            else
            {
                ids.push(me.currentItem.id);                
            }
            
            iShake.repository.user.completedItemIds(ids);            
            
            var list = me.currentList();
            me.currentList(list);
            target.toggleClass('completed');
        });
        
        // Attaching swipe event listeners
        this.el.on('swipeLeft swipeRight', function(e) {
            e.preventDefault();            
            me.unload();
            
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
    
    /**
     * Device motion listener, verifies whether Device is shaking and starts
     * shaking animation
     */
    onDeviceMotion: function(acceleration)
    {
        if (!this.vector)
        {
            // Saving move vector
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
    
    /**
     * Returns random item from current list
     */
    random: function()
    {
        var index = Math.floor(Math.random() * this.currentList().items.length);
        return this.currentList().items[index];
    },
    
    resetList: function(list)
    {
        var completedIds = iShake.repository.user.completedItemIds();
        for (var i = 0; i < list.items.length; i++)
        {
            var index = iShake.util.indexOf(completedIds, list.items[i].id);
            completedIds.splice(index, 1);
        }
        
        iShake.repository.user.completedItemIds(completedIds);        
    },
    
    /**
     * Displays text of specified item and centers it's position on the screen
     */
    setResult: function(item)
    {        
        this.resultNode.html(item.text);
        
        var top = (app.winHeight - this.resultNode[0].offsetHeight) / 2 - 40;
        this.resultNode.css({
            top: top + 'px'
        });
    },
    
    /**
     * Starts shaking animation and draws a random item
     */
    startShake: function()
    {
        var me = this;
        
        $('section', me.el).removeClass('has-backside');
        $('.complete', me.el).removeClass('completed');
        
        this.resultNode.addClass('shaking');
        this.el.toggleClass('ready', false);

        if (this.timeout)
        {
            clearTimeout(this.timeout);
        }

        // Stopping animation after specified amount of time
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
        
        // Animating manually, in case device doesn't support css3 animations.
        if (!Modernizr.cssanimations)
        {
            me.resultNode.toggleClass('rotate-left', true);
        }
        
        // Displays random result
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
    
    /**
     * Disposes view
     */
    unload: function()
    {
        $('#phone').removeClass('animate');    
        $('section', this.el).off('tap');
        $('section', this.el).off('click');
        $('.complete', this.el).off('click');
        this.el.off('swipeLeft swipeRight touchmove');
        $(window).off('devicemotion');
        
    }
};

$.extend(iShake.view.home.prototype, iShake.view);