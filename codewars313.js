/*
Maximum Gap (Array Series #4)

Parameters or Edge Cases:
    Array/list size is at least 3 .
    Array/list's numbers Will be mixture of positives and negatives also zeros_
    Repetition of numbers in the array/list could occur.
    The Maximum Gap is computed Regardless the sign.

Return:
    Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Examples:
    [13,10,2,9,5] --> 4 
    [13,3,5] --> 8 
    [24,299,131,14,26,25] --> 168 
    [-3,-27,-4,-2] --> 23 
    [-7,-42,-809,-14,-12] --> 767 
    [12,-5,-7,0,290] --> 278 
    [-54,37,0,64,-15,640,0] --> 576 
    [130,30,50] --> 80 
    [1,1,1] --> 0 
    [-1,-1,-1] --> 0 

Pseudocode:
    sort the array
    iterate through the input array creating a copy where each element is the result of the absolute value of the difference of the next element in the array
    remove the last item of the new array
    return the max value of the new array
*/

// My Answer
function maxGap (numbers){
    let arr = numbers.sort((a, b) => a - b)
    let a = arr.map((e, i) => e = Math.abs(e - arr[i + 1])).slice(0, -1)
    return Math.max(...a)
}

// My Answer Refactored
function maxGap (numbers){
    let arr = numbers.sort((a, b) => a - b)
    return Math.max(...arr.map((e, i) => e = Math.abs(e - arr[i + 1])).slice(0, -1))
}

console.log(maxGap([13,10,2,9,5])) // 4

// Best Practices
// Brute Force for loop note that the loop is stopping at < length and not <= length because we have to check the next value in the array meaning the final value would otherwise result in a NaN
function maxGap (numbers){
    let num = numbers.sort((a,b) => a - b)
    let sum = num[1] - num[0]
    for(i=0; i < num.length; i++){
       if(num[i+1] - num[i] > sum){
         sum = num[i+1] - num[i]
       }
     }
    return sum
}

// Most Clever
// clever to use the array reference in .map(element, index, array) with either the difference or 0 in a ternary
const maxGap = a => Math.max(...a.sort((x, y) => x - y).map((e, i, a) => i > 0 ? Math.abs(e - a[i - 1]) : 0));

// Clever using .reduce()
function maxGap(numbers) {
    return numbers
      .sort((a, b) => a - b)
      .reduce((max, n, i) => {
        let gap = numbers[i + 1] - n
        if (max < gap) {
          max = gap
        }
        return max
      }, 0);
}

// similar to my answer using .slice() but a one liner arrow fn
const maxGap = numbers =>
    Math.max(...numbers.sort((a, b) => a - b).slice(1).map((val, idx) => val - numbers[idx]));

// My Personal favorite Clean and Easy to read. Declaring variables for dry code with clever use of .reduce()
function maxGap (numbers){
    const sorted = numbers.sort((a, b) => a - b)
    return sorted.reduce((t, x, i) => sorted[i + 1] - x > t ? sorted[i + 1] - x : t, 0)
}

// Clever and clean one liner with .reduce()
const maxGap = numbers =>
    numbers
      .sort((a, b) => a - b)
      .reduce(
        (acc, val, i, arr) => arr[i + 1] - val > acc ? arr[i + 1] - val : acc,
        0
      )