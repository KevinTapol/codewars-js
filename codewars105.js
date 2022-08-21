// Parameters or Edge cases:
// Return: an array of numbers starting from 1 to the input number incrementing by 1
// Examples: 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//           1 --> [1]
// Psuedo code:  declare an empty array
//              loop through the array using .push() to add positive integers starting at 1 and ending at the input number
//              return the array

// my answer and best practices
function monkeyCount(n) {
    let arr = []
    for(let i = 1; i <= n; i++) {
        arr.push(i)
    }return arr
}

// most clever
// Array.from() is a static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `_` below will be `undefined`
// to sum up .from(1st param, 2nd param) creates an undefined array length of n then 2nd param fills that array following the function provided in this case overwriting the undefined with the index value + 1
function monkeyCount(n) {
    return Array.from({length:n}, (_,i)=>i+1)
}

// arrow fn implicit return of .from()
const monkeyCount = (n) => Array.from({length: n}, (item, index) => index + 1);

// interesting declaring the empty array in the for loop while declaring the starting point and including the method .push() to the increment/step
function monkeyCount(n) {
    for (var i = 0, arr = []; i < n; arr.push(++i));
    return arr;
}

// using spread .keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
// and slice(1) to identify the starting point
// open the array bracket and using spread and designating the start stop step with [...Array(n+1) this will start with 0 and end with the value of n+1
// then use .keys()] closing the array bracket to loop through  and create the array of elements as index starting at 0 and ending with n+1
// and finally .slice(1) to start at the 2nd element which in this case is 1
function monkeyCount(n) {
    return [...Array(n+1).keys()].slice(1);
}

// similar to how they are using .keys() above but much more practical and common to use .map()
// what this is doing is using spread to create an array of elements then using .map(element, index) where you are setting the new elements to i+1 returning an array 1 to n with the arrow fn
var monkeyCount=n=>[...Array(n)].map((v,i)=>i+1)

// recursive solution
const monkeyCount = n => n ? [...monkeyCount(n - 1), n] : []

// all these solutions are just creating an array then using another method to overwrite the array using the index length as the elements
var monkeyCount = (n) => [...'m'.repeat(n)].map( (c, i) => i+1 )

// using .fill() but same idea of .map()
function monkeyCount(n) {
    return new Array(n).fill(undefined).map((_, index) => index + 1)
}