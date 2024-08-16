/*
Filter unused digits

Parameters or Edge Cases:
    inputs will NOT be an array but any number of integers passed in

Return:
    return a string of sorted single digit integers not included in the varying number of integer arguments

Examples:
	12, 34, 56, 78 --> "09"
	2015, 8, 26 --> "3479"

Pseudocode:
    grab the varying number of integer arguments into a single array using a spread operator and separating each digit as it's own element named inputArr
    declare an array of integers of single digits named check
    iterate through check and filter elements that are not included in the input array and sort the elements from lowest to highest
    convert the array of integers into a single string containing all the elements and return the string


*/

// My Answer
function unusedDigits(...arr) {
    const check = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let inputArr = arr.join('').split('').map(e => Number(e))
    return check.filter(e => !inputArr.includes(e)).sort((a, b) => a - b).join('')
}

console.log(unusedDigits(12, 34, 56, 78))

// Best Practices and Most Clever
// clever use of regex.replace of a string of every unique single digit integer
function unusedDigits(...args){
    return "0123456789".replace(new RegExp('['+args.join('')+']','g'), '')
}

// arrow fn similar to my answer but refined and removing the unnecessary sort because the array of digits is already sorted
const unusedDigits = (...arr) => {
	var digits = arr.join()
	return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => !digits.includes(x)).join('')
};

// using .indexOf() inside of the .filter()
function unusedDigits(...a){
    return `0123456789`.split('').filter(b=>`${a}`.split('').indexOf(b)==-1).join('');
}

// Brute force for loop
const unusedDigits = (...arr) => {
    const str = arr.join('')
    let res = '0123456789'
    
    for(let n of str) {
      res = res.replace(n, '')
    }
    
    return res
}