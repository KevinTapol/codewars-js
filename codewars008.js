// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Parameters or Edge cases: if both arrays empty return empty array integers only they may have same integers remove duplicates
// Examples: [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Return: sorted in asc order array of 2 merged arrays
// Psuedo code: if() array has no length return no an array with no length 
//else .concat() both arrays, new Set() to eliminate duplications, .from to create new array, .sort to sort array ascending order 

function mergeArrays(arr1, arr2) {
    if (arr1.length == 0 && arr2.length == 0) {
      return [];
    } else {
       return Array.from(new Set(arr1.concat(arr2))).sort((a,b) => a - b);   
      }
  }

  //first if both arrays are emtpy then return an empty array
  //else if 
  //.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
  //Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.
  //.concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
  //.sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
