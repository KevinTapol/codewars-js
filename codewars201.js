// Parameters or Edge Cases:
//      the value of 0! is 1
//      If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
//      The RangeError object indicates an error when a value is not in the set or range of allowed values.
// Return:
//       factorial for a given input 0 to 12 and throw an error if outside of 0-12
// Examples:
//      5! = 5 * 4 * 3 * 2 * 1 = 120

//      describe("Tests", () => {
//          it("test", () => {
//        Test.assertEquals(factorial(0), 1, "factorial for 0 is 1");
//        Test.assertEquals(factorial(1), 1, "factorial for 1 is 1");
//        Test.assertEquals(factorial(2), 2, "factorial for 2 is 2");
//        Test.assertEquals(factorial(3), 6, "factorial for 3 is 6");
//          });
//        });
  
// Psuedo Code:
//      taking in an integer, if the input is less than 0 or greater than 12 throw a RangeError
//      if the input is 0 return 1
//      else iterate decrementing down from the input variable down to 1 multiplying the values 
//      return the product

// my answer
function factorial(n){
    // taking in an integer, if the input is less than 0 or greater than 12 throw a RangeError
    if(n < 0 || n > 12){
        throw new RangeError()
    // if the input is 0 return 1    
    } else if (n === 0){
        return 1
    } else {
    // else iterate decrementing down from the input variable down to 1 multiplying the values    
        for(var p = 1, i = n; i > 0; i--){
            p *= i
        // return the product    
        }return p
    }
}

// test cases
console.log(factorial(0)) // 1
console.log(factorial(1)) // 2
console.log(factorial(2)) // 2
console.log(factorial(3)) // 6
console.log(factorial(-1)) // RangeError
console.log(factorial(13)) // RangeError

// my answer refactored arrow function if statment for RangeError return for calling itself for decrementing numbers
const factorial = (n) => {if (n < 0 || n > 12) {throw new RangeError();}return n<2 ? 1 : n*factorial(n-1);}


// best practices
// calling the function on itself to multiply each input decremeting till 1 inclusively
function factorial(n) {
    if (n < 0 || n > 12)
      throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
}

// most clever
// Why is this most clever?
function factorial(n)
{
if (n === 0) return 1
if (n === 1) return 1
if (n === 2) return 2
if (n === 3) return 6
if (n === 11) return 39916800
if (n === 7) return 5040
if (n === 5) return 120
if (n === 4) return 24
if (n === 8) return 40320
if (n === 6) return 720
if (n === 10) return 3628800
if (n === 12) return 479001600 
if (n === 9) return 362880 
 if (n > 12 || n < 0) {
    throw new RangeError();
  }
}

// descriptive RangeError
function factorial(n){

    if (n < 0 || n > 12) {
       throw new RangeError('Parameter must be between ' + 0 + ' and ' + 12);
     }
   return n<2 ? 1 : n*factorial(n-1);
}

// using a while loop
function factorial(n) {
    if (n < 0 || n > 12)
      throw RangeError();
    var f = 1;
    while (n > 1)
      f *= n--;
    return f;
}

// a try catch block!
function factorial(n)
{
  // Calculate the factorial here
  try {
    if (n < 0) throw new RangeError();
  } catch (e) {
    console.log('Out of range!');
  }
  if (n === 0) return 1;
  return n * factorial(n-1);
}

// interesting use of object call
const factorial = n => (f => {
    if (f) return f; else throw new RangeError("I only know factorials from 0! to 12!");
})([1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600][n]);

// using RangeError in arrow function
const factorial = n =>n < 0 || n > 12 ? (() => {throw new RangeError()})() : n < 2 ? 1 : n * factorial(n - 1);

// throwing a value error instead of RangeError
function factorial(n)
{
  var result = 1;
  if (n < 0 || n > 12) {
    throw ValueError();
  } else {
    for (i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

// recursion, recursive process
let factorial =ǃ= n=> n>12 ? thrown : n ? n*ǃ(n-1) : 1

// using Array() for error
const factorial = n => n < 0 || n > 12 ? Array(-1) : (f = n => (n < 2) ? 1 : f(n - 1) * n)(n);