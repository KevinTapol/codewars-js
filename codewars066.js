// Parameters or Edge cases: 1st parameter is operation in string format 2nd and 3rd are postive integer
// Return: a value of a mathematical operation
// Examples: ('+', 4, 7) --> 11
            //('-', 15, 18) --> -3
            //('*', 5, 5) --> 25
            //('/', 49, 7) --> 7
// Psuedo code: eval() executes a string as a math function
                //put the parameters in how the math would be executed 'value1' operator 'value2' using quotes to convert the value parameters into strings
                //use .join(' ') on the array to convert back into a string with 1 space and eval() the result
//create a fn that does 4 basic maths


//my answer
function basicOp(operation, value1, value2)
{
    let arr = ['value1', operation, 'value2']
    let result = eval(arr.join(' '))
    return result

}

//most clever same answer but using + instead of array methods
function basicOp(o, a, b) {
    return eval(a+o+b);
  }

//best practices using switch case 
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
//using if statments instead of switch case
function basicOp(operation, value1, value2)
{
  // Code
  if( operation == "+") {
    return value1 + value2
  }
  if( operation == "-") {
    return value1 - value2
  }
  if( operation == "*") {
    return value1 * value2
  }
  if( operation == "/") {
    return value1 / value2
  }
}

//interesting - created object and passed into arrow function
const basicOperations = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => a / b,
  }
  
  const basicOp = (op, x, y) => basicOperations[op](x, y)
  

//another way of writing switch case statements
function basicOp(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}

//ternary operators
function basicOp(operation, value1, value2) {
    return  operation == '+' ? value1 + value2 :
            operation == '-' ? value1 - value2 :
            operation == '*' ? value1 * value2 :
            operation == '/' ? value1 / value2 : 'Wrong Operation';
  }