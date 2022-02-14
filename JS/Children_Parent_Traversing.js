console.log('Traversing');

// DOM : The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[1].nodeName;
let nodetype = cont.childNodes[1].nodeType; // return the type of the node

// console.log(cont.childNodes); // return the child nodes of the container
// console.log(cont.children); // return only the children of the container

// console.log(nodeName);
// console.log(nodetype);


/*
Node Types
1. Element
2. Attribute
3. Text Node
8. Comment
9. Document
10 .doctype

*/


let container = document.querySelector('.container');

console.log(container);
// console.log(container.children[2].children[0].children); // traversing

console.log(container.firstChild); // return first child of the container
console.log(container.firstElementChild); // return first child element of the container

console.log(container.lastChild);
console.log(container.lastElementChild);

console.log(container.childElementCount); // return the count of the child element


console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling); // return the sibling of the child
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
