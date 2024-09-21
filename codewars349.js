/*
The Office III - Broken Photocopier

Parameters or Edge Cases:
    inputs will be strings of '1' and '0' with varying lengths 

Return:
    return the input string with every '1' switched to '0' and every '0' switched to 1

Examples:
    "1" --> "0"
    "10000000101101111110011001000" --> "01111111010010000001100110111"
    "100010" --> "011101"

Pseudocode:
    take the input string and break it up into an array where each char is an element
    iterate through the array changing every '1' to '0' and every '0' to '1'
    convert the array back into a single string
*/

// My Answer and Best Practices
function broken(x){
    return x.split('').map(e => e === '1' ? '0' : '1').join('')
}

// My Answer refactored one liner arrow fn
const broken = x => x.split('').map(e => e === '1' ? '0' : '1').join('')

console.log(broken("1")) // "0"
console.log(broken("10000000101101111110011001000")) // "01111111010010000001100110111"
console.log(broken("100010")) // "011101"

// Most Clever
// using regex .replace with bitwise logic ^ 1 to return 1 for 0 or 0 for 1
const broken = x => x.replace(/\d/g, val => val ^ 1);

// using regex with .replace() 2nd param logic instead of .map()
function broken(x){
    return x.replace(/[10]/gi, match=> match ==='0'? '1':'0');
}

// Brute force for loop
function broken(x){
    var ans='';
    for (var i=0; i<x.length; ++i)
        ans+=x[i]=='0'?1:0;
    return ans;
}

// using regex .replace() with logic that is calling index to switch chars
const broken = x => x.replace(/[01]/g, m => '10'[m])