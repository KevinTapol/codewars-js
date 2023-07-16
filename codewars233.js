// Sum of Minimums!
/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.
*/ 

// Parameters or Edge Cases:
/*
    inputs will be a 2D nested array of arrays
    arrays will always contain positive integers
    can there be more or less than 3 nested arrays?

*/ 

// Return:
/*
    the sum of the lowest value integer of each array
*/ 

// Examples:
/*
    [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]] => 9
    [[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]] => 76
*/ 

// Pseudocode:
/*
    // declare an empty integer named result and set it equal to 0
    // iterate through the input array grabbing each lowest value of each nested array and add it to result
    // return result
*/ 

// my answer
function sumOfMinimums(arr) {
    // declare an empty integer named result and set it equal to 0
    let result = 0
    // iterate through the input array grabbing each lowest value of each nested array and add it to result
    for (let i = 0; i < arr.length; i++){
        result += Math.min(...arr[i])
    }
    // return result
    return result
}

console.log(sumOfMinimums([[ 1, 2, 3, 4, 5 ], [ 5, 6, 7, 8, 9 ], [ 20, 21, 34, 56, 100 ]])) // 26
console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])) // 9
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]])) // 76

// best practices and most clever
// use .reduce directly on the 2D array with the current value is iterating through each element using Math.min()
function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
  }


// using .map() to use the spread function on each nested array and grab the min value with Math.min(...e) then adding up the elements with .reduce()
const sumOfMinimums = ( array ) => array.map( el => Math.min(...el) ).reduce( (a, b)=> a + b, 0)

// using .forEach nested element sort them and grab the first index
function sumOfMinimums(arr) {
    let sum = 0
    arr.forEach((x)=>sum = sum + x.sort(function(a, b){return a - b})[0])
    return sum
  }

// similar to Python of a for loop for (let element of array)
// The apply() method takes arguments as an array.
function sumOfMinimums(arr) {
    let sum = 0;
    for(let a of arr){
        sum += Math.min.apply(Math, a);
    }
    return sum;
}

// nested for loop instead of using a spread operator or .reduce()
function sumOfMinimums(arr) {
    var sum=0;
    for (var i=0; i<arr.length; ++i)
    {
      var min=Infinity;
      for (var j=0; j<arr[i].length; ++j)
        if (min>arr[i][j])
          min=arr[i][j];
      sum+=min;
    }
    return sum;
  }