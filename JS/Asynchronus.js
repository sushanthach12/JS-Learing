console.log('Asynchronous Programming');

//synchronous : As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed
// Asynchronous Programming : It makes it possible to express waiting for long-running actions without freezing the program during these actions. JavaScript environments typically implement this style of programming using callbacks, functions that are called when the actions complete
// means of parallel programming in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress


// Any comoutation we do requires processor for our javascript engine to get the job done


// Asynchronous model allows multiple things to happen at teh same time
// In a synchronous programming model , things happen one at a time. ( back to back)

// Few ways to write Asynchronous code
/*
1. Async / await
2. Callbacks
3. promises
*/


for (let index = 0; index < 45; index++) { // asynchronous 
    const element = index;
    console.log('This is number' + index);
}

setTimeout(() =>{  // await
    for (let index = 0; index < 45; index++) {
        const element = index;
        console.log('This is number' + index);
    }

},100);

console.log('Done PRinting');