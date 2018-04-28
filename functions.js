/*
function in javascript are objects, Ojbects are collections of name/value pairs having a hidden link to a
prototype object. Object produced from object literals are linked to Object.protoype. 

Objects produced from object literals are linked to Object.prototype.

function objcts are linked to Function.prototype, which is itself linked to Object.prototype. 
Every function object is also created with a prototype property. 
Its value is an object with a constructor property whose value is the function. 


Every function object is also created with  a prototype property. 
Its value is an object with a constructor property whose value is the function. 
*/



/*
the two hidden propreties of function: 
the function's context and the code 
that implements the function's behavior.
*/


/*
anonymous function 
usually not accessible after its initial creation.
example below:
*/


var add = function(a,b){
    return a +b;
}

console.log(add(3,5));

var anon = function(){
    console.log('I am anonymous');
}

anon();


/*
anonymous function passed to setTimeout
*/
setTimeout(function(){
    console.log('Hello');
},1000);


/*  javascript using a closure*/
(function() {
    console.log('foo');
  })();


/*another way to write the previous example 
and get the smae result*/

(function(message){
console.log(message);
})('foo');