// Most digits
/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/ 

// Parameters or Edge Cases: 
/*
    inputs will be integers
    can inputs be negative?
    can inputs be empty or null?
*/ 

// Return:
/*
    the first occurrence of the element with the most digits
*/ 

// Examples:
/*
    [1, 10, 100] => 100
    [9000, 8, 800] => 9000
    [8, 900, 500] => 900
*/ 

// Pseudocode:
/*
    // create a shallow copy array named arrLen of the input array but of length of elements
    // declare a variable maxLen of the max length element in the copy
    // find the first occurrence maxLen index and declare it as a variable maxI
    // return maxI of the input array 
*/ 

// my answer
function findLongest(array){
    // create a shallow copy array named arrLen of the input array but of length of elements converted to string
    let arrLen = array.map(e => e.toString().length)
    // declare a variable maxLen of the max length element in the copy
    let maxLen = Math.max(...arrLen)
    // find the first occurrence maxLen index and declare it as a variable maxI1
    let maxI = arrLen.indexOf(maxLen)
    // return maxI of the input array 
    return array[maxI]
}

// my answer refactored
function findLongest(array){
    return array[array.map(e => e.toString().length).indexOf(Math.max(...array.map(e => e.toString().length)))]
}

// my answer refactored arrow fn implicit return Codewars Only
const findLongest = (a) => a[a.map(e => e.toString().length).indexOf(Math.max(...a.map(e => e.toString().length)))]

console.log(findLongest([1, 10, 100])) // 100
console.log(findLongest([9000, 8, 800])) // 9000
console.log(findLongest([8, 900, 500])) // 900

// best practices and most clever using template literals for string conversion
/*
 .reduce(a,b) - a is the accumulator which default is set to the first index making b the next index. (There are other cases where you can set up what the initial accumulator value is, but default I think it works like this, a index 0 and b index 1) so it compares ${b} which is b as a string.length against the accum, a. if length of b is greater than length of a ? return b : if not return a. Return as in set the current accumulator to that value. So given findLongest([7, 8999, 9000, 8, 800]). it checks if 8999.length > 7.length and sets the running accumulator to 8999. then goes through and checks against all the remaining values. is 9000.length > 8999.length --- no. so set set accum as 8999. continue. is 8.length> 8999.length --- no and so on. checks the current accumulator against the next index.
*/
const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);

// similar to best practices and most clever but using String() instead of template literals
function findLongest(array){
    return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
}

// for loop  initially assigning a global variable to 0 and reassigning each time a larger digit integer is found
// parseInt() parses a value as a string and returns the first integer
function findLongest(array){
    let num = '0';
    for(let i=0; i<array.length; i++) {
      let string = array[i].toString();
      if(string.length > num.length) {
        num = string;
      }
    }
    return parseInt(num);
  }

// sorting the array and returning the first element
function findLongest(array){
    var newArr = array.map(function(element) {
      return element.toString()
    })
    newArr.sort(function(a,b) {
      return b.length - a.length
    })
    return parseInt(newArr[0])
    }

// one liner of above
findLongest = arr => arr.sort((a,b) => (b+'').length - (a+'').length)[0]