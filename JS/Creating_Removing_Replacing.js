console.log('Creating Removing Replacing');

let element = document.createElement('li'); // element created
let text = document.createTextNode('Iam a text node');

element.appendChild(text);

// Add a classname to the li element
element.className = 'childli';
element.id = 'createdLi';
element.setAttribute('title','mytitle');
// element.innerText = 'HEllo this is created by Sushanth'; // for inserting plain text
// element.innerText = '<b>HEllo this is created by Sushanth</b>';// for inserting element

let ul = document.querySelector('ul.this');

ul.appendChild(element);
console.log(ul);
console.log(element);

let elem2 = document.createElement('h3');

elem2.id = 'elem2';
elem2.className = 'elem2';

let tnode = document.createTextNode('This is a  created node');

elem2.appendChild(tnode);
element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('class');
elem2.removeAttribute('id');
console.log(elem2,pr);



// quick quiz : create a heassding element with text a "Go to CodeWithHArry" and create any tag ouotside it with href="codewithhahryy.com"

let head = document.createElement('h1');
// head.innerText = 'Go To CodeWithHarry';
element.append(head);

let tag = document.createElement('a');
tag.setAttribute('href',"https://codewithharry.com");
tag.innerText = 'Go to CodeWithHarry';

head.append(tag);