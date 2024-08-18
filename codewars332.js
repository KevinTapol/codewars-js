/*
Arithmetic progression

Parameters or Edge Cases:
    there will be 3 inputs that will be integers and can be negative or positive
    the 1st input a represents the starting point
    the 2nd input d represents how much to add per each element in progression per index
    the 3rd input n represents the number of elements

Return:
    return a string of numbers separated by a comma and space where the number of elements is the 3rd input n, the elements themselves are the product of the current index and the input d difference and add that product to input a

Examples:
    1, 2, 5 --> "1, 3, 5, 7, 9"
    1, 0, 5 --> "1, 1, 1, 1, 1"
    1, -3, 10 --> "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"
    100, -10, 10 --> "100, 90, 80, 70, 60, 50, 40, 30, 20, 10"

Pseudocode:
    create an array length of input n starting with input a plus the product of input d and current index
    convert the array into a single string with the delimiter of a comma and a single white space with .join(', ')
    return the string
*/

// My Answer and Most Clever (IMO best practices)
function arithmeticSequenceElements(a, d, n) {
    return Array.from({length: n}, (e, i) => a + d*i).join(', ')
}

// My Answer refactored one liner arrow fn
const arithmeticSequenceElements = (a, d, n) => Array.from({length: n}, (e, i) => a + d*i).join(', ')

console.log(arithmeticSequenceElements(1, 2, 5)) // "1, 3, 5, 7, 9"
console.log(arithmeticSequenceElements(1, 0, 5)) // "1, 1, 1, 1, 1"
console.log(arithmeticSequenceElements(1, -3, 10)) // "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"
console.log(arithmeticSequenceElements(100, -10, 10)) // "100, 90, 80, 70, 60, 50, 40, 30, 20, 10"

// Best Practices 
// using a while loop and a global array
// I strongly disagree that best practices should be a while loop because the risk of not breaking based on the condition. It's to risky for server breaks.
function arithmeticSequenceElements(a,r,n) {
    var ret = [a]
    while (--n) ret.push(a+=r);
    return ret.join(', ')
}

// Similar to my answer but using .fill() to specify length and .map() to specify elements instead of .from() for both
function arithmeticSequenceElements(a,r,n) {
    return new Array(n).fill().map((i,k) => a + k * r).join(", ");
}

// Clever to use a spread operator instead of .fill() as shown in the answer above
const arithmeticSequenceElements = (a, r, n) => [...Array(n)].map((_, idx) => a + r * idx).join(`, `)

// brute force for loop with array methods
function arithmeticSequenceElements(a,r,n) {
    var array = [a]
    var newnum = a
    for(i=1;i<n;i++){
      array.push(newnum+=r)
    }
    return array.join(", ")
}

// forcing regex.replace() into a global string instead of using an array then converting to a single string with ', ' as a delimiter
function arithmeticSequenceElements(a, d, n) {
    let result = `${a},`
    let sum = a
      for (let i = 2; i<=n; i++){
      result += ` ${sum += d},`
      
    }
    return result.replace(/,\s*$/,"")
}