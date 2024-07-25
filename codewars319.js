/*
By 3, or not by 3? That is the question . . .

Parameters or Edge Cases:
    inputs will be a string of integers

Return:
    return boolean true if the sum of the digits divided by 3 has no remainder else false

Examples:
    "123"      -> true
    "8409"     -> true
    "100853"   -> false
    "33333333" -> true
    "7"        -> false

Pseudocode:
    convert the string into an array of integers where each digit is an element
    add the elements then divide the result by 3
    if there is no remainder then return boolean true else false
*/

// My Answer
function divisibleByThree(str){ 
    return str.split('').reduce((acc, c)=> acc + Number(c), 0) % 3 === 0
}

console.log(divisibleByThree("123")) // true

// Best Practices and Most Clever
// using [...string] to create an array where each element is a string digit and using + instead of Number()
function divisibleByThree(str){
    return [...str].reduce((s,d)=>+d+s,0)%3===0;
}

// same as my answer but using parseInt() instead of Number()
function divisibleByThree(str){
    return str.split('').reduce((a,b) => parseInt(a) + parseInt(b)) % 3 === 0
}

// Brute force for loop
function divisibleByThree(str) {
    let s = 0;
    for (const c of str)
      s += parseInt(c);
    return s % 3 == 0;
}

// only answer I've seen to not use % for remainder  but use parseInt() instead to check for remainders
const divisibleByThree = (str) => {
    const num = [...str].reduce((a, b)=> +a + +b, 0)
    return parseInt(num/3) === num/3
}

// using .isInteger() in place of % modulus
function divisibleByThree(str){
    let sum = 0
    for (let i = 0; i < str.length; i++) sum += Number(str[i])
    if (Number.isInteger(sum / 3)) return true
    else return false
}

// using Math.round() to check for remainder vs parseInt()
function divisibleByThree(str){
    let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str.substr(i, 1)
  }
    return sum / 3 === Math.round(sum / 3);
  }

//  clean one line return but not arrow fn with .isInteger() for boolean check
function divisibleByThree(str){
    return Number.isInteger([...str].reduce((a,c) => a+ +c,0)/3);
}