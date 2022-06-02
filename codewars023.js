// Parameters or Edge cases:
// Return: Mean of array
// Examples: 1+3+5+7 = 16
// Psuedo code: .reduce() to sum array then divide by array.length 

//my answer
var findAverage = function (nums) {
    // Code here
    let total = nums.reduce((acc, c)=> acc + Number(c), 0)
    return total/nums.length
  }

//full codewars 1 liner
const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;