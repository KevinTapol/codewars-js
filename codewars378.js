/*
Sum of Array Averages

Parameters or Edge Cases:
    inputs will be a matrix or 2d array of arrays of numbers
    the numbers will be greater than -100 and less than 100
    the input array may contain up to 50 elements that are 1D arrays

Return:
    return the sum rounded down of the 2D array of the 1d array sums rounded down

Examples:
    [[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]] --> 44
    [[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]] --> -6

Pseudocode:
    create a shallow copy of the input array where each element is the average of the 1D arrays rounded down by adding up all the elements then dividing the sum by the length of each individual 1D array
    add up all of the averages of the 1D array then round down
    return the result

*/

// My Answer
function sumAverage(arr){
    const sum = n => n.reduce((acc, c) => acc + c,0)
    let aveArr = arr.map(e => sum(e)/e.length)
    return Math.floor(sum(aveArr))
}

// My Answer refactoring out .reduce() into default arguments
function sumAverage(arr, sum = n => n.reduce((acc, c) => acc + c,0)){
    return Math.floor(sum(arr.map(e => sum(e)/e.length)))
}

// My Answer refactored one liner arrow fn
const sumAverage = (arr, sum = n => n.reduce((acc, c) => acc + c,0)) => Math.floor(sum(arr.map(e => sum(e)/e.length)))

console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]])) // 44
console.log(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]])) // -6

// Best Practices and Most Clever
// using another fn for summing numbers except a + b instead of also refactoring .reduce() as in my answer
function sumAverage(arr) {
    return Math.floor(arr
            .map(e => e.reduce(sum) / e.length)
            .reduce(sum));
  }
  const sum = (a, b) => a + b;

// using .reduce() twice instead of making a custom .reduce()
const sumAverage = arr => {
    const result = arr.map(x => x.reduce((a, b) => a + b) / x.length).reduce((a, b) => a + b)
    return Math.floor(result)
}

// Brute Force For Loop
function sumAverage(arr) { 
  
    var avgSum = 0;
    for(var i=0;i<arr.length;i++){
      var sum = 0;
      for(var j=0;j<arr[i].length;j++){
        sum += arr[i][j];
      }
      avgSum += (sum / arr[i].length);
    }
    
    return Math.floor(avgSum);
}