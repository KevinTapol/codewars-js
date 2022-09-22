// Parameters: Numbers may be positive or negative, integers or floats.
//             Floats with decimal part non equal to zero are considered UNeven for this kata.
// Return: either a true or false.
// Examples: 
//          describe("Tests", () => {
//              it("test", () => {
//            Test.assertEquals(testEven(0), true, "testEven for 0");
//            Test.assertEquals(testEven(0.5), false, "testEven for 0.5");
//            Test.assertEquals(testEven(1), false, "testEven for 1");
//            Test.assertEquals(testEven(2), true, "testEven for 2");
//            Test.assertEquals(testEven(-4), true, "testEven for 2");
//              });
//            });
// Psuedo Code: take the input and divide by 2 using % 2 to see if there is a remainder
//              if there is a remainder return false
//              if there isn't a remainder return true
//              simple arrow fn  falsy ternary  since we are looking for a falsy value of 0 or no remainder
//              but always do the readable function with if else first

// my answer without arrow fn and ternary
function testEven(n) {
    if(n % 2 === 0) {
        return true
    } else {
        return false
    }
}

// my answer arrow fn and ternary falsy
// I'm so used to using truthy that I forgot at first to reverse true and false
// If there is a remainder the true case will pop up meaning it isn't even so return false
// If there isn't a remainder false case will pop up meaning it is even so return true
const testEven = (n) => n % 2 ? false: true

// best practices
// I keep forgetting that you can return a statement and automatically get true or false
function testEven(n) {
    return n%2===0;
}

// most clever
// using falsy if the statement is not 0 meaning not false return true meaning the number is even
function testEven(n){
    return !(n % 2);
}