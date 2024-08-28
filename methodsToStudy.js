/*
Given an array of elements, return an object where each array element is a key and the value is the elements occurrence in the array. 
*/
function checkThreeAndTwo(arr) {
    const counts = arr.reduce((result, key) => {
      result[key] ? result[key]++ : result[key] = 1
      // console.log(result) // logging the result here to show the change to the object result per iteration
      return result
    }, {})
    return counts
  }
  
//  console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])) // {a: 3, b: 2}
//  console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"])) // { a: 5 }
//  console.log(checkThreeAndTwo(["a", "b", "c", "b", "c"])) // { a: 1, b: 2, c: 2 }

/*
Create a unique set of elements of the input array.
*/

function uniqueArr(arr){
    return [...new Set(arr)]
    // return Array.from(new Set(arr))
    // iterate through the array and filter by where the indexOf the element is equal to the element
}
// console.log(uniqueArr(["a", "a", "a", "b", "b"])) // [ 'a', 'b' ]

/*
Take in an object of key value pairs and return a 2d array where each element is an array of each key value pair.
*/
const convertHashToArray = o => Object.entries(o)

console.log(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"})) // [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

/*
Gauss Theorem n(n+1)/2 but for the power of 3 per each element ((n*(n + 1))/2)**2
Return the sum of 1 to the input integer with each element to the power of 3
input n 1^3 + 2^3 + ... + n^3
    2 => 9
    3 => 36
*/
const sumCubes = (n) => ((n*(n + 1))/2)**2

// Alternative Answer
// const sumCubes = n => [...Array(n + 1).keys()].reduce((r, i) => r + i ** 3)

console.log(sumCubes(2)) // 9
console.log(sumCubes(3)) // 36