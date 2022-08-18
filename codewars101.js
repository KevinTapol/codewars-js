// Parameters or Edge cases: there are 10 matches in the championship
//                           0 <= x <= 4
//                           0 <= y <= 4
// Return: total points earned
// Examples: ["3:1", "2:2", "0:1", ...]
//           if x > y: 3 points
//           if x < y: 0 point
//           if x = y: 1 point
// Psuedo code:  declare an empty array
//               loop through the input array and grab the values at index 0 and 2
//               if the element at index 0 is greater than the element at index 2 .push() 3 to the declared array
//               else if less than push() 0 to the array
//               esle if equal push() 1 to the array


// my answer
function points(games) {
    const total = []
    for (i = 0; i < 10 ; i++) {
        let score = games[i]
        let x = score.charAt(0)
        let y = score.charAt(2)
        if (x > y) {
            total.push(3)
        } else if (x < y) {
            total.push(0)
        } else if (x = y) {
            total.push(1)
        }
    } 
    return total.reduce((acc, c) => acc + c)
}

// best practices and most clever
// arrow fn .reduce(accumulator, currentValue) into a ternary adding up values where value index 0 greater than index 2 return 3 else if equal using falsy return 1 else return 0
const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }

// full codewars 1 liner
// actually easy to read and smart separation of the array leading into .reduce() with a nested ternary
const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)

// very easy to follow in any language and for that reason my favorite
// accounting for only wins and ties to add
function points(games) {
    let total = 0;
    games.map(game => {
        if (game[0] === game[2]) {
            total += 1;
        } else if (game[0] > game[2]) {
            total += 3;
        }
    });
    return total;
}

// another easy to read with great comments
function points(games) {
    // totalPoints will store the accumulated points
    let totalPoints = 0;
      // loop through the games array to get the scores
    for(i=0; i<games.length; i++) {
       // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
        let xScore = Number(games[i].charAt(0)); 
        let yScore = Number(games[i].charAt(2));
        
        // Add points depending on the values of xScore compared to yScore
        if (xScore > yScore) { totalPoints += 3; }
        if (xScore < yScore) { totalPoints += 0; }
        if (xScore === yScore) { totalPoints += 1; }
    }return totalPoints;
}

//very similar to my answer but declaring running total out of the for loop and using .reduce() on it
function points(games) {
    //keep track of running total 
    let score = (accumulator, currentValue) => accumulator + currentValue;;  
    const total = [];
    //record points per game
    for (i = 0; i < 10 ; i++) {
        let gameScore = games[i];;
        let x = gameScore.charAt(0);
        let y = gameScore.charAt(2);
        if (x > y) {
            total.push(3);
        } else if (x < y) {
            total.push(0);
        } else if (x = y) {
            total.push(1);
        }
    } 
    return total.reduce(score);
}

// arrow fn using nested .map() with Number object conversion then .map into ternary followed by .reduce to add up the score
const points = games => games
  .map(str => str.split(':').map(Number))      // parse
  .map(([x, y]) => x > y ? 3 : x < y ? 0 : 1)  // determine points
  .reduce((sum, points) => sum + points, 0);   // sum points

// same idea but using a normal fn .map() the numbers .filter() win and tie values then .reduce() to add them up
function points(games) {
    return games.map(x => x[0] - x[2]).filter(x => x >= 0).reduce((a, b) => a + (b > 0 ? 3 : 1), 0);
}

// using return .reduce() and throwing the entire process in the reduce method
function points(games) {
    return games.reduce((current, element) => {
        let arraySplit = element.split(':');
        return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
    }, 0);
}

// interesting using + to convert from string to number
function points(a) {
    return a.map(x => x.split(":").map(y => +y)).reduce((x, [y, z]) => x + (y > z ? 3 : y < z ? 0 : 1), 0);
}