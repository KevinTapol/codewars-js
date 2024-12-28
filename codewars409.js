/*
Replace all items

Parameters or Edge Cases:
    1st input will be an array of elements and may be empty
    2nd input will be an integer representing the element to be targeted
    3rd input will be an integer representing the what to replace the targeted element with

Return:
    return the input array replacing all instances of the 2nd input with the 3rd input

Examples:
    [], 1, 2 --> []
    [1,2,2], 1, 2 --> [2,2,2]

Pseudocode:
    create a shallow copy array of the array seq and if the current element is equal to the 2nd input find then replace it with the 3rd input replace else return the current element

    NOTE 1st input will not always be an array and can be a string
    using regex to replace 'Hello World' o 0

*/

// My Answer
// 3 issues reported found 1 being the inputs may be strings instead of arrays. Searching for the other 2 issues of which maybe replacing specific digits from multiple digit elements ie 17 replace 1 with 2 answer 27 not sure though
function replaceAll(seq, find, replace) {
    // console.log(seq)
    // console.log(find)
    // console.log(replace)
    // console.log(' ')
    if(typeof seq === "string"){
        // let regex = new RegExp(find, 'g')
        return seq.replace(new RegExp(find, 'g'), replace)
    }
    if(Array.isArray(seq)){
        return seq.map(e => e === find ? replace : e)
    }
    
}

// console.log(replaceAll([], 1, 2)) // []
// console.log(replaceAll([1,2,2], 1, 2)) // [2,2,2]
// console.log(replaceAll([ 1, 1, 2 ], 1, 2)) // [ 2, 2, 2 ]
console.log(replaceAll('Hello World', 'o', '0')) // 'Hell0 W0rld'