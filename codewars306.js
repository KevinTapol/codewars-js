/*
Array Leaders (Array Series #3)

Parameters or Edge Cases:
    inputs will be an array of integers of length of 3 or greater
    integers maybe positive or negative
    duplicates may occur

Return:
    an array of integers where each element is larger than the sum of all of the following integers in the order of the original input

Examples:
    [1,2,3,4,0]  --> [4]
    [16,17,4,3,5,2]  --> [17,5,2]
    [-1,-29,-26,-2]  --> [-1]
    [-36,-12,-27]  -->  [-36,-12]
    [5,-2,2]  --> [5,2]
    [0,-1,-29,3,2]  -->  [0,-1,3,2]

Pseudocode:
    declare an empty array named result
    iterate through the input array and if the current element is greater than the sum of the elements following then push the element to result
    return result
*/

// My Answer
function arrayLeaders(numbers){
    let result = []
    for (let i = 0; i <= numbers.length; i++){
        let sum = numbers.slice(i + 1).reduce((acc, c) => acc + c, 0)
        if(numbers[i] > sum){
            result.push(numbers[i])
        }
    }return result
}

// My Answer Refactored using array methods
function arrayLeaders(arr){
    return arr.filter((e, i) => arr[i] > arr.slice(i + 1).reduce((acc, c) => acc + c, 0))
}

// My Answer One liner arrow fn
const arrayLeaders = (a) => a.filter((e, i) => a[i] > a.slice(i + 1).reduce((acc, c) => acc + c, 0))

console.log(arrayLeaders([1,2,3,4,0])) // [4]
console.log(arrayLeaders([16,17,4,3,5,2])) // [17,5,2]
console.log(arrayLeaders([-1,-29,-26,-2])) // [-1]
console.log(arrayLeaders([-36,-12,-27])) // [-36,-12]
console.log(arrayLeaders([5,-2,2])) // [5,2]
console.log(arrayLeaders([0,-1,-29,3,2])) // [0,-1,3,2]

// Best Practices and Most Clever
// Highly disagree that a one liner arrow fn should be Best Practices but I do agree to Most Clever
// Similar to my refactored answer except the comparison for elements as Leaders are being done in .reduce() instead of .filter()
var arrayLeaders = numbers => {
    return numbers.filter((a, i) => numbers.slice(i + 1).reduce((sum, b) => sum + b, 0) < a)
}

// Brute force double nested for loop
// similar to my unrefactored answer except not using .reduce() or .filter()
var arrayLeaders = numbers => {
    let answer = [];
  
    for (let i=0; i<numbers.length; i++){          //loop through array
      let sum = 0;
      for (let j=i+1; j<numbers.length; j++){      //start one position right of the main loop element
        sum += numbers[j];                         //add all those numbers together
      }
      
      if(numbers[i] > sum){                        //compare that sum to the initial number
        answer.push(numbers[i]);                   //if it's bigger push it to the answer array
      }
    }
    return answer;                                 //return it like it's defective
  }

// iterating backwards
var arrayLeaders = numbers => {
    const sumOfAllAfter = []
  
    let sum = 0
    for (let i = numbers.length - 1; i >= 0; i--) {
      sumOfAllAfter[i] = sum
      sum += numbers[i]
    }
  
    return numbers.filter((num, i) => num > sumOfAllAfter[i])
  }

// iterating backwards and using unshift() instead of iterating forwards with .push()
var arrayLeaders = numbers => {

    let sum = 0, res = []
    for (let i = numbers.length - 1; i >= 0; i--) {
      if (numbers[i] > sum) res.unshift(numbers[i]);
      sum += numbers[i];
    }
  
    return res;
  }