// Parameters or Edge Cases:
//     round the answer to 2 decimal places and return it as String
//     If the given value is 0 then it should return 0.00
//     You will only be given Natural Numbers as arguments.
// Return:
//      a float to hundreths place ex 1.00
//      the sum of the following series upto nth term(parameter)
//      Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Examples:
//1 --> 1 --> "1.00"
//2 --> 1 + 1/4 --> "1.25"
//5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

//describe("Tests", () => {
//    it("test", () => {
//  Test.assertEquals(SeriesSum(1), "1.00")
//  Test.assertEquals(SeriesSum(2), "1.25")
//  Test.assertEquals(SeriesSum(3), "1.39")
//  Test.assertEquals(SeriesSum(4), "1.49")
//    });
//});
// Psuedo Code:
//      delcare a global variable
//      loop through starting at 1/1 and add 3 to the denominator till you stop at the input number 
//      The toFixed() method formats a number using fixed-point notation.
//      return the total using the method .toFixed() which designates how many decimal points the number is

// my answer and yes at first I did forget to capitalize seriesSum
// I am not sure if that was an intended gotcha or a typo on the creators part.
function SeriesSum(n) {
    // declare a global variable for the sum of fractions
    var total = 0
    // loop through starting at 1/1 and add 3 to the denominator till you stop at the input number
    for (i = 0; i < n; i++) {
      total += 1 / (1 + i * 3)
    }
    // return the total using the method .toFixed() which designates how many decimal points the number is
    return total.toFixed(2)
}

// my answer refactored arrow function
const SeriesSum = (n) => {var total = 0; for(i = 0; i < n; i++){total += 1 / (1 + i * 3)}return total.toFixed(2)}

// best practices and most clever
// here they are declaring the global variable for the total inside the for loop
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
}

// using a ternary
function SeriesSum(n, s = 0) {
    return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}

// interesting use of stop and step in the for loop
// stop at < n * 3 and step each iteration by +3 with i+=3
function SeriesSum(n){
  for(a=0,i=1;i<=n*3;i+=3) a+=1/i;
  return a.toFixed(2);
}

// using reduce
function SeriesSum(n) {
    return Array(n).fill(0).map((e, i) => 3 * i + 1).reduce((s, e) => s + 1 / e, 0).toFixed(2);
}

// same as above but using Array.from()
SeriesSum = n => Array.from(Array(n), (e, i) => 1 / (i * 3 + 1)).reduce((s, e) => s + e, 0).toFixed(2);

// while loop
function SeriesSum(n){
  var s = 0;
  while(n) {
    s += 1/(1 + 3 * --n);
  }
  return s.toFixed(2);
}

// nested function calls
const { range } = require('lodash')

const reducer = (a, i) => a + 1 / (1 + i * 3)

const SeriesSum = (n) => range(n).reduce(reducer, 0).toFixed(2)

// using spread
const SeriesSum = (n) =>
  [...Array(n)].reduce((pre, _, idx) => pre + 1 / (3 * idx + 1), 0).toFixed(2);

// that's a lot of for loop global declarations
function SeriesSum(n){
  for(var sum = 0, d = 1, i = 0; i < n; sum += 1/d, ++i, d+=3);
  return sum.toFixed(2);
}