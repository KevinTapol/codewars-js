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
const key = '0aeiou'

function encode(str) {
    let result = ''

    for(let e of str){
        key.includes(e) === true ? result += key.indexOf(e) : result += e
    } return result
}
  
  function decode(str) {
    let result = ''
    
    for(let e of str){
        '012345'.includes(e) === true ? result += key[Number(e)] : result += e
    } return result
}

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

// Clever use of declared array and index referencing with array methods || or current element logic
const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')

// using object for key instead of array or str
function encode(string){
    var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
    return codeStringGivenMapping(string, vowelMapping);
  }
  
  function decode(string){
    var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
    return codeStringGivenMapping(string, vowelMapping); 
  }
  
  function codeStringGivenMapping(string, mapping){
    return string.split('').map(function(char){
      return mapping[char] || char;
    }).join(''); 
  }

// refactored version of object
const obj = {a: 1, e: 2, i: 3, o: 4, u: 5};

const encode = string =>
  string.replace(/[aeiou]/g, val => obj[val]);

const decode = string =>
  string.replace(/[1-5]/g, val => Object.keys(obj)[--val]);

/*
.bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.
*/   
  var encode = curry.bind(/[aeiou]/g, function(f){ return 'aeiou'.search(f) + 1 });
  var decode = curry.bind(/[1-5]/g, function(f){ return 'aeiou'[--f] });
  function curry(f, s){ return s.replace(this, f) }

// the reason this doesn't fail on whitespace by removing whitespace for decode is due to the regex
const encode = s => s.replace(/[aeiou]/g, v => ' aeiou'.indexOf(v));
const decode = s => s.replace(/\d/g, v => ' aeiou'[v]);