// Check the exam
/*
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/

// Parameters or Edge Cases:
/*
    inputs will be two arrays of equal length containing strings for elements
    inputs will never be empty or null 
    strings can be empty
*/

// Return:
/*
    an integer representation of total score given the first array as the answer sheet and the second as the student's answers
*/

// Examples:
/*
    ["a", "a", "b", "b"], ["a", "c", "b", "d"] => 6
    ["a", "a", "c", "b"], ["a", "a", "b",  ""] => 7
    ["a", "a", "b", "c"], ["a", "a", "b", "c"] => 16
    ["b", "c", "b", "a"], ["",  "a", "a", "c"] => 0
*/

// Pseudocode:
/*
    // declare an integer count and set it equal to 0
    // iterate through the length of the first array
    // if both array elements are equal at the same index add 4 to count
    // if both array elements are not equal and not empty at the same index subtract 1 from count
    // outside the for loop if count is less than 0 return 0 else return count
*/

// my answer
function checkExam(array1, array2) {
    // declare an integer count and set it equal to 0
    let count = 0
    // iterate through the length of the first array
    for (let i = 0; i < array1.length; i++){
        // if both array elements are equal at the same index add 4 to count
        if (array1[i] == array2[i]) {
            count += 4
        }
        // if both array elements are not equal and not empty at the same index subtract 1 from count
        if (array1[i] != array2[i] && array2[i].length >0) {
            count -= 1
        }
    }
    // outside the for loop if count is less than 0 return 0 else return count
    if (count < 0) {
        return 0
    }else {
        return count
    }
}

// my answer refactored ternary return
function checkExam(array1, array2) {
    let count = 0
    for (let i = 0; i < array1.length; i++){
        if (array1[i] == array2[i]) {
            count += 4
        }
        if (array1[i] != array2[i] && array2[i].length >0) {
            count -= 1
        }
    }
    return count < 0 ? 0 : count
}

// count declared as input and nested ternary for loop
function checkExam(a1, a2, count = 0) {
    for (let i = 0; i < a1.length; i++){
        a1[i] == a2[i] ? count += 4 : a1[i] != a2[i] && a2[i].length >0 ? count -= 1 : count += 0
    }
    return count < 0 ? 0 : count
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) // 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])) // 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])) // 16
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])) // 0

// best practices used the second conditional for array2 current index empty string add 0 then else for if the elements aren't equal subtract 1
function checkExam(array1, array2) {
    var score = 0;
    for (var i = 0; i < array1.length; i++){
        if (array1[i] == array2[i]) {
            score += 4;
        } else if (array2[i] === ""){
              score += 0
        } else {
            score -= 1
        }
    }
    if (score < 0) {
        score = 0  
    }  
    return score
}

// most clever
// arrow fn one liner implicit return using .reduce() 
// iterating through array2 and comparing the current element value to the same current index element value of array1 with nested ternaries
checkExam = (x, y) => (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === '' ? 0 : -1), 0)) > 0 ? x : 0;

// very clever using Math.max() to return the highest value of either count or 0
checkExam=(arr1,arr2)=>Math.max(arr2.reduce((a,b,i) =>b==arr1[i]?a+4:b?a-1:a,0),0)

// using .reduce(function(total, currentValue, currentIndex, array), initialVAlue)
// in this example they created an arrow function for .reduce() and named it reducer as array.reduce(reducer(a,e,idx), 0)
function checkExam(array1, array2) {
    const reducer = (a, e, idx) => {
      if (e === "") {
        return a;  
      }
      
      if (e === array1[idx]) {
        return a += 4;
      }
      
      return --a;
    }
    const score = array2.reduce(reducer, 0);
    return score < 0 ? 0 : score;
  }

// arrow fn implicit return one liner but spaced out for readability
const checkExam = (array1, array2) => {
    let result = array2.reduce(
      (score, answer, i) => {
        if(answer == array1[i]) return score += 4;
        else if(answer == 0) return score += 0;
        else return score - 1;
      }
    , 0);
    return result < 0 ? 0 : result;
  }