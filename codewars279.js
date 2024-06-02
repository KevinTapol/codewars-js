/*
My Own Kata I created.
Given an array of strings representing integers spelled out ie ['zero', 'one', 'five'] return an array such that the strings are sorted by their represented integer.

Parameters or Edge Cases:
    If the array is empty, return an empty array.
    Elements in the array will not be duplicated, always be lowercase, and single digit representations.

Return:
    return an array such that the strings are sorted by their represented integer.

Example:
    ["one", "three", "two"] --> ['one', 'two', 'three' ]
Pseudocode:
    create an array of reference object key values pair where string number pronounced is the key and it's integer is the value from 0 to 9
    declare an empty array named arrOfObj setting the keys as the input strings and the values as the values from the reference object
    sort the array of objects by integer value 
    create an array named result returning the string values in the new order
*/

// My Answer
function sortObj(arr) {
    const refObj = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    }
    let arrOfObj = arr.map(e => ({
        "string": e,
        "value": refObj[e],
    }))
    arrOfObj.sort((a, b) => a.value - b.value)
    let result = arrOfObj.map(e => e = e.string)
    return result
}

console.log(sortObj(["one", "three", "two"])) // ['one', 'two', 'three' ]
console.log(sortObj(["five", "nine", "zero"])) // ['zero', 'five', 'nine' ]
console.log(sortObj(["seven", "two"])) // ['seven', "two" ]
console.log(sortObj([])) // []