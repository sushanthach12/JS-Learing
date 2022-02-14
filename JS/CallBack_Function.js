console.log('CallBack Functions');

// CallBack Functions : Function inside a function

const students = [
    { name : "Sushanth", subject : "Javascript" },
    { name : "Shadow", subject : "Python" }

];

function enrollStudent(student, callBack) {
    setTimeout(function () { // this will run in background after 3sec
        students.push(student);
        console.log('Student has been enrolled');
        callBack();
    }, 1000);
}

function getStudent() {
    setTimeout(function () { // this will run in background after 3sec
        let str = "";
        students.forEach(function (student) {
            str += `<li>${student.name} </li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log('Student has been Fetched');

    }, 3000);
}

let newStudent = { name: 'Shridhar', subject: " Python" }

enrollStudent(newStudent,getStudent);

getStudent();
