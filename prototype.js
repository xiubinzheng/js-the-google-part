
//console.log(Object.toString());

var stooge = {
    "firstName": "xiubin",
    "lastName": "zheng",
    "middleName": "cock"
};

if(typeof Object.create !=='function'){
    Object.create = function(o){
        var F = function(){};
        F.prototype = o;
        return new F();
    }

};

var another_stooage = Object.create(stooge);
another_stooage.firstName = 'hero';
another_stooage.ninja = 'geno';
another_stooage.testName = 'supper';
another_stooage.middleName = 'myMiddle';



//console.log(another_stooage);

delete another_stooage.middleName

console.log(another_stooage.middleName);


