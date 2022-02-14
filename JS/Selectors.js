console.log('Selectors');
/*
Element Selectors:
1. Single Element Selectors
2. Multi Element Selectors
*/


let element = document.getElementById('myFirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentElement;
element.style.color = 'red';
element.innerText = 'Sushanth';
element.innerHTML = '<b>Sushanth</b>';
// console.log(element.innerText);


// Single element selector
// Query Selector : returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
let sel = document.querySelector('#myFirst');
sel = document.querySelector('.child');
sel = document.querySelector('b');
sel = document.querySelector('h1');
sel.style.color = 'red';
// console.log(sel);


// Multi Element Selectors

let elem = document.getElementsByClassName('child');
elem = document.getElementsByClassName('container');
elem = document.getElementsByTagName('div');
// console.log(elem[0].getElementsByClassName('child'));
console.log(elem);

for (let index = 0; index < elem.length; index++) {
    const element = elem[index];
    console.log(element);
    element.style.color = 'red';
}

// Array.from(elem).forEach(element=>{
//     console.log(element);
//     element.style.color = 'red';
// });