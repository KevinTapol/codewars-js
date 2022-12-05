// Parameters or Edge Cases:
//      input will be an integer representing the first series of asteriks in an asteriks triangle
//      
// Return:
//      Given the number of first line asteriks n return the total number of asteriks in the triangle made out of asteriks
// Examples:
//      1st (1)   2nd (3)    3rd (6)
//      *          **        ***
//                 *         **
//                           *

//      describe("Basic tests", () => {
//          it("Testing for fixed tests", () => {
//            assert.strictEqual( triangular(2), 3 )
//            assert.strictEqual( triangular(4), 10 )
//            assert.strictEqual( triangular(-454), 0 )
//          })
//      })
  
// Psuedo Code:
//      I could use Gausss's theorem ((n * n) + n) / 2 to add up all numbers from a specific number n down to 0 inclusively but I'm going to loop instead
//      if the input interger is less than 0 return 0
//      declare a global variable for the sum of asteriks
//      loop through 1 to n and add up the intergers inclusively
//      return the sum

// my answer
function triangular( n ) {
    // if the input interger is less than 0 return 0
    if(n < 0){
        return 0
    }
    // declare a global variable for the sum of asteriks
    var sum = 0
    // loop through 1 to n and add up the intergers inclusively
    for(let i = 1; i <= n; i++){
        sum += i
    // return the sum
    }return sum
}

// my answer refactored arrow function ternary
// Something to point out... you need to have {} when doing anything other than a simple ternary for the math then use return before the ternary conditions
const triangular = (n) => {var sum = 0; for(let i = 1; i <= n; i++){sum += i} return n < 0 ? 0 : sum}

console.log(triangular(2)) // 3
console.log(triangular(4)) // 10
console.log(triangular(-454)) // 0

// best practices and most clever I thought as much... Gauss's theorem
// Return the nth triangular number
function triangular( n ) {
    return (n > 0) ? ((n * n) + n) / 2 : 0;
}

// using Math object methods
// Return the nth triangular number
var max_n = Math.floor(Math.sqrt(Number.MAX_VALUE));

function triangular(n) {
  if (n < 1 || n >= max_n) return 0;
  
  return (n * (n + 1)) / 2;
}

// while loop - I avoid while loops because of the step function being at the end. n-=1 or n--
// Return the nth triangular number
function triangular( n ) {
    // edge cases: n <= 0 is already covered.
    
    // number of stars to make triangle, aka the result
    var sumStars = 0;
    // To make the triangle, each row has one less star. The first row has n stars.
    // So start from n, and add n-1, then n-2, then n-3, etc. stars
    // Once we get to 0, we have our triangle
    while (n > 0) {
      sumStars += n;
      n -= 1;
    }
    // The number of stars in traingle is result
    return sumStars;
}

// using .from() and .reduce()
const triangular = ( n ) => n < 1 ? 0 : Array.from({length: n}, (_, i) => i + 1).reduce((a, i) => a + i)

// using another theorem
const triangular = n => n<0 ? 0 : n*(n+1)/2 ;