console.log('Functions');



function greet(name, thank) { // Function created
    // console.log(`Happy birthday  ${name}`);
    // console.log(`Happy birthday  ${name}`);
    // console.log(`Happy birthday  ${name}`);
    console.log(`Happy birthday  ${name}, ${thank}`);
    let msg = `Happy birthday  ${name}, ${thank}`;
    return msg;
}


// Functions : is a block of code designed to perform a particular task.

let name = 'Sushanth';


// console.log(`Happy birthday  ${name}`);
// console.log(`Happy birthday  ${name}`);
// console.log(`Happy birthday  ${name}`);
// console.log(`Happy birthday  ${name}`);

greet(name, 'Thank You');
let val = greet(name, 'Thank You');
console.log(val);


const myObj = {
    name : 'Sushanth',
    age:34,
    type: 'Dangerous',
    os: 'Linux',
    game : function () {  // we can create a function inside a object also
        return 'GTA';
    }
}

console.log(myObj.game())


arr = ['fruit','Orange','furniture'];

arr.forEach(function (element, index, array) {
    console.log(element,index);
});


// SCope 
var i =45;

console.log(i);

function ui(name) {
    var i = 9;
    console.log(i);
    return `this is ${name} ui`;
}

console.log(ui('Sush'),i);