/*
Convert Hash To An Array

Parameters or Edge Cases:
  inputs will be an object of key value pairs of strings or integers
  input objects can be empty
  will every object key have a value?

Return:
  the input object as an array where each element is an array where the key is the first index and the value is the next index ie 2D Array or Matrix

Examples:
  {name: "Jeremy"} --> [["name", "Jeremy"]]
  {name: "Jeremy", age: 24} --> [["age", 24], ["name", "Jeremy"]]
  {name: "Jeremy", age: 24, role: "Software Engineer"} --> [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
  {product: "CodeWars", powerLevelOver: 9000} --> [["powerLevelOver", 9000], ["product", "CodeWars"]] 
  {} --> []

Pseudocode:
  declare a global variable empty array named result
  create an array of all the keys of the object named keys
  create an array of all the values of the object named values
  iterate through the key array pushing the respective key index and value index as an array to the result array
  return the result array
*/

// My Answer
function convertHashToArray(obj){
  let result = []
  const keys = Object.keys(obj)
  const values = Object.values(obj)
  for(let i in keys){
    result.push([keys[i], values[i]])
  }
  return result
}

// My Answer using Array.from()
function convertHashToArray(obj){
  const keys = Object.keys(obj)
  let result = Array.from({length: keys.length}, (e, i) => [keys[i], obj[keys[i]]])
  return result
}

// My Answer refactored arrow fn one liner default param for keys array with dynamic calls for values of object arrays for default keys variable
const convertHashToArray = (obj, keys = Object.keys(obj)) => Array.from({length: keys.length}, (e, i) => [keys[i], obj[keys[i]]])

console.log(convertHashToArray({name: "Jeremy", age: 24}))

// Best Practices and Most Clever
// Object.entries() takes in an object and returns a 2d array of key value pairs as array elements
const convertHashToArray = o => Object.entries(o).sort()

// cleaner version of my arrow fn answer using .map() instead of Array.from()
const convertHashToArray = (hash) => Object.keys(hash).map(key => [key, hash[key]]).sort();

// similar to my arrow fn answer but referencing element instead of index
const convertHashToArray = (hash) => Array.from(Object.keys(hash), (v) => [v, hash[v]]).sort((a, b) => a > b);