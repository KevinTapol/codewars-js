// Parameters or Edge Cases:
//      No floats or non-positive integers will be passed.
//      given an array of minimum 4 positive integers
// Return:
//      the sum of the two lowest positive numbers of the input array
// Examples:
//      describe("Your function", function() {
//          it("should work for basic tests", function() {
//            assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
//            assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
//            assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
//            assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
//            assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
//          });
//      });
// Psuedo Code: 
//      use .sort((a,b) => a - b) on the array to sort the array from lowest to highest value
//      add the values at index 0 and index 1
//      return the sum

// The reason we must specify .sort((a,b) => a - b) instead of using .sort() : The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// my answer
function sumTwoSmallestNumbers(numbers) {  
    let newArr = numbers.sort((a, b) => a - b)
    return newArr[0] + newArr[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))

// my answer arrow function one liner
const sumTwoSmallestNumbers = (numbers) => { let newArr = numbers.sort((a, b) => a - b); return newArr[0] + newArr[1]}

// best practices 
// same as my answer except they used a regular function instead of arrow function
function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
};

// most clever
// declaring and assigning a new array with the first two values of the input array after it's sorted
function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
}

// for loop
// The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (253 – 1).
function sumTwoSmallestNumbers(numbers) {  
    var min = Number.MAX_SAFE_INTEGER;
    var secondMin = Number.MAX_SAFE_INTEGER;
    
    var n;
    for (i = 0; i < numbers.length; i++) {
      n = numbers[i];
      if(n < min) {
        secondMin = min;
        min = n;
      } else if( n < secondMin ) {
        secondMin = n;
      }
    }
    
    return min + secondMin;
}

// arrow function same .sort() but using .slice() to grab the first 2 values then using .reduce() on those values
const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);

// interesting sorting highest to lowest then using .pop() to remove the last two numbers and adding them
function sumTwoSmallestNumbers(numbers) {  
    var lowest = numbers.sort(function(a, b){return b-a}).slice(-2);
    return lowest.pop() + lowest.pop();
};

// similar to most clever except for using spread [...numbers]
// using .filter() to grab only the positive integers (not needed since all inputs will be positive integers)
function sumTwoSmallestNumbers(numbers) {  
    const [a, b] = [...numbers].filter(e => e>= 0).sort((a,b) => a - b);
    return a + b; 
};