/*
Odd Ones Out!

The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!

Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.
In the above example:

the number 1 appears twice
the number 2 appears once
the number 3 appears three times
2 and 3 both appear an odd number of times, so they are removed from the list. The final result is: [1,1]

Parameters or Edge Cases:
    inputs will be an array containing positive integers as elements

Return:
    return an array of elements of the input elements where the occurrence of the elements in the array is even

Examples:
    [1, 2, 3, 1, 3, 3] --> [1, 1]
    [1, 1, 2, 2, 3, 3, 3] --> [1, 1, 2, 2]
    [26, 23, 24, 17, 23, 24, 23, 26] --> [26, 24, 24, 26]
    [1, 2, 3] --> []
    [1] --> []

Pseudocode:
    declare an empty array named result
    iterate through the input array creating a shallow copy array containing the current element and it's duplicates
        if the length of the duplicates array is even then push the entire array to the array result
    return the array result
*/

// My Answer brute force for loop
// function oddOnesOut(nums) {
//     let result = []
//     for(let e of nums){
//         if(nums.filter(k => k === e).length % 2 === 0){
//             result.push(e)
//         }
//     }return result
// }

// My Answer using array methods
function oddOnesOut(arr){
    return arr.map(e => arr.filter(k => k === e).length % 2 === 0 ? e : '').filter(e => e != '')
}

// My Answer refactored 
const oddOnesOut = arr => arr.map(e => arr.filter(k => k === e).length % 2 === 0 ? e : '').filter(e => e != '')

console.log(oddOnesOut([1, 2, 3, 1, 3, 3])) // [1, 1]


// Best Practices 
// using .forEach() to push to an empty object each element as a key and the count of occurrence as the value
function oddOnesOut(nums) {

    const results = {};
    nums.forEach(num => {
      if (results[num]) {
        results[num]++
      } else {
        results[num] = 1
      }
    });
  
    return nums.filter(el => results[el] % 2 === 0)
}

// Most Clever
// using .filter() twice instead of .map()
function oddOnesOut(nums) {
    return nums.filter(n => nums.filter(x => x === n).length % 2 === 0);
}

// using .reduce() to create an object
function oddOnesOut(a) {
    let d = a.reduce((x, y) => (x[y] = (x[y] || 0) + 1, x), {});
    return a.filter(x => d[x] % 2 === 0);
}

// using a bang ! to use not truthy 
const oddOnesOut = nums =>
    nums.filter(val => !(nums.filter(v => v === val).length % 2));