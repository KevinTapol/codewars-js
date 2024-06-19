/*
Product Array (Array Series #5

Parameters or Edge Cases:
    input arrays length will be greater than or equal to 2
    elements will be positive integers
    input arrays may contain duplicates

Return:
    return an array of the same length of the input array with elements being the product of all the other elements in the input array except the current element of the input array

Examples:
    [12,20]  -->  [20,12]
    [3,27,4,2]  -->  [216,24,162,324]
    [13,10,5,2,9]  -->  [900,1170,2340,5850,1300]
    [16,17,4,3,5,2]  -->  [2040,1920,8160,10880,6528,16320]

Pseudocode:
    declare an empty array named result
    inside a for loop declare a local array copy of the input array named arr
    iterate through the input array splicing the current element and set the new array equal to the local for loop array arr
    multiply all the elements of the array and push the product to the global array result
    outside of the for loop return the array result
    return the new array
*/

// My Answer
function productArray(numbers){
    let result = []
    for(let i = 0; i < numbers.length; i++){
        let arr = numbers.slice(0, i).concat(numbers.slice(i, numbers.length))
        arr.splice(i, 1)
        num = arr.reduce((acc, c) => acc * c, 1)
        result.push(num)        
    }
    return result
}

console.log(productArray([12,20])) // [20,12]
console.log(productArray([3,27,4,2])) // [216,24,162,324]
console.log(productArray([13,10,5,2,9])) // [900,1170,2340,5850,1300]

// Best Practices and Most Clever
// Very Clever create a copy of the array with .reduce() but dividing by the current element instead of removing it entirely. Friggin Genius. Why didn't I think of this?
function productArray(numbers){
    return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
}

// Same idea as best practices and most clever but iterating through the array and dividing by the element afterwards instead of during
function productArray(numbers) {
  var product = numbers.reduce((x, y) => x * y);
  return numbers.map(x => product / x);
}

// Same as above but using a for loop for the division of the current element
function productArray(numbers){
    let newarr = [];
    let mult = numbers.reduce((a, b) => a * b);
    
    for (let i = 0; i < numbers.length; i++) {
      newarr.push(mult/numbers[i]);
    }
    
    return newarr;
  }

// similar to my idea of using a local array variable inside a for loop and resetting it each iteration
function productArray(nums, arr = []){
    for (let i=0; i < nums.length; i++){
      let temp = [...nums];
      temp[i] = 1;
      arr.push(temp.reduce((a, b)=> a * b, 1))
    }
    return arr
  }

// similar to my answer but using .filter() instead of .slice()
function productArray(numbers){
    //your code here
    let newArr = [];
     for(let i = 0;  i < numbers.length;i++){
     let currNumber= numbers[i]
     let c = numbers.indexOf(currNumber)
     
     let filter = numbers.filter((x,index) => index!==c)
     let total = filter.reduce((a,c) => a * c)
     newArr.push(total)
    }
    return newArr
  }

// brute force nested for loop using only .push()
function productArray(numbers){
    const multiplyArray = [];
  
    for (let i = 0; i < numbers.length; i++) {
      let multiply = 1;
  
      for (let j = 0; j < numbers.length; j++) {
        if (i === j) {
          continue;
        }
        multiply *= numbers[j];
      }
  
      multiplyArray.push(multiply);
    }
  
    return multiplyArray;
  }