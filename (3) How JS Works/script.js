/*--------- Hoisting ----------*/

calculateAge(1990);

function calculateAge(year){
    console.log(2018 - year);
}

/* we can use function either way that is first declare it and then use it or use it then declare.*/

//retirement(1965); // this does not work because in hoisting it only works for function declaration not  for function syntax

var retirement = function(year){
    console.log(65 - (2016 - year));
}

retirement(1990);

//Hoisting also works for variables but in a different way

console.log(age); //undefined
var age = 23;    //if this is not here then error is pop up.
console.log(age);

/*with the below example value of both console log is different because of first one is stored in local exceution context and second one is stored in global excetution context. so simply both have thier own exceution context.*/
function foo(){
    console.log(age); //undefined 
    var age = 65;
    console.log(age); //prints 65
}
foo();
console.log(age); // prints 23


/*--------- Scoping ----------*/

var a = 'Hello!';
first();
//console.log(a + b + c);
function first(){
    var b = 'Hi!';
    second();
    
    function second(){
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


/*--------- Exceution Stack vs Scope Rules ----------*/

var a = 'Hello!';
first();

function first(){
    var b = 'Hey!';
    second();
    
    function second(){
        var c = 'Hi!';
        third();
        console.log(a + b + c);
    }
}
function third(){
    var d = 'Deepak';
    //console.log(c);
    // console.log(b);
    console.log(a + d);
}


/*--------- THIS Keyword ----------*/

//console.log(this);

calculateAge(1985);

function.calculateAge(year){
    console.log(2018 - year);
    console.log(this);
}

var john = {
    name: 'Deepak',
    yearOfBirth: 1996,
    calculateAge: function(){
        console.log(this);
        console.log(2018 - this.yearOfBirth);
        
        /*
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();

// this keyword assign value only during function call as we see above same this behave differently for different object.
















