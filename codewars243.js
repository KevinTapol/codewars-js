// Sum of Cubes
/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/ 
// Parameters or Edge Cases:
/*
    inputs will be positive integers
*/ 

// Return:
/*
    the sum of 1 to the input integer with each element to the power of 3
*/ 

// Examples:
/*
    input n 1^3 + 2^3 + ... + n^3
    2 => 9
    3 => 36
*/ 

// Pseudocode:
/*
    // O notation Gauss's Theorem vs a for loop n(n+1)/2 but for the power of 3 per each element ((n*(n + 1))/2)**2

    // declare an empty integer variable named result and set it equal to 0
    // iterate from 1 to the input integer inclusively taking the current index number to the power of 3 and add it to result
    // return result
*/ 



// my answer
function sumCubes(n){
    // declare an empty integer variable named result and set it equal to 0
    let result = 0
    // iterate from 1 to the input integer inclusively taking the current index number to the power of 3 and add it to result
    for (let i = 1; i <=n; i++){
        result += i**3
    }
    // return result
    return result
}

// my answer and Most Clever
// O notation Gauss's Theorem vs a for loop n(n+1)/2 but for the power of 3 per each element ((n*(n + 1))/2)**2
function sumCubes(n){
    return ((n*(n + 1))/2)**2
}

// my answer refactored arrow fn implicit return Codewars only!
const sumCubes = (n) => ((n*(n + 1))/2)**2


console.log(sumCubes(2)) // 9
console.log(sumCubes(3)) // 36

// best practices 
// using recursion
function sumCubes(n){
    if (n == 1) {
      return n**3;
    } else {
      return n**3 + sumCubes(n - 1);
    }
}

// very clever!
// creating an array of elements using .keys(). Then using .reduce on the array where each current value is to the power of 3
const sumCubes = n => [...Array(n + 1).keys()].reduce((r, i) => r + i ** 3);

// also very clever!
// same as above but using Array.from() and .map() instead of spread operator and keys()
const sumCubes = ( n ) => Array.from({length: n}, (_,i)=> i+1).map(el => el**3).reduce((a, b)=> a+b, 0)

// similar to my for loop answer but using Math.pow(i,3) instead of i**3
function sumCubes(n){
    let sum = 0;
    for (let i = 0; i <= n; ++i)
    {
     sum += Math.pow(i, 3);
     }
     return sum;
  }

// while loop using n and going backwards till n equals 0
function sumCubes(n){
    let sum = 0;
    while(n > 0) {
      sum += n**3;
      n--;
    }
    return sum;
}