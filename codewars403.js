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

// Best Practices and Most Clever
// very clever to create a filtered version of only elements that char codes does match and compare the new array length to win scenario
function bingo(ticket, win){
    if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
    {
      return "Winner!";
    }
    return "Loser!";
}

// clever .forEach() with a .includes(String.fromCharCode())
function bingo(ticket, win){
    var count = 0;
    
    ticket.forEach(game => {
      if (game[0].includes(String.fromCharCode(game[1]))) {
        count++;
      }
    });
    
    return (count >= win) ? "Winner!" : "Loser!";
}

// very similar to my for loop but using a different conditional with a break
function bingo(ticket, win){
    let miniWins = 0
    for (let i = 0; i < ticket.length; i++) {
      for( let j = 0; j < ticket[i][0].length; j++) {
        if (ticket[i][0][j].charCodeAt() === ticket[i][1]) {
            miniWins++
            break
          }
      }
    }
    if (miniWins >= win) return 'Winner!';
    return 'Loser!'
}

// using a separate function to check if the string contains matching char codes, using a .reduce() to sum the wins and a ternary return
const miniwin = pair => 
    pair[0].indexOf(String.fromCharCode(pair[1])) !== -1
  
  const bingo = (ticket, win) =>
    ticket.map(miniwin).reduce((a, b) => a + b) >= win
    ? 'Winner!'
    : 'Loser!'

//  using a single .reduce() with a ternary
const bingo = (ticket, win) => ticket.reduce((pre, [str, num]) => pre + [...str].some(val => val.charCodeAt() === num), 0) < win ? `Loser!` : `Winner!`;

// using .find()
function bingo(ticket, win){
    let count=0;
     for(let i in ticket){
       let word = ticket[i][0];
       let mini = ticket[i][1];
       count+=[...word].find(e=>e.charCodeAt()==mini)?1:0;  
     }
     
     if(count>=win){
       return "Winner!"
     }
     
     return "Loser!"
   
   }