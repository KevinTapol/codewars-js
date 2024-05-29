/*
max diff - easy
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.



Parameters or Edge Cases:
    input will be an array of integer
    the array can be empty
    integers can be positive or negative
Return:
    an integer representing the difference between the largest and the smallest value from the array. If the array is a length of 2 or less then return 0.
Example:
    [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
    [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
    [0, 1, 2, 3, 4, 5, 6] --> 6      
    [-0, 1, 2, -3, 4, 5, -6] --> 11
    [0, 1, 2, 3, 4, 5, 16] --> 16
    [16] --> 0
    [] --> 0
Pseudocode:
    If the array is a length less than 2 then return 0.
    Else return the max value minus the min value of the array.
*/

// My Answer
function maxDiff(arr) {
    if(arr.length < 2){
        return 0;
    }else {
        return Math.max(...arr) - Math.min(...arr)
    }
};

// My Answer refactored
function maxDiff(arr){
    return arr.length >= 2 ? Math.max(...arr) - Math.min(...arr) : 0
}

// My Answer One liner arrow fn
const maxDiff = arr => arr.length >= 2 ? Math.max(...arr) - Math.min(...arr) : 0

console.log(maxDiff([1, 2, 3, 4])) // 3
console.log(maxDiff([16])) // 0
console.log(maxDiff([])) // 0

// Best Practices and Most Clever
// this is the same as my unrefactored answer but without brackets
function maxDiff(list) {
    if(!list.length) return 0;
    return Math.max(...list) - Math.min(...list);
  };


// using .sort, returning the difference between the first and last values else returning 0
const maxDiff = (arr) => arr.sort((a,b)=>a-b)[arr.length-1] - arr[0]  || 0

// brute force for loop but assigning the variables to -Infinity and Infinity instead of the first variable then reassigning based on comparison
function maxDiff(list) {
    // Infinity and -Infinity are values javascript provides, they are greater or smaller than any other value
     let smallestValue = Infinity;
     let biggestValue = -Infinity;
     if(list.length === 0) return 0;
     for (i=0; i < list.length; i++) {
       if(list[i] > biggestValue) {
         biggestValue = list[i];
       }
       if(list[i] < smallestValue) {
         smallestValue = list[i];
       }
     }
     return biggestValue - (smallestValue);
    
   };

// Interesting seeing .sort() not as an arrow fn but as function sintax
function maxDiff(list) {
    if(list.length > 1 ) {
    list.sort(function(a,b){ return a - b  });
    return list[list.length-1] - list[0];
    } else  {
      return 0;
    }
    };

// Checking for test cases with if else
function maxDiff(list) {
    if (!Array.isArray(list)) {
      throw new Error(`Not a array was given`);
    }
    
    if (!list.every(elem => Number.isFinite(elem))) {
      throw new Error(`Array includes not a number values`);
    }
    
    if (!list.length) {
  //     throw new Error(`Given an empty array`);
      return 0;
    }
    
    if (list.lentgth === 1) {
      throw new Error(`Array includes only one value`);
    }
    
    const arrCopy = list.slice();
    const arrCopySortedAscending = arrCopy
      .sort((a, b) => a - b);
    
    return arrCopySortedAscending.at(-1) - arrCopySortedAscending.at(0);
  }