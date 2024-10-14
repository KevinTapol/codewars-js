/*
Max-min arrays

Parameters or Edge Cases:
    inputs will be arrays of integers

Return:
    return an array of the input array where the max int in descending order are in the even indexes and the min int values ascending are in the odd indexes

Examples:
    [15,11,10,7,12] --> [15,7,12,10,11]
    [91,75,86,14,82] --> [91,14,86,75,82]
    [84,79,76,61,78] --> [84,61,79,76,78]
    [52,77,72,44,74,76,40] --> [77,40,76,44,74,52,72]
    [1,6,9,4,3,7,8,2] --> [9,1,8,2,7,3,6,4]
    [78,79,52,87,16,74,31,63,80] --> [87,16,80,31,79,52,78,63,74]

Pseudocode:
    create a copy of the input array sorted in descending order
    declare an empty array named result
    iterate through the length of the descending array
        if the current index is even then grab the first element of the descending array with shift and push it to result
        if the current index if odd then grab the last element of the descending array with pop and push it to result
    return result 
*/

// My Answer
function solve(arr){
    let result = []
    let sortArr = arr.sort((a,b) => b - a)
    
    while(arr.length != 0){
            result.push(sortArr.shift())
            result.push(sortArr.pop())    
    }return result.filter(e => e != undefined)
}

console.log(solve([15,11,10,7,12])) // [15,7,12,10,11]
console.log(solve([78,79,52,87,16,74,31,63,80])) // [87,16,80,31,79,52,78,63,74]
console.log(solve([9, 1, 8, 2, 7, 3, 6, 4])) // [9, 1, 8, 2, 7, 3, 6, 4]

// Best Practices
// for loop instead of a while loop using 2 variables one incrementing and another decrementing to meet in the middle of the sorted array
function solve(arr){
    var minMax = [];
    arr.sort((a,b)=>a-b);
    for(var i = 0, j = arr.length-1; i <= j; i++,j--){
      if(i != j) minMax.push(arr[j]), minMax.push(arr[i]);
      else minMax.push(arr[i]);
    }
    return minMax;
}

// Most Clever
// very clever to create an empty array length of the input then .map() to fill the array with the elements removed from the sorted array based on index value
const solve = arr => [...Array(arr.sort((a, b) => a - b).length)].map((_, idx) => idx % 2 ? arr.shift() : arr.pop());

// while loop better than my answer using slice() instead of shift() and pop() and taking into account of 1 element left in the array instead of using .filter() to remove potential undefined for even length arrays
function solve(arr){
    let result = []
   
    while(arr[0]){
      let max = Math.max.apply(Math,arr)
      let min = Math.min.apply(Math,arr)
      
      if(arr.length === 1){
        result.push(arr[0])
      } else {
         result.push(max)
         result.push(min)
      }
      
  
      arr.splice(arr.indexOf(max) , 1)
      arr.splice(arr.indexOf(min) , 1)
     
    }
    return result
};