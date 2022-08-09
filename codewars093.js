// Parameters or Edge cases: input array of integers | will not be empty
// Return: integer product of multiplying values together in order
// Examples: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// Psuedo code: declare and assign variable outside of for loop = 1 due to multiplcation
//              loop through multiplying each element to the variable
//              outside of the for loop return the product

// my answer
function grow(x){
    let product = 1
    for(let i = 0; i < x.length; i++){
        product *= x[i]
    }
    return product
}

// best practices
// I'm so use to using reduce for only addition that I forgot it can be used with any maths
const grow=x=> x.reduce((a,b) => a*b);

// most clever
// eval() will return the value of a string
// take the array and join on multiply then evaluate the string
const grow=x=>eval(x.join("*"))