/*
Smallest value of an array
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0

Parameters or Edge Cases:
    1st input will be an array of length greater than or equal to 1 and contain no duplicates
    2nd input will be a string of either 'value' or 'index' maintaining case sensitivity 
Return:
    Find the min value in the array. If the 2nd input is value, return the element. If the 2nd input is 'index' then return the index.
Examples:
    min([1,2,3,4,5], 'value') // => 1
    min([1,2,3,4,5], 'index') // => 0
Pseudocode:
    Declare a variable value and a variable index.
    Iterate through the array using Math.min() and assign the element to value and it's location to index.
    If the 2nd input is equal to the string 'value', then return value else return index.
*/

// My Answer
function min(arr, toReturn) {
    let value = Math.min(...arr)
    let index = arr.indexOf(value)
    if(toReturn === 'value'){
        return value
    } else {
        return index
    }
}

// My answer refactored
function min(arr, str){
    return str === 'value'? Math.min(...arr) : arr.indexOf(Math.min(...arr))
}

// One liner Arrow fn
const min = (r,s) => s === 'value' ? Math.min(...r) : r.indexOf(Math.min(...r))

console.log(min([1,2,3,4,5], 'value')) // 1
console.log(min([1,2,3,4,5], 'index')) // 1


// Best Practices and Most Clever
// Same as my answer but using an unnecessary method of .apply()
function min(arr, toReturn) {
    var val = Math.min.apply(null, arr)
    return toReturn == 'value' ? val : arr.indexOf(val)
}

// Using .reduce()
function min(arr, toReturn) {
    return arr.reduce(function(o, v, i){
      return (v < o.value) ? (o.value = v, o.index = i, o) : o;
    }, {value: Infinity, index: 0})[toReturn];
}

// Brute force for loop
// Declaring a variable as index and setting it equal to 0. Then iterating through the loop and comparing values while setting the lowest compared element's index location to the declared variable index. Finally returning either element or index based on the 2nd input.
function min(arr, toReturn) {
    index=0;
    for(i=1;i<arr.length;i++){
        if(arr[i] < arr[index]) index=i;
    }
    return toReturn == "index" ? index : arr[index];
}

// using sort and grabbing the first value and it's index
min = (a, r, b = [...a].sort((x, y) => x - y)[0]) => r[0] == 'v' ? b : a.indexOf(b);

// switch case with a default of null
const min = (arr, toReturn) => {
    const min = Math.min(...arr);
    
    switch (toReturn) {
      case 'value' : return min;
      case 'index' : return arr.indexOf(min);
      default      : return null;
    }
}