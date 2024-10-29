/*
Find all non-consecutive numbers

Your task is to find all the elements of an array that are non consecutive.

A number is non consecutive if it is not exactly one larger than the previous element in the array. The first element gets a pass and is never considered non consecutive.

Create a function named allNonConsecutive

E.g., if we have an array [1,2,3,4,6,7,8,15,16] then 6 and 15 are non-consecutive.

You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.

E.g., for the above array the result should be:

[
  {i: 4, n:6},
  {i: 7, n:15}
]

Parameters or Edge Cases:
    inputs will be an array of numbers that can be positive and/or negative
    array length can be 1

Return:
    if the input array contains only consecutive elements or the length of the input array is 1 then return an empty array
    else return an array of each element and it's index that is not consecutive from the input array as an array of objects where each object contains 2 value pairs. The first being index represented by i and the value being the index of the non consecutive element. The second being the element itself where n is the key and the element is the value.

Examples:
    [1,2,3,4,6,7,8,15,16] --> [{i: 4, n:6}, {i: 7, n:15}]
    [1,2,3,4,6,7,8,10] --> [{i: 4, n:6}, {i: 7, n:10}]

Pseudocode:
    NOTE comparing values to next value so stop short of last index because there is no value to compare to final element. Also, the first element is excluded!

    declare an empty array result
    iterate through the input array
        declare an empty local variable obj 
        for each non consecutive element set the obj to two key value pairs where the first key being the static string 'i' has the value of the index and the second key being the static string 'n' has the value of the element
        push the obj to the array result
    return the array result

*/

// My Answer
function allNonConsecutive (arr) {
    let result = []

    for(let i = 0; i < arr.length - 1; i++){
        let obj = {}
        if(arr[i] + 1 != arr[i+1]){
            obj['i'] = i + 1
            obj['n'] = arr[i+1]
            result.push(obj)
        }
    }return result
}

// My Answer using .reduce()
function allNonConsecutive (arr){
    return arr.reduce((acc, c, i) => {
        let obj = {}
        if(c + 1 != arr[i+1] && i < arr.length -1){
            obj['i'] = i + 1
            obj['n'] = arr[i+1]
            acc.push(obj)
        }
        return acc
    }, [])
}

// My Answer .reduce() one liner arrow fn
const allNonConsecutive = arr => arr.reduce((acc, c, i) => { let obj = {}; if(c + 1 != arr[i+1] && i < arr.length -1){obj['i'] = i + 1;obj['n'] = arr[i+1];acc.push(obj)} return acc}, [])


function allNonConsecutive(arr){
    return arr.map((e, i) => e + 1 != arr[i+1] && i < arr.length -1 ? ({ ['i']: i + 1, ['n']: arr[i+1]}) : undefined).filter(e => e != undefined)
}

// My Answer one liner arrow fn
const allNonConsecutive = arr => arr.map((e, i) => e + 1 != arr[i+1] && i < arr.length -1 ? ({ ['i']: i + 1, ['n']: arr[i+1]}) : undefined).filter(e => e != undefined)

console.log(allNonConsecutive([1,2,3,4,6,7,8,15,16])) // [{i: 4, n:6}, {i: 7, n:15}]
console.log(allNonConsecutive([1,2,3,4,6,7,8,10])) // [{i: 4, n:6}, {i: 7, n:10}]

// Best Practices
// using .forEach()
function allNonConsecutive (arr) {
    let result = [];
    arr.forEach((val, index) => {
        if (val !== arr[index - 1] + 1 && index) {
            result.push({i: index, n: val});
        }
    });
    return result;
}

// Most Clever
// using .reduce() comparing current value to previous instead of current and next
function allNonConsecutive(arr) {
    return arr.reduce((xs, n, i) => i > 0 && n - 1 !== arr[i - 1] ? [...xs, {i, n}] : xs, [])
}

// clever .map() .reduce() comparing current element with previous
function allNonConsecutive (arr) {
    return arr.map((n, i) => ({ i, n })).filter((v, i, a) => (i !== 0 && a[i - 1].n != (v.n - 1)))
}

// similar to Best Practices but using a for loop instead of .forEach()
function allNonConsecutive(arr) {
    var newArr = [];
    for (i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + 1) {
        newArr.push({ i: i, n: arr[i] });
      }
    }
    return newArr;
}