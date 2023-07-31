// My Language Skills
/*
Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/ 

// Parameters or Edge Cases:
/*
    inputs will be objects with a string for a key and an integer for a value
    will the objects be empty or null?
*/ 

// Return:
/*
    an array of ONLY string keys where the integer values are greater than or equal to 60
*/ 

// Examples:
/*
    {"Java" : 10, "Ruby" : 80, "Python" : 65} => ["Ruby", "Python"]
    {"Hindi" : 60, "Greek" : 71, "Dutch" : 93} => ["Dutch", "Greek", "Hindi"]
    {"C++" : 50, "ASM" : 10, "Haskell" : 20} => []
*/ 

// Pseudocode:
/*
    // declare a new 2-D array named twoDArray where each element is a key value par of the input object
    // from twoDArray grab only the key value pairs where the values are greater or equal to 60
    // sort twoDArray
    // grab only the keys from the 2d array
    // return result
*/ 

/* 
Side note to self 
Object.entries(object) creates a 2d array of key value pairs. 
Object.keys(object) creates a 1d array of only keys. 
Object.values(object) creates a 1d array of only values.
2DArray to object 
    let resultObj = {}
    result.forEach(([key,value]) => {
        resultObj[key] = value
    })


1DArrayOfKeys 1DArrayOfValues to Object similar to Python dict(zip(1DArrayOfKeys,1DArrayOfValues))

function dict_zip(keysArray, valuesArray) {
    return keysArray.reduce((obj, key, index) => {
      obj[key] = valuesArray[index];
      return obj;
    }, {});
}
*/

// my answer
function myLanguages(inputObj) {
    // declare a new 2-D array named twoDArray where each element is a key value par of the input object
    let twoDArray = Object.entries(inputObj)
    // from twoDArray grab only the key value pairs where the values are greater or equal to 60
    let result = twoDArray.sort((a, b) => b[1] - a[1])
    // sort twoDArray
    result = result.filter(e => e[1] >= 60)
    // grab only the keys from the 2d array
    result = result.map(e => e[0])
    // return result
    return result
}

// my answer refactored
function myLanguages(inputObj) {
    return Object.entries(inputObj).sort((a, b) => b[1] - a[1]).filter(e => e[1] >= 60).map(e => e[0])
}

// my answer refactored arrow fn implicit return Codewars Only
const myLanguages = (inputObj) => Object.entries(inputObj).sort((a, b) => b[1] - a[1]).filter(e => e[1] >= 60).map(e => e[0])

console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65})) // ["Ruby", "Python"]
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93})) // ["Dutch", "Greek", "Hindi"]
console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20})) // []

// best practices
// Here they are using Object.keys(inputObject) to get only the keys instead of creating a 2d array of key value pairs with Object.entries(inputObject) then using .map() to create a shallow copy array of only keys.
function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}

// using a for loop to delete pairs that are less than 60
// Then using normal Object.keys() to return an array of only keys and using .sort() but referencing the pairs.
function myLanguages(results) {
    for(var i in results){
      if(results[i]<60){
        delete results[i];
      }
    }
    return Object.keys(results).sort(function(a,b){return results[b]-results[a]})
  }