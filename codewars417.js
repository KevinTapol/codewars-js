/*
Calculate Two People's Individual Ages

Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative

Parameters or Edge Cases:
    inputs will be numbers and can be negative
    1st input will be the sum of 2 numbers
    2nd input will be the difference of 2 numbers

Return:
    return an array of the numbers in descending order

Examples:
    24,4 --> [14,10]
    63,-14 --> null


Pseudocode:
    using the following algebra to solve for x and y
    x + y = sum
    x - y = dif
    x = dif + y
    dif + 2y = sum
    y = (sum - dif)/2
    x = sum - (sum - dif)/2

    if(x > y) then push [x,y] else push [y,x]

*/

// My Answer
function getAges(sum, dif){
    let y = (sum - dif)/2
    let x = sum - y
    if(x < 0 || y < 0){
      return null
    }
    if(parseInt(x) != x || parseInt(y) != y){
        return null
    }
    return x > y ? [x,y] : [y,x]
    
}

console.log(getAges(24,4)) // [14,10]
console.log(getAges(63,-14)) // null

/*
Hidden descriptions found through test cases:
63, 14 expect [38.5, 24.5] instead of null
consider checking if inputs are negative or decimals 
or resulting x and y values are negative or decimals
    if(sum < 0 || dif < 0){
      return null
    }

inputs of 1, 57 expected null instead got [29, -28]
why would this be null?

*/