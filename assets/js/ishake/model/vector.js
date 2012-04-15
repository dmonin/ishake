iShake.model.Vector = function(acceleration) {
    this.update(acceleration);
}

iShake.model.Vector.prototype = {
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
    update: function(acceleration) {
        this.x = acceleration.x;
        this.y = acceleration.y;
        this.z = acceleration.z;
    }
};