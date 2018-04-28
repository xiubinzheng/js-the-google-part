/*
Javascript Global abatement
js makes it easy to define global variables that hold all of the assets of your
application. 


To minimize the use of global variables is to create a single
 global variable for the application
*/

var MYAPP = {
    "first-name":"joe",
    "last-name": "hpward"
};

MYAPP.flight = {
    airline: "Oceanic",
    number: 666,
    depature:{
        IATA: "PHL",
        time: "2013 4-23 14:55",
        city: "philadelphia"
    },
    arrival: {
        IATA: "LAV",
        time: "2013 6-23 14:55",
        city: "las vegas"
    }
};




