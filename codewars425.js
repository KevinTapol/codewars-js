/*
Pair Zeros
For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.

Examples
input: [0, 1, 0, 2]
paired: ^-----^
    -> [0, 1,   2]
  kept: ^

input: [0, 1, 0, 0]
paired: ^-----^
    -> [0, 1,    0]
  kept: ^        ^

input: [1, 0, 7, 0, 1]
paired:    ^-----^
    -> [1, 0, 7,    1]
  kept:    ^

input: [0, 1, 7, 0, 2, 2, 0, 0, 1, 0]
paired: ^--------^        ^--^
    -> [0, 1, 7,    2, 2, 0,    1, 0]
  kept: ^                 ^        ^
Notes
Pairing happens from left to right. For each pairing, the second 0 will always be paired towards the first ( right to left )
0s generated by pairing can NOT be paired again
( void where not applicable: ) Don't modify the input array or you may fail to pass the tests

Parameters or Edge Cases:
    inputs will be an array of integers

Return:
    return the input array of integers removing every 2nd occurrence of the integer 0

Examples:
  [1]),[1])
  [0,0] -> [0]'
  [0,0]),[0])
  [0,0,0] -> [0,0]'
  [0,0,0]),[0,0])
  [1,0,1,0,2,0,0,3,0] -> [1,0,1,2,0,3,0]'
  [1,0,1,0,2,0,0,3,0]),[1,0,1,2,0,3,0])

Pseudocode:
    declare a variable representing the count of integer 0's name zero and set it equal to 0
    declare an empty array named result
    iterate through the input array
    if the current element is not 0 then push it to result
    if the current element is the integer 0 then add 1 to count
    if count is not 2 then push the current element 0 to result else do nothing
    return result


*/

// My Answer Brute force for loop working
function pairZeros(arr) {
    let count = 0
    let result = []
    for(let e of arr){
        if(e != 0){
            result.push(e)
        } else {
            count += 1
            if(count != 2){
                result.push(e)
            }
            if(count === 2 ){
              count = 0
            }
        }
    } return result
}

// My answer brute force for loop refactored conditional logic
function pairZeros(arr) {
    let count = 0
    let result = []
    for(let e of arr){
        if(e != 0){
            result.push(e)
        } else {
            count += 1
            if(count === 2 ){
              count = 0
            } else {
              result.push(e)
            }

        }
    } return result
}

// My Answer refactored but how to do a ternary with multiple steps again for the else statement?
function pairZeros(arr) {
    let count = 0
    let result = []
    for(let e of arr){
        if(e != 0){
            result.push(e)
        } else {
            count += 1
            count === 2 ? count = 0 : result.push(e)
        }
    } return result
}

// My Answer refactoring conditional into a ternary using (logic, logic)
function pairZeros(arr) {
    let count = 0
    let result = []
    for(let e of arr){
        e !== 0 ? result.push(e) : (count += 1, count === 2 ? count = 0 : result.push(e))
    } return result
}

// My Answer using .map() for an iterator instead of a for loop
function pairZeros(arr) {
    let count = 0
    let result = []
    let answer = arr.map(e => e !== 0 ? result.push(e) : (count += 1, count === 2 ? count = 0 : result.push(e)))
    return result
}

// My Answer using .reduce()
function pairZeros(arr) {
    let count = 0
    return arr.reduce((acc, c) => {
        if (c !== 0) {
            acc.push(c)
        } else if (count === 0) {
            acc.push(c)
            count = 1
        } else {
            count = 0
        }
        return acc
    }, [])
}

// My Answer using .reduce() refactored to ternary and count set to default parameter
function pairZeros(arr, count = 0) {
    return arr.reduce((acc, c) => {
        c !== 0 ? acc.push(c) : count === 0 ? (acc.push(c), count = 1) : count = 0
        return acc
    }, [])
}


// My Answer one liner arrow fn using .reduce()
const pairZeros = (arr, count = 0) => arr.reduce((acc, c) => {
        c !== 0 ? acc.push(c) : count === 0 ? (acc.push(c), count = 1) : count = 0
        return acc
    }, [])


console.log(pairZeros([0,0])) // [0]