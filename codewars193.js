// Parameters or Edge Cases:
//      input will be an array of intergers with all the integers are the same except one element
//      the array length will be odd of 3 or greater elements
// Return:
//      return the single number in the array
// Examples:
//      [1, 1, 2] ==> 2
//      [17, 17, 3, 17, 17, 17, 17] ==> 3
// Psuedo Code:
//      sort the array 
//      take the first element and compare it to the second element
//      if they are equal return the last element
//      if they are not equal return the first element

// my answer
function stray(numbers) {
    // sort the array 
    numbers.sort((a,b) => a-b)
    // take the first element and compare it to the second element
    if(numbers[0] === numbers[1]){
    // if they are equal return the last element
        return numbers[numbers.length-1]
    }else {
    // if they are not equal return the first element
        return numbers[0]
    }
}

// my answer refactored arrow function and ternary
const stray = (n) =>{n.sort((a,b)=>a-b); return n[0]===n[1]?n[n.length-1]:n[0]}

// best practices
// for loop and comparing elements by index
function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
}

// most clever
// using .reduce()
const stray = nums => nums.reduce((a, b) => a ^ b);

// same idea as my answer but using Math.min() and Math.max() instead of .sort()
function stray(nums){
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    return nums.filter(x => x == max).length == 1 ? max : min
}

// I am surprised I didn't think of this first.
// using .find() to find the first occurance of a condition
const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

// using an array method to return the removed element
const stray = num => num.sort()[0] == num[1] ? num.pop() : num[0]