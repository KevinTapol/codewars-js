/*
What dominates your array?

A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

Parameters or Edge Cases:
    inputs will be an array of integers greater than 0

Return:
    return the integer element that occurs more than half the length of the array and if there isn't one then return -1

Examples:
    [3,4,3,2,3,1,3,3] --> 3
    [1,2,3,4,5] --> -1
    [1,1,1,2,2,2] --> -1
    [1,1,1,2,2,2,2] --> 2

Pseudocode:
    create a unique array of elements
    iterate the length of the unique array creating a shallow copy of hte input array filtering only the current element
    if the copy length is greater than half the length of the original input length then return that element
    outside of the for loop return -1
*/

// My Answer (timed out)
function dominator(arr) {
    const uArr = [...new Set(arr)]
    for(let i = 0; i <= uArr.length; i++){
        if(arr.filter(e => e === uArr[i]).length > Math.floor(arr.length/2)){
            return uArr[i]
        }
    }
    return -1
}

// My Answer creating an object of key value pairs of occurrences, converted to matrix, sorted by count and either returning the element that occurs more than half of the length of the input array or -1
function dominator(arr) {
    const counts = arr.reduce((result, key) => {
      result[key] ? result[key]++ : result[key] = 1
      return result
    }, {})
    const maxVal = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]
    return maxVal[1] > arr.length/2 ? Number(maxVal[0]) : -1
}

// My Answer using .reduce() to create a matrix instead of an object to be converted to a matrix
// const matrix = [ [ 3, 5 ], [ 1, 1 ], [ 2, 1 ], [ 4, 1 ] ]
function dominator(arr) {
    const countMatrix = arr.reduce((matrix, key) => {
        const found = matrix.find(e => e[0] === key)
        found ? found[1]++ : matrix.push([key, 1])
        return matrix
    }, [])
    const maxVal = countMatrix.sort((a, b) => b[1] - a[1])[0]
    return maxVal[1] > arr.length/2 ? maxVal[0] : -1
}

console.log(dominator([3,4,3,2,3,1,3,3])) // 3
console.log(dominator([1,1,1,2,2,2])) // -1

// Best Practices
// declaring local variables inside of the for loop start stop step condition logic instead of inside of the brackets {}
function dominator(arr) {
    arr.sort();
    for (var i = 0, v = 0, c = 0; i < arr.length; i++) {
       if (v == arr[i]) c++;
       else { 
         v = arr[i];
         c = 1;
       }
       if (c > arr.length / 2) return v;
    }
    return -1;
}

// Most Clever
/*
    only 1 iteration for loop with a conditional check
    similar to my .reduce() to create an object of key and count except using the logic of Best Practices inside the for loop with a conditional check to see if the value of the object aka count of key is greater than the half the length of the input array
*/ 
function dominator(arr) {
    for(let i=0, obj={}; i<arr.length; i++){
        obj[arr[i]]=obj[arr[i]]+1||1
        if(obj[arr[i]]>arr.length/2) return arr[i]
    }return -1 
}

/*
    .forEach() instead of .reduce() to create an object 
    iterating through the object with a for loop with the current element being the key of the key value pairs
    they are using + in the return to convert the key string into a number instead of Number()
*/ 
const dominator = arr => {
    let count  = {};
    arr.forEach(el => {
      count[el] ? count[el]++ : count[el] = 1;
    })
    for (let k in count) {
      if (count[k] > arr.length/2) return +k
    }
    return -1;
 }

// essentially a one liner version of Most Clever but using .find()
function dominator(array) {
    const counts = {};
    return array.find(value => (counts[value] = (counts[value] + 1 || 1)) > array.length / 2) || -1;
}

// similar to my .reduce() to create an object but using a for loop instead of a .sort()
const dominator = function( arr ) {
    const dic = arr.reduce( (a, i)=> (a[i] = a[i] + 1 || 1, a), {})
    for ( const i in dic ){
      if ( dic[i] > arr.length / 2 ){
        return Number(i)
      }
    }
    return -1
}

/*
    declaring mid point index and a sorted array asc
    grabbing the last index of the element that is at the middle of the sorted array then subtracting that value by the index where the element first occurs
    comparing that difference to half the length of the input array
    if the comparison is greater then return the comparison else -1
*/ 
function dominator(arr) {
    let mid = Math.floor(arr.length / 2)
    let cmp = Array.from(arr).sort();
    return cmp.lastIndexOf(cmp[mid]) - cmp.indexOf(cmp[mid]) >= mid ? cmp[mid] : -1;
}

// similar to my .reduce() creating an object except using a for loop breaking down current element into an array of key value elements
function dominator(arr) {
    const numberCount = arr.reduce((tallyOfNums, currentNum) => {
      tallyOfNums[currentNum] = ++tallyOfNums[currentNum] || 1;
      return tallyOfNums;
    }, {});
    for (const [key, value] of Object.entries(numberCount)) {
      if (value > arr.length / 2) return parseInt(key)
      }
    return -1
}