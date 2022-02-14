console.log('arrow Functions');

// Creating am regular func
// const sush = function sush(){
//     console.log('Sushanth');
// }

// Converting the function to arrow func
// const sush = function()=>{
//     console.log('Sushanth');
// }
// sush();

// const greet = () =>{
//     return "Good Morning";
// }

// One liners donot require braces and function
// const greet = () => "Good Morning"; // Arrow Func shorthand 

// const greet = () => {{name:"sushanth"}};

// const greet = name => "Good Morning "+name ; 

// multiple arguemenets require paranthesis, but in single arhuements no need for paranthesis 
const greet = (name,ending) => "Good Morning "+name + ". Have a nice day, "+ ending ;

console.log(greet('sush','bye'));