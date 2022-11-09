// Parameters or Edge Cases:
//      do not mutate the orginal array
//      remove the smallest integers of the array
//      if there are multiple elements of the same value remove the element with the lower index
//      if you get an empty array return an empty array
//      do not change the order of the elements
// Return:
//      return the input array with the smallest integer removed
// Examples:
//      describe("removeSmallest", function() {
//          it("works for the examples", function() {
//            Test.assertSimilar(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
//            Test.assertSimilar(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
//            Test.assertSimilar(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
//            Test.assertSimilar(removeSmallest([]), [], "Wrong result for []");
//          });
//          
//          it("returns [] if the list has only one element", function() {
//            for (let i = 0; i < 10; ++i) {
//              let x = ~~(Math.random() * 400);
//              Test.assertSimilar(removeSmallest([x]), [], `Wrong result for ${[x]}`);
//            }
//          });
//          
//          function randomArray(length) {
//            return Array.from({length: length}, () => ~~(Math.random() * 400));
//          }
//          
//          it("returns a list that misses only one element", function() {
//            for(let i = 0; i < 10; ++i) {
//              let arr = randomArray(~~(Math.random() * 10) + 1);
//              let l = arr.length;
//              Test.assertSimilar(removeSmallest(arr).length, l - 1, `Wrong result for ${arr}`);
//            }
//          });
//      });
// Psuedo Code:

//      get the minimum value in the array Math.min() and spread
//      iterate through the array and create a new array from the first index to the index of the min value
//      iterate through the array and create a new array at index after the min value
//      concat the arrays
//      if the array is empty return an empty array else return the new array

// my answer
function removeSmallest(numbers) {
    // get the minimum value in the array Math.min() and spread
    let minIndex = numbers.indexOf(Math.min(...numbers));
    // iterate through the array and create a new array from the first index to the index of the min value
    let arrStart = [...numbers.slice(0, minIndex)]
    // iterate through the array and create a new array at index after the min value
    let arrEnd = [...numbers.slice(minIndex + 1)]
    // concat the arrays
    let finalArr = arrStart.concat(arrEnd)
    // if the array is empty return an empty array else return the new array
    if(finalArr.length === 0){
        return []
    }else {
        return finalArr
    }
}
console.log(removeSmallest([1,2,3,4,5])) // [2,3,4,5]
console.log(removeSmallest([5,3,2,1,4])) // [5,3,2,4]
console.log(removeSmallest([2,2,1,2,1])) // [2,2,2,1]

// my answer refactored arrow function ternary truthy/falsy
const removeSmallest = (n) => {
    let minIndex = n.indexOf(Math.min(...n));
    let arrStart = [...n.slice(0, minIndex)];
    let arrEnd = [...n.slice(minIndex + 1)];
    let finalArr = arrStart.concat(arrEnd);
    return finalArr.length ? finalArr : []
}

// best practices and most clever
// here they returned the array using literal declaration and spread in one statement
// I just realized that an empty array is already accounted for so I didn't need to use a ternary in my answer.
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

// using .filter() 
// I love this answer. I upvoted this for most clever.
// here they are creating a shallow array copy using .filter removing the min value
const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));

// using .forEach() to iterate through the array
function removeSmallest(numbers) {
    var smallest;
    var newNums = [];
    numbers.forEach(function(num) {
      if (smallest > num || smallest === undefined) {
        smallest = num;
      }
    });
    var index = numbers.indexOf(smallest);
    numbers.forEach(function(n, i) {
      if (i !== index) {
        newNums.push(n);
      }
    });
    return newNums;
}

// Here I omitted the regular functions for arrow functions of the above answer
function removeSmallest(numbers) {
    let min;
    let newArr = [];
    numbers.forEach(num => {if(min > num || min === undefined) {min = num;}})
    let index = numbers.indexOf(min)
    numbers.forEach((n, i) =>{if(i !== index){newArr.push(n);}})
    return newArr
}

// using .apply()
function removeSmallest(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

// using .splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
function removeSmallest(numbers) {
    numbers = numbers.slice(0);
    const min = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min), 1);
    return numbers;
}

// using .reduce() and .filter
function removeSmallest(numbers) {
    const index = numbers.reduce((m, n, i) => n < numbers[m] ? i : m, 0)
  
    return numbers.filter((n, i) => i !== index)
}

// using for loop with a continue
function removeSmallest(numbers) {
    let min = numbers[0];
    let newA = [];
    let index = 0;
    for(let i = 1; i < numbers.length; i++){
      if(numbers[i] < min){ min = numbers[i]; index = i}
    }
    for(let i = 0; i < numbers.length; i++){
      if(i  !== index){ newA.push(numbers[i])}
      else {continue;}
    }
    return newA;
}