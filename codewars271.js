/*
Divide and Conquer
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.

Parameters or Edge Cases:
    Inputs will be an array of integers and strings of integers
    test examples lead us to believe the array will not be empty and contain strings and integers
Return:
Examples:
    [9, 3, '7', '3'] --> 2 
    ['5', '0', 9, 3, 2, 1, '9', 6, 7] --> 14               
    ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] --> 13 
Pseudocode:
    declare a variable sum
    Iterate through the array and if the element is an integer, add it to sum. If it is a string, then subtract it from sum.
    Finally return sum.
*/

// My Answer
function divCon(x){
    let sum = 0
    for(index in x){
        if(x[index] === x[index].toString()){
            sum -= x[index]
        }else {
            sum += x[index]
        }
    }return sum
}

// My Answer refactored using .reduce()
function divCon(x){
    return x.reduce((acc,c) => c !== c.toString() ? acc + c : acc -Number(c), 0)
}

// My Answer One Liner Arrow fn
const divCon = (x) => x.reduce((acc, c) => c !== c.toString() ? acc + c : acc - Number(c), 0)

console.log(divCon([9, 3, '7', '3'])) // 2

// Best Practices and Most Clever
// similar to my .reduce() but using typeof instead of .toString() to compare elements
function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }

//   using typeof and parseFloat()
function divCon(x){
    let numValue = 0;
    let strValue = 0;
    
    for(let i = 0; i < x.length; i++) {
      if(typeof(x[i]) === 'string' ) {
        strValue += parseFloat(x[i]);
      } else if(typeof(x[i]) === 'number' ) {
        numValue += x[i];
      }
    }
    return numValue - strValue;
  }

// using .reduce() on the integers and strings separately then subtracting
function divCon(x){
    const strings = x.filter(n => typeof n === 'string')
    const nums = x.filter(n => typeof n === 'number')
    
    const strSum = strings.reduce((acc, str) => acc += +str, 0)
    const numSum = nums.reduce((acc, str) => acc += str, 0)
  
    return numSum - strSum
  }

// arrow fn with .filter to separate the strings from nums in different .reduce then subtracting them
var divCon = ($) => $.filter( el => typeof el === 'number').reduce((a, b)=> a+b, 0) - $.filter( el => typeof el === 'string').reduce((a, b)=> +a + +b, 0)

// using + to convert from string to int and int to string
const divCon=x=>x.reduce((a,b)=>a+(0+b==b?b:-+b),0)

// key words of for loop to access elements use let element of string
// for(let element of array) for (let index in array)
function divCon(x){
    let str = x.filter(el => typeof(el) === 'string');
      let sum = 0;
      for(let el of str){
        sum += +el;
      }
      let num = x.filter(el => typeof(el) === 'number');
      let numS = 0;
      for(let el of num){
        numS += +el;
      }
      return numS - sum;
    }

// using .map() to create a copy then using .reduce()
// This is important because .map() does not manipulate the input directly.
const divCon=(x)=>x.map(a => a===Number(a) ? a: Number(a)*-1).reduce((a,b)=> a+b)