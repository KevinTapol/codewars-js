/*
Product Of Maximums Of Array (Array Series #2)

Parameters or Edge Cases:
    inputs will be an array and an integer
    input array lengths will be at minimum 3
    elements will be numbers that can be negative or positive
    duplicates may exist

Return:
    the highest value product from the input array given the input number of products
Examples:
    maxProduct ([4, 3, 5], 2) ==>  return (20)
    Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 

    [4,3,5], 2 --> 20
    [10,8,7,9], 3 --> 720
    [8,6,4,6], 3 --> 288
    [10,2,3,8,1,10,4], 5 --> 9600
    [13,12,-27,-302,25,37,133,155,-14], 5 --> 247895375
    [-4,-27,-15,-6,-1], 2 --> 4
    [-17,-8,-102,-309], 2 --> 136 
    [10,3,-27,-1], 3 --> -30
    [14,29,-28,39,-16,-48], 4 --> -253344
    [1], 1 --> 1
Pseudocode:
    sort the array from highest to lowest
    slice the array from 0 to the input integer
    return the product of all the elements of the array
*/

// My Answer
function maxProduct(numbers, size){
    let arr = numbers.sort((a, b) => b - a).slice(0, size).reduce((acc, c) => acc * c, 1)
    return arr
}

// My Answer refactored
function maxProduct(arr, n){
    return arr.sort((a, b) => b - a).slice(0, n).reduce((acc, c) => acc * c, 1)
}

// My Answer One liner arrow fn
const maxProduct = (arr, n) => arr.sort((a, b) => b - a).slice(0, n).reduce((acc, c) => acc * c, 1)

console.log(maxProduct([4,3,5], 2)) // 20

// Best Practices and Most Clever
// Similar to my answer but in the .reduce() they are not setting the default value being the integer 1
function maxProduct(numbers, size){
    return numbers.sort((a,b) => b-a).slice(0,size).reduce((acc,n) => acc*n);
  }

// Brute Force for loop instead of .slice() and .reduce()
function maxProduct(numbers, size){
    numbers = numbers.sort((a,b)=> b - a)
    let result = 1
    for(let i = 0; i < size; i++) {
      result *= numbers[i]
    }
    return result
}