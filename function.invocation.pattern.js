var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
} };
myObject.increment( ); 
console.log(myObject.value);
myObject.increment(2);
console.log(myObject.value);


// augment myObject with a double method.


myObject.double = function(){
var that = this;
var helper = function(){
    that.value = add(that.value,that.value);
};

helper();

};


myObject.double();
console.log(myObject.getValue());