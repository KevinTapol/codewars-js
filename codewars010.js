// Parameters or Edge cases: input and outputs are only integers
// Return: sum of 2 arrays
// Examples: none
// Psuedo code: .concat() 2 arrays reduce() new array

function arrayPlusArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    return arr3.reduce((acc, c) => acc + Number(c), 0)
 }
  