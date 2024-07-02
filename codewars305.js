/*
Combine objects

Parameters or Edge Cases:
    do not mutate the original inputs
    objects may be empty
    inputs will be 2 or more objects with keys as lowercase letters starting from a-z and values of integers greater than or equal to 0

Return:
    a single object that adds up all the values of the same keys of the input objects

Examples:
    { a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 } --> { a: 13, b: 20, c: 36, d: 3 }
    { a: 10, b: 20, c: 30 }, { a: 5, d: 11, e: 8 } --> { a: 15, b: 20, c: 30, d: 11, e: 8 }
    { a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }, { a: 5, d: 11, e: 8 } -->  { a: 18, b: 20, c: 36, d: 14, e: 8 }
Pseudocode:
    declare an empty object named result
    iterate through the input objects and if the object key already exists then add the values if the key does not exist then add the new pair key value
    return the new object of added values
    
*/ 

// My Answer
//  function combine(...inputs) {
//     let result = {}
//     // let lastKeysObj = Object.keys(inputs[inputs.length -1])
//     let arrOfKeys = Object.keys(inputs)
//     let firstObj = arrOfKeys[arrOfKeys.length -1]
//     return inputs
// }
 function combine(...inputs) {
    let result = {}
    for(let i = 0; i < inputs.length; i++){
        console.log(inputs[i])
        // newObject = Object.assign(objectA, objectB)
        // if(result does not contain the key){
        //     add the key value pair to result 
        // }else {
        //     add the value to the currently existing value
        // }
    }
    // let lastKeysObj = Object.keys(inputs[inputs.length -1])
    let arrOfKeys = Object.keys(inputs)
    let firstObj = arrOfKeys[arrOfKeys.length -1]
    return inputs
}

console.log(combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }))