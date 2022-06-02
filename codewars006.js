//Convert number to reversed array of digits. Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Parameters Edge Cases non negative
// Return an array in reversed order of numbers
// Examples 348597 => [7,9,5,8,4,3] 0 => [0]
// Psuedo Code
function digitize(n) {
    return n.toString().split('').reverse().map(Number);
  }

//.toString(): method returns a string representing the object 
//.split(): method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array
//.reverse(): method reverses an array in place
//.map(): method creates and returns a new array calling a provided function on every array element