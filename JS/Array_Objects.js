console.log('Arrays and Object');

// if array is declared in const we cannot alter the array

let marks = [1,2,34,2];
const fruits = ['Orage' ,'MAngo'];
const mixed = ['str', 34,[3,4]];

const arr = new Array(23,33,43,'Orannge');

console.log(arr);
console.log(mixed);
console.log(fruits[1]);

console.log(arr.length);
console.log(Array.isArray(arr)); //  check wheather given value is array or not

arr[0] = 'Sushanth';
let arrelement = 'Sush';

console.log('element :' , arrelement);
console.log(arr);

let value = marks.indexOf(34); // indexOf() : it will return the index of the value in the array
console.log(value);

// Mutating or Modifying Array
 
marks.push(342); // it will push the value at the end of the array
console.log(marks);

marks.unshift(45); // it will push the value at the start of the array
console.log(marks);

marks.pop(); // it will remove the element at the end of the array
console.log(marks);

marks.shift(); // it will remove the element at the Start of the array
console.log(marks);

marks.splice(1,2); // it will start removing the elements from the index 1 to 2
console.log(marks);

marks.reverse(); // it will reverse the array
console.log(marks);

// all the methods will alter the main array

let marks2 = [22,33,44,23];
marks = marks.concat(marks2);
console.log(marks);

// Object

let myObj = {
    name : 'Sushanth',
    class : 'Eng',
    isActive : true,
    marks : [1,2,3,3]
}

console.log(myObj);
console.log(myObj['name']);
console.log(myObj.name);