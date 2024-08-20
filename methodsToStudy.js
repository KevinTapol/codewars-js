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
console.log(uniqueArr(["a", "a", "a", "b", "b"])) // [ 'a', 'b' ]