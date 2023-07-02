// Round up to the next multiple of 5
/*
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/
// Parameters or Edge Cases:
/*
    inputs will be positive or negative integers
    inputs will not be empty or null

*/
// Return:
/*
    if the input is divisible by 5 then return it else return the next multiple of 5 
*/
// Examples:
/*
    0    ->   0
    2    ->   5
    -2   ->   0
    -5   ->   -5
*/
// Pseudocode:
/*
    // if the input is divisible by 5 then return the input
    // if not use recursion to recall the function adding 1 to the input
*/

// my answer
function roundToNext5(n){
    // if the input is divisible by 5 then return the input
    if (n % 5 == 0) {
        return n
    }else {
        return roundToNext5(n+1)
    }
    // if not recall the function adding 1 to the input
  }

// my answer refactored
function roundToNext5(n) {
    return n % 5 == 0 ? n : roundToNext5(n+1)
}

// arrow function implicit return 
const roundToNext5 = (n) => n % 5 == 0 ? n : roundToNext5(n+1)

console.log(roundToNext5(0)) // 0
console.log(roundToNext5(2)) // 5
console.log(roundToNext5(-2)) // 0
console.log(roundToNext5(-5)) // -5

// best practices and most clever
/* 
 divide the input by 5
 round up using Math.ceil()
 multiply by 5 and return the product
 */
function roundToNext5(n){
    return Math.ceil(n/5)*5;
  }

// using a while loop instead of recursion
function roundToNext5(n){
    while(n % 5 !== 0) n++;
    return n;
  }