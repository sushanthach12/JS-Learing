console.log("REgular Expressions");

// Regualar Expressions : Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.

let reg = /Sushanth/; // here g is a global flag // This is a Regular Expressions Literal in js , it is written in between //
 reg = /Sushanth/g; // here g is a global flag 
// reg = /Sushanth/i; // here i is case insensitive , means it will not check the upper or lower case

// console.log(reg);
// console.log(reg.source); // it will give me the content written inside the regular expressions


let s = "This is Great Sushanth and also Sushanth bhai";

// Functions to Match Expressions

//1. exec() : This Func will return an array for match or null  for no match, will get multiple matches where evr we get a match of the regular Expressions(reg)

// let result = reg.exec(s);
// console.log(result);
// console.log(result.input);
// console.log(result.index);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);

// we can use multiple exec with global flag


// 2. test() : returns true or false

let result2 = reg.test(s);
// console.log(result2); // Returns true , bcz regular expression(reg) is matched string s


// 3. match() : it will return a array of results or null

// let result3 = reg.match(s); // this is wrong !!
let result3 = s.match(reg); // this is right !!

// console.log(result3);



// 4. search() : returns index of first match or else -1

// let result4 = reg.search(s); // this is wrong !!
let result4 = s.search(reg); // this is right !!

// console.log(result4);


// 5. replace() : returns a new replaced string with all the replacements (if no global flag is given first mACTH will be replaced)

let result5 = s.replace(reg , 'Shadow');
// console.log(result5); 



// Quiz : create a regular expression and a string and runu all the functions

let sush = /Sushanth/g;

let a = "This is Sushanth , and Sushanth is leaning Something";

console.log(sush.exec(a));
console.log(sush.test(a));
console.log(a.match(sush));
console.log(a.search(sush));

let result6 = a.replace(sush , 'Shri'); // if i dont declare sush as a global flag it wont change all the matched expressions
console.log(result6);

let sush2 = /Something/g;
let result7 = a.replace(sush2, 'Javascript' );
console.log(result7);