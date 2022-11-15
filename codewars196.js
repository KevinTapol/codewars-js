// Psuedo Code:
//      inputs will be two positive intergers and a string representing a math operator in that order
// Return:
//      the result of the math operation
// Examples:
//      5, 2, "add"      --> 7
//      5, 2, "subtract" --> 3
//      5, 2, "multiply" --> 10
//      5, 2, "divide"   --> 2.5
// Psuedo Code:
//      if the operator is "add" return a + b
//      if the operator is "subtract" return a - b
//      if the operator is "multiply" return a * b
//      if the operator is "divide" return a / b

// my answer
function arithmetic(a, b, operator){
    // if the operator is "add" return a + b
    if(operator == "add"){
        return a + b
    // if the operator is "subtract" return a - b
    }else if (operator == "subtract") {
        return a - b
    // if the operator is "multiply" return a * b
    }else if (operator == "multiply") {
        return a * b
    // if the operator is "divide" return a / b
    }else if (operator == "divide") {
        return a / b
    }
}

// my answer refactored arrow function nested ternaries
const arithmetic = (a,b,o) => o == "add" ? a + b : o == "subtract" ? a - b : o == "multiply" ? a * b : a / b

// best practices is a switch case?
function arithmetic(a, b, operator){
    switch(operator) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
    }
}

// most clever
// here they are creating an object and calling it via the operator
const arithmetic = (a, b, operator) => ({
    'add'     : a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide'  : a / b
  }[operator]);

// using eval with an object
function arithmetic(a, b, operator){
    optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
    return eval(a + optable[operator] + b); 
}

// another object call
function arithmetic(a, b, operator){
    //your code here!
    var mathFun = {
      'add': function (a, b) {
          return a+b;
      },
      'subtract': function (a, b) {
          return a-b;
      },
      'multiply': function (a, b) {
          return a*b;
      }, 
      'divide': function (a, b) {
          return a/b;
      }
    }
  
    return mathFun[operator](a,b);
}

// a function calling a function
function arithmetic(a, b, operator){
    //your code here!
    var mathFun = {
      'add': function (a, b) {
          return a+b;
      },
      'subtract': function (a, b) {
          return a-b;
      },
      'multiply': function (a, b) {
          return a*b;
      }, 
      'divide': function (a, b) {
          return a/b;
      }
    }
  
    return mathFun[operator](a,b);
}


// object call but using the operator as the key value pair return statement
function arithmetic(a, b, operator){
    const cases = {
    add: a + b,
    subtract:  a - b,
    multiply: a * b,
    divide: a / b,
    }
    
    return cases[operator]
}

// same as above but the object is in one line and the key is in quotes
function arithmetic(a, b, operator){
    let actions = {'add': a+b, 'subtract':a-b, 'multiply':a*b, 'divide':a/b}
    return actions[operator]
}