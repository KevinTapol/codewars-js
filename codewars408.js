/*
The Poet And The Pendulum

Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

The Smallest element of the list of integers , must come in center position of array/list.

The Higher than smallest , goes to the right .
The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.

Array/list size is at least 3 .

In Even array size , The minimum element should be moved to (n-1)/2 index (considering that indexes start from 0)

Repetition of numbers in the array/list could occur , So (duplications are included when Arranging).

Input >> Output Examples:
pendulum ([6, 6, 8 ,5 ,10]) ==> [10, 6, 5, 6, 8]
Explanation:
Since , 5 is the The Smallest element of the list of integers , came in The center position of array/list

The Higher than smallest is 6 goes to the right of 5 .

The Next higher number goes to the left of minimum number and So on .

Remember , Duplications are included when Arranging , Don't Delete Them .

pendulum ([-9, -2, -10, -6]) ==> [-6, -10, -9, -2]
Explanation:
Since , -10 is the The Smallest element of the list of integers , came in The center position of array/list

The Higher than smallest is -9 goes to the right of it .

The Next higher number goes to the left of -10 , and So on .

Remeber , In Even array size , The minimum element moved to (n-1)/2 index (considering that indexes start from 0) .

pendulum ([11, -16, -18, 13, -11, -12, 3, 18]) ==> [13, 3, -12, -18, -16, -11, 11, 18]
Explanation:
Since , -18 is the The Smallest element of the list of integers , came in The center position of array/list

The Higher than smallest is -16 goes to the right of it .

The Next higher number goes to the left of -18 , and So on .

Remember , In Even array size , The minimum element moved to (n-1)/2 index (considering that indexes start from 0) .

Parameters or Edge Cases:
    inputs will be an array of a minimum size of 3
    elements will be integers and may not be unique

Return:
    return the input array rearranging the integers with the lowest value at the center using the formula for either even or odd parseInt((array.length -1) /2) and in ascending order put the next lowest to the right and to the left repeated till all elements used

Examples:
    [6, 6, 8 ,5 ,10] --> [10, 6, 5, 6, 8]
    [11, -16, -18, 13, -11, -12, 3, 18] --> [13, 3, -12, -18, -16, -11, 11, 18]

Pseudocode:
    create a copy of the input array sorted in ascending order
    declare an empty array result
    iterate the length of the sorted array
        if the current index is even then push the current sorted array element to the front of the array result
        if odd push the current element to the end of the array result
    return the array result
*/

// My Answer
function pendulum(values) {
    const Sarr = values.sort((a, b) => a - b)
    let result = []
    for(let i = 0; i < Sarr.length; i++){
        if(i % 2 === 0){
            result.unshift(Sarr[i])
        } else {
            result.push(Sarr[i])
        }
    }
    return result
}

console.log(pendulum([6, 6, 8 ,5 ,10])) // [10, 6, 5, 6, 8]

// Best Practices
function pendulum(values) {

    let sort = values.slice().sort((a, b) => a - b)
    ,  parts = { left: [], right: [] };
    
    for (let i = 0; i < sort.length; i++) 
      parts[i % 2 ? 'right' : 'left'].push(sort[i]);
  
    return parts.left.reverse().concat(parts.right);
    
}

// Most Clever
// using .slice() before .sort() protects the integrity of the input array from being sorted
const pendulum = values => values.sort((a, b) => a - b).reduce((pre, val) => pre.length % 2 ? [...pre, val] : [val, ...pre], []);

// Similar to my answer but using .pop() 
function pendulum(values, l = values.length) {
    values.sort((min, max)=> max-min)
    const arr = [];
    for (let i=0; i < l; i++){
      if (i % 2 === 0){ 
        arr.unshift(values.pop()) 
      }else{
        arr.push(values.pop())
      }
    }
    return arr
}

// using .forEach() instead of a for loop
function pendulum(a) {
    let list = [], arr = [];
    a.sort((b, c) => b - c).forEach((e, i) => (i % 2 ? arr : list).push(e));
    return list.reverse().concat(arr);
}