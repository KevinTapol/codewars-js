/*
Sum of Odd Cubed Numbers

Parameters or Edge Cases:
    inputs will be an array of integers and strings that can be positive or negative
    will string integers count as integers?

Return:
    sum of the odd numbers within an array, after cubing the initial integers  return undefined if any of the values aren't numbers
Examples:
    [1, 2, 3, 4] --> 28
    [-3,-2,2,3] --> 0
    ["a",12,9,"z",42] --> undefined
Pseudocode:
    iterate through the input array taking only integers and cube them
    return the sum of only the odd integers of the new array
    if there are no odd integers then return undefined
*/

// My Answer
function cubeOdd(arr) {
    let newArr = arr.filter(e => typeof e === "number")
    let badDescription = newArr.map(e => e*e*e).filter(e => e %2 != 0).reduce((acc, c) => acc + c ,0)
    if (newArr.length != arr.length){
        return undefined
    } else {
        return badDescription
    }
}

// My Answer refactored
function cubeOdd(arr) {
    if(arr.some(e => typeof e != "number")){
        return undefined
    } else {
        return arr.filter(e => typeof e === "number" && e % 2 != 0).reduce((acc, c) => acc + (c*c*c),0 )
    }
}

// My Answer refactored to single return
function cubeOdd(arr) {
    return arr.some(e => typeof e != "number") ? undefined : arr.filter(e => typeof e === "number" && e % 2 != 0).reduce((acc, c) => acc + (c*c*c),0 )
}

// My answer One liner arrow fn
const cubeOdd = (arr) =>  arr.some(e => typeof e != "number") ? undefined : arr.filter(e => typeof e === "number" && e % 2 != 0).reduce((acc, c) => acc + (c*c*c),0 )

console.log(cubeOdd(["a",12,9,"z",42])) // undefined
console.log(cubeOdd([1, 2, 3, 4])) // 28
console.log(cubeOdd([-3,-2,2,3])) // 0

// Best Practices and Most Clever
// using .every() and isNaN() instead of .some() and typeof
let cubeOdd = a => {
    var isNumeric = a.every(x=>!isNaN(x))
    return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
  }

// Clean brute force for loop
function cubeOdd(arr) {
    var sum = 0;
    for (var i = 0; i <arr.length; i++){
      var cubed = (arr[i]*arr[i]*arr[i]);
      if (isNaN(cubed)) return undefined;
      if(cubed % 2 != 0 )sum += cubed;
    }
    return sum;
  }

// Using Math.pow(base, power) instead of base*base*base inside .reduce()
function cubeOdd(arr) {
	arr = arr.filter((num) => {return num % 2 != 0});
  arr = arr.reduce((a, b) => a + Math.pow(b, 3), 0);
  return isNaN(arr) ? undefined : arr;
}

// Same as above but using truthy falsy in one return
function cubeOdd(arr) {
    return arr.some(isNaN) ? undefined : arr.reduce((a,b)=> a+(b%2!=0 ? Math.pow(b,3):0),0);
    }

// Very Clever to use % 2 instead of .filter() inside of the .reduce()
const undefiner = v => isNaN(v) ? undefined : v;
const cubeOdd = arr => undefiner(arr.reduce((s, v) => s + v*v%2*v*v*v, 0));

// using .isInteger()
function cubeOdd(arr) {
    let sum = 0
    for (const n of arr) {
      if (!Number.isInteger(n)) {
        return undefined
      }
      if (n & 1) {
        sum += n * n * n
      }
    }
    return sum
  }