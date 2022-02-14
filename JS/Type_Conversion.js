// Type COnversion

console.log('Welcome');

let myvar1;
myvar1 = 34;
let myvar2 = String(34); // String() : it will convert number to string

console.log(myvar1);
console.log(myvar2,typeof(myvar2)); // after typecast

let booleanvar = true;
let booleanvar1 = String(true);

console.log(booleanvar,typeof(booleanvar1));
console.log(booleanvar1,typeof(booleanvar1)); // after typecast

let date =String(new Date()) ; // typecasting date 
console.log(date, typeof(date));

let arr = [1,2,3,4];
let arr2 = String([1,2,3,4]);
console.log(arr, typeof(arr));
console.log(arr2.length, typeof(arr));

let i = 8;
console.log(i.toString());

let stri = "1234";
let stri2 = Number("1234");
let stri3 = Number("12d4"); // Will return NaN : Not a Number
let stri4 = Number(true);
let stri5 = Number(false);
stri = Number([1,2,3,3]);
console.log(stri, typeof(stri));
console.log(stri2, typeof(stri2));
console.log(stri3, typeof(stri3));
console.log(stri4, typeof(stri4));
console.log(stri5, typeof(stri5));
console.log(stri,typeof(stri));

// When using Number() func we should not parse string,array,number&string

let number = parseInt('34'); // change nummber in the string to number
let number2 = parseFloat('34'); // change nummber in the string to number
console.log(number, typeof(number));
console.log(number2, typeof(number2));
console.log(number2.toFixed(3)); // toFixed() : it will show the values after the decimal value


// Type Coercion

let mystr = "684";
let mynum = 43;

console.log(mystr + mynum); // When we add(join) string with number , JS will convert the string to number and add(join) 