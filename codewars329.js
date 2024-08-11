/*
Double Every Other

Parameters or Edge Cases:
    inputs will be an array of integers

Return:
    the input array where every odd index integer is doubled

Examples:
    [1,2,3,4] --> [1,4,3,8]

Pseudocode:
    create a shallow copy array of the input doubling every index that is odd
    return the new array
*/

// My Answer
function doubleEveryOther(a) {
    return a.map((e, i) => i % 2 != 0 ? e*2 : e)
}

// My Answer refactored one liner arrow fn
const doubleEveryOther = a => a.map((e, i) => i % 2 != 0 ? e*2 : e)

console.log(doubleEveryOther([1,2,3,4])) // [1,4,3,8]

// Best Practices and Most Clever
// same as my refactored but reversed ternary
const doubleEveryOther = (a) => a.map((c,i) => i % 2 == 0 ? c : 2 * c);

// Brute force for loop
function doubleEveryOther(a) {
    for(let i = 1; i < a.length; i += 2) {
      a[i] *= 2;
    }
    return a;
}

// clever using the fact that if odd % 2 + 1 instead of a ternary and multiply by the current element
const doubleEveryOther = a => a.map((val, idx) => val * (idx % 2 + 1));