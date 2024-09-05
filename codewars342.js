/*
Stanton measure

Parameters or Edge Cases:
  inputs will be an array of integers

Return:
  return an integer representing the Stanton measure - count the number of occurrences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

Examples:
  [1, 4, 3, 2, 1, 2, 3, 2] --> 3
  [1, 4, 1, 2, 11, 2, 3, 1] --> 1
Pseudocode:
  declare a variable int count that is the length of an array copy of only the values of 1 from the input array
  create a copy of the input array where the values are the variable count
  return the length of the final array
*/

// My Answer
function stantonMeasure(a){
  let count = a.filter(e => e === 1).length
  return a.filter(e => e === count).length
}

// My Answer refactored
function stantonMeasure(a){
  return a.filter(e => e === a.filter(e => e === 1).length).length
}

// My Answer refactored one liner arrow fn
const stantonMeasure = a => a.filter(e => e === a.filter(e => e === 1).length).length

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])) // 3
console.log(stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1])) // 1

// Best Practices and Most Clever
// dry code version of my answer in that they use count as a higher order function declared as an immutable variable to first count the occurrences of 1 then count the count of the occurrences of 1
function stantonMeasure(arr) {
  const count = n => arr.filter(x => x === n).length;
  return count(count(1));
}

// Brute Force For loop
// iterate through to count the occurrences of 1 then again to count the count of occurrences of 1
function stantonMeasure(intArr){
  var count1=0;
  var count2=0;
  for(var i=0; i<intArr.length; i++){
    if(intArr[i]===1){
      count1++;
    }
  }
  for(var j=0; j<intArr.length; j++){
    if(intArr[j]===count1){
      count2++
    }
  }
  return(count2)
}

// Array methods but with variable declarations
function stantonMeasure(array){  
  const count = array.filter(num=>num === 1).length;
  const stanton = array.filter(num=>num === count).length;

  return stanton;
}

// brute force for loop but using the key word element of instead of index in or start stop step
function stantonMeasure(array, target = 1) {
	const count = {};
	for (let cur of array) {
  	count[cur] = (count[cur] || 0) + 1;
  }
  return count[count[target]] || 0;
}