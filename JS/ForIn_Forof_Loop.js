console.log("For In & FOr Of Loop");


// ******FOR-IN LOOP******
// let people = ["Sush", "Shadow", "Shreya", "Shravya"];

// Below is the tradition For loop
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];

//     console.log(element);
// }


let obj = {
    name: "Sushanth",
    language: "JS",
    hobbies: "AD"
}


// ITERATING AN OBJECT
// Iterating an object using the tradition For loop

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }


// Iterating an object using for-in loop : used to take the keys of the object an iterate it

// for (let key in obj) {
//     console.log(obj[key]);
// }



// ITERATING AN STRING
// We can use for-in with strings to loop through all the charaters
let myString = "This is my string";

for (const char in myString) {
    // console.log(myString[char]);
}

//Iterating the string using the traditional for Loop
for (let index = 0; index < myString.length; index++) {
    const element = myString[index];
    // console.log(element);
}



// ******FOR-OF LOOP******

// For-of can be used whenever we have to iterate an iterable element

let people = ["Sush", "Shadow", "Shreya", "Shravya"];

for(let name of people){
    // console.log(name);
}

for(let name of myString){
    console.log(name);
}