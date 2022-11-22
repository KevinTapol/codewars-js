// Parameters or Edge Cases:
//      given 3 input integers greater than 0 start, stop, step inclusively
//      If begin value is greater than the end, function should returns 0
// Return:
//      the sum of a sequence of integers
// Examples:
//      2,2,2 --> 2
//      2,6,2 --> 12 (2 + 4 + 6)
//      1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
//      1,5,3  --> 5 (1 + 4)
// Psuedo Code:
//      declare a global variable for math operations and set it equal to 0
//      create a for loop setting the start of the for loop where i is equal to the first input
//      ending at i less than or equal to the second input
//      and incrementing where i is equal to i plus the third input
//      inside the for loop set the global variable equal to the global variable plus i 
//      outside the for loop return the global variable

// my answer
function sequenceSum (begin, end, step) {
    // declare a global variable for math operations and set it equal to 0
    let total = 0
    // create a for loop setting the start of the for loop where i is equal to the first input
    // ending at i less than or equal to the second input
    // and incrementing where i is equal to i plus the third input
    for(let i = begin; i <= end; i+=step){
        // inside the for loop set the global variable equal to the global variable plus i 
        total += i
    // outside the for loop return the global variable    
    }return total
}

console.log(sequenceSum(2,2,2)) //2
console.log(sequenceSum(2,6,2)) //12
console.log(sequenceSum(1,5,1)) //15
console.log(sequenceSum(1,5,3)) //5

// my answer refactored arrow function
const sequenceSum = (begin, end, step) => {let total = 0;for(let i = begin; i <= end; i+=step){total += i}return total}

// best practices same as my refactored but with different variable names and spacing
const sequenceSum = (begin, end, step) => {
    var sum = 0;
    for(var i=begin;i<=end;i+=step)
    {
      sum += i;
    }
    return sum;
};

// most clever
// the function calls itself adding the previous value begin + calling the function again except where first input + step is now the new first input
const sequenceSum = (begin, end, step) => {
    if (begin > end) {
      return 0;
    }
    return begin + sequenceSum(begin + step, end, step);
  };

// same as above but ternary instead of if statement
sequenceSum = (b, e, s) =>  b > e ? 0 : b + sequenceSum(b + s, e, s);

// using Math.floor()
const sequenceSum = (begin, end, step) => {
    if (begin > end)
      return 0;
    const n = Math.floor((end - begin) / step) + 1;
    return (2 * begin + step * (n - 1)) * n / 2;
};

// same as above but using ternary instead of if statement
const sequenceSum = (begin, end, step) => {
    return begin > end ? 0 : begin + sequenceSum(begin + step, end, step)
};

// while loop
function sequenceSum(begin, end, step) {
    if (begin < end) {
      let sum = 0;
      
      while (begin <= end) {
        sum += begin;
        begin += step;
      }
      
      return sum;
    } else {
      return 0;
    }
}

// using array menthods Array.from() and .reduce()
const sequenceSum = (begin, end, step) => {
    return end < begin ? 0 : Array.from({length:(end-begin)/step+1},(_,i)=> begin + step * i).reduce((a,b)=>a+b);
};