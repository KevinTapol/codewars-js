/*
The reject() function

Parameters or Edge Cases:
    1st input will be an array
    will the elements always be integers greater than 0?
    can the array be empty?

    2nd input is an arrow fn 
    is this supposed be the logic for a .filter()?

Return:
    return the result of the 1st input being filtered by the logic of the 2nd input

Examples:
    [1, 2, 3, 4, 5, 6], (n) => n % 2 === 0 --> [1, 3, 5]
    [ 'a', 'b', 3, 'd' ] to deeply equal [ 'a', 'b', 'd' ]

Pseudocode:
    iterate through the input array, filter by the 2nd input logic 
    remove the new array elements of the filtered logic from the original array
    return the result

*/

// My Answer brute force for loop
function reject(arr, logic) {
    let result = arr
    let fArr = arr.filter(logic)

    for(let i = 0; i < fArr.length; i++){
        let loc = arr.indexOf(arr.find(e => e === fArr[i]))
        result.splice(loc, 1)
    }
    return result
}

// My Answer refactored filtering out the elements from the original input that exists in the filtered logic array
function reject(arr, logic) {
    return arr.filter(e => arr.filter(logic).includes(e) === false) 
}

// My Answer refactored one liner arrow fn
const reject = (arr, logic) => arr.filter(e => arr.filter(logic).includes(e) === false) 

console.log(reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)) // [1, 3, 5]

// Best Practices and Most Clever
// .filter() as a higher order fn aka passing in a fn with !logic
function reject(array, iterator) {
    return array.filter(function(x) {return !iterator(x);});
}

// Best Practices and Most Clever using arrow fn
function reject(array, iterator) {
    return array.filter(x => !iterator(x))
}

// .forEach to filter and push to an empty array
function reject(array, iterator) {
    var arr =[];
    array.forEach(function(value){
      !iterator(value) && arr.push(value);
    })
    return arr;
}

// using .reduce() if the current element exists in array then return the accumulative array else add it to the array
function reject(array, predicate) {
    return array.reduce(function(acc, num) {
      return predicate(num) ? acc : [...acc, num]
    }, [])
}

// .reduce() with reverse conditional logic of above
function reject(array, predicate) {
    return array.reduce((acc, num) => {
      return !predicate(num) ? [...acc, num] : acc
    }, [])
}

// omitting .includes() as the check using default boolean 
function reject(array, predicate) {
    return array.filter((item) => predicate(item) === false);
}

// clever use to take advantage of inputs outputs
var c=0;
function reject(array, iterator) {
  c++;
  if (c==1) return ['a','b','d'];
  if (c==2) return [3];
  if (c==3) return [1,3,5];
}

// clever use to manipulate given the test cases
function reject(array, predicate) {
    console.log(predicate);
    let arr = [];
      for(let i = 0; i < array.length; i++){ 
      if(predicate(array[i]) % 2 === 0){arr.push(array[i]);}
      }
      return arr;
}