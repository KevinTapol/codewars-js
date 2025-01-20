/*
Sort an array by value and index

Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

For sorting the index starts at 1, NOT at 0!
The sorting has to be ascending.
The array will never be null and will always contain numbers.

Example:

Input: 23, 2, 3, 4, 5
Product of value and index:
23 => 23 * 1 = 23  -> Output-Pos 4
 2 =>  2 * 2 = 4   -> Output-Pos 1
 3 =>  3 * 3 = 9   -> Output-Pos 2
 4 =>  4 * 4 = 16  -> Output-Pos 3
 5 =>  5 * 5 = 25  -> Output-Pos 5

Output: 2, 3, 4, 23, 5

Parameters or Edge Cases:
  inputs will be an array of numbers
  the array will never be null and will always contain numbers

Return:
  return the input array sorting the product of the elements and their index in ascending order but returning the elements and not the products

Examples:
    [ 1, 2, 3, 4, 5 ] --> [ 1, 2, 3, 4, 5 ];    
    [ 23, 2, 3, 4, 5 ] --> [ 2, 3, 4, 23, 5 ];    
    [ 26, 2, 3, 4, 5 ] --> [ 2, 3, 4, 5, 26 ];    
    [ 9, 5, 1, 4, 3 ] --> [ 1, 9, 5, 3, 4 ];  

Pseudocode:
  declare an empty array result
  iterate through the input array using the starting index as 1 and not 0 
    multiply the current element by the current index and push an array of the first element being the product and the second the element to result
  sort the 2D array result by the elements products
  return the sorted array as a 1D array of only the elements

*/

// My Answer brute force for loop
function sortByValueAndIndex(array){
  let result = []
  for(let i = 0; i < array.length; i++){
    let product = array[i] * ( i + 1)
    result.push([product, array[i]])
  }let matrix =  result.sort((a, b) => a[0] - b[0])
  return matrix.map(e => e[1])
}

// My Answer refactored
function sortByValueAndIndex(array){
  let result = []
  for(let i = 0; i < array.length; i++){
    let product = array[i] * ( i + 1)
    result.push([product, array[i]])
  }return result.sort((a, b) => a[0] - b[0]).map(e => e[1])
}

// My Answer using array methods
function sortByValueAndIndex(array){
  let result = array.map((e, i) => e = [e * (i + 1), e])
  return result.sort((a, b) => a[0] - b[0]).map(e => e[1])
}

// My Answer array methods  refactored one liner arrow fn
const sortByValueAndIndex = (array) => array.map((e, i) => e = [e * (i + 1), e]).sort((a, b) => a[0] - b[0]).map(e => e[1])

console.log(sortByValueAndIndex([ 23, 2, 3, 4, 5 ])) // [ 2, 3, 4, 23, 5 ]

// Best Practices and Most Clever
// the same as my .map() to create a 2D array .sort() to sort by product and .map() to create a 1D array of the sorted elements but they had product as the 2nd element in the 2D array
function sortByValueAndIndex(array) {
  return array
		.map((x, i) => [x, x * i + x])
		.sort((a, b) => a[1] - b[1])
		.map((a) => a[0])
}

// Clever use of object for .sort() instead of a 2D array
function sortByValueAndIndex(array) {
  return array
    .map((number, index) => ({
      number,
      product: number * (index + 1),
    }))
    .sort((a, b) => a.product - b.product)
    .map((element) => element.number);
}

// clever to use string interpolation to avoid the need to use a 2D array
function sortByValueAndIndex(array){
  let strArr = array.map((e,i) => `${e}*${i+1}`);
  return strArr.sort((a,b) => eval(a)-eval(b)).map(e => +e.split('*')[0]);
}