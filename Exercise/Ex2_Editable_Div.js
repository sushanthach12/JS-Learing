console.log('Exercise2');

/* prob Statement 

You have to create a div and inject into the page which contains a heading.

whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away(blur). Save the note into the local storage.

*/

// Below is my solution

// let head = document.getElementById('heading');

// head.addEventListener('click', function () {

//     document.getElementById('heading').ariaDisabled = true;

//     let input = prompt("Enter the Edit");

//     head.innerHTML = input;
//     localStorage.setItem('New', JSON.stringify(head.innerHTML));

//     console.log('Created the element');

// });


// Solution of CWH

let divElem = document.createElement('div');

let text = document.createTextNode('This is my element click to edit');
divElem.appendChild(text);

divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style','border:2px solid black; width:154px ; margin:34px; padding:23px');

let container = document.querySelector('.container');
let first = document.getElementById('myFirst');

// Insert the element before first

container.insertBefore(divElem, first);

divElem.addEventListener('click',function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas == 0){
        let html = elem.innerHTML ;
    
        divElem.innerHTML = `<textarea class="textarea form-control" id="exampleFormControlTextarea1" rows="3">${html}</textarea>`;
    }
    let textarea = document.getElementById('textarea');
    // textarea.addEventListener('blur', function(){
    //     elem.innerHTML = textarea.value;
    // });
    
    textarea.addEventListener('blur',function () {
        elem.innerHTML = textarea.value;
    });
});
