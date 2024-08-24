/*
Pluck

Parameters or Edge Cases:
    inputs will be an array of objects and a single char representing a property key name to identify in a key value pair
    if an object is missing the property key name then return undefined

Return:
    return an array of values that exists in the 1st input object for the property name key 2nd input 

Examples:
    [{a:1}, {a:2}], 'a' -> [1,2]
    [{a:1, b:3}, {a:2}], 'b' --> [3, undefined]

Pseudocode:
    declare an empty array named result
    iterate through the input array elements calling the input key and push the values to the array result
    return the array result
*/

// My Answer
function pluck(arr, key) {
    let result = []
    for(let e of arr){
        result.push(e[key])
    }return result
}

// My Answer refactored using array methods
function pluck(arr, key){
    return arr.map(e => e[key])
}

// My Answer one liner arrow fn
const pluck = (arr, key) => arr.map(e => e[key])

console.log(pluck([{a:1}, {a:2}], 'a')) // [1,2] 
console.log(pluck([{a:1, b:3}, {a:2}], 'b')) // [3, undefined]

// Best Practices and Most Clever
// same as my refactored answer but not using arrow fn syntax for .map() method
function pluck(objs, name) {
    return objs.map(function(obj) { return obj[name] });
}

// Similar to my brute force for loop but using .forEach() instead
function pluck(objs, name) {
    var array = [];
    objs.forEach(function(value){
      array.push(value[name]);
    });
    return array;
}

// using .reduce() to call the key on the current object val and return the object acc per each iteration
const pluck = (objs, name) => objs.reduce((acc, val) => (acc.push(val[name]), acc), [])

// same as above but not using arrow fn on .reduce() method and if the key has no value return undefined.
function pluck(objs, name) {
    return objs.reduce((acc, cur) => 
      acc = cur[name] ? [ ...acc, cur[name] ] : [ ...acc, undefined ]
    , [])
}