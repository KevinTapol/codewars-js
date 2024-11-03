/*
Dominant array elements
An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included. All numbers will be greater than 0.

Parameters or Edge Cases:
    inputs will be an array of elements of numbers greater than 0

Return:
    return an array of elements from the input array where each element is greater than the next element in the array

Examples:
    [1,21,4,7,5] --> [21,7,5]
    [5,4,3,2,1] --> [5,4,3,2,1]

    [[16,17,14,3,14,5,2], [17,14,5,2]],
    [[92,52,93,31,89,87,77,105], [105]],
    [[75,47,42,56,13,55], [75,56,55]],
    [[67,54,27,85,66,88,31,24,49], [88,49]],
    [[76,17,25,36,29], [76,36,29]],
    [[104,18,37,9,36,47,28], [104,47,28]],

Pseudocode:
    find the index of the highest value of the input array
    slice the array to include the highest value and the final element of the input array

    declare an empty array result
    iterate through the sliced array 
        declare a local sliced array named lArr starting from the next index of the current element to the end of the sliced array
        if the current element is greater than the Max value of the locally sliced array lArr push the current element to result
    return the array result
    *NOTE* Since I am comparing the current value to next value, we must stop short of the last value because there is no value next to the last value to compare to meaning the last value of the input element will always be pushed to the array result
    
*/

// My Answer
function solve(arr) {
    const max = Math.max(...arr)
    const iMax = arr.indexOf(max)
    const sArr = arr.slice(iMax, arr.length)
    const result = []
    
    for(let i = 0; i < sArr.length; i++){
        const lArr = sArr.slice(i+1, sArr.length)
        const lMax = Math.max(...lArr)
        if(sArr[i] > lMax){
            result.push(sArr[i])
        }
    } return result
}


// My Answer refactored
function solve(arr) {
    const result = []
    const sArr = arr.slice(arr.indexOf(Math.max(...arr)), arr.length)
    
    for(let i = 0; i < sArr.length; i++){
        if(sArr[i] > Math.max(...sArr.slice(i+1, sArr.length))){
            result.push(sArr[i])
        }
    } return result
}

// My Answer refactored default sliced array in arguments
function solve(arr, sArr = arr.slice(arr.indexOf(Math.max(...arr)), arr.length)) {
    return sArr.filter((e,i) => sArr[i] > Math.max(...sArr.slice(i+1, sArr.length)))
}

// My Answer refactored one liner arrow fn
const solve = (arr, sArr = arr.slice(arr.indexOf(Math.max(...arr)), arr.length)) => sArr.filter((e,i) => sArr[i] > Math.max(...sArr.slice(i+1, sArr.length)))


console.log(solve([1,21,4,7,5])) // [21,7,5]
console.log(solve([ 67, 54, 85, 88, 31, 49 ])) // [ 88, 49 ]

// Best Practices and Most Clever
// similar to my answer except using .slice().every() instead of creating a separate sliced array in default arguments
function solve(arr){
    return arr.filter((e,i)=> arr.slice(i+1).every(x => x < e));
};

// Very clever use of .filter() and Math.max(...slicedArray)
function solve(arr){
    return arr.filter((n, i)=>n>Math.max(...arr.slice(i+1)));
};

// unique and clever use of .reduceRight()
const solve = arr => {
    const res = []
  
    arr.reduceRight((acc, val) => (val > acc ? (res.unshift(val), val) : acc), 0)
  
    return res
}