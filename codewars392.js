/*
Sort the odd
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Parameters or Edge Cases:
    inputs will be an array of numbers
    input arrays may be empty

Return:
    return the input array keeping the elements that are even numbers in the same index but re order the odd number elements in ascending order putting them in the open index locations that where previously occupied by odd number elements 

Examples:
    [7, 1]  =>  [1, 7]
    [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
    [5, 3, 2, 8, 1, 4] --> [1, 3, 2, 8, 5, 4]
    [5, 3, 1, 8, 0] --> [1, 3, 5, 8, 0]
    [] --> []

Pseudocode:
    create an array named result that is a copy of the input replacing every element that is an odd number with string x
    create an array named odd that is a filtered copy of the input array containing only odd elements sorted in ascending order
    iterate the length of the array result find the first occurrence of string x and replace it with the current element in the array odd
    return the new array result  

*/

// My Answer brute force for loop
function sortArray(arr) {
    let result = arr.map(e => e % 2 === 0 ? e : 'x')
    let odd = arr.filter(e => e % 2 !== 0).sort((a, b) => a - b)
    for(let i = 0; i < result.length; i++){
        if(result[i] === 'x'){
            result[i] = odd.shift()
        }
    }return result
}

// My Answer refactored array methods
function sortArray(arr) {
    const odd = arr.filter(e => e % 2 !== 0).sort((a, b) => a - b)
    return arr.map(e => e % 2 === 0 ? e : odd.shift())
}

// My Answer refactored one liner arrow fn
const sortArray = (arr, odd = arr.filter(e => e % 2 !== 0).sort((a, b) => a - b)) => arr.map(e => e % 2 === 0 ? e : odd.shift())

console.log(sortArray([5, 8, 6, 3, 4])) // [3, 8, 6, 5, 4]

// Best Practices and Most Clever
// similar to my unrefactored array methods but using truthy falsy
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}

// clever use of .pop() instead of .shift()
function sortArray(array) {
    let oddList = array.filter( num => num%2 ).sort( (a,b) => b-a );
  
    return array.map( num => {
      return num%2 ? oddList.pop() : num;
    });
}