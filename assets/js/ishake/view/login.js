iShake.view.login = function(name, el)
{
    this.init(name, el);
    
    this.form = new iShake.ui.Form($('form', el));
    
    var me = this;
    
    $('.header-button-right', el).on('click', function() {
        // Sending data to server
        me.form.submit('/user/login/', function(data) {
            iShake.repository.user.current(data.user);            
            iShake.repository.list.add(data.lists);
            app.updateLoginStatus();
            
            history.back();
        }, this);
    });
    
    function onFbLogin(response)
    {
        if (response.status == 'connected')
        {
            location.hash = '/lists';                
            iShake.repository.user.setFacebook();
        }
        else if (response.status == 'unknown')
        {
            location.hash = '/lists';
            iShake.repository.user.setFacebook();
        }
    }
    
    $('.facebook-login', this.el).on('click', function() {
        FB.login(onFbLogin);
    });
}

iShake.view.login.prototype = {
    unload: function()
    {
        $('.header-button-right', this.el).off('click');
        this.form.dispose();        
    }
};

$.extend(iShake.view.login.prototype, iShake.view);