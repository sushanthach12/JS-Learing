console.log('Fetch API');

// Important topic in js


let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');

// function getData(){
//     console.log("Started getData");
//     url = "JSON/sush.json"
//     fetch(url).then((response) =>{ // this then() is used  to get the response
//         console.log("Inside First then");
//         //return response.text();
//         return response.json();
//     }).then((data) =>{ // promise then() , used to get data from the response gotten from previous then()
//         console.log("Inside second then");
//         console.log(data);
//     })
// }

// console.log("Before running getdata");
// getData();
// console.log("after running getdata");
const apiKey = "ab43e25e6a80117c3bc83751687c27e4";

function getData() { 
    // console.log("Started getData");
    const url = () => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(url(city,apiKey)).then((response) => { 

        return response.json();
    }).then((data) => { // promise then() , used to get data from the response gotten from previous then()
        // console.log("Inside second then");
        console.log(data);
    })
}

getData();

// BElow code has some error
// function postData(){
//     url = "http://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"harglry347485945","salary":"123","age":"23"}'
//     params = {
//         method:'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     }
//     fetch(url, params).then(response=> response.json())
//     .then(data => console.log(data)
//     )
// }

// postData();



// // POST request
// let data = {
//     first_name: 'John',
//     last_name: 'Adams',
//     job_title: 'Software Engineer'
// };
// const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }
// fetch('https://reqres.in/api/users', options)
//     .then(res => res.json())
//     .then(res => console.log(res));

