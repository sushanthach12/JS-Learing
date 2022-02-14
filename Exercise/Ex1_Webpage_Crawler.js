console.log('exercise 1');
// Exeercise 1
// You haev to create a varibale which is a string containing the text which is a link you intersted in.

// You have to fetch all the links from a given page which contains this text

// codewithharry.com
// javascript

let str = 'python';
let links = document.links;
console.log(links);
let link;

Array.from(links).forEach(function (element) {
    link = element.href;
    if (link.includes(str)) {
        console.log(element);
    }

});