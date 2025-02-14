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
    reverse asc declared as des and remove the first element
    concat des to asc and return it

*/

// My Answer
function mirror(data) {
    let asc = data.slice().sort((a, b) => a - b)
    let dec = asc.slice().reverse()
    // dec.shift()
    return asc
}
console.log(mirror([2, 1])) // [1, 2, 1]