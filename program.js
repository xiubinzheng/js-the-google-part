//document.writeln('Hello, world!');

var that = this;

//document.writeln('that');



var num1 = 15;
var num2  =10;

var temp  = num1/num2;

console.log(temp*10);



console.log(num1/num2);


console.log(typeof num1/num2);

console.log(typeof num1);

console.log(typeof NaN);

console.log(0/0);

var num = 1.0;
console.log(num);


console.log('c' + 'a' + 't' === 'cat');

console.log('cat'.toUpperCase() === 'CAT');

var empty_object = {};
var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};


console.log(empty_object);

console.log(stooge);


var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    }, arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    } };



console.log(flight["airline"]);
console.log(flight.departure.IATA);

console.log(flight["departure"]["city"]);


var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";

console.log(stooge["middle-name"]);
console.log(middle);

console.log(status);

console.log(flight.status);

//console.lg(flight.equipment.model);


stooge['first-name'] = 'Jerome';

//If the object does not already have that property name, the object is augmented:
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';


console.log(stooge);

console.log(JSON.stringify(stooge));
console.log(JSON.stringify(flight));


var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
// nick is 'Curly' because x and stooge
// are references to the same object
var a = {}, b = {}, c = {};
// a, b, and c each refer to a
// different empty object
a = b = c = {};
// a, b, and c all refer to
// the same empty object

console.log(stooge);
console.log(x);


var a = {}, b = {}, c = {};

a = b = c = {};



if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.create(stooge);


console.log(Object.create);


console.log(Object.constructor);
console.log(Object.constructor);
console.log(JSON.stringify(Object));



// Create myObject. It has a value and an increment
// method. The increment method takes an optional
// parameter. If the argument is not a number, then 1
// is used as the default.
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    } };
myObject.increment( ); console.log(myObject.value);
myObject.increment(2);
console.log(myObject.value);
// 1 // 3


var myObjectTwo = {
    value: -1,
    increment: function(num){
        this.value += typeof num === 'number'? num: 1;
    }
};


console.log(myObjectTwo.value);


/*
function test(num){
    console.log(num);
    while(true){
        test(num+=num);

    }
    console.log(done);
}

test(22);
*/









