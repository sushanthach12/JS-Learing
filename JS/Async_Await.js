console.log('Async/Await');

// Async will return a promise
// Await will also return a promise

async function sush(){ // It will return prosmise
    console.log('inside sush func');
    const response = await fetch('https://api.github.com/users');
    console.log('before Response');
    const users = await response.json(); // when a awwait is found ny the control it will go back and check the promise , if it is resolved ,it will run the present await and execute the json, if not resolved it will go back run all the lines
    
    console.log('users resolved');
    return users;

    // return "Sushanth";
}


console.log("Before calling sush");
let a = sush();
console.log("After calling sush");
console.log(a);
a.then(data => console.log(data)) // when a promise is resolved it will get data 
console.log("Last line of the file");