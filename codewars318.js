/*
Return a string's even characters.

Parameters or Edge Cases:
    side note this codewars is considoring the first index is 1 and not 0 meaning the first index is odd not even. So, in a normal index we are to return the ODD characters of the inputs instead of the even.

Return:
    if the input string length is < 2 chars or > 100 chars return "invalid string" else the ODD index elements if the input string
Examples:
"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
Pseudocode:
    declare an empty array named result 
    iterate through the string and if the index is even then push the element to the array result
    return the array result
*/

// My Answer
function evenChars(string) {
    return string.length < 2 || string.length > 100 ? "invalid string" : string.split('').map((e, i)=> i % 2 != 0 ? e : '').filter(e => e != '')
}

// My Answer refactored one liner arrow fn
const evenChars = str => str.length < 2 || str.length > 100 ? "invalid string" : str.split('').map((e, i)=> i % 2 != 0 ? e : '').filter(e => e != '')


// Best Practices and Most Clever
// using [...string] instead of string.split('')
function evenChars(string) {
    return (string.length < 2 || string.length > 100) ? "invalid string" : 
    [...string].filter((x, i) => i % 2);
}
// brute force for loop
function evenChars(s) {
    if(s.length<2 || s.length>100)
      return "invalid string";
    var output = [];
    for(var i = 1; i<s.length; i+=2)
    {
      output.push(s[i]);
    }
    return output;
}

// using Array.from(string) instead of [...string]
const evenChars = (str) => 1 < str.length && str.length < 100
  ? Array.from(str).filter((_, i) => i & 1)
  : "invalid string"

// regex 
let evenChars = s=>(s.length < 2 || s.length > 100) ? "invalid string" : s.replace(/.(.)?/g, '$1').split('');