console.log('Ajax Programming');

/*
 Ajax : stands for Asychronous javascript and XML
 AJAX is not a programming language. Rather its a set of existing technology
 Ajax helps in fetching data asynchronous without interfering with the existing page.
 No opage reload or refresh
 Modern websites use JSON instead or XML for data transfer

 Why use AJAX?
 No page reload/refresh
 Better user experience
 Saves network experience
 Very interactive


 HOw it works?
 =>AJAX uses XMLHttpRequest object also called xhr object to acheive this
 MOdern websites use json instead or XML for data transfer
 Data can be transfered in any format and protocol (Not always https necesserily)

 Pure Javascript === Vanila Javascript
*/

// GET reqest

// let fetch = document.getElementById('fetchBtn');
// fetch.addEventListener('click', buttonClickHandler);

// function buttonClickHandler(){
//     console.log('CLICKED');

//     // XHR object
//     const xhr = new XMLHttpRequest();

//     // Open the Object
//     // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
//     // xhr.open('GET', 'JSON/sush.json', true); // JSON can also used to fecth the data . in modern days JSON is used most of the time
//     xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true); // POst request , we have send the dat also to post a request

//     xhr.setRequestHeader('Content-type', 'application/json'); // response header

    
//     // What to do on progress ( optional)
//     xhr.onprogress = function(){
//         console.log('On progress');
//     }

//     // xhr.onreadystatechange = function(){
//     //     console.log('Ready state is', xhr.readyState); // return some values
//     // }

//     xhr.onload = function(){
//         if(this.status === 200){ // https status code 200 : response code 200 => OK

//             console.log(this.responseText);
//         }
//         else{
//             console.error('Some error occured');
//         }
//     }

//     // send the request
//     let param = `{"name":"testsrsfsdvds","salary":"123","age":"23"}`;
//     xhr.send(param);
    
//     console.log('We are done');

// }




// Getting Data through GET request

let populate = document.getElementById('populateBtn');
populate.addEventListener('click', popHandler);

function popHandler(){
    console.log('CLICKED');

    // XHR object
    const xhr = new XMLHttpRequest();

    // Open the Object
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);


    xhr.onload = function(){
        if(this.status === 200){ 

            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for(key in obj){
                str += `<li>${obj[key].employee_name}</li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.error('Some error occured');
        }
    }

    // send the request
    xhr.send();
    
    console.log('We are done fetching employees');
}

// Quiz create fruit & vegetables json 