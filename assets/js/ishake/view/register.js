iShake.view.register = function(name, el) {
    this.init(name, el);
    
    this.form = new iShake.ui.Form($('form', el));
    
    var me = this;
    
    setTimeout(function() {
        FB.getLoginStatus(function(response) {
            location.hash = '/';
        });
    }, 3000);
    
    
    $('.header-button-right', el).on('click', function() {
        // Sending data to server
        me.form.submit('/user/register/', function(data) {
            iShake.repository.user.current(data.user);            
            iShake.repository.list.add(data.lists);
            app.updateLoginStatus();
            history.back();
        }, this);
    });
    
    $('.facebook-login', this.el).on('click', function() {
        FB.login(function(response) {  });
    });
}

iShake.view.register.prototype = {
    unload: function() {
        $('.header-button-right', this.el).off('click');
        this.form.dispose();
    }
};

$.extend(iShake.view.register.prototype, iShake.view);