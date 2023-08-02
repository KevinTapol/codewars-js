// Build a square
/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/ 

// Parameters or Edge Cases:
/*
    inputs will be integers greater than 1 and less than 50
    can inputs be empty or null?
*/ 

// Return:
/*
    return a console print put of equal number of rows and columns of '+' of the given input integer
*/ 

// Examples:
/*
    8 => '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'
*/ 

// Pseudocode:
/*
    // declare a string named result with '+' repeated the input integer times
    // declare a string named result concatenating row to a template literal of '\n' to use row as a variable repeated input -1 times
    // return result
*/ 

// my answer
function generateShape(x){
    // declare a string named row with '+' repeated the input integer times
    let row = '+'.repeat(x)
    // declare a string named result concatenating row to a template literal of '\n' to use row as a variable repeated input -1 times
    let result =row + (`\n${row}`).repeat(x-1)
    // return result
    return result
}

// my answer refactored
function generateShape(x){
    return '+'.repeat(x) + (`\n${'+'.repeat(x)}`).repeat(x-1)
}

// my answer refactored arrow fn implicit return Codewars Only
const generateShape = (x) => '+'.repeat(x) + (`\n${'+'.repeat(x)}`).repeat(x-1)

console.log(generateShape(3)) // '+++\n+++\n+++'
console.log(generateShape(8)) // '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'

// best practices and most clever
// using .trim() to eliminate white space
function generateShape(n){
    return ("+".repeat(n)+"\n").repeat(n).trim()
  }

// brute force for loop
function generateShape(int){  
    var ans='';
    for (var i=0; i<int; ++i)
    {
      for (var j=0; j<int; ++j)
        ans+='+';
      if (i!=int-1)
        ans+='\n';
    }
    return ans;
  }

// using array methods to create an array of the input integers. Then creating a shallow copy but with the elements as '+' and repeating input times. Finally, converting back into a string but joining each element on '\n'
let generateShape = int => [...Array(int)].map(_ => "+".repeat(int)).join("\n")

// array methods but suing .fill() instead of .map
function generateShape(int){
    return Array(int).fill(Array(int+1).join('+')).join('\n')
  }

// using Array.from() to create the array and specify the elements 
const generateShape = int => Array.from({length:int}, _ => '+'.repeat(int)).join('\n');