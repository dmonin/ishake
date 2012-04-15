iShake.ui.notify = {
    alert: function(message, alertCallback, title, buttonName)
    {
        if (navigator.notification)
        {
            navigator.notification.alert(app.getMsg(message), 
                                            alertCallback, 
                                            app.getMsg(title), 
                                            app.getMsg(buttonName)
            );
        }
        else
        {
            alert(app.getMsg(message));
        }


    },
    confirm: function(message, confirmCallback, title, buttonLabels)
    {
        if (navigator.notification)
        {
            navigator.notification.confirm(app.getMsg(message), 
                                            confirmCallback, 
                                            app.getMsg(title), 
                                            app.getMsg(buttonLabels));
        }
        else
        {
            if (confirm(app.getMsg(message)))
            {
                confirmCallback.call();
            }            
        }
    }
};