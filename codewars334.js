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
  const values = Object.values(obj)
  let result = Array.from({length: keys.length}, (e, i) => [keys[i], values[i]])
//  let result = Array.from({length: keys.length}, (e, i) => [keys[i], obj[e])
  return result
}

// My Answer using .reduce()
// function convertHashToArray(obj){
//   const keys = Object.keys(obj)
//   const values = Object.values(obj)
//   const result = keys.reduce((accObj, key) => { 

//     return accObj
//   }, [])
//   return result

// }
console.log(convertHashToArray({name: "Jeremy", age: 24}))