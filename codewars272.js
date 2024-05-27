/*
Convert an array of strings to array of numbers

Parameters or Edge Cases:
    inputs will be an array of integers and floats
Return:
    an array of integers from an array of strings
Examples:
    ["1", "2", "3"] --> [1, 2, 3]
    ["1.1","2.2","3.3"] --> [1.1,2.2,3.3]
Pseudocode:
    Iterate through the array of strings, convert the elements to numbers either integers or floats and return them.
*/

// My Answer
function toNumberArray(stringarray){
    return stringarray.map(e => Number(e))
}

// One Liner Arrow fn 
const toNumberArray = (a) => a.map(e => Number(e))

// Best Practices and Most Clever
// using parseFloat() instead of number
function toNumberArray(stringarray){
  return stringarray.map(parseFloat);
}

// using + to convert from string to int and int to string
toNumberArray = a => a.map(e => +e)

// brute force for loop
function toNumberArray(str){
    let arr = [];
    for(let i = 0; i < str.length; i++){
      arr.push(+str[i]);
    }
    return arr;
}