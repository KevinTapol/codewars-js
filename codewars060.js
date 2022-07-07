// Parameters or Edge cases: input is an array of integers and also negative numbers
// Return: a sum of squares
// Examples: [1, 2, 2] should return 9 because 1^2 + 2^2 + 2^2 = 9.
// Psuedo code: .reduce() with the current value squared


//my answer
function squareSum(numbers){
    return numbers.reduce((acc,c)=> acc + (c)**2, 0);
  }

//best practices
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }