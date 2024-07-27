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
*/

// My Answer
function flyBy(lamps, drone){
    let result = 'o'.repeat(drone.length) + 'x'.repeat(lamps.length - drone.length)
    return result 
}

console.log(flyBy('xxxxxx', '====T')) // 'ooooox'
console.log(flyBy('xxxxxxxxx', '==T')) // 'oooxxxxxx'
console.log(flyBy('xxxxxxxxxxxxxxx', '=========T')) // 'ooooooooooxxxxx'