/*
Scoring Tests


Parameters or Edge Cases:
    there will be 4 inputs
    1st input will be an array of integers of 0, 1 and 2
    all input arrays will be valid with a length of at least 3
    2nd input will be an integer representing the current element to be multiplied by correct answer
    3rd input will be an integer representing the current element to be multiplied by omitted answer and may be NEGATIVE
    4th input will be an integer representing the current element to be multiplied by wrong answer

Return:
    return an integer representing the final score of the test submitted consisting of the sum of input arrays multiplied by the each element correct, omitted or wrong answer

Examples:

[0, 0, 0, 0, 2, 1, 0], 2, 0, 1  -->  9
because:

5 correct answers: 5*2 = 10
1 omitted answer: 1*0 = 0
1 wrong answer: 1*1 = 1
which is: 10 + 0 - 1 = 9

#2:

[0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)  -->  3
because: 4*3 + 3*-1 - 3*2 = 3

Pseudocode:
    declare a variable sum and set it equal to 0
    iterate through the input array
        if the current element is 0 then correct then add the value of the 2nd input right to sum
        if 1 then then add the value of the 3rd input omit to sum
        if 2  then subtract the value of the 4th input wrong from sum
    return sum

*/

// My Answer
// function scoreTest(str, right, omit, wrong){
//     let sum = 0
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === 0){
//             sum += right
//         }
//         if(str[i] === 1){
//             sum += omit
//         }
//         if(str[i] === 2){
//             sum -= wrong
//         }
//     }return sum
// }

// My Answer brute force for loop refactored
function scoreTest(str, right, omit, wrong){
    let sum = 0
    for(let i = 0; i < str.length; i++){
        str[i] === 0 ? sum += right : str[i] === 1 ? sum += omit : sum -= wrong
    }return sum
}

// My Answer refactored
// const scoreTest = (str, right, omit, wrong) => str.reduce((acc, c) => c === 0 ? acc + right : c === 1 ? acc + omit : acc - wrong)

console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1)) // 9
console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)) // 3