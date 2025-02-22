/*
Find how many times did a team from a given country win the Champions League?

Create a function that takes two arguments:

An array of objects which feature the season, the team and the country of the Champions League winner.

Country (as a string, for example, 'Portugal')

You function should then return the number which represents the number of times a team from a given country has won. Return 0 if there have been no wins.

For example if the input array is as follows:


countWins(winnerList1, 'Spain') => should return 2
countWins(winnerList1, 'Portugal') => should return 1
countWins(winnerList1, 'Sportland') => should return 0

Parameters or Edge Cases:
    1st input will be an array of objects of key value pair of strings
    2nd input will be a specific value from the key 'country'

Return:
    return the count of occurrences of the 2nd input as a value of the key 'country' of the array of objects

Examples:
const winnerList1 = [
  { season: '1996–97', team: 'Borussia Dortmund', country: 'Germany' },
  { season: '1997–98', team: 'Real Madrid', country: 'Spain' },
  { season: '1998–99', team: 'Manchester United', country: 'England' },
  { season: '1999–00', team: 'Real Madrid', country: 'Spain' },
  { season: '2000–01', team: 'Bayern Munich', country: 'Germany' },
  { season: '2001–02', team: 'Real Madrid', country: 'Spain' },
  { season: '2002–03', team: 'Milan', country: 'Italy' },
  { season: '2003–04', team: 'Porto', country: 'Portugal' },
  { season: '2004–05', team: 'Liverpool', country: 'England' },
  { season: '2005–06', team: 'Barcelona', country: 'Spain' },
  { season: '2006–07', team: 'Milan', country: 'Italy' },
  { season: '2007–08', team: 'Manchester United', country: 'England' },
  { season: '2008–09', team: 'Barcelona', country: 'Spain' },
  { season: '2009–10', team: 'Internazionale', country: 'Italy' },
  { season: '2010–11', team: 'Barcelona', country: 'Spain' },
  { season: '2011–12', team: 'Chelsea', country: 'England' },
  { season: '2012–13', team: 'Bayern', country: 'Germany' },
  { season: '2013–14', team: 'Real Madrid', country: 'Spain' },
  { season: '2014–15', team: 'Barcelona', country: 'Spain' },
  { season: '2015–16', team: 'Real Madrid', country: 'Spain' }
]


    winnerList1, 'Spain' --> 9
    winnerList1, 'Portugal' --> 1
    winnerList1, 'FootLand' --> 0

Pseudocode:
    declare an integer variable named count and set it equal to 0
    iterate through the 1st input array and for every value that matches the 2nd input of the key 'country' add 1 to count
    return count

*/

// My Answer
const winnerList1 = [
    { season: '1996–97', team: 'Borussia Dortmund', country: 'Germany' },
    { season: '1997–98', team: 'Real Madrid', country: 'Spain' },
    { season: '1998–99', team: 'Manchester United', country: 'England' },
    { season: '1999–00', team: 'Real Madrid', country: 'Spain' },
    { season: '2000–01', team: 'Bayern Munich', country: 'Germany' },
    { season: '2001–02', team: 'Real Madrid', country: 'Spain' },
    { season: '2002–03', team: 'Milan', country: 'Italy' },
    { season: '2003–04', team: 'Porto', country: 'Portugal' },
    { season: '2004–05', team: 'Liverpool', country: 'England' },
    { season: '2005–06', team: 'Barcelona', country: 'Spain' },
    { season: '2006–07', team: 'Milan', country: 'Italy' },
    { season: '2007–08', team: 'Manchester United', country: 'England' },
    { season: '2008–09', team: 'Barcelona', country: 'Spain' },
    { season: '2009–10', team: 'Internazionale', country: 'Italy' },
    { season: '2010–11', team: 'Barcelona', country: 'Spain' },
    { season: '2011–12', team: 'Chelsea', country: 'England' },
    { season: '2012–13', team: 'Bayern', country: 'Germany' },
    { season: '2013–14', team: 'Real Madrid', country: 'Spain' },
    { season: '2014–15', team: 'Barcelona', country: 'Spain' },
    { season: '2015–16', team: 'Real Madrid', country: 'Spain' }
  ]

// My Answer brute force for loop element of array vs index in array
function countWins(winnerList, country) {
    let count = 0

    for(let e of winnerList){
        if(e.country === country){
            count += 1
        }
    } return count
}

// My Answer using .filter()
function countWins(winnerList, country) {
    return winnerList.filter(e => e.country === country).length
}

// My Answer one liner arrow fn Best Practices and Most Clever
const countWins = (winnerList, country) => winnerList.filter(e => e.country === country).length

console.log(countWins(winnerList1, 'Spain')) // 9

// .reduce() to return an integer count with a default 0
function countWins(winnerList, country) {
    return winnerList.reduce((a,b) => a + (b['country'] == country ? 1 : 0), 0);
  }