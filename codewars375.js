/*
What's my golf score?

I have the par value for each hole on a golf course and my stroke score on each hole. I have them stored as strings, because I wrote them down on a sheet of paper. Right now, I'm using those strings to calculate my golf score by hand: take the difference between my actual score and the par of the hole, and add up the results for all 18 holes.

For example:

If I took 7 shots on a hole where the par was 5, my score would be: 7 - 5 = 2
If I got a hole-in-one where the par was 4, my score would be: 1 - 4 = -3.
Doing all this math by hand is really hard! Can you help make my life easier?

Task Overview
Complete the function which accepts two strings and calculates the golf score of a game. Both strings will be of length 18, and each character in the string will be a number between 1 and 9 inclusive.

Parameters or Edge Cases:
    both inputs will be a string of 18 chars of integers representing a course and how many swings on that course
    1st input is the par list for the golf course
    2nd input is the players golf swings per hole

Return:
    return the final score sum of each hole where for each hole the player score is subtracted by the par list 

Examples:
    '443454444344544443', '353445334534445344' --> -1
    '123456123456123456', '123456123456123456' --> 0

Pseudocode:
    convert the 1st input parList into an array of integers and name it par
    do the same with 2nd input and name it player
    declare an empty array named score
    iterate the length of either input array subtracting the current index value of player by par and push it to score
    add up all the values of the array score and return the result
*/



// My Answer
function golfScoreCalculator(parList, scoreList){
    const convert = n => n.split('').map(e => Number(e))
    let course = convert(parList)
    let player = convert(scoreList)
    let score = Array.from({length:18}, (e, i) => e = player[i] - course[i])

    return score.reduce((acc, c) => acc + c, 0)
}

// My Answer refactored setting the .reduce() default value to integer 0 forcing each result to be a number instead of a string
function golfScoreCalculator(course, player){
    return Array.from({length:18}, (e, i) => e = player[i] - course[i]).reduce((acc, c) => acc + c, 0)
}

// My Answer refactored one liner arrow fn
const golfScoreCalculator = (course, player) => Array.from({length:18}, (e, i) => e = player[i] - course[i]).reduce((acc, c) => acc + c, 0)

console.log(golfScoreCalculator('443454444344544443', '353445334534445344')) // -1
console.log(golfScoreCalculator('123456123456123456', '123456123456123456')) // 0

// Best Practices and Most Clever
// using [...str] to create an array of strings instead of Array.from()
const golfScoreCalculator = (parList, scoreList) => [...scoreList].reduce((result, score, index) => result += score - parList[index], 0)

// Brute force for loop
function golfScoreCalculator(parList, scoreList){
    result = 0;
    for (let i = 0; i < parList.length; ++i) {
        result += scoreList[i] - parList[i];
    }
    return result;
}

// clever creating a fn to convert and add up the individual strings then another to compare the sums
const golfScoreCalculator = (p, s) => sum(s) - sum(p);
const sum = s => [...s].map(Number).reduce((a,c)=>a+c);

// .forEach() instead of .reduce() 
function golfScoreCalculator(parList, scoreList){
    var par = 0; parList.split('').forEach(e => par += +e)
    var score = 0; scoreList.split('').forEach(e => score += +e)
    return score - par
}

// Array.from() but not using ({length:}, fn)
function golfScoreCalculator(p, s){
    return Array
      .from(p,Number)
      .map((par,i) => +s[i] - par )
      .reduce((s,v)=>s+v,0)
}