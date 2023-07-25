// Head, Tail, Init and Last
/*
Haskell has some useful functions for dealing with lists:

$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x
Here's how I expect the functions to be called in your language:

head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]
Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests
*/ 

// Parameters or Edge Cases:
/*
    inputs will be arrays of integers
    arrays will never be empty
*/ 

// Return:
/*
    four different functions where function head returns the first index, tail returns every thing but the first index, init returns everything but the last index and last returns only the last index
*/ 

// Examples:
/*
    head([5,1]) => 5
    tail([1]) => []
    init([1,5,7,9]) => [1,5,7] 
    last([7,2]) => 2
*/ 

// Pseudocode:
/*
    // create a function named head that returns the first index element of the input array
    // create a function named tail that returns an array of everything but the first index of the input array
    // create a function named init that returns an array of everything but the last index of the input array
    // create a function named last that returns the last index element of the input array
*/ 

// my answer and best practices
    // create a function named head that returns the first index element of the input array
    function head(arr) {
        return arr[0]
    }
    // create a function named tail that returns an array of everything but the first index of the input array
    function tail(arr){
        return arr.slice(1)
    }
    // create a function named init that returns an array of everything but the last index of the input array
    function init(arr){
        return arr.slice(0, -1)
    }
    // create a function named last that returns the last index element of the input array
    function last(arr){
        return arr[arr.length -1]
    }

// my answer refactored arrow fn implicit returns
const head = (a) => a[0]
const tail = (a) => a.slice(1)
const init = (a) => a.slice(0, -1)
const last = (a) => a[a.length -1]

console.log(head([5,1])) // 5
console.log(tail([1])) // []
console.log(init([1,5,7,9])) // [1,5,7] 
console.log(last([7,2])) // 2

// most clever using spread operator for tail instead of slice
const head = ([head, ...tail]) => head;
const tail = ([head, ...tail]) => tail;
const init = (arr) => arr.slice(0, -1);
const last = (arr) => arr.slice(-1)[0];

// requiring RAMBDA to use their built in functions
const {head, tail, init, last} = require('ramda')

// one liner of array of function names to an array function executions of corresponding index locations
var [head, tail, init, last] = [a => a[0], a => a.slice(1), a => a.slice(0,-1), a => a.slice(-1)[0]];