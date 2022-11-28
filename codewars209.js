// Parameters or Edge Cases:
//      input will be an array of integers and a limit value integer
// Return:
//      if the integer in the array is less than or equal to the limit value return true else false
// Examples:
//      describe("Basic tests", () => {
//          it("Testing for fixed tests", () => {
//            assert.strictEqual(smallEnough([66, 101], 200), true);
//            assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
//            assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
//            assert.strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
//          })
//      })  
// Psuedo Code:
//      create a shallow array copy where each element is less than or equal to the input array
//      compare the length of the shallow array to the old array implicitly returning true if it is else false

// my answer
function smallEnough(a, limit){
    // create a shallow array copy where each element is less than or equal to the input array
    // compare the length of the shallow array to the old array implicitly returning true if it is else false
   return a.filter(e => e <= limit).length === a.length
}

console.log(smallEnough([66, 101], 200)) // true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)) // false
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)) // true
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)) // true

// my answer refactored arrow function
const smallEnough = (a,limit) => a.filter(e => e <= limit).length === a.length

// best practices and most clever using Math.max() to compare the inputs
function smallEnough(a, limit){
    return Math.max(...a) <= limit
}

// arrow funciton using .every() to compare every element in the array to the limit
smallEnough = (a, l) => a.every(e => e <= l)

// using the opposite idea of every with .some() not in the array
const smallEnough = (array, limit) => !array.some(n => n > limit);

// brute force for loop
function smallEnough(a, limit){
    for(var i of a){
      if(i > limit)
        return false;
    }
    return true;
}

// similar to my answer but intead of using implicit comparison return they used a ternary
function smallEnough(array, limit){
    return array.filter( (value) => value > limit ).length > 0 ? false : true;
}