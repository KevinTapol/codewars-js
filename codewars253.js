// Maximum Product
/*
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10  =  50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
*/ 

// Parameters or Edge Cases:
/*
    inputs will be an array of integers
    integers can be negative or positive
    input array lengths will always be at least 2
*/ 

// Return:
/*
    the product of the highest combination of 2 adjacent integers from the input array
*/ 

// Examples:
/*
    [1, 2, 3] =>  6
    [9, 5, 10, 2, 24, -1, -48] => 50
    [1, 0, 1, 0, 1000] => 0
*/ 

// Pseudocode:
/*
    // declare an empty array named result
    // iterate through the array stopping one short of the length because we are grabbing pairs
    // for each iteration take the product of the current element and the next element and push it to result
    // return the max value from result

    // using array methods
    // create a copy of the input array of the product of each element and since the final element will be the last element of the input array multiplied by null omit the NaN by slicing off the last value exclusively
    // iterate through result using the spread fn looking for the max value and return it
*/ 

// my answer, best practices and most clever
function adjacentElementsProduct(x) {
    // declare an empty array named result
    let result = []
    // iterate through the array stopping one short of the length because we are grabbing pairs
    for (let i = 0; i < x.length -1; i++) {
        // for each iteration take the product of the current element and the next element and push it to result
        result.push(x[i]*x[i+1])
    }
    
    // return the max value from result
    return Math.max(...result)
}

// my answer using array methods refactored
function adjacentElementsProduct(x) {
    // create a copy of the input array of the product of each element and since the final element will be the last element of the input array multiplied by null omit the NaN by slicing off the last value exclusively
    let result = x.map((e,i,x) => e*x[i+1]).slice(0,-1)
    // iterate through result using the spread fn looking for the max value and return it
    return Math.max(...result)
}

// my answer using array methods refactored
function adjacentElementsProduct(x) {
    return Math.max(...x.map((e,i,x) => e*x[i+1]).slice(0,-1))
}

// my answer using array methods refactored arrow fn implicit return
const adjacentElementsProduct = (x) => Math.max(...x.map((e,i,x) => e*x[i+1]).slice(0,-1))

console.log(adjacentElementsProduct([1, 2, 3])) // 6
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])) // 50
console.log(adjacentElementsProduct([1, 0, 1, 0, 1000])) // 0

// clever to go back a value so the first element becomes NaN then slice at 1 removing the NaN
function adjacentElementsProduct(array) {
    return Math.max(...array.map((n, i)=>n*array[i-1]).slice(1));
}

/*
// array.slice is being used here to essentially create an array with the length of the input array -1
// to get the 1st element value that we omit in the shallow array copy of .map() we are referencing the initial input array starting with the first index and multiplying by the next value making the product being the first element in the sliced array
// max refers to the current max value product found in the process
// cur is the current element of the sub-array being processed
// i is the index of the current element in the SUB-ARRAY!

The callback function calculates the product of the current element (array[i]) and the current element of the sub-array (cur). It then compares this product with the current max value and returns the greater value using the Math.max function. This step ensures that the max variable keeps track of the maximum product encountered during the reduction process.

-Infinity: (starting point)
This value is used as the initial value for the max variable in the reduce method. Setting it to -Infinity ensures that any positive product of adjacent elements will be greater than this initial value. Normally just adding values we are used to seeing 0 as the start point.

Now, let's apply the function to the given argument [1, 2, 3]:

array.slice(1) will result in [2, 3].
In the reduce process:
First iteration: max = -Infinity, cur = 2, i = 0. The product is 1 * 2 = 2, and Math.max(2, -Infinity) will return 2. So, max becomes 2.
Second iteration: max = 2, cur = 3, i = 1. The product is 2 * 3 = 6, and Math.max(6, 2) will return 6. So, max becomes 6.
The result of the reduce process will be 6, which is the maximum product of adjacent elements in the input array [1, 2, 3].

Example [1, 2, 3] Answer 6
array.slice(1) will result in [2, 3].
In the reduce process:
First iteration: max = -Infinity, cur = 2, i = 0. The product is 1 * 2 = 2, and Math.max(2, -Infinity) will return 2. So, max becomes 2.
Second iteration: max = 2, cur = 3, i = 1. The product is 2 * 3 = 6, and Math.max(6, 2) will return 6. So, max becomes 6.
The result of the reduce process will be 6, which is the maximum product of adjacent elements in the input array [1, 2, 3].
*/ 
const adjacentElementsProduct = (array) => array.slice(1).reduce(
    (max, cur, i) => Math.max(array[i] * cur, max), -Infinity
  );