/*
Return the Missing Element

Parameters or Edge Cases:
    inputs will be an array of unique single digit integers 0 to 9 excluding one integer meaning the array length will always be 9

Return:
    the missing integer from the array

Examples:
    [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
    [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

Pseudocode:
    declare an array from 0 to 9 named compare
    sort the input array
    loop through the input array comparing each element at index
    if the current element in compare does not equal the element from the input return that element 
*/

// My Answer
function getMissingElement(arr){
   const compare = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   arr.sort((a, b) => a - b)
   for(let i = 0; i <= 9; i++){
    if(compare[i] != arr[i]){
        return compare[i]
    } 
   }
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])) // 8

// Best Practices
// using .indexOf() default -1 return for elements that don't exist
function getMissingElement(superImportantArray){
    for (i = 0; i < 10; i++) {
      if (superImportantArray.indexOf(i) === -1) return i;
    }
}

// Most Clever
// Very clever adding up all the integers from 1-9 to get 45 and set it equal to the default instead of 0. Then subtract each element that does exist in the input to get the missing integer.
function getMissingElement(superImportantArray) {
    return superImportantArray.reduce(function (sum, value) {return sum - value;}, 45);
  }

// arrow fn version of most clever
const getMissingElement = superImportantArray =>
    superImportantArray.reduce((pre, val) => pre - val, 45);

// clever to use filter() and .includes() to return -1 for the missing element
function getMissingElement(superImportantArray){
    return [0,1,2,3,4,5,6,7,8,9].filter(function(n) {
      return superImportantArray.indexOf(n) === -1;
    })[0];
  }

//   using not includes()
function getMissingElement(a){
    for(let i=0;i<10;i++)
      if(!a.includes(i)) return i;
  }

// Similar to Most Clever but using a for loop instead of .reduce((acc, c) => acc - c, 0)
function getMissingElement(superImportantArray){
    var addElements = 0;
    for (i=0;i<superImportantArray.length;i++) {
      addElements+=superImportantArray[i];
    }
    return 45 - addElements;
  }  