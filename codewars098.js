// Parameters or Edge cases: Assume both the given number and the number of times to count will be positive numbers greater than 0
// Return: an array of multiples of the first input ending at the count of the second input
// Examples: countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//           countBy(2,5) === [2,4,6,8,10]
// Psuedo code: declare an empty array
//              loop through the array using .push() to push the elements of input multiplied by 1 until we have the same number of elements in the array as the second number input (ie push() till array.length 2nd input -1)
//              return the array

// my answer and best practices
function countBy(x, n) {
    let z = [];
    for(let i = 1; z.length < n; i++){
        z.push(x*i);
    }return z
}

// most clever
// .from() static method creates a new, shallow-copied Array instance from an iterable or array-like object
const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

// using arrow fn and spread array then create a new array with .map()
const countBy = (x, n) =>
  [...Array(n)].map((_, idx) => ++idx * x);

// that for loop stop and step...
// stop when you reach the product of inputs and increment by the first input added by itself
// this is genius manipulation of start stop step
function countBy(x, n) {
    var z = [];
    for (var i=x; i<=(x*n); i+=x){
    z.push(i);
    }
    return z
}

// apply() method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).
// allows you to provide arguments to a function in the form of an array
// Array(1, 2, 3); // => [1, 2, 3] is functionally the same as Array.apply(null, [1, 2, 3]); // => [1, 2, 3]
// apply() does not skip over empty elements like .map() and .forEach() ex 1, , , , 5
function countBy(x, n){
    return Array.apply(0, Array(n)).map(function(v, i){
      return (i + 1) * x;
    });
}

// .fill()  method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
// const array1 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]
function countBy(x, n) {
    return Array(n).fill(x).map( (el, ind) => el * (ind + 1) );
}

// side note on .from
class HelloWorld { 
    constructor() { 
        this.element = [1,2,3]; 
        this.length= this.element.length;
    }
    *[Symbol.iterator] () {
        yield* this.element;
    }
}
var helloObject = new HelloWorld();
console.log(helloObject);

var elements = Array.from(helloObject);
console.log(elements);

// grabbing each element in the iterable object 