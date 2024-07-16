/*
Between Extremes

Parameters or Edge Cases:
    input arrays will be of length equal to or greater than 2
    input ranges will not cause integer overflow

Return:
    an integer representing the difference between the largest and smallest integer elements in the given array

Examples:
    [23, 3, 19, 21, 16] --> 20
    [1, 434, 555, 34, 112] --> 554
    [21, 34, 54, 43, 26, 12] --> 42
    [-1, -41, -77, -100] --> 99

Pseudocode:
    return the difference between the max value and the min value of the input array using Math object with a spread operator to iterate through the array
*/

// My Answer, Best Practices and Most Clever
function betweenExtremes(arr) {
    return Math.max(...arr) - Math.min(...arr)
}

// My Answer one liner
const betweenExtremes = arr => Math.max(...arr) - Math.min(...arr)

console.log(betweenExtremes([23, 3, 19, 21, 16])) // 20
console.log(betweenExtremes([1, 434, 555, 34, 112])) // 554
console.log(betweenExtremes([21, 34, 54, 43, 26, 12])) // 42
console.log(betweenExtremes([-1, -41, -77, -100])) // 99

// sorting the array then returning the max - min result
const betweenExtremes = n => (l => l[0] - l[l.length-1])(n.sort((a, b) => b - a))

// Brute Force For Loop
function betweenExtremes(nums) {
    let min = nums[0], max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        nums[i] < min && (min = nums[i])
        nums[i] > max && (max = nums[i])
    }
    return Math.abs(max - min);
}

// IMO very clean and clever to sort then slice last with slice(-1) and first slice(0)
function betweenExtremes(numbers) {
    const arr = numbers.sort((a, b) => a - b);
    return arr.slice(-1) - arr.slice(0, 1);
  }