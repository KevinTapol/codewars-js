/*
Find The Duplicated Number in a Consecutive Unsorted List
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.

Parameters or Edge Cases:
    inputs will be an array of integers that will contain a single duplicate integer

Return:
    the integer that is duplicated in the array

Examples:
    [1,2,2,3] --> 2
    [1,3,2,5,4,5,7,6] --> 5

Pseudocode:
    sort the array
    iterate through the array and check if the current value is equal to the next value while ending the check just before the final element of the array meaning stop the iteration before the final element 
    if yes then return the current element
*/

// My answer
function findDup( arr ){
    let sortArr = arr.sort((a, b) => a - b)
    for(let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] === sortArr[i + 1]){
            return sortArr[i]
        }
    }
}

// My Version of Most Clever refactored using arrow function sytnax with .reduce
function findDup(arr) {
    return arr.reduce((n, v, i) => arr.indexOf(v) == i ? n : v, null)
}

console.log(findDup([1,2,2,3])) // 2

// Best Practice
// similar to my answer but using i+= instead of i++
function findDup( arr ){
    arr.sort();
    
    for(let i = 0; i < arr.length; i += 1) {
      if(arr[i] == arr[i+1]) {
        return arr[i]
      }
    }
  }

// Most Clever
// using .reduce()
function findDup(arr){
    return arr.reduce(function(n, v, i){
      return arr.indexOf(v) == i ? n : v;
    }, null);
  }

// Clever one liner arrow function using .filter() and calling the first element 
var findDup = arr => arr.filter((v, i) => arr.indexOf(v) != i)[0];

// using bitwise with .reduce()
function findDup(arr){
    return arr.reduce((a,b,i)=>a^b^i,0);
  }

// using .find()
function findDup( a ){
    return a.find(x=>a.indexOf(x)!=a.lastIndexOf(x));
  }

// Gauss's Theorem with .reduce()
function findDup( arr ){
    let n = arr.length - 1;
    return arr.reduce((p, c) => p + c, 0) - n * (n + 1) / 2;
  }

// nested for loops for comparisons
function findDup( arr ){
    for (var i=0;i<arr.length-1;i++){
      for (var j=i+1;j<arr.length;j++){
        if (arr[i]==arr[j]) return arr[j];
      }
    }
  }