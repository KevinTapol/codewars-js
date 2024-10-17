/*
Is every value in the array an array?

Parameters or Edge Cases:

Return:
    return boolean true if all the elements from the input array are arrays else false

Examples:
    [[1],[2]] => true
    ['1','2'] => false
    [{1:1},{2:2}] => false

Pseudocode:
    iterate through the input array and if every element of the array is an array return true
*/

// My Answer
function arrCheck(arr){
    return arr.every(e => Array.isArray(e))
} 

// My Answer refactored one liner arrow fn, Best Practices and Most Clever
const arrCheck = arr => arr.every(e => Array.isArray(e))

console.log(arrCheck([[1],[2]])) // true
console.log(arrCheck(['1','2'])) // false

// brute force for loop instead of .every()
function arrCheck(value){
    let count = 0;
    for(let i = 0; i < value.length; i++){
    if(Array.isArray(value[i]) == true) {count++}  
  }
    return (count === value.length);
}

// filtering the array of only elements that are arrays and compare the length to the original input array length
const arrCheck = value => {
    const isArray = value.map(el => Array.isArray(el)).filter(el => el === true);
    return isArray.length === value.length ? true : false;
}