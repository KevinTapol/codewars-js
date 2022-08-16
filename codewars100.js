// Parameters or Edge cases: if both inputs are the same then return "Draw"
// Return: a string "Player 1 won!" or "Player 2 won!" of who wins rock paper scissors
// Examples: "scissors", "paper" --> "Player 1 won!"
//           "scissors", "rock" --> "Player 2 won!"
//           "paper", "paper" --> "Draw!"
// Psuedo code:  create a function with 2 inputs representing the players
//              use if else to determine win statements and draw for player 1 
//              else return player 2 won


// my answer
const rps = (p1, p2) => {
    if(p1 == 'scissors' && p2 == 'paper'){
        return "Player 1 won!"
    } else if (p1 == 'paper' && p2 == 'rock'){
        return "Player 1 won!"
    } else if (p1 =='rock' && p2 == 'scissors'){
        return "Player 1 won!"
    } else if (p1 == p2){
        return "Draw!"
    } else {
        return "Player 2 won!"
    }
};

// best practices and most clever
// creating the object key value pair just before p1 and p2 comparision
const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
};

// using a ternary
const rps = (p1, p2) => {
    if(p1 === p2) {
        return 'Draw!'
    }; 
    return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}

// using object notation to compare
const rps = (p1, p2) => {
    var map = {
        'rock': 'scissors',
        'scissors': 'paper',
        'paper': 'rock'
    };
    
    if (p1 == p2) {
        return 'Draw!';
    } else {
        return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
    }
};

// the 1 liner
rps=(a,b)=>a==b?'Draw!':`Player ${/rp|ps|sr/.test(a[0]+b[0])?2:1} won!`;

// easier to read 1 liner and declaring the arrow fn
const rps = (p1, p2) => p1 === p2 ? `Draw!` : `Player ${/ps|rp|sr/.test(p1[0] + p2[0]) + 1} won!`;

// using array and array methods
function rps(p1, p2) {
    var choices = ['rock', 'paper', 'scissors'];
    var x = choices.indexOf(p1);
    var y = choices.indexOf(p2);
    
    if (x === y) return 'Draw!';
    if (x === 0 && y === 2) return 'Player 1 won!';
    if (x === 2 && y === 0) return 'Player 2 won!';
    if (x > y) return 'Player 1 won!'
    else return 'Player 2 won!';
}

// wow those preset conditionals in object notation
const RPS_LOOKUP = {
    rr: 0, rs: 1, rp: 2,
    sr: 2, ss: 0, sp: 1,
    pr: 1, ps: 2, pp: 0,
}

const rps = (p1, p2) => {
    const n = RPS_LOOKUP[p1[0] + p2[0]]
    return n ? `Player ${n} won!` : "Draw!"
}

// Anything with comments
// Makes the game extensible (in case we need lizards and spock later)
const hands = {
    "rock" : "paper",
    "scissors" : "rock",
    "paper" : "scissors"
}

  //use a rest param for the players,so I can use indexOf to "find" a winner, rather than logic-out a winner

const rps = (...players) => {
    let result = "Draw!"
    
    //don't do anything if there's a draw
    if (players[0] !== players[1]) {
        let winner;
        
    for (let hand in hands) {
          // winner logic: the "hand" was played in the players, and we **don't** have the thing that could beat it
        if (players.indexOf(hand) !== -1 && players.indexOf(hands[hand]) == -1) winner = players.indexOf(hand) 
    }
    
    result = `Player ${winner+1} won!`
    }
    return result;
};

// using switch case in place of if statements
const rps = (p1, p2) => {
    switch (p1 + p2) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            return "Player 1 won!";
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            return "Player 2 won!";
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
            return "Draw!";
    }
};