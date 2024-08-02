/*
The Office IV - Find a Meeting Room
Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).
    'X' --> busy
    'O' --> empty
Parameters or Edge Cases:
    inputs will be an array of chars 'X' or 'O' 

Return:
    If all rooms are busy, return "None available!" else return the index of the first 'O' of the input array

Examples:
    ['X', 'O', 'X'] --> 1
    ['O','X','X','X','X'] --> 0
    ['X','X','X','X','X'] --> 'None available!'

Pseudocode:
    iterate through the input array 
    if the array includes the char 'O' return the index of the first occurrence else return 'None available!'
*/

// My Answer
function meeting(x){
    return x.includes('O') ? x.findIndex((e) => e === 'O') : 'None available!'
}

// My Answer one liner arrow fn
const meeting = x => x.includes('O') ? x.findIndex((e) => e === 'O') : 'None available!'

console.log(meeting(['X', 'O', 'X'])) // 1
console.log(meeting(['O','X','X','X','X'])) // 0
console.log(meeting(['X','X','X','X','X'])) // 'None available!'

// Best Practices
// Similar to my answer but reversing the ternary conditionals with a declared variable for index instead of using .includes()
function meeting(x){
    var idx = x.indexOf("O");
    return idx === -1 ? "None available!": idx
}

// Most Clever
// same as my one liner but reverse ternary conditionals
const meeting = x => !x.includes(`O`) ? `None available!` : x.indexOf(`O`);

// converting the input into a single string instead of an array of chars with the same logic
meeting = x => (x = x.join('').indexOf('O')) > -1 ? x : 'None available!'

// Bread and butter brute force for loop returning the first occurrence where the element is equal to 'O'
function meeting(x){
    for (var i=0; i<x.length; ++i)
      if (x[i]=='O')
        return i;
    return 'None available!';
}