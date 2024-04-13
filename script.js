//2.variable and type
let userAge = 22;
let userName = "Atchaya";

console.log("User's age:", userAge);
console.log("User's name:", userName);

//4.operation
let num1 = 10;
let num2 = 5;

// Addition
let sum = num1 + num2;
console.log("Addition:", sum);

// Subtraction
let difference = num1 - num2;
console.log("Subtraction:", difference);

// Multiplication
let product = num1 * num2;
console.log("Multiplication:", product);

// Division
let quotient = num1 / num2;
console.log("Division:", quotient);

//5.Data Types

// String
let stringVariable = "Hello";

// Number
let numberVariable = 25;

// Boolean
let booleanVariable = true;

// Array
let arrayVariable = [1, 2, 3];
console.log(stringVariable,numberVariable,booleanVariable,arrayVariable)


//6. function in js
function greetUser(name) {
  return "Hello, " + name + "! Welcome!";
}

let Name = "Atchaya";
let greetingMessage = greetUser(Name);
console.log(greetingMessage);

//7.if else in js

let temperature = 32;

if (temperature > 30) {
  console.log("It's hot outside!");
} else {
  console.log("It's not too hot outside.");
}

//8.for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//9.
console.log(0 == false);    // true 
console.log(0 === false);   // false 

console.log(1 == '1');      // true 
console.log(1 === '1');     // false 

console.log('' == false);   // true 
console.log('' === false);  // false 

console.log(null == undefined);   // true
console.log(null === undefined);  // false 



