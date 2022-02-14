// Stirngs
/*
console.log('Strings Tutorial');

const name = "Sushanth";
const greetng = 'Good Morning';

console.log(greetng + ' ' + name);

let html;

html = '<h1> This is my para</h1>';

html = html.concat('this', 'str2'); // concat() : is func of string to concatinate two strings
console.log(html); 
console.log(html.length);  // length() : retuens length
console.log(html.toLowerCase());
console.log(html.toUpperCase());

console.log(html[0]); // this is called indexing , it will return value in index 0

console.log(html.indexOf('this')); // return the index of the given string (will return first indxe of the value)
console.log(html.lastIndexOf('s')); // return the index of the given string (will return last indxe of the value)

console.log(html.charAt(3)); // return the char at index 3
console.log(html.endsWith('sdd')); // checks the given string ends with the given char/string , return true or false
console.log(html.includes('>')); // checks the given string is included in the string or not, return true or false
console.log(html.substring(1,3)); // will return the value from index 1 to 3

console.log(html.slice(0,4)); // will return the value from index 0 to 4

console.log(html.split(' ')); // this will return a array , where there space between the words, basically it will spilt the string
console.log(html.split('>'));

console.log(html.replace('this', 'it')); // it will replace the word or char , it will start from 1st occurance
*/


// Template Literals : used to template html elements using '``' ( press the key b/w ESC and TAB)
// using this we can insert html element from JS

let fruit1 = 'Orange\'';
let fruit2 = 'Mango';
let name = 'Sushanth';

let myHtml = `Hello ${name}
            <h1> This is Heading </h1>
            <p>You like ${fruit1} and ${fruit2}

        `;
document.body.innerHTML = myHtml;