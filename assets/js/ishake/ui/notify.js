/**
 * Notification object
 */
iShake.ui.notify = {
    
    /**
     * Alers message
     * 
     * @param {string} message Message to be displayed
     * @param {Function} alertCallback Function to be called after user pressed
     *      okay
     * @param {string} title Title text for message box
     * @param {string} buttonName Button's label
     */
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
    
    /**
     * Shows confirm dialog
     * 
     * @param {string} message Message to be displayed
     * @param {Function} confirmCallback Function to be called after user pressed
     *      okay
     * @param {string} title Title text for message box
     * @param {string} buttonLabels Comma separated list of labels
     */
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