/*
Tidy Number (Special Numbers Series #9)

A Tidy number is a number whose digits are in non-decreasing order. Given a number, Find if it is Tidy or not.
Number passed is always Positive.
Return the result as a Boolean.

Parameters or Edge Cases:
    inputs will be positive integers
    if the digits equal each other then return true

Return:
    boolean true if each digit following the current digit is higher in value else false

Examples:
    The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .
    tidyNumber (12) ==> return (true)

    The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .
    tidyNumber (32) ==> return (false)

    The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .
    tidyNumber (1024) ==> return (false)

    The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .
    tidyNumber (13579) ==> return (true)

    The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3
    tidyNumber (2335) ==> return (true)

    12 --> true
    102 --> false
    9672 --> false
    2789 --> true
    2335 --> true

Pseudocode:
    convert the input integer into an array where each digit is an element
    iterate through the array and if any of the current elements are larger than the next element return false
    outside of the iteration, return true
*/

//  My Answer
// I strongly agree that this should be best practices because here we are comparing integers and not strings.
function tidyNumber(n){
    let arr = String(n).split('').map(e => Number(e))
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > arr[i + 1]){
            return false
        }
    }
    return true
}

console.log(tidyNumber(2335)) // true
console.log(tidyNumber(102)) // false

// Best Practices
// I strongly disagree this being best practices because they are comparing strings and not numbers.
const tidyNumber = n => {
    let s = n.toString();
    for (let i = 0; i < s.length-1; i++) {
      if (s[i] > s[i+1]) return false;
    }
    return true;
}

// Most Clever
// Clever but still comparing strings and not integers
function tidyNumber(n){
    return [...n+=""].sort().join``==n
}

// While loop
// using the length condition instead of remainder of dividing by 10 would have been a better choice imo
function tidyNumber(n) {
    let m = 9;

    while (n) {
      if (n % 10 > m)
        return false;
      m = n % 10;
      n = n / 10 | 0;
    }
    return true;
}

// Clever
// very similar to my answer of creating an array of integers but using .every() conditionals instead of a for loop
function tidyNumber(n){
    let arr = [...n.toString()].map(Number);
    return arr.every((el, ind, arr) => !ind || el >= arr[ind - 1]);
}

// Clean While loop using Math.trunc() to remove remainders for while loop conditional iterator
function tidyNumber(n){
    let lD = 0
    let lower = 9;
    while (n > 0) {
      lD = n % 10;
    if (lD <= lower) {
      lower = lD
      n = Math.trunc(n / 10)  
    } else {
      return false;
    } 
  }
    return true;
}

// One liner arrow fn of best practices
const tidyNumber = n => n.toString().split``.every((e, i, a) => !i || e >= a[i - 1]);