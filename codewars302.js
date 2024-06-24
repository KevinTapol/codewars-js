/*
How many are smaller than me?
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

Parameters or Edge Cases:
    inputs will be an array of integers
    integers can be positive or negative
Return:
    the total number of elements in the array as we continue through the array that are greater than the current element
Examples:
    [5, 4, 3, 2, 1]  -->  [4, 3, 2, 1, 0]
    [1, 2, 3]  -->  [0, 0, 0]
    [1, 2, 0]  -->  [1, 1, 0]
    [1, 2, 1]  -->  [0, 1, 0]
    [1, 1, -1, 0, 0]  -->  [3, 3, 0, 0, 0]
    [5, 4, 7, 9, 2, 4, 4, 5, 6]  -->  [4, 1, 5, 5, 0, 0, 0, 0, 0]

Pseudocode:
    declare an empty array named result
    iterate through the input array declaring a local variable count set to 0 and for each current element count the number of elements proceeding that are less than the current element and add 1 to the total count for each element
    push the total count to the empty array result
    return the array result
*/

// My Answer
function smaller(nums) {
    let result = []
    for(let i = 0; i < nums.length; i++){
        let count = 0
        let arr = nums.slice(i)
        // put .filter here
        for(let j = 1; j <= arr.length; j++){
            if (arr[0] > arr[j]){
              count += 1  
            }
        }
        result.push(count)
    }
    return result
}

// My Answer Refactored .reduce()
console.log(smaller([5, 4, 3, 2, 1])) // [4, 3, 2, 1, 0]


// Best Practices and Most Clever
// arrow fn using .map() with a nested .slice().filter().length
const smaller = nums => nums.map((x, i) => nums.slice(i).filter(y => x > y).length);