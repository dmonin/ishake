iShake = {
    ui: {},
    view: {}
};

iShake.App = function()
{
    function switchPage(pageName) {
        $('.view').addClass('hidden');
        $('#view-' + pageName).removeClass('hidden');
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

