/*
Lottery Ticket


Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.

Parameters or Edge Cases:
    1st input will be a 2D array where each 1D array will contain 2 elements the first being a string and second a number
    2nd input will be an integer

Return:
    return the string 'Winner!' if the 1D pairs strings contain char codes that match the number occurs more than or equal to the 2nd input else 'Loser!'

Examples:
    [['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2 --> 'Loser!'
    [['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1 --> 'Winner!'
    [['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3 --> 'Loser!'

Pseudocode:
    declare a variable score and set it equal to 0
    iterate through each 1D array pair and check if each char from the string char code is equal to the number
        if yes then add 1 to score
    if score is greater than or equal to the 2nd input then return 'Winner!' else 'Loser!'

*/

// My Answer brute force nested for loops
function bingo(ticket, win){
    let score = 0
    for(let i = 0; i < ticket.length; i++){
        for(let j = 0; j < ticket[i][0].length; j++){
            if(ticket[i][0].charCodeAt(j) === ticket[i][1]){
                score += 1
            }
        }
    } return score >= win? 'Winner!' : 'Loser!'

}

// My Answer nested map failing edge cases on Attempt
function bingo(ticket, win){
    let score = 0
    ticket.map((e, i) => e[0].split('').map((el, j) => {
        if(el.charCodeAt(0) === e[1]){
            score += 1
        }
    }))
     return score >= win? 'Winner!' : 'Loser!'

}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)) //