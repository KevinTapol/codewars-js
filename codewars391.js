/*
Equal Sides Of An Array

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

If there is no index that would make this happen, return -1.

For example:
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most languages the index of an array starts at 0.

Input
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note
If you are given an array with multiple answers, return the lowest correct index.

Parameters or Edge Cases:
    inputs will be an array of length 0 < arr < 1000
    the elements in the array can be any integer positive or negative

Return:
    return the lowest index where the sum of the elements to the left of the current element is equal to the sum of the right else return -1

Examples:
    [1,2,3,4,3,2,1] --> 3 
    [1,100,50,-51,1,1] --> 1
    [1,2,3,4,5,6] --> -1
    [20,10,30,10,10,15,35] --> 3 

Pseudocode:
    starting at index 1 iterate through the input array comparing the sum of the values of all previous elements to the sum of all the following elements using .slice() and .reduce()
    in the iteration, if an element is found where the sums are equal then return the index of the element 
    outside of the iteration return -1 meaning no such index was found

    *current problem Reduce of empty array with no initial value*
    if at index 0 or index -1 (last index) when remaining elements equal 0
    maybe use top down if statements for first and last index then use for loop

    still have a problem with .slice() for last index with .reduce() maybe  && i != (arr.length -1)
*/

// My Answer
function findEvenIndex(arr){
    if(arr.slice(0,-1).reduce((acc, c) => acc + c) === 0){
        return arr.length -1
    }
    if(arr.slice(1).reduce((acc, c) => acc + c) === 0){
        return 0
    }
  for(let i = 1; i < arr.length -1; i++){
    if(arr.slice(0, i).reduce((acc, c) => acc + c, 0) === arr.slice(i + 1, arr.length).reduce((acc, c) => acc + c, 0)){
        return i
    }
  }return -1
}


function findEvenIndex(arr){
    if(arr.slice(0,-1).reduce((acc, c) => acc + c) === 0){
        return arr.length -1
    }
    if(arr.slice(1).reduce((acc, c) => acc + c) === 0){
        return 0
    }
  for(let i = 1; i < arr.length -1; i++){ // maybe to break at i = last index
    if(arr.slice(0, i).reduce((acc, c) => acc + c, 0) === arr.slice(i + 1, arr.length).reduce((acc, c) => acc + c, 0)){
        return i
    }
  }return -1
}


// failing at .reduce of an empty array at arr.slice(i + 1, arr.length) when at last index maybe conditional check to make sure .slice() is not empty
function findEvenIndex(arr){
    if(arr.slice(0,-1).reduce((acc, c) => acc + c) === 0){
        return arr.length -1
    }
    if(arr.slice(1).reduce((acc, c) => acc + c) === 0){
        return 0
    }
  for(let i = 1; i < arr.length -1; i++){
    let lSum = arr.slice(0, i)
    let rSum = arr.slice(i + 1, arr.length)
    if(!rSum){
        rSum = [0]
    }
    if(!lSum){
        lSum = [0]
    }
    if(lSum.reduce((acc, c) => acc + c, 0) === rSum.reduce((acc, c) => acc + c, 0)){
        return i
    }
  }return -1
}

// concat [0] to fix .reduce on empty array error but failing on values of 0 
// fails instead of .reduce() do a += with the elements for loop
function findEvenIndex(arr){
    if(arr.slice(1).concat([0]).reduce((acc, c) => acc + c) === 0){
        return 0
    }
    if(arr.slice(0,-1).concat([0]).reduce((acc, c) => acc + c) === 0){
        return arr.length -1
    }

  for(let i = 1; i < arr.length -1; i++){
    let lSum = arr.slice(0, i).concat([0]).reduce((acc, c) => acc + c, 0)
    let rSum = arr.slice(i + 1, arr.length).concat([0]).reduce((acc, c) => acc + c, 0)

    if(lSum === rSum){
        return i
    }
  }return -1
}


function findEvenIndex(arr){
    let lSum = 0
    let rSum = 0
    console.log(arr)
    for(let i = 0; i < arr.length + 1; i++){
        let lArr = arr.slice(0, i)
        let rArr = arr.slice(i, arr.length)
        
        console.log(lArr)
        console.log(rArr)

        for(let j = 0; j < lArr.length; j++){
            lSum += lArr[j]
        }
        for(let k = 0; k < rArr.length; k++ ){
            rSum += rArr[k]
        }
        if(lSum === rSum){
            return i
        }
    }

    return -1
} 


console.log(findEvenIndex([1,2,3,4,3,2,1])) // 3
// console.log(findEvenIndex([1,2,3,4,5,6])) // -1
// console.log(findEvenIndex([ 1, 2, 3, 4, 3, 2, 1 ])) // 3
// console.log(findEvenIndex([ 1, 100, 50, -51, 1, 1 ])) // 1
// console.log(findEvenIndex([ 20, 10, 30, 10, 10, 15, 35 ])) // 3

// console.log([1,2,3,4,3,2,1].slice(-1, -1).reduce((acc, c) => acc + c) || 0)
// console.log([0].reduce((acc, c) => acc + c))
// [-1,1,0,-1,1,0,-1,1,0,0] // 2 not 9
