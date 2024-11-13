/*
Find the unique number

Parameters or Edge Cases: 
    inputs will be an array of numbers that can be decimals
    array length may be so huge as to affect performance and at minimum be 3
    There are only 2 different numbers in which one number can occur multiple times and the other only once.

Return:
    return a single number that has no doubles in the input array

Examples:
    [ 1, 0, 0 ] --> 1
    [ 0, 1, 0 ] --> 1
    [ 0, 0, 1 ] --> 1
    [ 1, 1, 1, 2, 1, 1 ] --> 2
    [ 1, 1, 2, 1, 1 ] --> 2
    [ 3, 10, 3, 3, 3 ] --> 10

Pseudocode:
    iterate through the input array of numbers and if the current elements index is equal to the last occurrence index then return the element

*/

// My Answer brute force for loop
function findUniq(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
            return arr[i]
        }
    }
}

// My Answer array methods
function findUniq(arr) {
    return arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e))[0]
}

// My Answer refactored one liner arrow fn
const findUniq = arr => arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e))[0]

console.log(findUniq([ 1, 0, 0 ])) // 1
console.log(findUniq([ 0, 0, 0.55, 0, 0 ])) // 0.55
  

// Best Practices and Most Clever 
// very clever imo to compare first, second and last values using .pop() for the last value
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
} 

// clever use of .find() instead of .filter() and call the only element in the .filter()
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

/*
    NOTE The reason this works is that the Description states all numbers are equal except for one.
    If the first three elements are the same, it runs the for loop. Since a can't be the unique number since it's equal to the two checked numbers and only 1 number can be different, you can safely assume that if any of the elements x in the array don't equal a, that element is the unique number you're looking for.
*/
function findUniq(arr) {
    let [a,b,c] = arr.slice(0,3);
    if( a != b && a!=c ) return a;
    for( let x of arr ) if( x!=a ) return x
}

// Since there are only 2 different numbers in which one can occur multiple times, comparing a sorted array by first element second element and final element would be the most common approach.
function findUniq(arr) {
    arr = arr.sort()
    if (arr[0] === arr[1]){
      return arr[arr.length -1]
    } else {
      return arr[0]
    } 
}