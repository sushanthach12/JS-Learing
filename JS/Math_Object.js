console.log('Math Object');

let x = 4;
let y = 3;
let z = x+y;
z = x-y;
z = x*y;

// Exploring Math object
z = Math;
z = Math.PI;
z = Math.E;
z = Math.round(5.6);
// z = Math.ceil(5.3); // it wil roundoff to the next number irrespective of the decimal
z = Math.floor(5.6);
z = Math.floor(-5.6);
// Math.floor() will roundoff the value to next number : if it is +ve -> 5.5->5 ; if -ve -> -5.5 ->-6
z = Math.abs(-5.3); // turn -ve to +ve
z = Math.sqrt(487);
z = Math.pow(2,3); // powering the value
z = Math.min(2,3,222,333); // return the min number in the set
z = Math.max(2,3,222,333); // return the max number in the set

// GEnerate a Random nmber
z = Math.random();
z = 100 * Math.random(); // random number btw 0,100
z = 50+(100-50) * Math.random(); // random number btw 0,50
z = Math.ceil(50+(100-50) * Math.random()); // return integer random number 0,50


// a = (0,1);
// a100 = a*100 = (0,100);
// a10_100 = 10+a*(100 -10);
console.log(z);