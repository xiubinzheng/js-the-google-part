
var stooge = {
    "firstName": "xiubin",
    "lastName": "zheng",
    "middleName": "cooking"
};

var name;
for(name in stooge){
    console.log(stooge[name]);
    if(typeof stooge[name]!=='function'){
        console.log(name+': '+stooge[name]);
    }  
}


var properties = [
    'first-name',
    'middle-name',
    'last-Name',
    'profession'
];



for(var i=0;i<properties.length;i++){
    console.log(properties[i]);
}

/*
function callme(index){
    console.log(index);
    if(index>0||index<0 || index || true){
        index--;
     return callme(callme(index));
    }
    return index;
}

console.log(callme(3));
*/

/*
function callone(){
    console.log("calling one");
    calltwo();
}


function calltwo(){
    console.log("calling two");
    callthree();
}


function callthree(){
    console.log("calling three");
    calltwo();
}
*/
//console.log(callone());


delete stooge.middleName


console.log(stooge.middleName);

