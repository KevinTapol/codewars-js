// Parameters or Edge Cases: 
//      take in 3 inputs postive integers
// Return: 
//      true if 3 inputs result in a triangle else false
// Examples:
//      describe("Public tests", () => {
//          it("Testing for fixed tests", () => {
//            assert.strictEqual(isTriangle(1,2,2), true);
//            assert.strictEqual(isTriangle(7,2,2), false);
//          });
//      })
// Psuedo Code:
//      A triangle is valid if sum of its two sides is greater than the third side.
//      A triangle sides must meet ALL these three conditions 
//      1.a + b > c 
//      2.a + c > b 
//      3.b + c > a 
//      use these statements for conditionals if all met return true else false

// my answer
function isTriangle(a,b,c) {
    if((a + b) > c && (a + c) > b && (b + c) > a) {
        return true
    } else {
        return false
    }
}

// my answer one liner arrow function ternary
const isTriangle = (a,b,c) => (a + b) > c && (a + c) > b && (b + c) > a ? true : false

// best practices and most clever
// I keep forgetting that you can do a simple statement that will automagically return boolean instead of using a if else return boolean
function isTriangle(a,b,c) {
   return a + b > c && a + c > b && c + b > a;
}

// using Math.max() to check if the highest value out of the three inputs is less than the quotient of the sum of all the inputs divided by 2
var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2

// using .sort() instead of Math.max() and reassigning the array
function isTriangle(a,b,c) {
    [a, b, c] = [a, b, c].sort((x, y) => x-y);
    return a+b > c;
}

// creating a new array using .sort() on the inputs then using the formula (highest value + mid value) > smallest value
function isTriangle(a,b,c) {
    var sides = [a, b, c].sort();
    return (sides[0] + sides[1] > sides[2]);
  }

// using a different algorithm
function isTriangle(a, b, c) {
    var max = Math.max(a, b, c);
    return a + b + c - max > max;
}

// interesting using false statements as conditionals
function isTriangle(a,b,c) {
    if(a + b <= c || a + c <= b || b + c <= a) {
        return false;
    }
    else {
        return true;
    }
}