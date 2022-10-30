// Parameters or Edge Cases:
//      If the parameter is itself not a perfect square then -1 should be returned.
//      You may assume the parameter is non-negative.
// Return:
//      the next integral perfect square after the one passed as a parameter
// Examples:
//      describe("findNextSquare", function() {
//          it("should return the next square for perfect squares", function() {
//            Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");
//            Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
//            Test.assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225");
//            Test.assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
//          });
//          
//          it("should return -1 for numbers which aren't perfect squares", function() {
//            Test.assertEquals(findNextSquare(155), -1, "Wrong output for 155");
//            Test.assertEquals(findNextSquare(342786627), -1, "Wrong output for 342786627");
//          });
//      });
// Psuedo Code:
//      take in the perfect square and find the square root. 
//      if the square root is not an interger return -1
//      else add 1 to the square root and square it


// my answer
function findNextSquare(sq) {
    // take the square root of the input and check if it is an integer 
    if(Number.isInteger(Math.sqrt(sq))){
    // if it is an integer add 1 and square it    
        return Math.pow(Math.sqrt(sq) + 1, 2)
    } else {
    // if not an integer return -1
        return -1
    }
}

// my answer refactored one liner arrow function ternary
const findNextSquare = (x) => Number.isInteger(Math.sqrt(x)) ? Math.pow(Math.sqrt(x) + 1, 2) : -1

// best practices and most clever
// regular function modulus ternary
// here they are using modulus so if there is a remainder return -1 else return the next perfect square
function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

// using Math.round() for integer comparison
// The Math.round() function returns the value of a number rounded to the nearest integer.
function findNextSquare(sq) {
    var number = Math.sqrt(sq);
    if(Math.round(number) === number) {
      return Math.pow(++number, 2)
    }
    return -1;
}

// similar to my answer but here they are declaring a global variable with var
function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    var root = Math.sqrt(sq);
    if (Number.isInteger(root)) {
      return Math.pow(root + 1, 2);
    } else {
      return -1;
    }
}

// interesting checking if the square root subtracted by the value rounded down equals zero 
function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root - Math.floor(root) === 0 ? Math.pow(root+1, 2) : -1 ;
}

// while loop
function findNextSquare(sq) {
    if(Number.isInteger(Math.sqrt(sq))) {
      var res = sq + 1;
      while (true) {
        if (Number.isInteger(Math.sqrt(res)))
          return res;
        res++;
      }
    }
    return -1;
}

// interesting checking if the square root to the power of 1 returns the same number as an interger check
function findNextSquare(sq) {
    var i = Math.sqrt(sq);
      if ((i ^ 0) === i) {
      i++;
        return Math.pow(i, 2);
      } else
      return -1;
}