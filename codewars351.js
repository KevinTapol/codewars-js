/*
Find Duplicates
Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

Parameters or Edge Cases:
    inputs will be arrays that can be empty
    elements of the array can be strings or integers
    elements may be duplicates
    string representations of integers will not be considered duplicates of each other

Return:
    return a unique array of elements that occur more than once from the input array while maintaining the order

Examples:
    [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
    [0, 1, 2, 3, 4, 5]                ==>  []
    [] ==>  []

Pseudocode:
    create a copy of the input array to be modified named result
    create a copy of unique values from the input array named unique
    iterate the length of the unique set and find the index of the first instance of the element from the array result and set the element equal to an empty string
    create a unique set from the result array and return it
*/

// My Answer
function duplicates(arr) { 

    let result = arr
    let unique = [...new Set(arr)]

    for (let i = 0; i < unique.length; i++) {
        let index = result.findIndex(e => e === unique[i])

        if (index !== -1) {
            result[index] = ""
        }
    }
    return [...new Set(result.filter(e => e !== ""))]
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"])) // [4, 3, 1]

// IMO Best Practices and Most Clever
/* 
Filter the input array where the current index is not equal to the indexOf() the current element. This creates an array of duplicates removing the first occurrence of the duplicates. Then using [...new Set()] to create a unique array of the array of duplicates.
*/
const duplicates = arr => [...new Set(arr.filter((el, i) => i !== arr.indexOf(el)))];

// Best Practices and Most Clever
/* 
    using inputArray.reduce((acc, c, input, array) =>  {
    if the current index is not equal to the index of the current element c AND the current element does not exist in the accumulative array acc   then push the current element to the accumulative array acc
    }, [])
*/
function duplicates(arr) {
    return arr.reduce(function(prev, cur, i, a) {
      if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
        prev.push(cur);
      }
      return prev;
    }, []);
  }

function duplicates(arr) {
    return arr.reduce((prev, cur, i, a) => {
      if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
        prev.push(cur);
      }
      return prev;
    }, []);
}

// using new Map() and new Set() 
const  duplicates = arr => {
    let map = new Map();
    let set = new Set();
    arr.forEach(e => {
      map.get(e) ? set.add(e) : map.set(e, true)
    })
    return Array.from(set)
}

// using .forEach
function duplicates(array) {
    var result = [], counts = new Map();
    array.forEach(function(x) {
        var c = (counts.get(x) || 0) + 1;
        if (c === 2)
          result.push(x);
        counts.set(x, c);
      });
    return result;
}

// using .filter() with indexOf() conditionals
function duplicates(arr) {
    return arr.filter((el, i) => i !== arr.indexOf(el) && i === arr.indexOf(el, arr.indexOf(el) + 1))
};

// using .includes()
function duplicates(arr) {
    let x = [];
    let y = [];
  
    arr.forEach((i) => {
        if (x.includes(i) === false) return x.push(i);
        if (x.includes(i) && y.includes(i) === false) return y.push(i);
    })
  
    return y
}

// very clever using indexOf(e) < i
function duplicates(arr) {
    return [...new Set(arr.filter((e,i)=>arr.indexOf(e)<i))]
}