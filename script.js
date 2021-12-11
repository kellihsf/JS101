//Welcome to JavaScript 101
//The 2 //s are for making a comment in your code

//We declare variables (named values) using const, let and almost never let 

const greeting = "Hello World"

function helloWorld () {
    console.log(greeting)
}

helloWorld(); // Hello world!

function canWe () {

}


//Expression 

console.log((2 + 2));
console.log(2 + '2');


//DATA TYPES

let aString1 = "I am a string";
let aString2 = 'I am a string';
let aString3 = `I am a string`;

console.log(aString1, aString2, aString3);

let aNumber = 42;
let pie = 3.14;
let negative = -42;
let notANumber = NaN;

console.log(aString1 * aNumber); 
this equals NaN

//TRUE OR FALSE? BOOLEAN

let isTrue = true;
let isFalse = false;
let maxUsers = 100
let areWeFull = maxUsers > 120; // false

console.log(maxUsers > 120);
//will be false, 100 > 120

//Array a sequence of values
const anArray = ["milk", "butter", "eggs"];
const anArray2 = ["1", 2, 3]

const anObject = {
    firstName: "Izzie",
    lastName: "Stone",
    bestFriend: "Marley"
}

console.log(anObject);
console.log(anObject.firstName);

const friendlyGreeting = "Hello" + " World";
console.log(friendlyGreeting);

const firstNumber = 23;
let secondNumber = 19;
const theAnswer = firstNumber + secondNumber; // 42
console.log("theAnswer is ", theAnswer);

secondNumber = 100;
console.log(`theAnswer is now ${theAnswer}`);
// why is it not 123?
// theAnswer was already set on line 69
// don't need to use let/const again for line 72 bc it's already been delared 
// can't use let secondNumber = 100 bc secondNumber has already been declated 

let sum = 5 + 5; // 10
let subtract = 10 - 5; // 5
let multiply = 10 * 10; // 100
let divide = 100/10; // 10
let remainder = 3 % 2; // 1