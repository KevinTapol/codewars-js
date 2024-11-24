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

// My Answer brute force for loop
function scoreTest(str, right, omit, wrong){
    let sum = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === 0){
            sum += right
        }
        if(str[i] === 1){
            sum += omit
        }
        if(str[i] === 2){
            sum -= wrong
        }
    }return sum
}

// My Answer brute force for loop refactored
function scoreTest(str, right, omit, wrong){
    let sum = 0
    for(let i = 0; i < str.length; i++){
        str[i] === 0 ? sum += right : str[i] === 1 ? sum += omit : sum -= wrong
    }return sum
}

function scoreTest(str, right, omit, wrong){
    return str.map(e => e === 0 ? right : e === 1 ? omit : -wrong).reduce((acc, c)=> acc + c)
}

// My Answer array methods refactored one liner arrow fn
const scoreTest = (str, right, omit, wrong) => str.map(e => e === 0 ? right : e === 1 ? omit : -wrong).reduce((acc, c)=> acc + c)

console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1)) // 9
console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)) // 3

// Best Practices
// declaring an array of the inputs and referencing in a .reduce() without using an arrow fn
function scoreTest(str, right, omit, wrong){
    var grades = [right, omit, -wrong];
    return str.reduce(function(sum, score) {
        return sum + grades[score];
    }, 0);
}

// Most Clever
// using spread operator to create an array of the input vals of right omit and wrong inside of .reduce()
const scoreTest = (str, ...vals) => str.reduce((a, v) => a + vals[v] * [1,1,-1][v], 0);

// using a ternary inside of a .reduce()
const scoreTest = (arr, right, omit, wrong) => arr.reduce((acc, c) => acc + (c === 0 ? right : c === 1 ? omit : -wrong), 0)

// very clever use of truthy falsy inside of a ternary
function scoreTest(str, right, omit, wrong) {
    return str.reduce((n, x) => n + (x > 1 ? -wrong : x ? omit : right), 0)
}