/*
Dashatize it

Parameters or Edge Cases:
    inputs will be integers and can be negative

Return:
    return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark

Examples:
    274 --> "2-7-4"
    6815 --> '68-1-5'
    5311 --> "5-3-1-1"
    86320 --> "86-3-20"
    974302 --> "9-7-4-3-02"
    0 --> "0"
    -1 --> "1"
    -28369 --> "28-3-6-9"

Pseudocode:
    declare a string result
    take the absolute value of the input integer
    create an array separating each digit of the input integer
    push the first digit to result
    iterate through the rest of the array and if the current digit is odd then push '-' then the digit else if even push the digit
    return the string result

*/

// My Answer
function dashatize(num) {
    let result = ''
    let x = Math.abs(num).toString()
    let arr = x.split('').map(e => Number(e))
    result += arr[0]
    for(let i = 1; i < arr.length; i++){
 
        // if(result[result.length -1] === '-' && arr[i] % 2 != 0){
        /*
            multiple conditionals if last element on result string is - and current element is odd then do not add the leading hash, add the odd digit and trailing hash
        */
        if(arr[i - 1] % 2 != 0 && arr[i] % 2 != 0){
            result += arr[i]
            result += '-'
        }
        if(arr[i] % 2 != 0){
            result += '-'
            result += arr[i]
            result += '-'
        } else {
            result += arr[i]
        }
        
    }
    if(result[result.length - 1] === '-'){
        return result.slice(0, result.length - 1)
    } else {
        return result
    }
}

console.log(dashatize(-28369)) // "28-3-6-9"