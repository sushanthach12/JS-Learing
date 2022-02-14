console.log('Regular Expressions Metacharacters');

let regex = /Sushanth/;

// lets look into some Regular Expressions MetaCharacters
regex = /^S/; // ^ means expression will match if the strong Starts with S
regex = /JS$/; // this means it will check the string ends with the given character
regex = /S.shanth/; // matches exactly anyone character wherever the dot is placed
regex = /S*shanth/; // matches exactly anyone 0 or more character wherever the dot is placed
regex = /Su?shanthi?/ //  ? after character means that character is optional character , if it is there it is fine also fine if it is not there
regex = /S\*shanth/; // \* means that when we have match the exact value , in this case *



let str = "Sushanth is a Good Boy, and Sushanth is lerning JS";


let result = regex.exec(str);
console.log('The result from exec is',result);

if (regex.test(str)) {
    console.log(`The string ${str} : matches the expressions ${regex.source}`);
}
else{
    console.log(`The string ${str} : does not matches the expressions ${regex.source}`);
}