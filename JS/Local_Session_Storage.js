console.log('Local & Session Storage');

// Local & Session Storage : allow to save key/value pairs in the browser

// LocalStorage : it will remain forever

let imparray = ['Adrak','palak','bhindi'];


// Adds a key and value in the localStorage
localStorage.setItem('Name','Sushanth');
localStorage.setItem('Name2','Shadow');
// localStorage.setItem('Sabzi', imparray); // it will save in the localstorage as a string
localStorage.setItem('Sabzi', JSON.stringify(imparray));

// whenever we have to store a string in local Storage we have to wrap it in JSON.stringify


// type window.localstorage in console
// localStorage.clear(); // clears the entire localStorage

// Clear a particular key in the localStorage 
localStorage.removeItem('Name2');

// Retrieve the item from localStorage
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name,typeof(name));


// Session Storage : it is for only a session
// all the function are same in this also

sessionStorage.setItem('sessionName','sSushanth');
sessionStorage.setItem('sessionName2','sShadow');
sessionStorage.setItem('sessionSabzi', JSON.stringify(imparray));