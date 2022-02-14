console.log('Events');

// Events : actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired

document.getElementById('heading').addEventListener('click', function (e) {
    let variable;
    console.log('Clicked the heading');
    // console.log(e.target);
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = e.target.id;
    variable = Array.from(e.target.className);
    variable = e.offsetX; // return the scaling in X
    variable = e.offsetY; // return the scaling in y
    variable = e.clientX; // returns where we have clicked w.r.t the browser window
    variable = e.clientX; // returns where we have clicked w.r.t the browser window
    console.log(variable);
    // location.href = '//codewithharry.com';
});

// let btn = document.getElementById('btn');

// btn.addEventListener('click', func1);
// btn.addEventListener('dblclick', func2);
// btn.addEventListener('mousedown', func3); // rightclick and mousewheel

// function func1(e) {
//     console.log('Thanks',e);
//     e.preventDefault(); // prevent the behaviour/ bypass the event
// }
// function func2(e) {
//     console.log('Thanks this is double click',e);
//     e.preventDefault(); // prevent the behaviour/ bypass the event
// }
// function func3(e) {
//     console.log('Thanks this is Mouse Down',e);
//     e.preventDefault(); // prevent the behaviour/ bypass the event
// }


// document.querySelector('.no').addEventListener('mouseenter', function () {
//    console.log ('This is mouse enter');
// });
// document.querySelector('.no').addEventListener('mouseleave', function () {
//    console.log ('This is mouse Leave');
// });
document.querySelector('.container').addEventListener('mousemove', function (e) {
    console.log(e.offsetX,e.offsetY);
    // document.body.style.backgroundColor = 'blue';
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},${e.offsetY},154)`; // change the background clor like rgb
    console.log ('This is mouse Move');
});


// EventListner : click, mouseover, dbleclick, mousedown, mouseenter, mouseleave, mouvemove