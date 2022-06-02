//Printing Array elements with comma delimiters
// Parameters or Edge cases:
// Return: a string with commas
// Examples:Input: Array of elements ["h","o","l","a"] Output: String with comma delimited elements of the array in the same order. "h,o,l,a"
// Psuedo code: convert array to string using .toString() split each element with a comma inbetween with .split()

//my answer that passed
function printArray(array){
   return array.toString().split(',')
  }

//the answer they wanted uses the .join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
function printArray(array){
    return array.join();
}