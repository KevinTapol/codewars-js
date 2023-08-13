// Maximum Triplet Sum (Array Series #7)
/*
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

Note : duplications are not included when summing , (i.e) the numbers added only once .

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .

3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .
*/ 

// Parameters or Edge Cases:
/*
    inputs will be an array of positive and negative integers
    integers may be duplicated
    inputs will have a length of at least 3 ie never empty or null
*/ 

// Return:
/*
    the highest sum achieved from non duplicate integers from the input array
*/ 

// Examples:
/*
    [3,2,6,8,2,3] => 17
    [2,9,13,10,5,2,9,5] => 32
    [2,1,8,0,6,4,8,6,2,4] => 18
    [-3,-27,-4,-2,-27,-2] => -9
    [-14,-12,-7,-42,-809,-14,-12] => -33
    [-13,-50,57,13,67,-13,57,108,67] => 232
    [-7,12,-7,29,-5,0,-7,0,0,29] => 41
    [-2,0,2] => 0
    [-2,-4,0,-9,2] => 0
    [-5,-1,-9,0,2] => 1
*/

// Pseudocode:
/*
    // create a copy of the input array named result sorted from descending and removing duplicates with a new set
    // return a sum of the first 3 elements using .recude()
*/ 

// my answer
function maxTriSum(numbers){
    // create a copy of the input array named result sorted from descending and removing duplicates
    let result = Array.from(new Set(numbers.sort((a,b) => b-a)))
    // return a sum of the first 3 elements 
    return result.slice(0,3).reduce((acc,c) => acc + c, 0)
}

// my answer refactored
function maxTriSum(arr){
    return Array.from(new Set(arr.sort((a,b) => b-a))).slice(0,3).reduce((acc,c) => acc + c, 0)
}

// my answer refactored arrow fn implicit return Codewars Only
const maxTriSum = (arr) => Array.from(new Set(arr.sort((a,b) => b-a))).slice(0,3).reduce((acc,c) => acc + c, 0)

console.log(maxTriSum([3,2,6,8,2,3])) // 17
console.log(maxTriSum([-7,12,-7,29,-5,0,-7,0,0,29])) // 41

// best practices and most clever
// very similar to my answer but using a new array [...] and spread instead of Array.from()
const maxTriSum = numbers => {
    const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
    return a+b+c
}

// same as best practices and most clever but one liner, sorting in ascending and returning the sum of the last 3 elements
function maxTriSum(numbers){
    return ([...new Set(numbers)]).sort((a,b) => a-b).slice(-3).reduce((a,b) => a+b);
}

// using .filter() to remove duplicates instead of new Set()
function maxTriSum(numbers){
    numbers.sort((a, b) => b - a)
    let arr = numbers.filter((e, i) => numbers.indexOf(e) === i)
    return arr[0] + arr[1] + arr[2]
}