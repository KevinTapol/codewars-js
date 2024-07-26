/*
Evens times last

Parameters or Edge Cases:
    inputs will be an array of integers 
    indices start at 0

Return:
    return the sum of the even index elements multiplied by the final element in the array else if the sequence is empty return 0

Examples:
    [2, 3, 4, 5] --> 30

Psuedocode:
    create a copy of the input array filtering the even index elements and sum them up (using .reduce())
    multiply the sum by the final index element of the input array and return the product or 0 for when the array is empty 
*/

// My Answer
function evenLast(numbers) {
    return numbers.filter((e, i)=> i % 2 === 0).reduce((acc, c) => acc + c, 0) * numbers[numbers.length -1] || 0
}

// My Answer one liner arrow fn
const evenLast = n => n.filter((e, i) => i % 2 === 0).reduce((acc, c) => acc + c, 0) * n[n.length -1] || 0

console.log(evenLast([2, 3, 4, 5])) // 30

// Best Practices 
// brute force for loop
function evenLast(numbers) {
    if (numbers.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 2) {
      sum += numbers[i];
    }
    return sum * numbers[numbers.length - 1];
}

// Most Clever
// similar to my answer but including the filter inside of the reduce instead of separate
const evenLast = n => n.reduce((p, c, i) => i % 2 ? p : p + c, 0) * n[n.length - 1] || 0

// similar to most clever but using .pop() to grab the final element instead of calling it with array[index]
const evenLast = a => a.reduce((s, e, i) => s + (i % 2 ? 0 : e), 0) * a.pop() || 0;