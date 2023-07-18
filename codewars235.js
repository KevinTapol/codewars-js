// Predict your age!
/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.
*/ 

// Parameters or Edge Cases:
/*
    inputs will be 8 positive integers
    inputs will not be empty or null
*/ 

// Return:
/*

*/ 

// Examples:
/*
    65,60,75,55,60,63,64,45 => 86
*/ 

// Pseudocode:
/*
    // declare a variable integer named result and set it equal to the sum of the products of each input multiplied by itself
    // take the square root of result, divide it by 2 and round down
    // return result
*/ 

// my answer
function predictAge(a1, a2, a3, a4, a5, a6, a7, a8) {
    // declare a variable integer named result and set it equal to the sum of the products of each input multiplied by itself
    let result = a1*a1 + a2*a2 + a3*a3 + a4*a4 + a5*a5 + a6*a6 + a7*a7 + a8*a8
    // take the square root of result, divide it by 2 and round down
    result = Math.floor((result**0.5)/2)
    // return result
    return result
}

// my answer refactored
function predictAge(a1, a2, a3, a4, a5, a6, a7, a8){
    return Math.floor(((a1*a1 + a2*a2 + a3*a3 + a4*a4 + a5*a5 + a6*a6 + a7*a7 + a8*a8)**0.5)/2)
}

// arrow fn implicit return
const predictAge = (a1, a2, a3, a4, a5, a6, a7, a8) => Math.floor(((a1*a1 + a2*a2 + a3*a3 + a4*a4 + a5*a5 + a6*a6 + a7*a7 + a8*a8)**0.5)/2)

console.log(predictAge(65,60,75,55,60,63,64,45)) // 86

// best practices
// put each input into an array
// create a copy of the array with each element as the product of multiplying itself
// use .reduce() to add up the array copy
// Math.sqrt() to take the square root instead of to the power of 0.5
// round down with Math.floor()
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
    return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
}

// most clever
// use (...ages) to iterate through all the inputs
// Math.hypot() method returns the Euclidean norm sqrt(x1*x1 + x2*x2 +x3*x3 .... xn*xn)
const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;

// very important lesson here!!
// declare an array of elements of the inputs using let array = [...arguments]
// then using the array, create a copy with .map() where each element is the product of each element multiplied by itself
// .reduce() to sum the array
// Math.sqrt() to square root the sum
// divide by 2 and round down with Math.floor()
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let sum = [...arguments]
      .map(x=>x**2)
      .reduce((sum,v)=>sum+v,0)
    return Math.floor( Math.sqrt(sum)/2 )
  }

// clever imo
// using ...a to refer each input as a
// ~~ returns the truncated integer value of a 32bit signed value similar to >>
function predictAge(...a){
    return ~~(a.reduce((a,x)=>a+x*x,0)**0.5/2)
  }

// spread operator with a for loop
function predictAge(...age){
    var sum = 0
    for(var i = 0;i<age.length;i++){
    sum = (age[i] * age[i]) + sum 
    }
    
   return Math.floor( Math.sqrt(sum) / 2)
    
  }

// >>0 takes only the integer value but 0 is not necessary only >>
function predictAge(...n){
    return (Math.hypot(...n)/2)>>0 
 }