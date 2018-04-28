var myObject = {
    value: 0,
    increment: function(inc){
        this.value += typeof inc === 'number' ? inc: 1;
    }
};

myObject.increment(1);


console.log(myObject.value);


/*
A metho can use this to access the object so that it 
can retrieve values from the object or modify the object.

methods that get their object context
 from this are called public methods*/


 
