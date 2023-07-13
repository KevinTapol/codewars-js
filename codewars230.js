// Number of Decimal Digits
/*
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
*/ 

// Parameters or Edge Cases:
/*
    inputs will be integers greater than or equal to 0
    inputs will not be empty or null
*/ 

// Return:
/*
    the number of digits of each integer
*/ 

// Examples:
/*
    5 => 1
    12345 => 5
    9876543210 => 10
*/ 

// Pseudocode:
/*
    // convert the integer into a string
    // return the length of the string
*/ 

// my answer
function digits(n) {
    // convert the integer into a string
    x = n.toString()
    // return the length of the string
    return x.length
}

// my answer refactored and Best Practices
function digits(n) {
    return n.toString().length
}

// my answer refactored arrow fn implicit return Codewars Only
const digits = (n) => n.toString().length

  console.log(digits(5)) // 1
  console.log(digits(12345)) // 5
  console.log(digits(9876543210)) // 10

// most clever
// using template literals to pass in the value as a string
function digits(n) {
    return `${n}`.length;
  }

// using String() instead of .toString()
function digits(n) {
    return String(n).length
  }

// brute force while loop adding to a count variable
function digits(n) {
    // code goes here
    var count = 0;
    if (n >= 0) count=1;
  
    while (n / 10 >= 1) {
      
      n /= 10;
      count++;
    }
  
    return count;
    }

// using concatenation instead of template literals, String() or .toString()
const digits = ( n ) => (''+n+'').length

// concatenating to an array then using the .length property
const digits = (it_is_really_big_number) => {
    return ( it_is_really_big_number + [] ).length
  }