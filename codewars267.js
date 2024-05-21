/*
Simple beads count
*NOTE Instead of using red beads and blue beads I will be using X and Y where X will be the input integer represented by blue beads aka blue @ and Y will be the integer represented by red beads aka red @*
Given the pattern of XYYX where X is the input integer, return the number of Y's
So, as the input increases by 1 the return increase by 2.

Parameters or Edge Cases:
    inputs will be integers greater than or equal to 0
Return:
    an integer representing the total count of Ys
Examples:
    0 --> 0
    1 --> 0
    3 --> 4
    5 --> 8
Pseudocode:
    if the input is less than 2 return 0
    else take the input integer subtract by 1 then multiply by 2
    return the product
*/

// My Answer and Best Practices
function countRedBeads(n) {
    return n < 2 ? 0 : (n - 1)*2
}

// One liner arrow fn
const countRedBeads = (n) => n < 2 ? 0 : (n - 1)*2

// Most Clever
// Clever to use || to take whichever value input or 1 is greater
const countRedBeads = n => ((n || 1)-1)*2

// Similar to Most Clever but using Math.max() instead of ||
function countRedBeads(n) {
    return Math.max(0, 2 * (n - 1))
  }

// brute force for loop using a string representation to an array then return the length
function countRedBeads(n) {
    let res = [];
     for (let i = 0; i < n; i++ ){
       res.push('blueBead')
       if(i !== n-1) {
         res.push('redBead')
         res.push('redBead')
       }
       
     }
     return res.filter(x=>x==='redBead').length
   }