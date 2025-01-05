/*
Extra Perfect Numbers (Special Numbers Series #7)

Parameters or Edge Cases:
    inputs will be integers

Return:
    return an array from 1 to the input integer of odd integers

Examples:
    3 --> [1,3]
    5 --> [1,3,5]
    7 --> [1,3,5,7]
    28 --> [1,3,5,7,9,11,13,15,17,19,21,23,25,27]
    39 --> [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]

Pseudocode:
    declare an empty array named answer
    iterate from 1 to the input integer and if the current element is odd then push it to answer
    return the array answer

*/

// My Answer Brute Force for loop
function extraPerfect(n){
    let answer = []
    for(let i = 1; i <= n; i++){
        if(i % 2 != 0){
            answer.push(i)
        }
    }return answer
}

console.log(extraPerfect(7)) // [1,3,5,7]