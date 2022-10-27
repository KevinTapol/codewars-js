// Parameters or Edge Cases:
//      The binary number returned should be a string.
// Return:
//      the sum of two inputs in binary
// Examples:
//      describe("addBinary(1,2)", function() {
//          var results1 = addBinary(1,2);
//          it("Should return something that isn't falsy", function() {
//            Test.expect(results1, "Something is wrong, no results!");
//          });
//          it("Should return \"11\"", function() {
//            Test.assertEquals(results1, "11");
//          });
//      });
// Psuedo Code: 
//      take in the two inputs and add them
//      use .toString(2) to convert the sum to binary
//      return the binary sum

// my answer best practices and most clever
function addBinary(a,b) {
    return (a+b).toString(2)
}

// my answer arrow function
const addBinary = (a,b) => (a+b).toString(2)

// here they used a higher order function or a function as an argument for another function
function decimalToBinary(decimal){
    return (decimal >>> 0).toString(2);
}
  
  function addBinary(a,b) {
    return decimalToBinary(a+b);
}

// while loop
function addBinary(a,b) {
    var c = a + b;
    var res = '';
    while (c >= 1) {
      var res = c % 2 + res;
      c = Math.floor(c / 2);
    }
    return res;
}

// do while loop
function addBinary(a,b) {
    let sum = a + b;
    let reversed = "";
    
    do {
        reversed += (sum % 2);
        sum = Math.trunc(sum / 2);
    } while ( Math.trunc(sum / 2) >= 1 )
      
    reversed += "1";
    
    return reversed.split("").reverse().join("")
}

// using Math.trunc()to grab only the integer part of a float
const addBinary = (a, b) => Math.trunc(a + b).toString(2)

// for loop
function addBinary(a,b) {
    let n = a + b;
    let f = (n % 2).toString()
    for (; n>1 ;) {
      n = parseInt(n / 2);
      f = (n % 2) + f;
    }
    return f;
}

// using spread and .reduce()
const addBinary = (...args) => args.reduce((a, b) => a + b).toString(2)