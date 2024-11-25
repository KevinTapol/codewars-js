/*
The Vowel Code

Parameters or Edge Cases:
    inputs will be a string of words that may be upper or lower case
    integers passed into the string will act as string equivalents for their vowel counter part with the key given in examples from 1-5

Return:
    encode() return the input string replacing the vowels with their integer counterpart as strings
    decode() return the input string replacing the integers with their counterpart strings

Examples:
    a -> 1
    e -> 2
    i -> 3
    o -> 4
    u -> 5

    encode()
    'hello' --> 'h2ll4'
    'How are you today?' --> 'H4w 1r2 y45 t4d1y?'
    'This is an encoding test.' --> 'Th3s 3s 1n 2nc4d3ng t2st.'

    decode()
    'h2ll4' --> 'hello'
    'H4w 1r2 y45 t4d1y?' --> 'How are you today?'
    'Th3s 3s 1n 2nc4d3ng t2st.' --> 'This is an encoding test.'

Pseudocode:
    declare a string key with a leading whitespace followed with the vowels so that their index values match as counterparts
    encode() iterate through the input string and if the char exists in '0aeiou' then return the index value from the key to replace the char
    return the new string

    decode() iterate through the input string and if the char exists in '012345' then return the element from the index value key to replace it
    return the new string

*/

// My Answer brute force for loop w/o regex
// const key = '0aeiou'

// function encode(str) {
//     let result = ''

//     for(let e of str){
//         key.includes(e) === true ? result += key.indexOf(e) : result += e
//     } return result
// }
  
//   function decode(str) {
//     let result = ''
    
//     for(let e of str){
//         '012345'.includes(e) === true ? result += key[Number(e)] : result += e
//     } return result
// }

// My Answer using regex
function encode(str) {
    return str.replace(/[0aeiou]/g, e => '0aeiou'.indexOf(e))
}
  
  function decode(str) {
    return str.replace(/[12345]/g, e => '0aeiou'.charAt(e))
}

// My Answer regex one liner arrow fn
const encode = str => str.replace(/[0aeiou]/g, e => '0aeiou'.indexOf(e))
  
const decode = str => str.replace(/[12345]/g, e => '0aeiou'.charAt(e))

console.log(encode('hello')) // 'h2ll4'
console.log(encode('How are you today?')) // 'H4w 1r2 y45 t4d1y?'
console.log(decode('h2ll4')) // 'hello'
console.log(decode('H4w 1r2 y45 t4d1y?')) // 'How are you today?'

// Best Practices and Most Clever
// regex with _ for index 0 and not arrow fn syntax
function encode(string){
    return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}
  
//turn numbers back into vowels
function decode(string){
    return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}