/*
Insert dashes

Parameters or Edge Cases:
    inputs will be integers greater than or equal to 0

Return:
    the input integer as a string where there are dashes "-" in-between consecutive odd digits in the integer
Examples:
    454793 --> '4547-9-3'
    123456 --> '123456'
    1003567 --> '1003-567'
Pseudocode:
    declare an empty array named result
    copy the input and convert it into an array of elements where each element is a digit as a string
    iterate through the array
        if the current element is odd and the next element is odd then push the current element with "-" concatenated to result
        else push the current element to result
        convert result into a string and return it
*/ 

// My Answer
function insertDash(num) {
    let result = []
    let arr = String(num).split('')
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0 && arr[i + 1] %2 != 0 && i != arr.length -1){
            result.push(arr[i] + "-")
        }else {
            result.push(arr[i])
        }
    }
    return result.join('')
}

console.log(insertDash(454793)) // '4547-9-3'
console.log(insertDash(123456)) // '123456'
console.log(insertDash(1003567)) // '1003-567'
 