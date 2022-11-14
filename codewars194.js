// Parameters or Edge Cases:
//      inputs will be a array of strings and can be an empty array
//      The numbering starts at 1.
//      The format is n: string. Notice the colon and space in between.
// Return:
//      an array of strings with intergers: letters per element with their respective counterparts
//      return an empty array if the input array is empty
// Examples:
//      [] --> []
//      ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
// Psuedo Code:
//      declare a global empty array
//      loop through the input array and add interger 1 to the index
//      concat ": " to the element and it's respective array element
//      return the global array

// my answer
function number (array){
    // declare a global empty array
    var result = []
    // loop through the input array and add interger 1 to the index
    for(let i in array){
    // concat ": " to the element and it's respective array element
        result[i] = (Number(i) + 1) + ": " + array[i]
    // return the global array
    }return result
}

// my answer refactored arrow function shallow array with .map()
const number = (array) => array.map((e,i) => e = (i + 1) + ": " + array[i])

// best practices same as my refactored answer but not using arrow functions
var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
}

// most clever
// using template literals instead of + to concatenate
let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)

// for loop similar to my unrefactored answer
var number = function(arr) {
    var newArr = [];
      if (arr.length === 0) {
        return [];
      } else {
        for (var i = 0, len = arr.length; i < len; i += 1) {
          newArr.push((i + 1) + ': ' + arr[i]);
        }
      }
      return newArr;
}

// GENIUS!! using i++ instead of index + 1 to avoid interger concat when not wanted
// this should be both best practices and most clever in my opinion
function number(arr) {
    return arr.map((e, i) => `${++i}: ${e}`);
}

// using .forEach() and .push() 
var number=function(array){
    let newArr = [];
    array.forEach(function(item, i){
    newArr.push((i+1)+': '+item);
    });
    return newArr;
}