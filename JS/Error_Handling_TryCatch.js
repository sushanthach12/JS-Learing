console.log('Error Handling');

// Pretend this is coming from a server as response
let a = "Sushanth";
a = undefined;
if (a != undefined) { 
    throw new Error('This is not undefined'); // Throws a error


}else{
    console.log('This is undefined');
}

try {
    // sdsfsdfsdf
    console.log("Inside try block");
    // functionsush();

} catch (error) {
    console.log("Are you Okay");
    console.error(error);
    console.error(error.name);
    console.error(error.message);

}finally{ // it will run always
    console.log('Finally we will run this');
}
