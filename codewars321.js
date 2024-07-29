/*
Drone Fly-By

Parameters or Edge Cases:
    inputs will be 2 strings 
    1st input will be lowercase strings with the char 'x' of various lengths
    2nd input will be a string of '=' various lengths ending with 'T'

Return:
    a string with the length of the 1st input where the 'x' where be changed to 'o' by the number of '=' plus an additional character from the 2nd input 

Examples:
    'xxxxxx', '====T' --> 'ooooox'
    'xxxxxxxxx', '==T' --> 'oooxxxxxx' 
    'xxxxxxxxxxxxxxx', '=========T' --> 'ooooooooooxxxxx' 

Pseudocode
    create a string 'o' the length of the 2nd input and add on 'x' to equal the difference of the 1st input and 2nd input lengths of the 1st input
    return the new string

    failing with the following test cases
    
xxxxxxxxxxxxx
=T
xxxxxxxxxxxxxxxxxxxxxxxxx
=====================T
xxxxxxxxxxxxxxxxxxxxxxx
=======T

'o' if i < done.length else 'x' for i in range(lamps.length)
*/


// My Answer Brute Force For Loop
function flyBy(lamps, drone){
    let result = ''
    for(let i = 0; i < lamps.length; i++){
        if(i < drone.length){
            result += 'o'
        } else {
            result += 'x'
        }
    } return result
}

// My Answer brute force for loop refactored conditional to ternary
function flyBy(lamps, drone){
    let result = ''
    for(let i = 0; i < lamps.length; i++){
        i < drone.length ? result += 'o' : result += 'x'
    } return result
}

// My Answer if all parameters, edge cases and test cases were provided.
// This works but the method .repeat() is outside of the bounds of some test cases.
function flyBy(lamps, drone){
    // 'o' the length of drone + 'x' the difference of the length of lamps and drone
    let result = 'o'.repeat(drone.length) + 'x'.repeat(lamps.length - drone.length)
    return result 
}

// My Answer using array methods
// Convert lamps into an array of chars and if the index is less than the length of the string drone set the element to 'o' else leave the element the same. Then convert the array back into a string.
function flyBy(lamps, drone){
    return lamps.split('').map((e, i) => i < drone.length ? 'o' : e).join('')
}

// My Answer one liner arrow fn
const flyBy = (l, d) => l.split('').map((e, i) => i < d.length ? 'o' : e).join('')

console.log(flyBy('xxxxxx', '====T')) // 'ooooox'
console.log(flyBy('xxxxxxxxx', '==T')) // 'oooxxxxxx'
console.log(flyBy('xxxxxxxxxxxxxxx', '=========T')) // 'ooooooooooxxxxx'

// Best Practices and Most Clever taking advantage of all the parameters of .fill()
/* 
    [...string] creates an array of each char
    array.fill(staticElementForEachIndex, startIndexInclusive, endIndexInclusive)
    here they are declaring 'o' as the static fill for every element starting at index 0 and ending inclusively the length of the string drone
    finally converting back into a string removing all delimiters with .join('')
*/ 
const flyBy = (lamps, drone) => [...lamps].fill(`o`, 0, drone.length).join(``)

// using regex string.replace()
const flyBy = (l, d) => l.replace(/x/g, (e, i) => i < d.length ? 'o' : e);

// Very Clean for loop
const flyBy = (lamps, drone) => {
	for (letter of drone) {
		if (letter === '=' || letter === 'T')
			lamps = lamps.replace('x', 'o');
	}
	return lamps;
}

// similar to my .repeat() but using .slice() for the hidden test cases as a work around for the range errors
function flyBy(lamps, drone){
    const i = drone.indexOf('T')
    const indx = lamps.length > i ? i+1 : i
    return 'o'.repeat(indx) + lamps.slice(indx)
}

// clean one liner using .repeat() and .slice()
const flyBy = (lamps, drone) => `${`o`.repeat(drone.length)}${lamps}`.slice(0, lamps.length);