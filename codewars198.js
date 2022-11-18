// Parameters or Edge Cases:
//      take in two positive integers greater than or equal to 0
// Return:
//      the number of occurances of second input in the squares from 0 to n inclusively
// Examples:
//      n = 10, d = 1 
//      the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
//      We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
//      
//      nb_dig(25, 1) returns 11 since
//      the k*k that contain the digit 1 are:
//      1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
//      So there are 11 digits 1 for the squares of numbers between 0 and 25.

//      const assert = require('chai').assert;
//      describe("nbDig", () => {
//        it("Basic tests", () => { 
//          assert.strictEqual(nbDig( 5750, 0),  4700, "n = 5750, d = 0");
//          assert.strictEqual(nbDig(11011, 2),  9481, "n = 11011, d = 2");
//          assert.strictEqual(nbDig(12224, 8),  7733, "n = 12224, d = 8");
//          assert.strictEqual(nbDig(11549, 1), 11905, "n = 11549, d = 1");
//        });
//      });
// Psuedo Code:
//      create a count variable for how many times d occurs in the squares
//      iterate through the input value squaring from 0 to n and save the integers at their own indexes
//      filter through the array counting how many times the second input occurs throughout the elements (d can occur more than once per element!!)
//      return that count

// Thank you m_tofu!
// Side note by m_tofu: Description is extremely confusing so I've rewritten it, hope this helps people in the future: 

//      You are given a number "n" (n >= 0) and a digit "d" (0 <= d <= 9).
//      
//      Write a function nbDig(n, d) that finds the square of each integer from 0 to n, and returns the number of times that the digit d appears across all the squares. Note that d might appear multiple times in a single square.
//      
//      Example:
//      
//      n=12, d=1
//      Squares from 0 to n=12: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144
//      The function returns 7 because the digit d=1 appears 7 times: in 1, 16, 81, 100, 121 (note: 1 appears twice in 121), and 144.
//      
//      n=10, d=0
//      Squares from 0 to n=10: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
//      The function returns 3 because the digit d=0 appears 3 times: in 0 and 100 (note: 0 appears twice in 100).

// my answer
function nbDig(n, d) {
    // create a count variable for how many times d occurs in the squares
    let dCount = 0
    // iterate through the input value squaring from 0 to n and save the integers at their own indexes as strings
    // convert that string into an array per each squared value number digit has it's own index
    // filter through that array where each element is equal to the second input d in value but not type
    // add the length of the filtered array to the declared second input count variable
    // repeat this process for each squared element till you reach n squared
    for(let i = 0; i <= n; i++){
        dCount += Math.pow(i,2).toString().split("").filter(e => e == d).length
    // return the count
    }return dCount
}

// best practices
// for loop squares with a forEach square ternary add the occurances of d in the square and return the count
function nbDig(n, d) {
    var res=0;
        for (var g=0;g<=n;g++){
          var square=(g*g+"").split("");
          square.forEach((s)=>s==d?res++:null)
        }return res;
}

// most clever
// this is very clever using .split(d) to break the string at each occurance of d
function nbDig(n, d) {
    var o = '';
      for(var i = 0; i <= n; i++){
        o += Math.pow(i, 2);
      }
    return o.split(d).length-1
}

// using Array.from() and .match() with RegExp
nbDig = (n, d) => Array.from(Array(n + 1), (e, i) => i * i).join('').match(new RegExp(d, 'g')).length;

// using a for loop and RegExp
// crazy condition
function nbDig(n, d) {
    let count = '';
    const re = RegExp(d, 'g');
    for (let i = 0; i <= n; i++){
      count += i**2;
    }
    return count.match(re).length;  
}

// arrow function RegExp variable using spread to iterate through the array then .reduce() for the math .match() for RegExp variable and length
const nbDig = (n, d) => {
    let re = new RegExp(d, 'g');
    return Array(...Array(n + 1)).reduce((s, v, i) => s + ((i * i + '').match(re) || []).length, 0);
}
