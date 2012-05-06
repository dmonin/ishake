iShake = {
    ui: {},
    lang: {},
    view: {},
    model: {},
    repository: {},
    
    util: {        
        /**
         * Returns the index of the first element of an array with a specified
         * value, or -1 if the element is not present in the array. This method
         * doesn't type conversion.
         * 
         * @param {Array} arr The array to be searched.
         * @param {Object} item Object we are searching
         */
        indexOf : function(arr, item)
        {
            for (var i = 0; i < arr.length; i++)
            {
                if (arr[i] == item)
                {
                    return i;
                }
            }
            
            return -1;
        },
        
        /**
         * Sorts array of objects by alphabet
         * @param {Array} data Array with objects to be sorted
         * @param {string} propertyName Name of property by which object must be
         *      sorted
         */
        sortByAlphabet: function(data, propertyName)
        {
            return data.sort(function(a, b) {
                if (a[propertyName] > b[propertyName])
                {
                    return 1;
                }
                else if (a[propertyName] < b[propertyName])
                {
                    return -1;
                }
                
                return 0;
            });
        }
    }
};

iShake.App = function()
{
    var currentView,
        pageTransition = null;
    
    /**
     * Switches the view
     * @param {string} viewName name of destination view
     * @param {string} id optionaly id of selected item
     */
    function switchPage(viewName, id) {
        if (navigator.onLine)
        {
            _gaq.push(['_trackPageview', viewName]);
        }
        
        var nextView = $('#view-' + viewName);
//        nextView.css('height', window.innerHeight + 'px');

        if (!currentView || !Modernizr.cssanimations)
        {
            $('.view').addClass('hidden');
            nextView.removeClass('hidden');
        }
        else if (currentView.name == viewName)
        {
            return;                           
        }
        else
        {
            var isFlip = viewName == 'home' || currentView.name == 'home' || 
                         viewName == 'homeback' || currentView.name == 'homeback';                
                
            if (!Modernizr.csstransforms3d)
            {
                isFlip = false;                
            }
            
            if (isFlip)
            {
                pageTransition.flip({
                    to: nextView,
                    from: currentView.el,
                    direction: viewName == 'home' || viewName == 'homeback' ? 'clockwise' : 'anticlockwise'
                });
            }
            else
            {
                var pages = ['home', 'lists', 'online', 'list', 'listedit', 'item', 'login', 'register'],
                    dir = pages.indexOf(viewName) > pages.indexOf(currentView.name) ?
                            'rtl' : 'ltr';
                        
                pageTransition.slide({
                    to: nextView,
                    from: currentView.el,
                    direction: dir
                }); 
            }
        }      
        
        if (currentView && currentView.unload)
        {
            currentView.unload();
        }
        
        currentView = new iShake.view[viewName](viewName, nextView, id);
        
        app.updateOnlineStatus();
    }
    
    return {
        server: 'http://ishake-app.com',
        lang: 'en',
        
        /**
         * Initializes the application
         */
        run: function() {
            pageTransition = new iShake.ui.PageTransition($(document.body));
            
            // this pre-saves heigh of viewPort, due to unknow reason it returns
            // 0 later in mobile opera
            this.winHeight = $(window).height();
            
            this.initLanguage();
            this.initMenu();
            this.initRouting();
            this.initTouches();
        },
        
        /**
         * Returns localized string for specified label key
         * @param {string} label
         * @return {string}
         */
        getMsg: function(label)
        {
            if (!label)
            {
                return label;
            }
            
            return iShake.lang[this.lang][label] || label;
        },
        
        /**
         * Initializes navigator language replaces with data-label attribute
         * 
         */
        initLanguage: function()
        {
            var languages = ['en', 'de'],
                language = navigator.language.substr(0, 2);
                
            this.lang = languages.indexOf(language) != -1 ? language : 'en';
            
            var me = this;
            $('[data-label]').each(function(index, el) {
                el = $(el);
                el.html(me.getMsg(el.data('label')));
            });            
        },
        
        /**
         * Initializes drop down navigation
         */
        initMenu: function()
        {
            var isTouch = "ontouchstart" in window,
                evt = isTouch ? 'touchstart' : 'mousedown';
            
            if (navigator.userAgent.match(/opera/i))
            {
                evt = 'click';
            }
            
            
            var me = this,
                menu = $('#menu');
            
            $('.menu-button').on(evt, function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                menu.addClass('visible');
                
                var page = location.hash.replace('#/', '');
                page = page || 'home';
                menu.addClass('menu-' + page);
                
                if (me.timerId)
                {
                    clearTimeout(me.timerId);
                }
                
                me.timerId = setTimeout(function() {
                    $(document.body).one(evt, function(e) {
                       e.preventDefault();
                       e.stopPropagation();
                       
                       if (e.target.hash)
                       {
                            location.hash = e.target.hash;
                       }
                       
                       if (!$(e.target).hasClass('menu-button'))
                       {
                           menu.removeClass('visible menu-home menu-lists menu-online');
                           
                       }                       
                    });
                }, 100);                
            });
            
            $('#menu-li-logout').on(evt, function(e) {
                e.preventDefault();
                e.stopPropagation();
                menu.removeClass('visible menu-home menu-lists menu-online');
                
                // Logging out from facebook
                FB.logout(function(response) {
                    
                });
                
                // Logging out locally
                iShake.repository.user.current(null);
                iShake.repository.user.listIds([]);
                    
                // Deleting session on server
                app.request('/user/logout', function() {
                    app.updateLoginStatus();
                    iShake.ui.notify.alert('user.logoutsuccess');
                });
            });
        },
        
        /**
         * Initializes hash history routing
         */
        initRouting: function() {
            var routes = {
                '/': function() {        
                    switchPage('home');
                },
                
                '/lists': function() {
                    switchPage('lists');
                },
                
                '/lists/(\\d+)': function(id) {
                    switchPage('lists', id);
                },
                
                '/homeback': {
                    on: function(){
                        switchPage('homeback');
                    }
                },
                
                '/list/(\\d+)': {
                    on: function(id){
                        switchPage('list', id);
                    }
                },
                
                '/listedit/(\\d+)': {
                    on: function(id){
                        switchPage('listedit', id);
                    }
                },
                
                '/online': function() {
                    switchPage('online');
                },
                
                '/register': function() {
                    switchPage('register');
                },
                
                '/login': function() {
                    switchPage('login');
                },
                
                '/item/(\\d+)': {
                    on: function(id){                    
                        switchPage('item', id);
                    }
                }
            };
            
            var initialRoute = iShake.repository.list.currentId() ? '/' : '/lists';
            
            Router(routes).configure({
                on: function(){                    
                    app.updateOnlineStatus();
                },
                notfound: function() {
                    location.hash = '/';
                }
            }).init(initialRoute);   
        },
        
        /**
         * Initializes touch effects
         */
        initTouches: function()
        {
            tappable('.header-button, .button, .icon-button', {
                containerElement: document.body,
                noScroll: true,
                onTap: function(e, target) {
                    if (target.tagName.toLowerCase() == 'a' && target.hash)
                    {
                        location.hash = target.hash;                    
                    }
                }
            });
            
            tappable('.menu-li-a', {
                containerElement: document.body,
                noScroll: true,
                onStart: function(e, target) {
                    location.hash = target.hash;                                        
                }
            });
            
            
//            tappable('.tableview .item-content', {
//                containerElement: document.body,
//                allowClick: true,
//		activeClassDelay: 80,
//		inactiveClassDelay: 1000,
//
//                onTap: function(e, target) {
//                    if (target.tagName.toLowerCase() == 'a' && target.hash)
//                    {
//                        location.hash = target.hash;
//                    }
//                    
//                }
//            });
            
            tappable('.disclosure', {
                containerElement: document.body,
                onTap: function(e, target) {
                    if (target.tagName.toLowerCase() == 'a' && target.hash)
                    {
                        location.hash = target.hash;
                    }
                    
                }
            });
            
            tappable('.facebook-login', {
                containerElement: document.body
            });
        },
        
        /**
         * A wrapper method to access external api
         * @param {string} path API url
         * @param {Function} callback Callback method
         * @param {Object} scope Scope in which callback method will be called
         * @param {Object} data Additional data to be sent
         * @param {boolean} silent defines whether to show loader, default is
         *      false
         *      
         */
        request: function(path, callback, scope, data, silent) {
            if (!navigator.onLine)
            {
                return;
            }
            
            app.setLoading(!silent);
            
            data = data || {};
            
            var user = iShake.repository.user.current(),
                me = this;
            data.sessionId = user && user.sessionId;
            
            $.ajax({
                type: 'POST',
                data: data,
                url: this.server + path,
                dataType: 'json',
                success: function(response) {
                    app.setLoading(false);
                    if (callback)
                    {
                        callback.call(scope, response);
                    }
                    
                    me.updateOnlineStatus(true);
                },
                error: function(xhr, type) {
                    app.setLoading(false);
                    iShake.ui.notify.alert('no-connection', null, 'error');
                    
                    me.updateOnlineStatus(false);
                }
            });
        },
        
        /**
         * Controls visibility of loader
         * @param {boolean} isLoading true if loader should be visible
         */
        setLoading: function(isLoading)
        {
            $('#loader').toggleClass('visible', isLoading);
        },
        
        /**
         * Displays no connection warning.
         * 
         * @param {boolean} isVisible true if no connection warning should be
         *      visible
         */
        showNoConnection: function(isVisible)
        {
            var display = isVisible ? 'block' : 'none';
            $('#no-connection-msg').css('display', display);
        },
        
        /**
         * Updates UI according user login status
         */
        updateLoginStatus: function()
        {
            var isLogged = iShake.repository.user.current();
            $(document.body).toggleClass('logged', !!isLogged);
        },
        
        /**
         * Updates UI according online connection status
         * @param {boolean} onlineStatus defines whether device has internet
         *      connection
         */
        updateOnlineStatus : function(onlineStatus)
        {
            onlineStatus = typeof onlineStatus != 'undefined' ? onlineStatus : navigator.onLine;
            $(document.body).toggleClass('offline', !onlineStatus);            
            this.showNoConnection(false);              
        },
        
        /**
         * Returns current logged user
         * @return {Object}
         */
        user: function() {
            return iShake.repository.user.current();
        }
        
    };
}