/*
Simple consecutive pairs
pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.

Parameters or Edge Cases:
    inputs will be an array of integers that can be negative or positive

Return:
    the count of pairs that have consecutive numbers in the given array meaning if the next element to the current element is greater than or less than 1

Examples:
    [1,2,5,8,-4,-3,7,6,5] --> 3
    [21, 20, 22, 40, 39, -56, 30, -55, 95, 94] --> 2
    [81, 44, 80, 26, 12, 27, -34, 37, -35] --> 0
    [-55, -56, -7, -6, 56, 55, 63, 62] --> 4
    [73, 72, 8, 9, 73, 72] --> 3

Pseudocode:
    if the input array length is odd, then slice off the last element and set it equal to arr
    Now we have an array of even number of elements.
    create a new array of nested arrays where each even index element is paired with the next element
    create a new array named result of the 2d array where each nested array element first element is either 1 less or 1 more than the next element
    return the length of the result
*/

// My Answer
function pairs(arr){
    arr.length % 2 != 0 ? arr = arr.slice(0, arr.length -1) : ''
    let result = []
    for(let i = 0; i < arr.length; i+=2){
        let localArr = []
        localArr.push(arr[i])
        localArr.push(arr[i + 1])
        result.push(localArr)
    }
    let newResult = result.map(e => e[0] + 1 === e[1] || e[0] -1 === e[1]).filter(e => e === true).length
    return newResult
};

console.log(pairs([1,2,5,8,-4,-3,7,6,5])) // 3
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94])) // 2

// Best Practices and Most Clever 
// brute force for loop but using math.abs instead of conditionals of +1 -1
function pairs(array, count = 0) {
    for (let i = 0; i < array.length; i += 2)
      if (Math.abs(array[i] - array[i + 1]) === 1)
        count += 1;
    return count;
}

// very clever using default params and spread operator
function pairs([a,b,...c]) {
    return (Math.abs(a-b)==1) + (c.length&&pairs(c))
  }

// Similar to best practices and most clever but not including the default of count = 0 as a parameter
function pairs(arr){
    var count=0;
    for (var i=0; i<arr.length; i+=2)
      if (arr[i]-1==arr[i+1]||arr[i]+1==arr[i+1])
        count++;
    return count;
  };

// clever one liner using .reduce()
const pairs = ar =>
    ar.reduce((pre, val, idx) => pre + (++idx % 2 && Math.abs(val - ar[idx]) === 1), 0);

// very clever one liner using .filter() and conditionals
const pairs = a => a.filter((x,i) => i%2 && (x-a[i-1])**2 == 1).length

// similar to my answer but using .reduce() instead of .length of boolean true
function pairs(ar, arr = []){
    arr = ar.map((_,i)=> i % 2 === 0 && i+2 <= ar.length ? ar.slice(i,i+2) : '').filter(e=> e)
    return arr.map(el => el[0]+1 === el[1] || el[0]-1 === el[1] ? 1 : 0).reduce((x, y)=> x + y, 0)
  };

// very clean .reduce()
function pairs(ar){
    return ar.reduce((a, b, i) => a + ((i % 2 === 0 && i < ar.length) && (Math.abs(b - ar[i+1]) === 1)), 0);
  };