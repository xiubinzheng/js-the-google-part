var empty_object = {};

var stooge = {
    "firstName": "xiubin",
    "lastName": "zheng",
    "middleName": "cock"
};

console.log(stooge);


console.log(stooge["firstName"]);

var middle = stooge["middleName"] || "(none)";

console.log(middle);


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

console.log(flight.airline);

var test = flight.bird || "eiderduck";

console.log(test);


console.log(flight.equipment && flight.equipment.model);


function myfunction(num){
    if(num<(500)){
        console.log(num);
    return myfunction(num+1)+myfunction(num+2)+myfunction(num-1);
    }

    return num;
}

//console.log(myfunction(1));


var test = [];
var index = 2;

function testFunction(obj,i){
    console.log(obj);
    while(obj[i] === undefined && i<=100){
        obj.push(i);
        console.log( i);
        return testFunction(obj,Number(i*i))+testFunction(obj,Number(i*i));
    }
    return obj;
}

//console.log("final "+testFunction(test,index));



var a ={}, b ={}, c={};
a = b = c;

console.log("a");
console.log(a);


module.exports = [stooge,flight];
