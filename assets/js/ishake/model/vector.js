/**
 * Vector
 * 
 * @param {Object} acceleration Acceleration object
 */
iShake.model.Vector = function(acceleration) {
    this.update(acceleration);
}

iShake.model.Vector.prototype = {
    
    /**
     * Compares stores vector with specified vector and determines whether
     * move of devices is big enough, that it shaking
     *
     * @param {Object} vector 
     * @return {boolean}
     */
    isShaking: function(vector) {
        var dx = Math.abs(vector.x - this.x),
            dy = Math.abs(vector.y - this.y),
            dz = Math.abs(vector.y - this.y),
            threshold = 18;
        
        if (dx > threshold ||
            dy > threshold ||
            dz > threshold)
        {
            return true;
        }

        return false;
    },
    
    /**
     * Updates vector
     *
     * @param {Object} acceleration object with acceleration data
     */
    update: function(acceleration) {
        this.x = acceleration.x;
        this.y = acceleration.y;
        this.z = acceleration.z;
    }
};