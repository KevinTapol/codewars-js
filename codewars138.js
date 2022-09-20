// Parameters or Edge cases: inputs will be positive integers including 0 
// Return: power of 2 where input is the power
// Examples: n = 0  ==> [1]        # [2^0]
//           n = 1  ==> [1, 2]     # [2^0, 2^1]
//           n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
//            describe("Basic Tests", function(){
//                it("Testing for fixed tests", () => {
//                    assert.deepEqual(powersOfTwo(0), [1])
//                    assert.deepEqual(powersOfTwo(1), [1, 2])
//                    assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16])
//                })
//            });
// Psuedo code:  declare an empty array
//               use a for loop to iterate from 0 to the input inclusively as the stop while incrementing by 1
//               use Math.pow() with 2 being the first parameter and the current loop input value being the power
//               push those values to the empty array
//               outside the for loop return the array


// my answer
function powersOfTwo(n){
    let arr = []
    for(let i = 0; i <= n; i++){
        arr.push(Math.pow(2,i))
    }return arr
}
console.log(powersOfTwo(0))
console.log(powersOfTwo(1))
console.log(powersOfTwo(4))


// my answer using array methods
// iterate through and create an array using spread for each value being 0 + 1 to user input 
// .map() through that array and create a shallow copy and at each element take the index as the power of 2 and implicitly return it as the element starting at index 0
const powersOfTwo = (n) => [...Array(n + 1)].map((element, index) => Math.pow(2, index))

// best practices used var instead of let
function powersOfTwo(n){
    var result = [];
    for (var i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));
    }
    return result;
}

// most clever
// Array.from() creates a new array 
// ({length: n + 1}) meaning user input + 1 will be the number of elements in the array 
// (v, k) => 2 ** k meaning for each element v implicit return the value 2 to the power of k as the element k being 0 to user input n +1 incrementing by 1
function powersOfTwo(n) {
    return Array.from({length: n + 1}, (v, k) => 2 ** k);
}

// using spread and .map()
// create an array and iterate through each element input + 1
// .map() to create a shallow copy where each element _ at index i implicit return fat arrow 2 to the power of index i
function powersOfTwo(n) {
    return [...Array(n + 1)].map((_, i) => 2 ** i)
}

// using Array() .fill() and .map()
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
const powersOfTwo = n => Array(n + 1).fill(2).map((e, i) => e**i )

// using a ternary using falsy 
let powersOfTwo = n => n ? [...powersOfTwo(n-1), 2**n] : [1]

// do while loop adding to the beginning of the array instead of the end
function powersOfTwo(n){
    let res = [];
    do {
        res.unshift(Math.pow(2, n));
    } while (n--);
    return res;
}

// lol decrementing then reverse the array
function powersOfTwo(n){
    let arr = [];
    for (let i = n; i >= 0; i--) {
        arr.push(Math.pow(2, i));
    }
    return arr.reverse();
}