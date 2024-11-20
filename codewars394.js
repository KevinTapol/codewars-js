/*
Two Sum

Parameters or Edge Cases:
    there will be 2 inputs
    1st input will be an array of numbers of length 2 or greater
    2nd input will be a target number sum of two inputs from the 1st input array
    2nd input will always be possible to achieve valid

Return:
    return an array containing the indexes of the elements from the 1st input that are equal to the sum of the 2nd input NOTE same index element sum are not acceptable

Examples:
    [1, 2, 3], 4 --> [0, 2] or [2, 0]
    [3, 2, 4], 6 --> [1, 2] or [2, 1]

Pseudocode:
    declare an empty array result to push the index values 
    double nested for loop iterate through comparing the sum of the outer for loop being i and check if the sum of i and the inner for loop j added together are equal to the 2nd input
    if so then push i then j to the array result
    return the array result

*/

// My Answer brute force nested for loop
function twoSum(arr, num) {
    let result = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            if(arr[i] + arr[j] === num){
                result.push(i)
                result.push(j)
                return result
            }
        }
    }    
}

// My Array method iterating through with nested .map()
function twoSum(arr, num) {
    return arr.map((e, i)=> arr.map((el, j) => e + el === num && i !=j ? [i, j]: 'x')).flat().filter(e => e != 'x')[0]
}

// My Answer refactored one liner arrow fn
const twoSum = (arr, num) => arr.map((e, i)=> arr.map((el, j) => e + el === num && i !=j ? [i, j]: 'x')).flat().filter(e => e != 'x')[0]

console.log(twoSum([1, 2, 3], 4)) // [0, 2] or [2, 0]

// Best Practices
// Similar to my for loop but referencing nested for loop as index +1 instead of start at 1
function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

// Most Clever 
// using new Map() with .has() and .get()
function twoSum(numbers, target) {
    let seen = new Map();
    for (let i = 0; i < numbers.length; i++) {
      let x = numbers[i], y = target - x;
      if (seen.has(y))
        return [seen.get(y), i];
      seen.set(x, i);
    }
}

// Single for loop with .indexOf() and a conditional
function twoSum(numbers, target) {
    for (i = 0; i < numbers.length; i++) {
      second = numbers.indexOf(target - numbers[i], i+1);
      if (second > i) {
        return [i, second];
      }
    }
}

// clever use of obj
const twoSum = function (numbers, target){
    const map = {};
    for (let p = 0; p < numbers.length; p++){
      const currMapVal = map[numbers[p]]
       if (currMapVal >= 0){
         return [currMapVal, p]
       } else {
         const numToFind = target - numbers[p]
         map[numToFind] = p
       }
     }
    return null
}

// cleaner example of my nested .map()
function twoSum(nums,target){
    const arr = [];
    nums.map(function(x,ind1){
      nums.map(function(y,ind2){
        if(x + y == target && ind1 != ind2)
        arr.push(ind1,ind2)
      });
    });
    return [arr[0],arr[1]]
}

// very clever .reduce()
const twoSum = (n, t) => n.reduce((acc, curr, idx) => {
    let result = n.indexOf(t - curr, idx + 1);
    if (result >= 0) acc.push(idx, result);
    return acc;
}, []);

// recursion
function twoSum(arr, sum, a=0, b=1) {
    if (b == arr.length) return twoSum(arr, sum, a+1, 0)
    return arr[a] + arr[b] == sum ? [a,b] : twoSum(arr, sum, a, b+1) 
}

// one liner arrow fn with an array return of first index and last index
twoSum=(n,t,r)=>[r=n.indexOf(n.filter(u=>n.includes(t-u))[0]),n.lastIndexOf(t-n[r])]

// similar to above but separated fn for each index
const twoSum = (numbers, target) => {
    const firstNumIndex = numbers.findIndex((num, idx) => numbers.lastIndexOf(target-num) > idx);
    const lastNumIndex  = numbers.lastIndexOf(target-numbers[firstNumIndex]);
    
    return [firstNumIndex, lastNumIndex];
}