//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.

// Parameters or Edge cases: input array mixed strings and numbers and return only a number
// Return: sum of mixed array
// Examples:
// Psuedo code: .reduce() sum array Number() turns current value into integer 0 eliminates concatenation

function sumMix(x){
    let sum = x.reduce((acc, c) => acc + Number(c), 0)
    return sum
}