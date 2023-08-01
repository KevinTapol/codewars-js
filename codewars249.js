// Alphabet war
/*
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/ 

// Parameters or Edge Cases:
/*
    inputs will be a string of lowercase letters
    can inputs be empty or null?
*/ 

// Return:
/*
    if the total integer count of occurrences of 'w', 'p', 'b' and 's' is higher than 'm', 'q', 'd' and 'z' return "Left side wins!"
    if lower then return "Right side wins!"
    else return "Let's fight again!"
*/ 

// Examples:
/*
    "z" => "Right side wins!" 
    "zdqmwpbs" => "Let's fight again!" 
    "zzzzs" => "Right side wins!" 
    "wwwwww" => "Left side wins!" 
*/ 

// Pseudocode:
/*
    // declare an integer count for leftInt and rightInt both set at 0
    // declare objects leftObj and rightObj of the key strings value integer pair matches
    // iterate through the string and if the current element exists in the object left add the pair value of the element to leftInt
    // if leftInt is greater than rightInt return "Left side wins!"
    // if rightInt is greater than leftInt return "Right side wins!"
    // else return "Let's fight again!"
*/ 

// my answer
function alphabetWar(fight){
    // declare an integer count for leftInt and rightInt both set at 0
    let leftInt = 0
    let rightInt = 0
    // declare objects leftObj and rightObj of the key strings value integer pair matches
    const leftObj = {'w': 4, 'p': 3, 'b': 2, 's': 1}
    const leftStr = Object.keys(leftObj).join('')
    const rightObj = {'m': 4, 'q': 3, 'd': 2, 'z': 1}
    const rightStr = Object.keys(rightObj)
    // iterate through the string and if the current element exists in the object left add the pair value of the element to leftInt
    for (let i = 0; i < fight.length; i++){
        
        if (leftStr.includes(fight[i])){
            leftInt += leftObj[fight[i]]
        }
        if (rightStr.includes(fight[i])){
            rightInt += rightObj[fight[i]]  
        }
    }
    // if leftInt is greater than rightInt return "Left side wins!"
    if (leftInt > rightInt){
        return "Left side wins!"
    }
    // if rightInt is greater than leftInt return "Right side wins!"
    if (rightInt > leftInt){
        return "Right side wins!"
    }
    // else return "Let's fight again!"
    else {
        return "Let's fight again!"
    }
}

// my answer refactored 
function alphabetWar(fight){
    let leftInt = 0
    let rightInt = 0
    const leftObj = {'w': 4, 'p': 3, 'b': 2, 's': 1}
    const leftStr = Object.keys(leftObj).join('')
    const rightObj = {'m': 4, 'q': 3, 'd': 2, 'z': 1}
    const rightStr = Object.keys(rightObj)

    for (let i = 0; i < fight.length; i++){
        
        leftStr.includes(fight[i]) ? leftInt += leftObj[fight[i]] : rightStr.includes(fight[i]) ? rightInt += rightObj[fight[i]] : ''

    }
    return leftInt > rightInt ? "Left side wins!" : rightInt > leftInt ? "Right side wins!" : "Let's fight again!"
}

console.log(alphabetWar("z")) // "Right side wins!"
console.log(alphabetWar("zdqmwpbs")) // "Let's fight again!"
console.log(alphabetWar("zzzzs")) // "Right side wins!" 
console.log(alphabetWar("wwwwww")) // "Left side wins!"

// best practices
// Here they created an object named map where negative values are left and positive values are right. This means that if the overall score is negative then left wins. If the overall score is positive right wins. Else if 0 then it's a draw. 
// This way you iterate through the input string, convert it into an array, use .reduce to add up the value of the paired key or 0.
function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}

// one liner calling array index for win loss draw
const alphabetWar = (fight) => ["Right side wins!","Let's fight again!","Left side wins!"][ Math.sign([...fight].reduce((r, cv) => r + 'sbpw'.indexOf(cv) - 'zdqm'.indexOf(cv),0)) + 1 ]

// here they are using for element in fight. I didn't know 
function alphabetWar(fight){
    var right = {}
    right['m'] = 4
    right['q'] = 3
    right['d'] = 2
    right['z'] = 1
    var left = {}
    left['w'] = 4
    left['p'] = 3
    left['b'] = 2
    left['s'] = 1
  
    var sumRight = 0
    var sumLeft = 0
  
    for(i in fight){
      if(right[fight[i]]){sumRight += right[fight[i]]}
      if(left[fight[i]]){sumLeft += left[fight[i]]}
    }
    if(sumRight>sumLeft){return 'Right side wins!'}
    if(sumRight<sumLeft){return 'Left side wins!'}
    return "Let's fight again!";
}

// brute force for loop with nested ternary conditionals
function alphabetWar(fight) {
    let left = 0;
    let right = 0;

    for (i = 0; i < fight.length; i++) {
        (fight[i] === 'w')
        ? left += 4
        : (fight[i] === 'p')
        ? left += 3
        : (fight[i] === 'b')
        ? left += 2
        : (fight[i] === 's')
        ? left += 1
        : (fight[i] === 'm')
        ? right += 4
        : (fight[i] === 'q')
        ? right += 3
        : (fight[i] === 'd')
        ? right += 2
        : (fight[i] === 'z')
        ? right += 1
        : left += 0;
    }
    return (left > right) 
      ? `Left side wins!`
      : (left < right)
      ? `Right side wins!`
      : `Let's fight again!`

}

// brute force switch case
function alphabetWar(fight) {
    let score = 0;
    for (const letter of fight) {
        switch (letter) {
            case 'w': score -= 4; break;
            case 'p': score -= 3; break;
            case 'b': score -= 2; break;
            case 's': score -= 1; break;
            case 'm': score += 4; break;
            case 'q': score += 3; break;
            case 'd': score += 2; break;
            case 'z': score += 1; break;
        }
    }

    return score < 0 ? "Left side wins!" : score > 0 ? "Right side wins!" : "Let's fight again!";
}

// clever to use if not undefined then call object call
function alphabetWar(fight)
{
  thisIsWar = {'w': 4, 'p': 3, 'b': 2, 's': 1, 'm': -4, 'q': -3, 'd': -2, 'z': -1};
  result = 0;
  fight.split("").map(function(l) { result += thisIsWar[l] !== undefined ? thisIsWar[l] : 0});
  return result < 0 ? "Right side wins!" : result > 0 ? "Left side wins!" : "Let's fight again!"
}