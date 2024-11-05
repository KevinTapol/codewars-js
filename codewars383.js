/*
Double Trouble
Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.

Parameters or Edge Cases:
    first input will be an array of integers
    second input will be a single integer
    unknown if array can be empty or integers will be greater than 0

Return:
    return an array copy of the input array removing the next element if the current element and the next element sum is equal to the second input 

Examples:
    [1, 3, 5, 6, 7, 4, 3],7 --> [1, 3, 5, 6, 7, 4]
    [4, 1, 1, 1, 4],2 --> [4, 1, 4] 
    [2, 2, 2, 2, 2, 2], 4 --> [2] 
    [2, 6, 2], 8 --> [2, 2] 

Pseudocode:
    *NOTE* found hidden description amongst discussion  Output array must have no pairs of consecutive elements which sum equal to t
    This means we have to constantly reevaluate the input array comparing the current element to the next element after the next element is removed.
    declare an empty array result
    iterate through the input array
        if the sum of the current element and the next element is equal to the second input then push the current input to result and skip the next value by incrementing the step by 1
        else push the current element to result
    return the array result

    create an array copy of the input array removing the next element if the current element and the next element sum is equal to the second input
    return the new array


    if the current element and the next element sum is equal to t then remove the next element 
    maybe use the current element of the result array to compare sum? that way i can step through x array and compare result element
*/

//  My Answer
// function trouble(x, t){
//     // let result = x.map((e, i) => e + x[i + 1] != t ? e : x[i + 1] = '')
//     let result = []
//     for(let i = 0; i < x.length; i++){
//         if(x[i] + x[i + 1] === t){
//             result.push(x[i])
//             x.pop([i+1])
//             // i++
//         } else {
//             result.push(x[i])
//         }
//     }
//     return result
// }

function trouble(x, t){
    // let result = x.map((e, i) => e + x[i + 1] != t ? e : x[i + 1] = '')
    let result = []
    for(let i = 0; i < x.length; i++){
        for(let j = i+1; j < x.length -1; j++){
            if(x[i] + x[j] === t){
                x.pop(x[i+1])
            }
        }
    }
    return x
}

console.log(trouble([1, 3, 5, 6, 7, 4, 3],7)) // [1, 3, 5, 6, 7, 4]
console.log(trouble([4, 1, 1, 1, 4],2)) // [4, 1, 4]
// console.log(trouble([2, 2, 2, 2, 2, 2], 4)) // [2]