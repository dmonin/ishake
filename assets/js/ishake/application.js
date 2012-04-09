iShake = {
    ui: {},
    view: {}
};

iShake.App = function()
{
    var currentView,
        pageTransition = new iShake.ui.PageTransition($(document.body));
        
    function switchPage(viewName, id) {
        var nextView = $('#view-' + viewName);
        
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
        
        currentView = viewName;
        
        if (currentView && currentView.unload)
        {
            currentView.unload();
        }
        
        currentView = new iShake.view[viewName](viewName, nextView, id);
    }
    
    return {
        run: function() {
            console.log('run forest, run!');
            
            this.initRouting();
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
        }
    };
}

