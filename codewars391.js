/*
Equal Sides Of An Array

Parameters or Edge Cases:
    inputs will be an array of length 0 < arr < 1000
    the elements in the array can be any integer positive or negative

Return:
    return the lowest index where the sum of the elements to the left of the current element is equal to the sum of the right else return -1

Examples:
    [1,2,3,4,3,2,1] --> 3 
    [1,100,50,-51,1,1] --> 1
    [1,2,3,4,5,6] --> -1
    [20,10,30,10,10,15,35] --> 3 

Pseudocode:
    prioritizing first occurrence of equal sides
    if all values but the first is equal to 0 return the first index

    starting at index 1 iterate through the input array comparing the sum of the values of all previous elements to the sum of all the following elements using .slice() and .reduce() making sure to include default 0 in .reduce() to avoid the TypeError for using .reduce() on an empty array
    in the iteration, if an element is found where the sums are equal then return the index of the element 

    if all values but the last is equal to 0 return the last index 

    if no condition is met then return -1 meaning no such index was found
*/

// My Answer
function findEvenIndex(arr){
    if(arr.slice(1).reduce((acc, c) => acc + c, 0) === 0){
        return 0
    }
    for(let i = 1; i < arr.length -1; i++){
      if(arr.slice(0, i).reduce((acc, c) => acc + c, 0) === arr.slice(i + 1, arr.length).reduce((acc, c) => acc + c, 0)){
          return i
      }
    }
    if(arr.slice(0,-1).reduce((acc, c) => acc + c, 0) === 0){
      return arr.length -1
    }
    return -1
}

// My Answer refactoring out .reduce() with default of 0 to avoid TypeError of .reduce() on an empty array
function findEvenIndex(arr){
    const add = x => x.reduce((acc, c) => acc + c, 0)
    if(add(arr.slice(1)) === 0){
        return 0
    }
    for(let i = 1; i < arr.length -1; i++){
      if(add(arr.slice(0, i)) === add(arr.slice(i + 1, arr.length))){
          return i
      }
    }
    if(add(arr.slice(0,-1)) === 0){
      return arr.length -1
    }
    return -1
}

// My Answer refactored for loop to .map() and ternary conditionals prioritizing first index occurrence
function findEvenIndex(arr){
    const add = x => x.reduce((acc, c) => acc + c, 0)
    let arrOfIdx = arr.map((_, i) => add(arr.slice(0, i)) === add(arr.slice(i + 1, arr.length)) ? i : '').filter(e => e != '')
    return add(arr.slice(1)) === 0 ? 0 : arrOfIdx.length > 0 ? arrOfIdx[0] :add(arr.slice(0,-1)) === 0 ? arr.length -1 : -1
}

console.log(findEvenIndex([1,2,3,4,3,2,1])) // 3
console.log(findEvenIndex([1,2,3,4,5,6])) // -1
console.log(findEvenIndex([ 1, 2, 3, 4, 3, 2, 1 ])) // 3
console.log(findEvenIndex([ 1, 100, 50, -51, 1, 1 ])) // 1
console.log(findEvenIndex([ 20, 10, 30, 10, 10, 15, 35 ])) // 3

// Best Practices
// brute force for loop with a very clever .reduce() on the right side iterating through and removing the front of the right to add to the left
function findEvenIndex(arr){
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}

// Most Clever
// similar to my answer but further refactoring .slice() with .reduce() and using findIndex() of where conditions are met
const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));

// 
function findEvenIndex(arr){
  let left = 0;
  let right = arr.reduce((s,n) => s + n, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}