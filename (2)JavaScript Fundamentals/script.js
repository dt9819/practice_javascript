/* jslint devel: true */ //to through an JSLint Error in Brackets editor

/*-------------------------- Comments In JavaScript ---------------------------------*/

1. Single Line Comment
    
    // This is a Single Line Comment.

2. MultiLine Comment
    /*
        The code below will change
        the heading with id = "myH"
        and the paragraph with id = "myP"
        in my web page:
    */


/*-------------------------- Variables In JavaScript ---------------------------------*/

var name = 'deepak';
console.log(name);

var lastName = 'tyagi';
console.log(lastName);

var age = 21;
console.log(age);

var fullAge = 'true';
console.log(fullAge);


/*-------------------------- Assign a value to the variable In JavaScript ---------------------------------*/

var name = 'deepak';
var age = 21;

console.log(name + age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = 'false';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is your last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


/*-------------------------- Operators In JavaScript ---------------------------------*/

var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//26 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;
ageJohn = ageMark = (3 + 5) * 4 - 6;
// ageJohn = ageMark = 26 
//ageJohn = 26

ageJohn++;
//ageJohn = ageJohn + 1
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);

/*-------------------------- if/else Statements In JavaScript ---------------------------------*/

var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried == 'yes'){
    console.log(name + 'is married!');
} else{
    console.log(name + ' will hopefully married soon :)');
}

isMarried = false;

if(isMarried){
    console.log('YES!');
}else{
    console.log('NO!');
}

//else is not necessary

if (23 === "23"){
    console.log('Something to print...');
}

/*-------------------------- Boolean logic and switch Statements In JavaScript ---------------------------------*/

var age = 20;

if(age <  20){
    console.log('John is teenager');
}else if (age >= 20 && age < 30){
    console.log('John is a young man.');
} else{
    console.log('John is man');
}  


var job = 'teacher';
job = prompt('What does john do?');

switch(job){
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab');
        break;
    case 'cop':
        console.log('John help fight crime');
        break;
    default:
        console.log('John does something else.');
}


/*-------------------------- Coding Challenge 1 ---------------------------------*/ 

var heightPlayer1 = 158;
var heightPlayer2 = 167;
var heightPlayer3 = 143;

var agePlayer1 = 21;
var agePlayer2 = 14;
var agePlayer3 = 28;

var score1, score2, score3;

score1 = heightPlayer1 + 5 * agePlayer1;
score2 = heightPlayer2 + 5 * agePlayer2;
score3 = heightPlayer3 + 5 * agePlayer3;
    
if(score1 > (score2 && score3)){
    console.log('Player1 wins!');
} else if(score2 > (score1 && score3)){
    console.log('Player2 wins!');
} else if(score3 > (score1 && score2)){
    console.log('Player3 wins!');
} else{
    console.log('it\'s a draw...');
}


/*-------------------------- Functions In JavaScript ---------------------------------*/

function calculateAge(yearOfBirth){
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMary = calculateAge(1969);
var ageMike = calculateAge(1948);
console.log(ageJohn);
console.log(ageMary);
console.log(ageMike);


function yearsUntilRetirement(name,year){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement >= 0){
    console.log(name + ' retires in ' + retirement + ' years. ');
    } else{
        console.log(name + ' is already retired.');
    }
}


yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mary', 1969);
yearsUntilRetirement('Mike', 1948);


/*-------------------------- Statements and expressions In JavaScript ---------------------------------*/

function someFun(par){
    //code
}

var someFun = function(par){
    
}

//expressions

3 + 4;
var x = 3;

// statements
if(x == 5){
    //do something
}


/*-------------------------- Arrays In JavaScript ---------------------------------*/

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);
console.log(years[1]);
names[0] = 'Ben';
console.log(names);

var John = ['John', 'Smith', 1990, 'designer', false];

John.push('blue');
John.unshift('Mr.');
John.pop();
John.shift();
//alert(John.indexOf('Smith'));
console.log(John);

if(John.indexOf('teacher') == -1){
    console.log('John is not a teacher.');
}


/*-------------------------- Objects and properties In JavaScript ---------------------------------*/

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);


/*-------------------------- Objects and methods In JavaScript ---------------------------------*/

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    //below line is same as writing var calculateAge = function(yearOfBirth){} 
    calculateAge: function(yearOfBirth){
        return 2016 - yearOfBirth;
    }
};

console.log(john.family[2]);
console.log(john.calculateAge(1970));

//use of this

//v1.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    //below line is same as writing var calculateAge = function(yearOfBirth){} 
    calculateAge: function(){
        return 2016 - this.yearOfBirth;
    }
};

console.log(john.family[2]);
//console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);


//v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
       // return 2016 - this.yearOfBirth;
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);


var mike = {
    name: 'mike',
    yearOfBirth: 1950,
    calculateAge: function(){
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);


/*-------------------------- Loops and iterations In JavaScript ---------------------------------*/

for(var i = 0; i < 10; i++){
    console.log(i);
} 

/*0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
.
.
.
9, true, print 9, update i to 10
10, false, end loop!*/

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for(var i = 0; i < 5; i++){
    console.log(names[i]);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for(var i = 0; i < names.length; i++){
    console.log(names[i]);
}


var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for(var i = names.length - 1; i >= 0 ; i--){
    console.log(names[i]);
}


var i = 0;
while(i< names.length){
    console.log(names[i]);
    i++;
}

for(var i = 1; i <= 5; i++){
    console.log(i);
    
    if(i == 3){
        break;
    }
}


for(var i = 1; i <= 5; i++){
    
    if(i == 3){
        continue;
    }
    
    console.log(i);
}


/*-------------------------- Coding challenge 2  ---------------------------------*/



var years = [2012, 1996, 2000, 1998];
var empty = [];

for(var i = 0; i < years.length; i++){
   empty.push(2018 - years[i]);
}

console.log(empty);

var i = 0;
while(i < years.length){
    if(empty[i] >= 18 ){
        console.log(years[i] + ' ' + empty[i]);
    }
 i++;
}

function printFullAge(years){
    var ages = [];
    var fullAges = [];

    for(var i = 0; i < years.length; i++){
       // ages.push(2018 - years[i]);
        ages[i] = 2018 - years[i];
    }

    for(var i = 0; i < years.length; i++){
        if(ages[i] >= 18 ){
            console.log('Person '+ (i+1) + ' is ' + ages[i] + ' years old and is full age');
            fullAges.push(true);
        } else{
            console.log('Person '+ (i+1) + ' is ' + ages[i] + ' years old and is NOT full age');
            fullAges.push(false);
        }
    }
    return fullAges;
}
var years = [2012, 1996, 2000, 1998];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);

