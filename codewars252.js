// Sum of Triangular Numbers
/*
Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]
e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

Triangular Numbers cannot be negative so return 0 if a negative number is given.
*/ 

// Parameters or Edge Cases:
/*
    inputs will be integers positive or negative
*/ 

// Return:
/*
    if the input is less than or equal to 0 return 0
    else return the sum of the final elements of each array per input integer
*/ 

// Examples:
/*
    6 => 56
    34 => 7140
    -291 => 0
    943 => 140205240
    -971 => 0
*/ 

// Pseudocode:
/*
    // declare an integer result and set it equal to 0
    // while the input n is greater than 0
    // take the input integer and run it through n(n+1)/2 to get the final value of the array
    // add the result to the variable result
    // return result
*/ 

// my answer
function sumTriangularNumbers(n) {
    // declare an integer result and set it equal to 0
    let result = 0
    // while the input n is greater than 0
    while (n > 0) {
        // take the input integer and run it through n(n+1)/2 adding the result to the global variable result
        result += (n*(n+1)/2)
        // decrease the n by 1
        n -= 1
    }
    // return result
    return result;
}

function sumTriangularNumbers(n) {
    let result = 0
    while (n > 0) {
        result += (n*(n+1)/2)
        n -= 1
    }
    return result;
}

console.log(sumTriangularNumbers(6)) // 56
console.log(sumTriangularNumbers(34)) // 7140
console.log(sumTriangularNumbers(-291)) // 0
console.log(sumTriangularNumbers(943)) // 140205240
console.log(sumTriangularNumbers(-971)) // 0

// best practices and most clever
/*
 This is actually a case for writing good tests. The test is wrong for this kata, at least in javascript. The test actually uses the n * (n+1) * (n+2) / 6 formula for the tests, hence why it passes. Unfortunately, this isn't testing for the triangle number series as described in the kata (1 3 6 10 15 21...), but for tetrahedral (pyramid) numbers (1 4 10 20 35 56...). The correct solution for the triangle series is actually n * (n+1) / 2 . In other words, everyone that "solved" this kata (in javascript), actually solved the tetrahedral number series - if you run your code, or anyone elses that passed the tests, you'll see that it in fact yields the pyramid numbers.
*/ 
function sumTriangularNumbers(n) {
    return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
}

// for loop similar to while loop
function sumTriangularNumbers(n) {
    var sum = 0;  
    for(var i = 1; i <= n; i++){
        sum += (i*(i+1))/2;
    }
    return sum;
}

// one liner using array methods
const sumTriangularNumbers = n => n > 0 ? Array.from(Array(n), (_, i) => (i + 1) * (i + 2) / 2).reduce((s, e) => s + e) : 0;

// clever using multiple variables in the for loop statement for math
function sumTriangularNumbers(n) {
    let sum = 0
    for (let i=0, j=1; i<n; i++, j += i+1) {
      sum += j
    }
    return sum
}

// recursion
function sumTriangularNumbers(n) {
    if  (n < 0){
    return 0;
    }
    else  {
      return n*(n+1)/2 + sumTriangularNumbers(n-1);
    }
}