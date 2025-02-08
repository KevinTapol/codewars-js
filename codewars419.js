/*
Convert the score

Parameters or Edge Cases:
    input will be a string of words containing words that represent two numbers
    the string of words will represent integers 0-9 where nil is zero and the rest are normal string representation

Return:
    return an array of integers that appear in the string of words

Examples:
    "The score is four nil" --> [4,0]
    "new score: two three" --> [2,3]
    "two two" --> [2,2]
    "Arsenal just conceded another goal, two nil" --> [2,0]

Pseudocode:
    declare an empty array named result
    create an array named key where the index integer contains the element in string representation
    split the input array on whitespace
    iterate through the array of words
        if the current element exists in the key then push the index location of the element from key to result
    return result

*/

// My Answer Brute force for loop
function scoreboard(string) {
    let result = []
    let key = ['nil', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let arr = string.split(' ')
    for(let e of arr){
        if(key.includes(e)){
            result.push(key.indexOf(e))
        }
    }
    return result
}

console.log(scoreboard("The score is four nil")) //