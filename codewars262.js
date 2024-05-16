/*
Find Multiples of a Number

Parameters:
    inputs will be two integers both being greater than 0
Return:
    An array of factors from the 1st input upto and including the 2nd input if the 1st input is a factor of the 2nd input
Examples:
    INPUTS (2, 6) EXPECTED OUTPUT [2, 4, 6]
    INPUTS (5, 25) EXPECTED OUTPUT [5, 10, 15, 20, 25]
    INPUTS (1, 2) EXPECTED OUTPUT [1, 2]
    INPUTS (5, 7) EXPECTED OUTPUT [5]
    INPUTS (4, 27) EXPECTED OUTPUT [4, 8, 12, 16, 20, 24]
    INPUTS (11, 54) EXPECTED OUTPUT [11, 22, 33, 44]
Pseudocode:
    declare an empty array called factors
    divide the 2nd input by the 1st input and round down using Math.floor to the nearest integer to get the length of the array and declare the answer as endPoint
    iterate using a for loop starting from 1 to endPoint multiplying by the 1st input by the current iteration and push it to the empty array
    outside of the for loop, return the new array
My answer using a for loop
*/
function findMultiples(integer, limit) {
    let result = [];
    const endPoint = Math.floor(limit/integer);
    for (let i = 1; i <= endPoint; i++) {
        result.push(integer * i)
    };
    return result;
};
  
console.log(findMultiples(2, 6)); // [2, 4, 6]
console.log(findMultiples(5, 25)); // [5, 10, 15, 20, 25]
console.log(findMultiples(1, 2)); // [1, 2]
console.log(findMultiples(5, 7)); // [5]
console.log(findMultiples(4, 27)); // [4, 8, 12, 16, 20, 24]
console.log(findMultiples(11, 54)); // [11, 22, 33, 44]

// Best Practices Very similar to my answer but adding the integer value to itself per each iteration instead of multiplying by factors starting at 1 up to the rounded down quotient of dividing 2nd input by the 1st input.
function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
}

// Most Clever
// using array methods to create a new array of length of rounded down quotient of dividing 2nd input by the 1st input, then filling the array with factors of the integer
function findMultiples(int,limit){
    return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
}

// Using parseInt() instead of Math.floor()
function findMultiples(int, limit) {
    return Array.from({length: parseInt(limit/int)}, (_,i)=> (i+1)*int )
  }

// arrow fn using a spread operator to create a new array
const findMultiples = (integer, limit) =>
    [...Array(limit / integer ^ 0)].map((_, idx) => ++idx * integer);

// one liner using spread operator and keys then slicing starting at index 1
var findMultiples = (integer, limit) => [...Array(Math.floor(limit / integer)+ 1).keys()].map(e=> e * integer).slice(1)

// while loop with a break statement
function findMultiples(integer, limit) {
  
    let base = 0;
    const multiples = [];
    
    while (true) {
      base += integer;
      if (base > limit) break;
      multiples.push(base);
    }
    
    return multiples;
  }