// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

// Parameters or Edge cases: the input will always be valid
// Return: the sum of three inputs
// Examples: 5, 10, 2  -->  17
// Psuedo code:  return the sum of three inputs 
//              might as well arrow fn maybe do .reduce() to complicate and add spread fn so I can add any number of inputs?

// my answer and best practices
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals+copaDelReyGoals+championsLeagueGoals
}

// my answer using arrow fn
const goals = (a,b,c) => a+b+c

// my answer using arrow fn spread with .reduce()
const goals = (...a) => a.reduce((acc,c) => acc + c)

// most clever
// setting the initial value to 0
const goals = (...a) => a.reduce((acc,c) => acc + c, 0)

// using Array.from(arguments) instead of (...arguments)
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return Array.from(arguments).reduce( (previousValue, currentValue) => previousValue + currentValue);
}