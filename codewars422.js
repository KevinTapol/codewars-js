/*
Mirror, mirror, on the wall...
Too long, didn't read
You get a list of integers, and you have to write a function mirror that returns the "mirror" (or symmetric) version of this list: i.e. the middle element is the greatest, then the next greatest on both sides, then the next greatest, and so on...

More info
The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. Your function should not mutate the input array, and this will be tested (where applicable). Notice that the returned list will always be of odd size, since there will always be a definitive middle element.

Examples
[]  -->  []
[1]  -->  [1]
[2, 1]  -->  [1, 2, 1]
[1, 3, 2]  -->  [1, 2, 3, 2, 1]
[-8, 42, 18, 0, -16]  -->  [-16, -8, 0, 18, 42, 18, 0, -8, -16]
[-3, 15, 8, -1, 7, -1] --> [-3, -1, -1, 7, 8, 15, 8, 7, -1, -1, -3]
[-5, 10, 8, 10, 2, -3, 10] --> [-5, -3, 2, 8, 10, 10, 10, 10, 10, 8, 2, -3, -5]

Parameter or Edge Cases:
    inputs will be an array of integers that may be negative or positive

Return:
    return an array where the largest value is the middle element of the array and each character in from ascending to the middle matches from middle to descending

Examples:
  [] --> []
  [1] --> [1]
  [2, 1] --> [1, 2, 1]
  [2, 3, 1] --> [1, 2, 3, 2, 1]
  [-8, 42, 18, 0, -16] --> [-16, -8, 0, 18, 42, 18, 0, -8, -16]
]

Pseudocode:
    sort the input array in ascending order declared as asc
    create a copy of asc named dec using .slice() to remove the last element and reverse the array
    concat des to asc and return it

*/

// My Answer using .slice() to maintain input array integrity
function mirror(data) {
    const asc = data.slice().sort((a, b) => a - b)
    const dec = asc.slice(0,asc.length -1).reverse()
    return asc.concat(dec)
}

// My Answer refactored
function mirror(data) {
    const asc = data.slice().sort((a, b) => a - b)
    return asc.concat(asc.slice(0,asc.length -1).reverse())
}

// My Answer refactored one liner arrow fn with default array using .slice() to maintain array integrity
const mirror = (data, asc = data.slice().sort((a, b) => a - b)) => asc.concat(asc.slice(0,asc.length -1).reverse())

console.log(mirror([2, 1])) // [1, 2, 1]

// Best Practices
// Similar to my answer but instead of using .concat() they use array brackets and a spread operator
function mirror(data) {
    const sort = data.slice().sort((a, b) => a - b);
    return [...sort, ...sort.reverse().slice(1)];
}

// Clever using a .pop() instead of specifying .slice() start and stop
function mirror(data) {
    var result = [].concat(data).sort((a, b) => a - b);
    result.pop();
    return result.concat([].concat(data).sort((a, b) => b - a));
}

// using Array.from() to create a new array
const mirror = data => {
    const sorted = [...data].sort((a, b) => a - b)
    const len = data.length
    const newLen = len * 2 - 1
    const res = Array.from({ length: newLen }, (_, i) => sorted[i] ?? sorted[len - (i - len) - 2])
  
    return res
}