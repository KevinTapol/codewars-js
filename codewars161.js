// Parameters or Edge Cases: 
//          tests will always use some integral number
// Return: 
//          return boolean if input int is a perfect square
// Examples:
//          describe("isSquare", function(){
//              it("should work for some examples", function(){
//                Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
//                Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
//                Test.assertEquals(isSquare( 3), false, "3 is not a square number");
//                Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
//                Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
//                Test.assertEquals(isSquare(26), false, "26 is not a square number");
//              });
//          });
// Psuedo Code: 
//          get the square root and check if it is a positve integer


// my answer
var isSquare = function(n){
    if(Number.isInteger(Math.sqrt(n)) === false) {
        return false
    } else return true
}

// my answer using arrow function and ternary
const isSquare = (n) => Number.isInteger(Math.sqrt(n)) === false ? false : true

// my answer using truthy ended up being second best practices and most clever
// I don't like to use truthy and falsy because it can easily be misinterpreted
const isSquare = (n) => Number.isInteger(Math.sqrt(n)) ? true : false

// best practices and most clever
// I can't believe I didn't think of this. It's so simple and clean.
// Take the square root and check if there is a remainder when dividing by 1.
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

// using a for loop
// I think this is a clever way of not using methods to loop through 0 up to the input value to divide by integers until the divisor and the quotient is equal.
// Since you can't divide another number other than 0 by 0 return true for 0 test case else loop 0 to input number to check when dividing by a number equals the number. 
var isSquare = function(n){
    for (var x = 0; x <= n; x++) {
      if (n === 0) {
        return true;
      } else if (n / x === x) {
        return true;
      }
    }
    
    return false;
}

// using Math.trunc()
// The Math.trunc() function returns the integer part of a number by removing any fractional digits.
// comparing if the output if float equal to the interger
const isSquare = n => Math.sqrt(n) === Math.trunc(Math.sqrt(n));

// without using Math.sqrt()
var isSquare = n => ((n**(1/2)) % 1 === 0) ? true : false

// boolean return of square root or 0 for statement
var isSquare = function(n){
    var s = Math.sqrt(n);
    return s === (s | 0);
  }