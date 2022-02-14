console.log('Looping statement');

// For Loop

// for(let i=0; i<10;i++){
//     console.log(i);
// }


// While

// let j=0;

// while (j<10) {
//     console.log(j);
//     j++;
// }



// Do-while

// let k = 0;

// do {
    
//     if(k===5){
//         // break;
//         k+=1;
//         continue;
//     }
//     console.log(k + 1);
//     k+=1;
// } while (k < 10);

// console.log('done');


// Loops used to iterate arrays and objects

let arr = [1,22,3,34,44];

arr.forEach(function (element,index, array) {
    console.log(element,index,array)
});
console.log('done');

// another way to iterate the array , but not the ideal way to do
// for(let i=0;i<arr.length;i++){
//     const element = arr[i];
//     console.log(element);
// }


// let obj = {
//     name : 'Sushanth',
//     age:34,
//     type: 'Dangerous',
//     os: 'Linux'
// }

// // for to iterate the objects ( for-in)
// for(let key in obj){
//     console.log(`${key} or object is ${obj[key]}`)
// }