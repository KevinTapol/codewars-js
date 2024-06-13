/*
Last Survivor
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:

let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
Notes
The given string will never be empty.
The length of the array is always one less than the length of the string.
All numbers are valid.
There can be duplicate letters and numbers.


Parameters or Edge Cases:
    inputs will be a string of lowercase characters from a-z and an array of integers greater than or equal to 0
    the string will never be empty
    the length of the array is always one less than the length of the string
    all numbers are valid
    duplicates may exist

Return:
    return the remaining characters from the string once each index value from the input integer array is complete
Examples:
let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'

Pseudocode:
    split the input string into an array of each char being a string element
    iterate through the elements of the input arr and splice the element of the input array once
    outside of the loop convert the new array back into a string and return the single remaining character
*/

// My Answer
function lastSurvivor(str, arr) {
    const newArr = str.split('')
    for (let e of arr) {
        newArr.splice(e, 1)
    }
    return newArr.join('')
}

console.log(lastSurvivor("zbk",[0, 1]))

// Best Practices
function lastSurvivor(letters, coords) {
    letters = letters.split('');
    for (let i = 0; i < coords.length; i++) {
       letters.splice(coords[i], 1)
    }
    return letters.join('')
}

// Most Clever
function lastSurvivor(letters,coords) {
    return coords.reduce( (letters,coord) => letters.slice(0,coord) + letters.slice(coord+1) , letters ); 
}

// instead of using .split() here they are declaring a new array with a spread operator for the string input
// also here they are using i in the for loop with elements instead of e
function lastSurvivor(string, indices) {
    const arr = [...string];
    for (const i of indices) arr.splice(i, 1)
    return arr[0];
  }

// using substr() method
function lastSurvivor(letters, coords) {
    for (let c of coords)
      letters = letters.substr(0, c) + letters.substr(c+1);
    return letters;
  }

// clever using nested for loop to assign a new string
function lastSurvivor(letters, coords) {
    let lsplit = letters.split("");
      for(let i = 0; i < lsplit.length; i++) {
          for(let j = 0; j < coords.length; j++) {
              lsplit.splice(coords[j], 1);
          }
      }
    let leftOver = lsplit[0];
    return leftOver;
  }

// calling the remaining element of the array of strings at index 0 instead of converting back into a string
function lastSurvivor(letters, coords) {
    return coords.reduce((letArr, coord) => {letArr.splice(coord, 1); return letArr}, letters.split(""))[0]
}