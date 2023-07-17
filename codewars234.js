// Leap Years
/*
In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them
*/ 

// Parameters or Edge Cases:
/*
    inputs will be integers representing years
    inputs will never be empty or null
*/ 

// Return:
/*
    boolean true if the input integer is a leap year else false
*/ 

// Examples:
/*
    2020 => true 
    2000 => true 
    2015 => false 
    2100 => false
*/ 

// Pseudocode:
/*
    // if the year is divisible by 4 and divisible by 400 return true 
    // else if the year is divisible by 4 and not 100 return false
    // else return false
*/ 

// my answer
function isLeapYear(year) {
    // if the year is divisible by 4 and divisible by 400 return true
    if (year % 4 == 0 && year % 400 == 0) {
          return true
    // else if the year is divisible by 4 and not 100 return false
    } if (year % 4 == 0 && year % 100 != 0) {
      return true
    // else return false
    } else {
      return false
    }
}

// my answer refactored
function isLeapYear(year) {
    return ((year % 4 == 0 && year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) ? true : false
}

// my answer arrow fn implicit return for Codewars only
const isLeapYear = (year) => ((year % 4 == 0 && year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) ? true : false

console.log(isLeapYear(2020)) // true
console.log(isLeapYear(2000)) // true
console.log(isLeapYear(2015)) // false
console.log(isLeapYear(2100)) // false

// best practices and most clever 
// using an equation for implicit boolean return 
// side note the second case of divisible by 4 when it is divisible by 400 was not needed in my answer
function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
  }

// using if statements instead of else if or else
function isLeapYear(year) {
    if(0 == year%400) return true;
    if(0 == year%100) return false;
    if(0 == year%4) return true;
    return false;
  }

// lol there is an import function for leap year check
const moment = require('moment');

function isLeapYear(year) {
  return moment([year]).isLeapYear()
}

// lol again using new Date() function
const isLeapYear = year => new Date(year, 1, 29).getDate() == 29;