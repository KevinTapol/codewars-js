// Parameters or Edge Cases:
//      inputs will be intergers and can be negative
// Return:
//       the sum of the absolute value of each of the number's decimal digits
// Examples:
//      10 --> 1
//      99 --> 18
//      -32 --> 5
// Psuedo Code:
//      take in the absolute value of the input integer and convert it into a string
//      convert that string into an array where each digit has its own index 
//      convert the current value added back into a number and return the sum of the integers

// my answer
function sumDigits (num) {
    // take in the absolute value of the input integer and convert it into a string
    return Math.abs(num).toString()
    // convert that string into an array where each digit has its own index
        .split("")
        // convert the current value added back into a number using Number() use , 0 to avoid concatenation and return the sum of the integers
        .reduce((acc,c)=> acc + Number(c) , 0)
}

// my answer refactored arrow function 
const sumDigits = (num) => Math.abs(num).toString().split("").reduce((acc,c)=>acc + Number(c), 0)

// my answer refactored arrow function using + instead of Number()
const sumDigits = (num) => Math.abs(num).toString().split("").reduce((acc,c)=>acc + +c, 0)

// best practices and most clever
// the same as my unrefactored but here they are using a regular function for the reduce method instead of an arrow function and the + instead of Number() to convert the string back into an integer
function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
}

// interesting 2nd best practice is a while loop
function sumDigits(number) {
    var i = 0;
var sum = 0;
number = Math.abs(number)
while(number != 0)
{
        sum += number % 10
    number = Math.floor(number/10)
}
return sum
}

// brute force for loop
function sumDigits(number) {
    // Turn number into absolute value -> Stringify number -> Split at each character
    var values = String(Math.abs(number)).split("");
    // Instantiate variable to hold math result
    var product = null;
    // For each value, add the value to the product
    for (var i = 0; i < values.length; i++) {
      product = product + Number(values[i]);
    }
    // Return the product variable
    return product;
}

// her they are using .replace() to function as removing the - sign from the initial integer input instead of using Math.abs()
const sumDigits = number => String(number).replace('-', '').split('').reduce((prev, curr) => prev + Number(curr), 0);

// using template literals spread and array bracktets to convert to string iterate through each digit and covert to an array to use .reduce()
const sumDigits = number => [...`${Math.abs(number)}`].reduce((pre, val) => pre + +val, 0);

// using isNaN() to check the input integer and parseInt()
function sumDigits(number) {
    var str_num = "" + number;
    
    var result = 0;
    str_num.split('').forEach(function(el) {
      var digit = parseInt(el);
      if(isNaN(digit)) {
        return;
      }
      
      result += digit;
    });
    
    return result;
}

// using a nested ternary inside the .reduce()
function sumDigits(number) {
    return number.toString().split("").reduce(function(sum,n) {
      return n === '-' ? sum : sum+parseInt(n);
    },0);
}

// using forEach instead of .reduce() to add up the individual digits in the array
function sumDigits(number) {
    let result = 0;
    let arr = Math.abs(number).toString().split('');
    arr.forEach(num => {
        result += parseInt(num);
    })
    return result;   
}

// using regex to replace the negative sign for the integer value if it exists
function sumDigits(number) {
    let arr = number.toString().replace(/\D/, "").split('');
    
    return arr.reduce((total, elem) => parseInt(total) + parseInt(elem), 0);
}

// using .match() to convert to an array and regex as the parameters for .match() and typeof for interger
function sumDigits(number) {
    return [...String(number).match(/\d/g)]
      .map(Number)
      .filter((item) => typeof item === 'number')
      .reduce((acc, item) => acc + item);
}