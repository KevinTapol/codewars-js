// Factorial
/*
    Your task is to write function factorial
*/ 

// Parameters or Edge Cases:
/*
    inputs will be positive integers equal to or greater than 0
    inputs will never be null or empty
*/ 

// Return:
/*
    the factorial of the input number
*/ 

// Examples:
/*
    0 => 1
    1 => 1
    4 => 24
    7 => 5040
    17 => 355687428096000
*/ 

// Pseudocode:
/*
    // declare an integer result and set it equal to 1
    // iterate from 0 to the input integer inclusively
    // multiply all the index values to result
    // if the input is equal to 0 then return 1 else return result
    // n! = n \times (n-1) \times \dots \times 1
*/ 

// my answer
function factorial(n){
    // declare an integer result and set it equal to 1
    let result = 1
    // iterate from 0 to the input integer inclusively
    for (let i = 1; i <= n; i++)
    // multiply all the index values to result
        result *= i
    // if the input is equal to 0 then return 1 else return result
    if (n == 0) {
        return 1
    } else {
        return result
    }
}

// my answer refactored
function factorial(n){
    let result = 1
    for (let i = 1; i <= n; i++)
        result *= i
    return n == 0 ? 1 : result
}

console.log(factorial(1)) // 1
console.log(factorial(1)) // 1
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040
console.log(factorial(17)) // 355687428096000

// voted best practices and most clever
// STRONGLY DISAGREE recursive is best practices or most clever
const factorial = n => n ? factorial(n - 1) * n : 1;

// while loop similar to my for loop but starting at the input integer and deprecating by 1
function factorial(n){
    let answer = 1;
    while (n > 0) {
      answer *= n;
      n--;
    }
    return answer;
}

// I considered this answer in generating an array and using .reduce() to multiply all the elements in the array starting at 1 instead of 0.
function factorial(n){
    if ( n === 0 ) return 1
    return Array.from({length: n}, (_, i)=> i+1).reduce((a, b)=> a * b, 1)
  }

// same as above but a one liner
factorial=n=>Array.from(Array(n),(_,i)=>i+1).reduce((a,b)=>a*b,1)

// using a spread operator and array brackets instead of Array.from()
const factorial = n => [...Array(n).keys()].reduce((total, elem) => total * (elem + 1), 1)

// I had no clue you could do this! Here they are reassigning the variable of *= inside the for loop declaration.
function factorial(n) {
    for (var acc = 1; n > 0; acc *= n, n--);
    return acc
}