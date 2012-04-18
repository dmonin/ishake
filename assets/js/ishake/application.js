iShake = {
    ui: {},
    lang: {},
    view: {},
    model: {},
    repository: {},
    util: {
        indexOf : function(arr, item)
        {
            for (var i = 0; i < arr.length; i++)
            {
                if (arr[i] == item)
                {
                    return;i;
                }
            }
            
            return -1;
        },
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
        
    function switchPage(viewName, id) {
        var nextView = $('#view-' + viewName);
//        nextView.css('height', window.innerHeight + 'px');
//        nextView.css('background', '#f00');
        if (!currentView)
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
                
            if ($.os.android)
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
        run: function() {
            console.log('run forest, run!');
            
            pageTransition = new iShake.ui.PageTransition($(document.body));
            
            this.initLanguage();
            this.initMenu();
            this.initRouting();
            this.initTouches();
        },
        getMsg: function(label)
        {
            if (!label)
            {
                return label;
            }
            
            return iShake.lang[this.lang][label] || label;
        },
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
        initMenu: function()
        {
            var isTouch = "ontouchstart" in window,
                evt = isTouch ? 'touchstart' : 'mousedown';
            
            var me = this,
                menu = $('#menu');
            
            $('.menu-button').on(evt, function(e) {
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
        initRouting: function() {
            var routes = {
                '/': function() {        
                    switchPage('home');
                },
                
                '/lists': function() {
                    switchPage('lists');
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
            
            var initialRoute = '/';
            
            Router(routes).configure({
                on: function(){
//                    app.updateOnlineStatus();
                },
                notfound: function() {
                    location.hash = '/';
                }
            }).init(initialRoute);   
        },
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
        setLoading: function(isLoading)
        {
            $('#loader').toggleClass('visible', isLoading);
        },
        showNoConnection: function()
        {
            $('#no-connection-msg').css('display', 'block');
        },
        updateLoginStatus: function()
        {
            var isLogged = iShake.repository.user.current();
            $(document.body).toggleClass('logged', !!isLogged);
        },
        updateOnlineStatus : function(onlineStatus)
        {
            onlineStatus = typeof onlineStatus != 'undefined' ? onlineStatus : navigator.onLine;
            $(document.body).toggleClass('offline', !onlineStatus);            
            $('#no-connection-msg').css('display', 'none');                        
        },
        user: function(userData) {
            return iShake.repository.user.current();
        }
        
    };
}


//window.onerror = function()
//{
//    for (var i = 0; i < arguments.length; i++)
//    {
//        alert(arguments[i]);
//    }
//}