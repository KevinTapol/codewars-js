/*
Array Array Array

Parameters or Edge Cases:
    inputs will be a single array of 2 elements
    the elements can be either or both a string and/or number

Return:
    return a matrix or 2D array with the input as a sub array elements repeated based on the following conditions
    if both elements are number the length of the 2D array will be the sum of both numbers
    if one element is a number the length of the array will be that number
    if neither is a number the return an empty 1D array []

Examples:
    [9, 3] --> [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
    ['a', 3] --> [['a', 3], ['a', 3], ['a', 3]]  
    [6, 'c'] --> [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']] 
    ['a', 'b'] --> 'Void!'  
    ["a", 0] --> [] 

Pseudocode:
    check the typeof() the input array elements of both index 0 and index 1
    if both elements are typeof() number then add them up and create an array with the length of the sum where every element is the input array
    if one element typeof() is a number then create an array with the length of that number where every element is the input array
    if neither elements are numbers then return the string 'Void!'
*/

// My Answer
function explode(x){
    if(typeof(x[0]) === 'number' && typeof(x[1]) === 'number'){
        return Array.from({length:(x[0] + x[1])}, (e) => e = x)
    }if(typeof(x[0]) === 'number' && typeof(x[1]) != 'number'){
        return Array.from({length:x[0]}, (e) => e = x)
    }if(typeof(x[0]) != 'number' && typeof(x[1]) === 'number'){
        return Array.from({length:x[1]}, (e) => e = x)
    } else {
        return 'Void!'
    }
}

// console.log(explode([9, 3])) // [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
// console.log(explode(['a', 3])) // [['a', 3], ['a', 3], ['a', 3]]
// console.log(explode(['a', 'b'])) // 'Void!'
// console.log(explode(["a", 0])) // []

/*
add both elements then use regex to remove all str that are not [0-9] and convert the result into a number
create an array with the length of the result with the element(s) equal to the input 
*/
function explode(x){
    let y = x.sort((a, b) => String(b).localeCompare(String(a)))
    console.log(x)
    console.log(typeof(x[0]), typeof(x[1]))
    if(typeof(x[1]) === 'string' && typeof(x[0] === 'string')){
        return 'Void!'
    }
    
    
    let str = (x[0] + x[1]).toString()
    let n = Number(str.replace(/[^0-9]/g, ''))
    return Array.from({length:n}, (e) => e = x)
    // return Array.from({length: Number((x[0] + x[1]).toString().replace(/[^0-9]/g, ''))}, (e) => e = x)
    

}

// console.log(explode([9, 3])) // [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
// console.log(explode(['a', 3])) // [['a', 3], ['a', 3], ['a', 3]]
// console.log(explode(['a', 'b'])) // 'Void!'
// console.log(explode(["a", 0])) // []
console.log(explode([ 6, 'c' ])) // [ [ 6, 'c' ], [ 6, 'c' ], [ 6, 'c' ], [ 6, 'c' ], [ 6, 'c' ], [ 6, 'c' ] ]

// let str = '9n'
// let n = Number(str.replace(/[^0-9]/g, ''))
// console.log(typeof(n)) 
// let x = ['a', 3]
// console.log(Array.from({length:n}, (e) => e = x ))

// console.log([ 6, 'c' ].sort((a, b) => String(b).localeCompare(String(a))))