// Parameters or Edge Cases:
//          String will never be empty and you do not need to account for different data types. 
//          What about ' ? Ex Let's is that 4 characters or 3?
// Return:
//          the length of the shortest word(s)
// Examples:
//          describe("Basic tests", () => {
//              it("Testing for fixed tests", () => {
//                assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//                assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
//                assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
//              })
//          })
// Psuedo Code: 
//          convert the string into an array using .split(' ') to separate each word by the space between each word into their own element in an array
//          create a new shallow copy using .map() with .length to get the length of each word
//          iterate through the array with spread (...array)
//          use Math.min() to return the smallest array length

// my answer 2nd best practices and most clever
function findShort(s){
    return Math.min(...(s.split(' ').map(e => e.length)))
}

// my answer arrow function
const findShort = (s) => Math.min(...(s.split(' ').map(e => e.length)))

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("turns out random test cases are easier than writing out basic ones"))
console.log(findShort("Let's travel abroad shall we"))

// best practices and most clever
// The apply(thisArg, argsArray) method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).
// The value of this provided for the call to func. If the function is not in strict mode, null and undefined will be replaced with the global object, and primitive values will be converted to objects
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}

// using sort to put the smallest length value at the end and grabbing it with .pop()
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

// using .reduce()
function findShort(s) {
    return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
}

// for loop
function findShort(s){
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallest = arr[i];
      }
    }
    return smallest.length;
}

// regex
function findShort(s){
    return Math.min(...s.split(/\s/).map((w) => w.length));
}

// using .sort() for length then calling the first index with [0]
function findShort(s){
    return s.split(' ').sort((a,b) => a.length - b.length)[0].length;
}

// using + to convert back to a number
function findShort(s){
    return +s.split(" ").map(e => e.length).sort((a, b) => a - b).slice(0,1)
  }