// Alternate capitalization
/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

// Parameters or Edge Cases:
/*
    inputs will be a string of lowercase letters
    inputs will not be empty or null
*/

// Return:
/*
    an array where the first element will be all even indexes of the input string to uppercase and odd as lowercase and the second element will be even indexes of the input string to lowercase and odd indexes to uppercase
*/

// Examples:
/*
    "abcdef" => ['AbCdEf', 'aBcDeF'] 
    "codewars" => ['CoDeWaRs', 'cOdEwArS'] 
    "abracadabra" => ['AbRaCaDaBrA', 'aBrAcAdAbRa'] 
    "codewarriors" => ['CoDeWaRrIoRs', 'cOdEwArRiOrS'] 
*/

// Pseudocode:
/*
    // declare an empty array named result
    // declare an empty string named string1
    // declare an empty string named string2
    // iterate through string1 and if the current index is even uppercase the element
    // append string1 to result
    // iterate through string2 and if the current index is odd uppercase the element
    // append string2 to result
    // return result
*/

// my answer
function capitalize(s){
    // declare an empty array named result
    let result = []
    // declare an empty string named string1
    let string1 = ''
    // declare an empty string named string2
    let string2 = ''
    // iterate through string1 and if the current index is even uppercase the element
    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            string1 += s[i].toUpperCase()
        }else {
            string1 += s[i]
        }
    }
    // append string1 to result
    result.push(string1)
    // iterate through string2 and if the current index is odd uppercase the element
    for (let i = 0; i < s.length; i++) {
        if (i % 2 != 0) {
            string2 += s[i].toUpperCase()
        }else {
            string2 += s[i]
        }
    }
    // append string1 to result
    result.push(string2)
    // return result
    return result
};


// my answer refactored returning an array and using ternary conditionals
  function capitalize(s){
    let string1 = ''
    let string2 = ''
    for (let i = 0; i < s.length; i++) {
        i % 2 == 0 ? string1 += s[i].toUpperCase() : string1 += s[i]
    }
    for (let i = 0; i < s.length; i++) {
        i % 2 != 0 ? string2 += s[i].toUpperCase() : string2 += s[i]
    }
    return [string1, string2]
};
// my answer using 1 for loop
function capitalize(s){
    let string1 = ''
    let string2 = ''
    for (let i = 0; i < s.length; i++) {
        if (i % 2 != 0) {
            string2 += s[i].toUpperCase()
            string1 += s[i]
        }else {
            string2 += s[i]
            string1 += s[i].toUpperCase()
        }
    }
    return [string1, string2]
};

console.log(capitalize("abcdef")) // ['AbCdEf', 'aBcDeF'] 
console.log(capitalize("codewars")) // ['CoDeWaRs', 'cOdEwArS'] 
console.log(capitalize("abracadabra")) // ['AbRaCaDaBrA', 'aBrAcAdAbRa'] 
console.log(capitalize("codewarriors")) // ['CoDeWaRrIoRs', 'cOdEwArRiOrS'] 

// best practices
// similar to my 2 for loop refactored answer but using .map() instead
function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
};

// most clever
/*
Here [0,1] lets us make the two comparisons in one line. [0,1].map(r...) means we are mapping over the the array [0,1] and r is the element of each iteration. First iteration, r = 0. This is the same case as the even line in the Best Practice code, ie. characters of even indices will be capitalized. Second iteration, r = 1. Same concept, characters of odd indices will be capitalized. And the result of [0,1].map returns an array of two arrays: one for r = 0 and the other for r = 1. //[ arr_r0, arr_r1]
*/
function capitalize(s){
    return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};

// similar to most clever but doing both separate with a spread operator to iterate through the input and .map() to create shallow array copies
function capitalize(s){
    return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
            [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
  }

// using .reduce(acc,c)
function capitalize(s) {
    return s.split('').reduce((acc, val, i) => {
        acc[0] += i % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
        acc[1] += i % 2 === 0 ? val.toLowerCase() : val.toUpperCase();
        return acc;
    }, ['', '']);
};

// one liner reduce()
const capitalize = s =>
  [...s].reduce((pre, val, idx) => (pre[idx % 2] += val.toUpperCase(), pre[+!(idx % 2)] += val, pre), [``, ``]);

// using regex
const capitalize = string =>{
    let results = [];
    // all the odd index letter to uppercase
    const odds = string.replace(/\w/g, (match, offset)=>offset%2===0?match:match.toUpperCase())
    const evens = string.replace(/\w/g, (match, offset)=>offset%2!==0?match:match.toUpperCase())

    results.push(evens, odds)
    return results
}