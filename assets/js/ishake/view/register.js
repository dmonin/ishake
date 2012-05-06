/**
 * Registration view
 * 
 * @param {string} name View's name
 * @param {Element} el View's element
 */
iShake.view.register = function(name, el) {
    this.init(name, el);
    
    // Initializing form
    this.form = new iShake.ui.Form($('form', el), 
        '/user/register/', 
        function(data) {
            iShake.repository.user.current(data.user);            
            iShake.repository.list.add(data.lists);
            app.updateLoginStatus();
            location.hash = '/';
        }, this);
    
    var me = this;
    
    // In case user already logged in with facebook, redirecting back to home
    setTimeout(function() {
        FB.getLoginStatus(function(response) {
            location.hash = '/';
        });
    }, 3000);
        
    // Registers save button
    $('.header-button-right', el).on('click', function() {
        
        // Sending data to server
        me.form.submit();
    });
    
    // Initializing facebook login button
    $('.facebook-login', this.el).on('click', function() {
        FB.login(function(response) { 
            if (response.status == 'connected')
            {
                location.hash = '/lists';                
                iShake.repository.user.setFacebook();
            }
        });
    });
}

iShake.view.register.prototype = {
    /**
     * Disposes view
     */
    unload: function() {
        $('.header-button-right', this.el).off('click');
        this.form.dispose();
    }
};

$.extend(iShake.view.register.prototype, iShake.view);