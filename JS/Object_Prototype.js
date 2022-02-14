console.log('Object Prototype');

// Object literals : Object.prototype

let myObj = {
    name : 'Sushanth',
    class : 'B.E',
    planet : 'Earth'
}

function Obj(givenName){ // Object Constructor
    this.name = givenName;
}

Obj.prototype.getName = function(){ // Putting the object name to the Prototype 
    return this.name;
}
Obj.prototype.setName = function(newName){ // Putting the object name to the Prototype 
    this.newName;
}

let obj2 = new Obj('Sushanth');

// console.log(myObj);
console.log(obj2);

// We can only change the prototype of the object ,when it is declared as the constructor
// Never change the Object prototype ( Main object engine). We have to make my own object and then change the prototype of the object
