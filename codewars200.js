// Parameters or Edge Cases:
//      Create a class named Ball that accepts one arguement when instantiated.
//      If no arugements are given, ball objests should instantiate with a ball type of regular.
// Return:
//      return an object with arguement return "super" if an argument is passed in or empty if not
// Examples:
//      ball1 = new Ball();
//      ball2 = new Ball("super");      
//      ball1.ballType     //=> "regular"
//      ball2.ballType     //=> "super"

//      const Test = require('@codewars/test-compat');
//      
//      describe("Tests", () => {
//        it("test", () => {
//      // Create your own tests here. These are some of the methods available:
//      //  Test.expect(boolean, [optional] message) 
//      //  Test.assertEquals(actual, expected, [optional] message)
//      //  Test.assertSimilar(actual, expected, [optional] message)
//      //  Test.assertNotEquals(actual, expected, [optional] message)
//      Test.assertEquals(new Ball().ballType, "regular");
//      Test.assertEquals(new Ball("super").ballType, "super");
//        });
//      });

// Psuedo Code:
//      create a class Ball {} with a constructor() ballType with this. notation

// my answer
class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    }
}

// best practices and most clever
// using var but still capitalizing Ball for class identifier
// returning input or regular based on user input
var Ball = function(ballType) {
    this.ballType = ballType || 'regular';
};

// uses function notaiont instead of constructor but same code
var Ball = function(ballType = "regular") {
    this.ballType = ballType;
};

// interesting use of ternary based on user input
var Ball = function(ballType) {
    this.ballType = typeof ballType !== 'undefined' ? ballType : 'regular';
};

// same idea as above but using conditionals instead of ternary
var Ball = function(ballType) {
    if (!ballType){
      this.ballType = 'regular';
    }
    else {
      this.ballType= 'super';
    }
};

// something I forgot about is the _variable so that users don't accidentally manipulate variable inputs/outputs
class Ball {
    constructor (type = `regular`) {
      this._type = type;
    }
    
    get ballType() {
      return this._type;
    }
}