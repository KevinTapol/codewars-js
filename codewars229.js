// Form The Minimum
/*
Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications
*/ 

// Parameters or Edge Cases:
/*
    inputs will be an array of positive integers greater than 0
    inputs will not be empty or null
*/ 

// Return:
/*
    return the smallest integer created by concatenating the integers in the array without using duplications
*/ 

// Examples:
/*
    [1, 3, 1] => 13
    [4, 7, 5, 7] => 457
    [4, 8, 1, 4] => 148
    [5, 7, 9, 5, 7] => 579
    [6, 7, 8, 7, 6, 6] => 678
    [5, 6, 9, 9, 7, 6, 4] => 45679
    [1, 9, 1, 3, 7, 4, 6, 6, 7] => 134679
    [3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9] => 356789
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] => 1
*/ 

// Pseudocode:
/*
    // create a copy of the input array removing duplications of elements and sort it
    // concatenate the elements into one string, convert the string into an integer and return it
*/ 

// my answer
function minValue(values){
    // create a copy of the input array removing duplications of elements and sort it
    let result = [... new Set(values)].sort((a,b) => a-b)
    // concatenate the elements into one string, convert the string into an integer and return it
    return +result.join('')
}

// my answer refactored
function minValue(values){ 
    return +[... new Set(values)].sort((a,b) => a-b).join('')
}

// my answer arrow fn implicit return for Codewars Only and MOST CLEVER!!
const minValue = (v) => +[... new Set(v)].sort((a,b) => a-b).join('')
  
console.log(minValue([1, 3, 1])) // 13
console.log(minValue([4, 7, 5, 7])) // 457
console.log(minValue([4, 8, 1, 4])) // 148
console.log(minValue([5, 7, 9, 5, 7])) // 579
console.log(minValue([6, 7, 8, 7, 6, 6])) // 678
console.log(minValue([5, 6, 9, 9, 7, 6, 4])) // 45679
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])) // 134679
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])) // 356789
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])) // 1

// best practices
// here they used Array.from() instead of an empty array with a spread operator and Set to create an array of unique elements
// also, they used parseInt() instead of +
function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
}

// used .filter to grab each value and set the index of each element as it's first occurrence overwriting to get unique values
// also they used Number() instead of parseInt() or + 
function minValue(values){
    const n = values
      .filter((e, i, arr) => arr.indexOf(e) === i)
      .sort()
      .join('');
    return Number(n);
  }

// clean code using Number() to convert back to integer, Array.from() to create a new array and new Set() to grab each element only once
function minValue(values){
    return Number(Array.from(new Set(values)).sort().join(''))
}

// similar to my refactored answer but using parseInt() instead of +
function minValue(values){
    return parseInt([...new Set(values)].sort((a,b) => a-b).join(''));
}

// brute force forEach conditionals for unique elements
function minValue(values){
    var result = [];
    values.forEach(function(n){
      if (result.indexOf(n) < 0) {
        result.push(n);
      }
      return result;
    });
    var str = ""
    result.sort().forEach(function(n){
      str = str + n;
      return str;
    });return Number(str);
  }