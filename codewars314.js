/*
Length and two values.

Parameters or Edge Cases:
Return:
    return an array with length of the integer input and with the other 2 input values alternating
Examples:
    5, true, false     -->  [true, false, true, false, true]
    10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
    0, "one", "two"    -->  []
Pseudocode:
    create a new array with length n where if the index is even, set the element equal to the firstValue and the odd indexes to the secondValue
    return the array
*/

// My Answer
function alternate(n, firstValue, secondValue){
    return Array.from({length: n}, (e, i)=> i % 2 == 0 ? e = firstValue: e = secondValue)
}

// My Answer one liner arrow fn
const alternate = (n, a, b) => Array.from({length: n}, (e, i) => i % 2 === 0 ? e = a : e = b)

console.log(alternate(5, true, false)) // [true, false, true, false, true]

// Best Practices
// Brute Force For loop with the same idea as my answer but with a global declared array and pushing to the array based on the same idea of even and odd indexes
function alternate(n, firstValue, secondValue){
    const array = [];
    for (let i = 0; i < n; i++) {
      array.push(i % 2 === 0 ? firstValue : secondValue)
    }
    return array;
}

// Most Clever
// using recursion to create an array then call the function on itself subtracting n by 1 each time until n = 0
const alternate = (n, a, b) => n ? [a, ...alternate(n-1, b, a)] : [];

// Clever to declare an array of length n with spread operator then .map() to fill the array with values
alternate=(n, f, s)=>[...Array(n)].map((_,i)=>i&1?s:f)

// While loops flirting with fire if the conditional is messy it'll keep going and/or crash
// While loop based on an empty array being less than the value of the input integer
function alternate(n, firstValue, secondValue){
    let arr = []
    while(arr.length < n){
      arr.push(firstValue, secondValue)
    }
    if(arr.length > n){
    arr.pop()
    }
    return arr
}