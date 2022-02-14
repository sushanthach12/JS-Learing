console.log('If else & switches');

const age = 28;
const vari = 34;
const doesDrive = false;

if (age == 19) {
    console.log('Age is 19')
}
else if (age === 65) { // === checks both type and value are equal
    console.log('Age is 65')
}
else {
    console.log('age is not 19');
}

if (vari) {
    console.log('VAri is defined');
}
if (typeof vari != 'undefined') {
    console.log('VAri is defined');
}
else {
    console.log('VAri is not defined');
}

if (doesDrive) {
    console.log('You cannot drive')
}
else {
    console.log('You can drive')
}


console.log(age == 45 ? 'Age is 45' : 'Age is not 45'); // Ternory operator

// Switch case

switch (age) {
    case 18:
        console.log('You are 18');
        break;
    case 28:
        console.log('You are 28');
        break;
    case 38:
        console.log('You are 38');
        break;
    default:
        console.log('You are minor');
        break;
}

