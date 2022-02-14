console.log('Promisses');

/*
Promise : The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.

The methods promise.then(), promise.catch(), and promise.finally() are used to associate further action with a promise that becomes settled.


three types for promise 
either of the below will be done
 if my promise isfulfilled it will be resolve
  if my promise is not fulfiilled it will run reject
  if promise is at waiting , it will run pending

- Resolve
- reject
- pending

function inside then is ran as - resolve()
function inside catch is ran as - reject()
*/

// function func1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = true;
//             if (!error) {
//                 console.log('Your Promise is resolved');
//                 resolve();
//             }
//             else {
//                 console.log('Your Promise is not resolved');
//                 reject(' Sorry not fullfilled');
//             }
//         }, 2000);
//     })
// }

// func1().then(function () { // if success then will be called 
//     console.log('Sush : Thanks for Watching');
// }).catch(function (error) { // if not success catch will be called
//     console.log('Sush : Sorry not Done : ' + error);
// })



// CallBack function code can also be done using promises

// const students = [
//     { name: "Sushanth", subject: "Javascript" },
//     { name: "Shadow", subject: "Python" }

// ];

// function enrollStudent(student) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             students.push(student);
//             console.log('Student has been enrolled');
//             const error = false;
//             if (!error) {
//                 resolve();
                
//             }else{
//                 reject();
//             }

//         }, 1000);
//     })

// }

// function getStudent() {
//     setTimeout(function () { // this will run in background after 3sec
//         let str = "";
//         students.forEach(function (student) {
//             str += `<li>${student.name} </li>`;
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log('Student has been Fetched');

//     }, 5000);
// }

// let newStudent = { name: 'Shridhar', subject: " Python" }

// enrollStudent(newStudent).then(function(){
//     getStudent();
// }).catch(function(){
//     console.log('The error occurred');
// });

// getStudent();

function Sushanth(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const error = false;
            if(!error){
                console.log('Promise is resolved');
                resolve();
            }
            else{
                reject('Promise is not resolved');
            }
        },1000);
    })
}

Sushanth().then(function(){
    console.log('Your promise is resolved');
}).catch(function(error){
    console.log('Error Found. '+ error);
})