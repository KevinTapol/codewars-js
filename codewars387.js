/*
Duplicate Encoder

Parameters or Edge Cases:
    inputs will be a single string of chars of letters, special characters and/or white space

Return:
    return the input string replacing each unique char with '(' and every char that is not unique with ')'

Examples:
    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))((" 

Pseudocode:
    convert the input string to all lowercase chars
    declare an empty str result
    convert the input string into an array where each char is an element
    iterate through the array and create a filtered array containing only the current element and if the length is 1 then concat '(' to result else if the length is greater than 1 concat ')' to result
    return result
*/

// My Answer brute force for loop
function duplicateEncode(word){
    const str = word.toLowerCase()
    let result = ''
    const arr = str.split('')

    for(let i = 0; i < arr.length; i++){
        if(arr.filter(e => e === arr[i]).length === 1){
            result += '('
        } else {
            result += ')'
        } 
    } return result
}

// My Answer brute force for loop refactored
function duplicateEncode(word){
    const str = word.toLowerCase()
    let result = ''
    const arr = str.split('')

    for(let i = 0; i < arr.length; i++){
        arr.filter(e => e === arr[i]).length === 1 ? result += '(' : result += ')'
    }return result
}

// My Answer using array methods
function duplicateEncode(word){
    const arr = word.toLowerCase().split('')
    return arr.map((e, i) =>  e = arr.filter(e => e === arr[i]).length === 1 ? '(' : ')').join('')
}

// My Answer array methods one liner arrow fn
const duplicateEncode = (word, arr = word.toLowerCase().split('')) => arr.map((e, i) =>  e = arr.filter(e => e === arr[i]).length === 1 ? '(' : ')').join('')

console.log(duplicateEncode("din")) // "((("
console.log(duplicateEncode("recede")) // "()()()"
console.log(duplicateEncode("Success")) // ")())())"
console.log(duplicateEncode("(( @")) // "))((" 

// Best Practices and Most Clever
// using indexOf() and lastIndexOf() to check if element is unique by finding the first index occurrence of the current element and comparing by last index 
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
}

// brute force for loop version of Best Practices and Most Clever
function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}

// str.replace(regex, fn) first index occurrence of current element compared to last index
function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

// creating an object with a separate .reduce() fn
function countCharacters(chars) {
    return chars
      .reduce( function(memo, char){
        memo[char] = memo[char] ? memo[char] + 1 : 1;
        return memo;
      }, {});
}
  
  function duplicateEncode(word){
    const chars = word.split('').map(ch => ch.toLowerCase());
    const charsCount = countCharacters(chars);
    return chars
      .map( ch => charsCount[ch] > 1 ? ')' : '(' )
      .join('');
}

// very clever imo using .some() to compare conditions of both elements the same and both indexes not the same
function duplicateEncode(word) {
    var letters = word.toLowerCase().split('')
    return letters.map(function(c, i) {
      return letters.some(function(x, j) { return x === c && i !== j }) ? ')' : '('
    }).join('')
}