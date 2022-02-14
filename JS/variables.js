console.log("TUT2");

// Vriables in JS
// var, let, const :- 3 ways to declare a variible in JS

var name = 'Sushanth'; //or
var name2 = "Sushanth2"; // string

console.log(name);

var channel;
channel = "Sushanth Acharya";
var marks = 34; // integer here
console.log(channel);

console.log(name,channel,marks);

// Rules for creating JS varibales
/*
    1. cannot start with numbers
    2. cannot start with letter , number or $ ,^
    3. They are case sensitive
*/
// in "var" we can change the value afterwards

var city = 'Udupi';
console.log(city);

// In mordern JS var has been used less instead const and let are used more



const ownersName = 'Sushanth';
console.log(ownersName);

//ownersName = "Acharya";// in "const" we cannot change the value afterwards once declared

// const fruit;// we use const to declare a varible we must initiasize something there or eles it will through an error

const fruit = "Orange";
console.log(fruit);

// let : let is a keyword that is used to declare a block scoped variable

{ // let is used to create a local variable, it used in block "{}"
    let city = "Katapadi";
    city = "Mangalore";
    console.log(city);
    // when we try to print the "let" outside the block it will print either error or print global declared varibale
}
console.log(city);

// we have to use let and const most of the time

const arr1 = [12,34,23,23];
console.log(arr1);
arr1.push(32); // it will push the element to the array 
console.log(arr1);

// we cannot redeclare the array when declared in const

/* 
    Most common programming case types

    1. camelCase 
    2. kebab-Case
    3. snake_case
    4. PascalCase

*/