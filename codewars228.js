// Fizz Buzz
/*
Return an array containing the numbers from 1 to N, where N is the parametered value.
Replace certain values however if any of the following conditions are met:
If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/ 

// Parameters or Edge Cases:
/*
    inputs will be positive integers greater than 0
*/ 

// Return:
/*
    an array of the range from 1 to the input integer where if the integer is a multiple of 3 and not 5 return "Fizz", 5 and not 3 return "Buzz" and if by both "FizzBuzz"
*/ 

// Examples:
/*
    3 =>  [1, 2, "Fizz"]
    15 => [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz', 11 , 'Fizz', 13, 14, 'FizzBuzz']
*/ 

// Pseudocode:
/*
    // declare an empty array result
    // iterate from 1 to input integer inclusively 
    // if the current index is not divisible by 3 or 5 concatenate the current index as an element to result
    // if the current index is divisible by 3 and not 5 concatenate 'Fizz' to result
    // if the current index is divisible by 5 and not 3 concatenate 'Buzz' to result
    // if the current index is divisible by 15 concatenate 'FizzBuzz' to result
    // return result
*/ 

// my answer
function fizzbuzz(n) {
    // declare an empty array result
    let result = []
    // iterate from 1 to input integer n + 1 (to include n)
    for (let i = 1; i <= n; i++){
        // if the current index is not divisible by 3 or 5 concatenate the current index as an element to result
        if (i % 3 != 0 && i % 5 != 0) {
            result.push(i)
        }
        // if the current index is divisible by 3 and not 5 concatenate 'Fizz' to result
        if (i % 3 == 0 && i % 5 != 0) {
            result.push('Fizz')
        }
        // if the current index is divisible by 5 and not 3 concatenate 'Buzz' to result
        if (i % 3 != 0 && i % 5 == 0) {
            result.push('Buzz')
        } else {
            result.push(i)
        }
    } return result

}

// my answer refactored nested ternary conditionals and result included in arguments
function fizzbuzz(n, result = []) {
    for (let i = 1; i <= n; i++){
        i % 3 != 0 && i % 5 != 0 ? result.push(i) : i % 3 == 0 && i % 5 != 0 ? result.push('Fizz') : i % 3 != 0 && i % 5 == 0 ? result.push('Buzz') : i % 15 == 0 ? result.push('FizzBuzz') : ''
    } return result
}

// my answer refactored after reviewing best practices
function fizzbuzz(n) {
    // declare an empty array result
    let result = []
    // iterate from 1 to input integer n + 1 (to include n)
    for (let i = 1; i <= n; i++){
        // if the current index is not divisible by 3 or 5 concatenate the current index as an element to result
        if (i % 3 == 0 || i % 5 == 0) {
            result.push((i % 3 == 0 ? 'Fizz': '') + (i % 5 == 0 ? 'Buzz': ''))
        } else {
            result.push(i)
        }
    } return result
}

console.log(fizzbuzz(3)) // [ 1, 2, 'Fizz' ]
console.log(fizzbuzz(15)) // [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz', 11 , 'Fizz', 13, 14, 'FizzBuzz']

// best practices
// using a while loop and declaring local variables for divisors of 3 and 5
// if the current integer is divisible by 3 or 5 but not both then push fizz or buzz and concatenate if both else push the current integer
function fizzbuzz(n) {
  var i = 1, arr = [];
  while(i <= n) {
    var fizz = (i % 3 == 0);
    var buzz = (i % 5 == 0);
    if(fizz || buzz) {
      arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
    }
    else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

var fizzify = fizzbuzz;

// most clever
// this is similar to best practices using divisible by 3 or 5 and concatenate else current index but using Array.apply(null, new Array()).map(function(e,i){return }) creating a new array of elements incrementing by 1 instead of a for loop
var fizzify = fizzbuzz = function(n)
{
  return Array.apply(null, new Array(n)).map(function(e, i){
    return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
  }); 
}

// arrow fn implicit return one liner but easy to follow using .concat() to an empty array
const fizzbuzz = n => n ? fizzbuzz(n - 1).concat(
    n % 15 === 0 ? 'FizzBuzz' : 
    n %  5 === 0 ? 'Buzz' : 
    n %  3 === 0 ? 'Fizz' : 
    n
  ) : [];

// arrow fn implicit return one liner
// same idea as best practices and most clever of divisible by 3 or 5 then do nested ternary else return index
// here they use Array().fill().map().map() to create an array, fill it, create a copy, and finally create another copy  for logic return
const fizzbuzz = n => Array(n).fill(1).map((x,y)=>x+y).map(n=>(n%3?'':'Fizz')+(n%5?'':'Buzz')||n);

// arrow fn implicit return one liner same as above but using a spread operator ... instead of .fill() and .map() only once
const fizzbuzz = n =>
  [...Array(n)].map((val, idx) => !(++idx % 15) ? `FizzBuzz` : !(idx % 5) ? `Buzz` : !(idx % 3) ? `Fizz` : idx);

// declaring an immutable array and appending to it 
// this is a cleaner version of my unrefactored answer
function fizzbuzz(n){
    const arr = [];
     for (let i = 1; i <= n; i++) {
       if(i % 3 === 0 && i % 5 === 0) {
         arr.push("FizzBuzz")
       }else if(i % 3 === 0) {
         arr.push("Fizz")
       }
       else if(i % 5 === 0) {
         arr.push("Buzz")
       } else {
         arr.push(i)
       }
     } return arr
   }

// using recursion, recursive process
// subtracting the input integer by 1 and passing the result back in for recursion
function fizzbuzz(n) {
    if (!n) return []
    if (n % 5 == 0 && n % 3 == 0) return [...fizzbuzz(n-1), 'FizzBuzz']
    if (n % 3 == 0) return [...fizzbuzz(n-1), 'Fizz']
    if (n % 5 == 0) return [...fizzbuzz(n-1), 'Buzz']
    return [...fizzbuzz(n-1), n]
  }