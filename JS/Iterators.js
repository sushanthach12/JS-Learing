console.log('Iterators');

/* Iterators :In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties:

value
The next value in the iteration sequence.

done
This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.

The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated.
*/
// Iterator is the traverse of an array . it will return run the value after treverse of an array

// Below it Iterator Syntax
function fruitsIterator(values) {
    let nextIndex = 0;
    // we will return an object

    return {
        next: function () {
            if (nextIndex < values.length) {

                //we will return this below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            } else { // if all the values are done it will return the below code
                // else will return this below object
                return {
                    done: true
                }
            }
        }
    }
}

const myArr = ['Apple', 'Oranges', 'Bindi'];

console.log(myArr);

// Using the iterator

const fruits = fruitsIterator(myArr);
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);