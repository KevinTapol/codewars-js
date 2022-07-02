// Parameters or Edge cases: given a number can be positive or negative
// Return: a negative number
// Examples: makeNegative(1);    // return -1
            //makeNegative(-5);   // return -5
            //makeNegative(0);    // return 0
            //makeNegative(0.12); // return -0.12
// Psuedo code: arrow function ternary num < 0 ? return the num : multiply by -1 and return the result

//my answer
const makeNegative = (num) => num < 0 ? num : -num

//best practices
function makeNegative(num) {
    return -Math.abs(num);
  }
  
