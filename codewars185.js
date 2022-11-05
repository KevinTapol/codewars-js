// Parameters or Edge Cases:
//      input will be a string of words
// Return:
//      return the string with each word in the same location but the word characters in reversed order with all spaces retained
// Examples:
//      "This is an example!" ==> "sihT si na !elpmaxe"
//      "double  spaces"      ==> "elbuod  secaps"
//      describe("Basic tests", () => {
//          it("Testing for fixed tests", () => {
//            assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
//            assert.strictEqual(reverseWords('apple'), 'elppa');
//            assert.strictEqual(reverseWords('a b c d'), 'a b c d');
//            assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
//          });
//      });
// Psuedo Code:
//      take in the string and convert it into an array separating each word by space 
//      create a shallow array copy taking each word in the array convert them into arrays then reverse that array and convert them back into strings
//      convert the array back into a string and joining each word with a space
//      return the new string

// convert string to array separating each word by a space
    // convert each individual word into an array and reverse the array
    // convert each word to a string
    // convert each phrase to a string adding back the spaces
    // return the new string



// my answer
function reverseWords(str) {
    // take in the string and convert it into an array separating each word by space 
    return str.split(" ")
    // create a shallow array copy taking each word in the array convert them into arrays then reverse that array and convert them back into strings
    .map(word => word.split("").reverse().join(""))
    // convert the array back into a string and joining each word with a space
    .join(" ");
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
// 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple'))
// 'elppa'
console.log(reverseWords('a b c d'))
// 'a b c d'
console.log(reverseWords('double  spaced  words'))
// 'elbuod  decaps  sdrow'

// my answer refactored arrow function
const reverseWords = (str) => str.split(" ").map(word => word.split("").reverse().join("")).join(" ")

// best practices
// same as my initial answer but they are using a regular funtion for .map() instead of an arrow funttion
function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
}

// most clever
// here they are reversing the entire string with .split("").reverse().join("")
// then they are splitting by each word and reverse each word location back to its orginal spot and covert it back to a string
function reverseWords(str) {
    // Go for it
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// brute force for loop if statements
// loop through the string where the index is not an empty space and set that index value to the declared index word else add a space to the declared string do this the entire length of the string and return the concatenated variables
function reverseWords(str) {
    let reversedWord = '';
    let reversedStr = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        reversedWord = str[i] + reversedWord;
      } else {
        reversedStr += reversedWord + ' ';
        reversedWord = '';
      }
    }
    return reversedStr + reversedWord;
}

// using regex  arrow function and spread
// I didn't know you could use template literals and not include parenthesis for join`` instead of .join("")
var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)
// If I were to do this as regex my answer would be
const reverseWords = str => str.replace(/\S+/g, val => [...val].reverse().join(``));

// for loop and array methods
function reverseWords(str) {
    var l = ''
    var s = ''
    var a = []
    for (let s = str.length; s>=0; s--){
      if (str[s-1]===' '){
        a.push(l)
        a.push(' ')
        l=''
        if (str[s-2]===''){
          a.push(' ')
          s--
        }
      } else {
        if (s === 0) {
          a.push(l)
        } else {
          l += str[s-1]
        }
      }
    }
    for (let i = a.length; i > 0; i--){
      s += a[i-1]
    }
    return s
}

// using for loop for the string and array methods for the individual words
function reverseWords(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr.split(" ").reverse().join(" ");
}

// using spread for each word to reverse instead of reversing the string
function reverseWords(string){
    return string.split(' ').map(el => [...el].reverse().join('')).join(' ')
}