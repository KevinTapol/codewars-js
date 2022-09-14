// Parameters or Edge cases: inputs can be large 
// Return: Given a number n, return the number of positive odd numbers below n.
// Examples: (Input -> Output)
//           7  -> 3 (because odd numbers below 7 are [1, 3, 5])
//           15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Psuedo code:  declare an empty array
//               for loop using the input n as the stop starting at 1 and incrementing by 2 
//               use .push() to add those values to the array
//               return the LENGTH of the array

// My answer but didn't work with large numbers because when they said large numbers they meant billions which results in a memory leak.
function oddCount(n){
    let arr = []
    for(let i = 1; i < n; i++) {
        if(i % 2 != 0) {
            arr.push(i)
        }
    }return arr.length
}
console.log(oddCount(3423423423))
// # Fatal JavaScript invalid size error 169220804


// NEW Psuedo code: 
// as a result I had to go think my way around to another solution without using loops because of the large number of testing
// my next answer is divide the input by 2 and round down since we are not including the dividend (number being divided)

// my answer after redoing my psuedo code 
function oddCount(n){
    return Math.floor(n/2)
}

// my one liner answer
// this ended up being best practices
const oddCount = (n) => Math.floor(n/2)

// most clever
// I understand the answer they are getting but I have no clue what specifically is going on in the ()
oddCount=_=>this['Math']['floor'](_/[-~[]+!!{}][~~{}])

// someone else who used a for loop initially and just like myself had to changed their answer for large values
function oddCount(n){
/*
    var returnArray = [];
    for(var i=1;i<n;i=i+2) {
        returnArray.push(i);
    }
    return returnArray.length;
*/
    return parseInt(n/2);
}

// The Math.trunc() function returns the integer part of a number by removing any fractional digits. So same thing as rounding down to a whole integer with Math.floor()
function oddCount(n) { //works for negative n 
    return n > 0 ? Math.trunc(n / 2) : -Math.trunc(n / 2);
}

// There aren't that many deviations since all other solutions resulted in memory issues.
