// Parameters or Edge cases: given array contains integers
        // If the input is an empty array or is null, return an empty array.
// Return: return an array 1st element is the count of positive numbers and the 2nd element is the sum of negative numbers
// Examples: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], should return [10, -65]
// Psuedo code: check if array is null or empty and return an empty array
                //declare variable sum and count equal to 0
                //loop through the array and for every pos int add 1 to count
                //for every negative int add the value to sum
                //set array index of 0 to count and array index of 1 to sum
                //return the 2 element array

// my answer
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
      return []
    }
    let count = 0
    let sum = 0
    for (let i = 0; i < input.length; i++) {
       if (input[i] > 0) {
        count++
      } else {
        sum += input[i]
      }
    }
    return [count, sum]
}

//best practices
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

//most clever 
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}