// Unlucky Days
/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/ 

// Parameters or Edge Cases:
/*
    inputs will be integers representing year
*/ 

// Return:
/*
the number of times friday landed on the 13th of the months of the input year
*/ 

// Examples:
/*
    1586 => 1
    1001 => 3
    2819 => 2
    2792 => 2
    2723 => 2
    1909 => 1
    1812 => 2
    1618 => 2
    2132 => 1
    2065 => 3
*/ 

// Pseudocode:
/*
    // declare a counter for Friday the 13th and set it equal to 0 
    // iterate through each month
    // create a new date with the input year, month for loop iterator, and day being 13
    // if the input year at month i on the 13 exists on Friday being the 5th (0 being Sunday to 6 being Saturday) add 1 to friday13
    // return friday13

*/ 

// my answer
function unluckyDays(year){
    // declare a counter for Friday the 13th and set it equal to 0 
    let friday13 = 0;
    // iterate through each month
    for (let i = 0; i < 12; i++) {
        // create a new date with the input year, month for loop iterator, and day being 13
        // if the input year at month i on the 13 exists on Friday being the 5th (0 being Sunday to 6 being Saturday) add 1 to friday13
        if(new Date(year, i, 13).getDay() === 5){
          friday13+=1
        }
    }
    // return friday13
    return friday13;
}

// my answer refactored ternary conditional
function unluckyDays(year){
    let friday13 = 0;
    for (let i = 0; i < 12; i++) {
        new Date(year, i, 13).getDay() === 5 ? friday13+=1 : ''   
    }
    return friday13;
}

console.log(unluckyDays(1586)) // 1
console.log(unluckyDays(1001)) // 3
console.log(unluckyDays(2819)) // 2

// best practices
// similar to my answer but using ++ instead of += 1
// also using var instead of let in the for loop
function unluckyDays(year){
    let unlucky = 0;
    for (var i = 0; i < 12; i++) {
      if(new Date(year, i, 13).getDay() === 5){
        unlucky++;
      }
    }
    return unlucky;
  }

// most clever
// create a new array with length of 12 for months, filter each element where given a date month i of each element day 13 is on friday and return the length of the array
function unluckyDays(year){
	return Array.from({ length: 12 }).filter((_, i) => new Date(year, i, 13).getDay() === 5).length
}

// using .keys and spread operator 
function unluckyDays(year){
    return [...Array(12).keys()].map(item => `${year}-${item + 1}-13`).filter(item => (new Date(item)).getDay() == 5).length;
  }

// using .reduce()
function unluckyDays(year) {
    return Array.from({ length: 12 }).reduce((p, _, i) => p + (new Date(`${year}/${i + 1}/13`).getDay() === 5), 0);
}

// importing a library moment
const moment = require('moment');

const unluckyDays = (year) => {
  let count = 0;
  for (let month = 0; month < 12; ++month) {
    if (moment([year, month, 13]).day() === 5) {
      ++count;
    }
  }
  return count;
}

// similar to best practices but declaring a variable for new date outside the for loop and changing the month inside the for loop with .setMonth()
function unluckyDays(year){
    var date = new Date(year,0,13), count = 0;
    for(let i=0; i<12; i++) {
      date.setMonth(i);
      if(date.getDay()===5)count++;
    }
    return count;
  }