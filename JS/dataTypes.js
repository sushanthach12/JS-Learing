console.log("Data_Types");

/*
    Datatypes in JS
    1. Primitive (stack):- string, numbers, boolean, null, undefined(default value is undefined. eg: var name;), symbol
    2. Reference (Heap):- array, object literals, functions, Dates
*/

// Primitives Data Types

// String
let name = "Sushanth"; // string
console.log("My name is "+name);
console.log("Datatype  is "+typeof(name));


// Numbers
let marks = 34;
console.log("Datatype of 34 is "+typeof(marks));

// Boolean
let isDriver = true;
console.log("DataType is "+typeof(isDriver));

// Null
let nullVar = null;
console.log("DataType is "+typeof(nullVar)); // shows object , it bogus return value

// undefined
let undef = undefined;
console.log("DataType is "+typeof(undef));


// Refernce datatypes 

// Array
// myarr = [1,12,2,3,4, "string", false];
let myarr = [1,12,2,3,4, "string", false];
console.log("DataType is "+typeof(myarr));

// always we need not to declare as var or let const, because JS is dynmaically 

// Object Literals

let stMarks = {
    Shadow : 34,
    Sush : 45,
    Shreya : 45
}

console.log(stMarks);
console.log(typeof(stMarks));

// Functions

function findName() {
    
}
console.log(typeof(findName)); // returns function

let date = new Date();
console.log(typeof date)

// Reference Datatypes memory is allocated in heap