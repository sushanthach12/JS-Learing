console.log('Prototype Inheritance');

const proto = {
    slogan : function(){
        return 'This company is the best';
    },
    changeName : function(newName){
        this.name = newName
    }
}

// const sush = Object.create(proto);
// sush.name = 'Sushanth';
// sush.role = 'Coder';
// sush.changeName('SUSH')
// console.log(sush);

// or

const Sushanth = Object.create(proto, {
    name : {value : 'Sushanth', writable: true},
    role : {value: 'Programmer'}
})
Sushanth.changeName('SUhsna')
// console.log(Sushanth);


// Empolyee COnstructor

function Empolyee (name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan 
Empolyee.prototype.slogan = function(){
    return `This company is the best. regards, ${this.name}`;
}

let sush = new Empolyee('Sush', 589899, 5);
console.log(sush.slogan());

// Programmer Contsructor
function Programmer(name , salary, experience, language){
    Empolyee.call(this, name,salary,experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Empolyee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer('Rohan', 44555,5,'Java');
console.log(rohan);