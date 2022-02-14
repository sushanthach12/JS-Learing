console.log('Object Oriented ');

// let myObj = {
//     name : 'Sushanth',
//     class : 'B.E',
//     College : 'SMVITM'
// } // Object Created

// console.log(myObj.name);
// console.log(myObj.class);

// Object Literals to create a objects
let car = {
    name : 'Maruti-800',
    topSpeed : 89,
    run : function() {
        console.log('Car is Running');
    }
}

// console.log(car);
// console.log(car.run());

// we have already seen constructor
// new Date();

// Constructor
function generalCar(gname , speed) {
    this.name = gname;
    this.topSpeed = speed;
    this.run = function(){
        console.log(`${this.name} is running`);
    }
    this.analyse = function(){
        console.log(`${this.name} is slower by ${200 - this.topSpeed} than Mercedes`);
    }
} 

let car1 = new generalCar('Nissan', 190);
let car2 = new generalCar('Alto', 90);
let car3 = new generalCar('GTR', 290);

console.log(car2.run());
console.log(car2.analyse());
console.log(car1, car2, car3);