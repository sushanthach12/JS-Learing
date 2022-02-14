console.log('Generators');

// Generators : The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.
// IT basically will generate some values, on the run/fly

// Syntax

function* numberGEn(){
    let i = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    while(true){
        yield i++;   
        // yield (i++).toString();   
    }
}

const gen = numberGEn();
console.log(gen.next());
console.log(gen.next().value);

