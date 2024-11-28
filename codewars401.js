/*
Pair of gloves

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Parameters or Edge Cases:
   inputs will be an array of strings of colors
   unknown if array will be empty
   unknown if strings will always be lowercase

Return:
   return an integer representing the number of pairs of string colors

Examples:
   ["red", "green", "red", "blue", "blue"] --> 2
   ["red", "red", "red", "red", "red", "red"] --> 3
   ['red','red'] --> 1
   ['red','green','blue'] --> 0
   ['gray','black','purple','purple','gray','black'] --> 3

Pseudocode:
   declare a variable pairs and set it equal to 0
   declare an empty object counts
   iterate through the input array and if the current key does not exist in counts then add it to the object and set the value to 1
   if the key does exist then add 1 to the value
   create an array of values from the object counts
   iterate through the values array, check if the element is even, divide the current element by 2 and add it to pairs
   return pairs

*/

// My Answer
function numberOfPairs(arr){
   let pairs = 0
   const counts = arr.reduce((result, key) => {
      result[key] ? result[key]++ : result[key] = 1
      return result
   }, {})
   let vals = Object.values(counts).map(e => {
      if(e % 2 === 0){
         pairs += (e/2)
      } else {
         pairs += (e-1)/2
      }
   })
   return pairs
}

// My Answer refactored
function numberOfPairs(arr){
   let pairs = 0
   const counts = arr.reduce((result, key) => {
      result[key] ? result[key]++ : result[key] = 1
      return result
   }, {})
   let vals = Object.values(counts).map(e => e % 2 === 0 ? pairs += (e/2) : pairs += (e-1)/2)
   return pairs
}

console.log(numberOfPairs(["red", "green", "red", "blue", "blue"])) //
console.log(numberOfPairs([
   'Olive',  'Purple',  'Gray',    'Teal',
   'Blue',   'Green',   'Purple',  'Red',
   'Red',    'Olive',   'Blue',    'Lime',
   'Red',    'Olive',   'Lime',    'White',
   'Gray',   'Green',   'Teal',    'Black',
   'Olive',  'Fuchsia', 'Aqua',    'Red',
   'Lime',   'Silver',  'Silver',  'Fuchsia',
   'Teal',   'Aqua',    'Olive',   'Black',
   'Lime',   'Silver',  'Fuchsia', 'Lime',
   'Silver', 'Maroon',  'Green'
 ])) //