// Debug code
// function sayHello(name) {
//     return 'Hello'
//   }

// Parameters or Edge cases: input will be a string
// Return: name variable after greeting string 'Hello'
// Examples:
//  describe("Tests", () => {
//      it("test", () => {
//  Test.assertEquals(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
//  Test.assertEquals(sayHello('Captain Kirk'), 'Hello, Captain Kirk')
//  Test.assertEquals(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
//  Test.assertEquals(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')
//      });
//  });

// Psuedo code:  use template literals to include a variable with a greeting 

// my answer
function sayHello(name) {
    return `Hello, ${name}`
}

// might as well arrow fn it
// turned out to be best practices and most clever
const sayHello = (name) => `Hello, ${name}`

// using .concat()
let sayHello = (name) => 'Hello, '.concat(name);

// using normal quotes
function sayHello(name) {
    return 'Hello, ' + name 
}

//f(x) = y

// lol putting it into an array of 2 elements then using .join(', ') to return to string and add comma followed by space
const sayHello = function( name ) {
    return ['Hello', name].join(', ')
}