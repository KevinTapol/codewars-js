// Parameters or Edge Cases:
//      both inputs will be positive integers greater than 0
//      first input (the divisor) will be less than the the second input(the bound) aka the highest value to divide and decrement from till you get a solid integer without a remainder 
// Return:
//      the largest integer N such that N is divisible by divisor(first input), less than or equal to bound(second input) and greater than 0 (can't divide by 0)
// Examples:
//      maxMultiple (2,7) ==> return (6)
//      (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 
//      maxMultiple (10,50)  ==> return (50)
//      (50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0
//      maxMultiple (37,200) ==> return (185)
//      (185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0

//      describe("Basic tests", () => {
//          it("Testing for fixed tests", () => {
//            assert.strictEqual(maxMultiple(2,7),6);
//            assert.strictEqual(maxMultiple(3,10),9);
//            assert.strictEqual(maxMultiple(7,17),14);
//            assert.strictEqual(maxMultiple(10,50),50);
//            assert.strictEqual(maxMultiple(37,200),185);
//            assert.strictEqual(maxMultiple(7,100),98);
//          });
//      })

// Psuedo Code:
//      if the bound(second input) divided by the divisor(first input) results in no remainder return the bound
//      else call the function on itself but subtracting bound by 1 till you get no remainder

// my answer
function maxMultiple(divisor, bound){
    // if the bound(second input) divided by the divisor(first input) results in no remainder return the bound
    if(bound % divisor === 0){
        return bound
    // else call the function on itself but subtracting bound by 1 till you get no remainder
    } else {
        return maxMultiple(divisor, bound -1)
    }
}

// my answer refactored arrow function ternary
const maxMultiple = (divisor, bound) => bound % divisor === 0 ? bound : maxMultiple(divisor, bound -1)

console.log(maxMultiple(2,7)) // 6 
console.log(maxMultiple(3,10)) // 9 
console.log(maxMultiple(7,17)) // 14 
console.log(maxMultiple(10,50)) // 50 
console.log(maxMultiple(37,200)) // 185 
console.log(maxMultiple(7,100)) // 98 


// best practices and most clever
// subtracting the bound or second input by the modulus value to get the highest whole value integer
// The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend. 13 % 5 => 3 Then take the bound which in this case is 13 and subtract by the remainder 3 to get 10
function maxMultiple(divisor, bound){
    return bound-bound%divisor
}

// same answer as best practices and most clever but as an arrow function
const maxMultiple = (divisor,bound) => bound - bound % divisor ;

// take the quotien of bound / divisor and multiply that by the divisor then subtract that product by the bound to get the highest value integer 
function maxMultiple(divisor, bound) {
    return Math.floor(bound / divisor) * divisor;
}

// using a while loop with modulus remainder
function maxMultiple(divisor, bound) {
    while (bound % divisor) {
      bound--;
    }return bound;
}

// brute force for loop with conditionals
function maxMultiple(divisor, bound){
    var max = 0;
    for(let j = divisor; j <= bound; j++) {
      if(j % divisor == 0 && j > max) {
       max = j;
      }
    }return max;
}

// interesting using a for loop to create a new array of all the quotients then use Math.max(...array) to iterate through the array and return the highest qoutient
function maxMultiple(divisor, bound){
    let arr = [];
      for (let i = divisor; i <= bound; i++) {
          if (i % divisor == 0) {
              arr.push(i)
          }
      }return Math.max(...arr);
}

// confirming all the restrictions on the given inputs and outputs
function maxMultiple(divisor, bound){
    const massiveLength = bound - divisor + 1;
    let numbers = [] 
    for(let i = divisor; i <= bound; i++){
           let number = i
         numbers.push(number)
        }
    const newNumbers = numbers.filter(v => v % divisor === 0 && v <= bound && v > 0);
    const maxNumber = Math.max.apply(null, newNumbers);
        return maxNumber
}