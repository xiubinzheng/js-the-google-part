
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


console.log(typeof flight.number);
console.log(typeof flight.airline);

console.log(typeof flight.status);

console.log(flight.constructor);
console.log(flight.toString);


console.log(flight.hasOwnProperty('number'));

console.log(flight.hasOwnProperty('Constructor'));

console.log('airline' in flight);


console.log('IATA' in flight.departure);

