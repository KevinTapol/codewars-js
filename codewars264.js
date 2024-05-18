/*
Minimize Sum Of Array (Array Series #1)

Parameters or Edge Cases:
    inputs will be arrays of even length and contain only positive integers
Return:
    the minimum possible sum of products of 2 elements of the entire array
Examples:
    [5,4,2,3] -->  5*2 + 3*4 --> 22
    [12,6,10,26,3,24] --> 26*3 + 24*6 + 12*10 --> 342
    [9,2,8,7,5,4,0,6] --> 9*0 + 8*2 +7*4 +6*5 --> 74
Pseudocode:
    declare a variable named result and set it equal to 0
    sort the array
    while array is not empty or length is greater than 0
    multiply the min and max values from the array and add it to result
    outside of the for loop return result
*/

// My answer
function minSum(arr) {
    let result = 0
    arr.sort((a, b) => a - b)
    console.log(arr)
    while(arr.length >0){
        result += arr.shift()*arr.pop()
    }   
    return result
}

console.log(minSum([12,6,10,26,3,24])) // 342
console.log(minSum([9,2,8,7,5,4,0,6])) // 74

// Best Practices 
/* 
Yes, slice is retruning just [2,3]. But the thing is the reduce methode dosen't work on that array. In this example the reduce method uses the original arr array. The return value from slice would be the fourth argument in the reduce methode (acc,curr,index,array). Because array has only two elements reduce is called only two times. Thats why it works.

From 1) follows that arr.length is 4 for you example and index max value is 1 because it's the index auf the array that was returned from the slice method. So it can't be NaN.
*/
function minSum(arr) {
    return arr.sort( (a,b) => a-b )
              .slice(0, arr.length/2)
              .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
  }

// Most Clever
// using array methods to sort then reduce to iterate through the array while popping off elements resulting in iterating half the length of the original array
const minSum = arr =>
    arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);

// similar to my answer but not using curly brackets in the while loop
function minSum(arr) {
    arr.sort((x,y)=>x-y)
    s=0
    while(arr.length)s+=arr.pop()*arr.shift()
    return s
  }

// declaring a new array and using the spread operator to iterate through the input array
function minSum(arr) {
    let sum = 0;
    let array = [...arr].sort((a, b) => a - b);
    while (array.length) sum += array.pop() * array.shift();
    return sum;
  }

// slicing the array from the front and back 
function minSum(arr) {
    const l = arr.length;
    const sorted = arr.sort((a, b) => b - a);
    const max = sorted.slice(0, l/2);
    const min = sorted.slice(l/2, l).reverse();
    
    return max.reduce((sum, el, i) => sum + el * min[i], 0);
  }

//  using .map() .filter() then .reduce()
function minSum(arr) {
    return arr.sort((a, b) => a - b)
      .map((value, index, array) => {
        // After sorting multiply the first with the last element
        // and the the second with the the penultimate element and so on.
        return value * array[array.length - 1 - index];
      })
      .filter((value, index, array) => {
        // Remove the second half of the array because we created the same
        // product twice.
        return index < array.length / 2; //
      })
      .reduce((total, value) => {
        return total + value;
      })
  }