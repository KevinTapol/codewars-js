// Greatest common divisor
/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/ 

// Parameters or Edge Cases:
/*
    inputs will be integers greater than or equal to 0
    inputs will never be empty or null
*/ 

// Return:
/*
    the greatest common divisor of both numbers
*/ 

// Examples:
/*
    30, 12 =>  6
    36, 12 => 12
     8,  9 =>  1
     1,  1 =>  1
*/ 

// Pseudocode:
/*
    // declare variables for min and max values named min_int and max_int
    // find the min value of the input integers and set it equal to a variable named min_int and max val as max_int
    // iterate from 1 to min_int
    // if min_int divided by current index has no remainder and max_int divided by the dividend of min_int and current index has no remainder then return min_int divided by the current index
*/ 

// my answer
function mygcd(x,y){
    // declare variables for min and max values named min_int and max_int
    let max_int = 0
    let min_int = 0
    // find the min value of the input integers and set it equal to a variable named min_int and max val as max_int
    if (x > y) {
        max_int = x
        min_int = y
    } else {
        max_int = y
        min_int = x
    }
    // iterate from 1 to min_int
    for (let i = 1; i <= min_int; i++) {
        // if min_int divided by current index has no remainder and max_int divided by the dividend of min_int and current index has no remainder then return min_int divided by the current index
        if (min_int % i == 0 && max_int % (min_int / i) == 0) {
            return min_int / i
        }
    }
}

// my answer refactored
function mygcd(x,y){
    let max_int = 0
    let min_int = 0
    if (x > y) {
        max_int = x
        min_int = y
    } else {
        max_int = y
        min_int = x
    }
    for (let i = 1; i <= min_int; i++) {
        if (min_int % i == 0 && max_int % (min_int / i) == 0) {
            return min_int / i
        }
    }
}

console.log(mygcd(30, 12)) // 6
console.log(mygcd(36, 12)) // 12
console.log(mygcd(8,  9)) // 1
console.log(mygcd(1,  1)) // 1

// best practices and most clever 
// using recursion based on euclidean algorithm
// The Euclidean Algorithm for finding GCD(A,B) is as follows: If A = 0 then GCD(A,B)=B, since the GCD(0,B)=B, and we can stop. If B = 0 then GCD(A,B)=A, since the GCD(A,0)=A, and we can stop. Write A in quotient remainder form (A = B⋅Q + R)
function mygcd(x,y){
    return y == 0 ? x : mygcd(y, x % y)
  }

// one liner of best practices and most clever
const mygcd = (a, b) => b ? mygcd(b, a % b) : a;

// while loop also using the same logic of euclidean algorithm
function mygcd(x, y) {
    while(y) var t = y, y = x % y, x = t;
    return x;
  }

// similar to my for loop but going backwards with i-function mygcd(x,y){
function mygcd(x,y){
    for(let i = x ; i>0;i-=1){
        if (x%i === 0 && y%i===0){
            return i
        }
    } 
}