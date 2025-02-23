/*
Pair Zeros
For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.

Examples
input: [0, 1, 0, 2]
paired: ^-----^
    -> [0, 1,   2]
  kept: ^

input: [0, 1, 0, 0]
paired: ^-----^
    -> [0, 1,    0]
  kept: ^        ^

input: [1, 0, 7, 0, 1]
paired:    ^-----^
    -> [1, 0, 7,    1]
  kept:    ^

input: [0, 1, 7, 0, 2, 2, 0, 0, 1, 0]
paired: ^--------^        ^--^
    -> [0, 1, 7,    2, 2, 0,    1, 0]
  kept: ^                 ^        ^
Notes
Pairing happens from left to right. For each pairing, the second 0 will always be paired towards the first ( right to left )
0s generated by pairing can NOT be paired again
( void where not applicable: ) Don't modify the input array or you may fail to pass the tests

Parameters or Edge Cases:
    inputs will be an array of integers

Return:
    return the input array of integers removing every 2nd occurrence of the integer 0

Examples:
  [1]),[1])
  [0,0] -> [0]'
  [0,0]),[0])
  [0,0,0] -> [0,0]'
  [0,0,0]),[0,0])
  [1,0,1,0,2,0,0,3,0] -> [1,0,1,2,0,3,0]'
  [1,0,1,0,2,0,0,3,0]),[1,0,1,2,0,3,0])

Pseudocode:
    declare a variable representing the count of integer 0's name zero and set it equal to 0
    declare an empty array named result
    iterate through the input array
    if the current element is not 0 then push it to result
    if the current element is the integer 0 then add 1 to count
    if count is not 2 then push the current element 0 to result else do nothing
    return result


*/

// My Answer
function pairZeros(arr) {
    let count = 0
    let result = []
    for(let e of arr){
        if(e != 0){
            result.push(e)
        }if(e === 0){
            count += 1
            if(e === 0 && count != 2){
                result.push(e)
            }
        }
    } return result
}

console.log(pairZeros([0,0])) // [0]