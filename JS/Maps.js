console.log('Maps in js');

// Maps in JS
// We can use any type of key or value
// The map () method creates a new array with the results of calling a function for every array element.

const myMap = new Map();


const key1 = 'myStr', key2 = {}, key3 = function () { };

// Settting map values

myMap.set(key1, 'This is String');
myMap.set(key2, 'This is Blank OBJ');
myMap.set(key3, 'This is Function');

console.log(myMap);

// Getting the values from a Map

let value1 = myMap.get(key1);
let value2 = myMap.get(key2);
let value3 = myMap.get(key3);
console.log('Value at key1 : ' + value1);
console.log('Value at key2 : ' + value2);
console.log('Value at key3 : ' + value3);

// Get the size of the Map

console.log(myMap.size);

// You can loop using for-of to get keys and values

for (let [key, value] of myMap) {
    console.log(key, value);
}

// Get only keys

for( let key of myMap.keys()){
    console.log('key is '+ key);
}

// Get only values

for( let value of myMap.values()){
    console.log('value is '+ value);
}

// Using for-each loop we can also do it

console.log('\nUsing For-Each Loop');
myMap.forEach((key, value) =>{
    console.log('Key is' + key);
    console.log('Value is' + value);
});


// Converting Map to an Array

let MyArr = Array.from(myMap);
console.log('\nMap to Array : ', MyArr);

// Converting Map keys to an Array

let MyKeysArr = Array.from(myMap.keys());
console.log('\nMap to Keys Array is: ', MyKeysArr);

// Converting Map Values to an Array

let MyValueArr = Array.from(myMap.values());
console.log('\nMap to Values Array is: ', MyValueArr);