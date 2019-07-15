"use strict";

//the weather constructor
function Weather(cityName, desc){
    this.cityName = cityName;
    this.desc = desc;
    this._temp = '';
}

Object.defineProperty(Weather.prototype, 'temp', {
    get: function(){
        return this._temp;
    },
    // set: function(value){
    //     this._temp = `${(value * 1.8 +32).toFixed(2)} F.`;
    // }
    set: function(value){
        this._temp = value;
    }
});

