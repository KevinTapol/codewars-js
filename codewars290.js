/*
Get key/value pairs as arrays

Parameters or Edge Cases:
Return:
    a matrix or 2d array from the input object where the first 2d array are all the keys as strings and the second are all the values as integers
Examples:
({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
Pseudocode:
    return an array where the first element is all the keys from the input object and the second element is all the values from the input object
*/

// My Answer and Best Practices
function keysAndValues(obj) {
    return [Object.keys(obj), Object.values(obj)]
}

// My Answer One liner arrow fn
const keysAndValues = (obj) => [Object.keys(obj), Object.values(obj)]

console.log(keysAndValues({a: 1, b: 2, c: 3}))

// Most Clever 
// I strongly disagree that it is most clever, but I do agree that it is clever doing a .map() on a .push() because you cannot .push() directly on top of a .push(). 
// Using .push() and .map() to first create an empty array, push all the keys to the array. Then using .map() to create elements where you are calling the object by keys to return an array of values of each element.
function keysAndValues(data){
    var arr = [];
    arr.push(Object.keys(data));
    arr.push(Object.keys(data).map(function(x){return data[x]}))
    return arr
}

// Brute Force for loop
// Very Clever
// Using .hasOwnProperty() to return a boolean if the key property exists. Then push to the empty arrays with the keys and push to the vals array by calling the keys of the object property key per each element.
function keysAndValues(data){
    // TODO: complete
    var keys = [],
        vals = [];
    for (key in data) {
      if(data.hasOwnProperty(key)){
        keys.push(key);
        vals.push(data[key]);
      }
    }
    return [keys, vals];
}

// Similar to best practices but using .map() for the array of values.
function keysAndValues(data){
    return [Object.keys(data), Object.keys(data).map(function (key) { return data[key]; })];
}

// Cleaned up version of the above answer using arrow fn
function keysAndValues(obj) {
    return [Object.keys(data), Object.keys(data).map((key) => data[key])]
}

// Defining the first index for the keys and the second index for the values. Then iterating through using a for loop to push each elements key to the first array and it's respective value to the second array.
function keysAndValues(data){
    // TODO: complete
    var result = [];
    result[0] = [];
    result[1] = [];
    for(var k in data) {result[0].push(k); result[1].push(data[k]);}
    return result;
  }

// Clever to create a 2d array or matrix from the start. Then use a for loop to fill it.
function keysAndValues(data){
    var arr = [[],[]];
    for(var keys in data){
      if(data.hasOwnProperty(keys)){
        arr[0].push(keys);
        arr[1].push(data[keys]);
      }
    }
    return arr;
  }

// lol using a library lodash to use the method .zip() to create a key value arrays in an array.
const _ = require('lodash');

function keysAndValues(data){
  return _.zip(...Object.entries(data));
}

// using .reduce({object}, [[], []])  2d array for default start 
function keysAndValues(data) {
    const res = Object.entries(data).reduce(
      (acc, pair) => {
        const [key, value] = pair;
        acc[0].push(key);
        acc[1].push(value);
        return acc;
      },
      [[], []],
    );
    return res;
  }