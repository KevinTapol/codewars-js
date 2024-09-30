/*
Substring fun

Parameters or Edge Cases:
    inputs will be an array of elements of strings
    array may be empty

Return:
    return a string resulting from the iteration through each element grabbing the string char reference by the elements index

Examples:
    [] -->''
    ['yoda', 'best', 'has'] --> 'yes'

Pseudocode:
    declare an empty string named result
    iterate through the input array and grab from a single char from the element string by index of the index of the element in the array
    return the string
*/

// My Answer brute force for loop
function nthChar(arr){
    let result = ''
    for(let i in arr){
        result += arr[i].charAt(i)
    } return result
}

// My Answer and Most Clever using .reduce()
// using .reduce() to create an empty string and accumulate the current element string char at the current index
function nthChar(arr){
    return arr.reduce((acc, c, i) => acc + c.charAt(i), '')
}

// My Answer one liner arrow fn
const nthChar = arr => arr.reduce((acc, c, i) => acc + c.charAt(i), '')

console.log(nthChar(['yoda', 'best', 'has'])) // 'yes'

// Best Practices
// using .map() and .join('') to create an array of single chars from each elements index from each elements array index instead of .reduce()
const nthChar = (words) => words.map((word, index)=>word[index]).join('');

// using .forEach() instead of for loop
function nthChar(words){
    let output = ''
    words.forEach((v, i) => {
      output += v[i]
    })
   
     return output
}