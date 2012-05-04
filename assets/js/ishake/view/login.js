/**
 * Login view
 *
 * @param {string} name View's name
 * @param {Element} el View's element
 */
iShake.view.login = function(name, el)
{
    this.init(name, el);
    
    // Initializing login form
    this.form = new iShake.ui.Form(
        $('form', el), 
        '/user/login/', 
        function(data) {
            iShake.repository.user.current(data.user);            
            iShake.repository.list.add(data.lists);
            app.updateLoginStatus();
            
            history.back();
        }, this);
    
    var me = this;
    
    // Save button
    $('.header-button-right', el).on('click', function() {
        // Sending data to server
        me.form.submit();
    });
    
    // Facebook login event
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
    
    // Facebook login button
    $('.facebook-login', this.el).on('click', function() {
        FB.login(onFbLogin);
    });
}

iShake.view.login.prototype = {
    /**
     * Disposes view
     */
    unload: function()
    {
        $('.header-button-right', this.el).off('click');
        this.form.dispose();        
    }
};

$.extend(iShake.view.login.prototype, iShake.view);