// Parameters or Edge Cases:
//      input will be an array of numbers of atleast one element
// Return:
//      the minimum and maximum values in an array in that order
// Examples:
//      describe("minMax", () => {
//          const testCases = [
//            [[1, 2, 3, 4, 5], [1, 5]],
//            [[2334454, 5], [5, 2334454]],
//            [[5], [5, 5]]
//          ];
//          for(const [input, expected] of testCases) {
//            it(`should work for ${JSON.stringify(input)}`, () => {
//              assert.deepEqual(minMax(input), expected);
//            });
//          }
//      });
// Psuedo Code:
//      iterate through the input array and return the min and max values using Math object methods and spread 

// my answer best practices and most clever
// iterate through the array and grab the minimum and maximum value from the input array using spread Math.min() and Math.max() 
function minMax(arr){
    return [Math.min(...arr),Math.max(...arr)]
}
// my answer refactored arrow function
const minMax = (arr) => [Math.min(...arr),Math.max(...arr)]

// interesting... if you want to use .sort() for numbers you MUST specify a to b otherwise it will not sort the numbers
// here they used a regular nested function intead of an arrow function for the .sort() parameters
// they then returned the first and last elements in the array
function minMax(arr) {
    var a = arr.sort(function(a,b) {return a-b});
    return [a[0], a[a.length-1]];
}

// brute force for loop
// loop through the array and compare each value to the first value for both max and min
function minMax(arr){
    var max = arr[0], min = arr[0];
    for(var i=0; i<arr.length; i++) {
      if(arr[i]>max) max = arr[i];
      if(arr[i]<min) min = arr[i];
    }
    return [min,max];
}

// using .apply()
// The apply() method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).
function minMax(arr){
    var min = Math.min.apply(null, arr),
        max = Math.max.apply(null, arr);
    return [min, max];
}

// interesting use of .reduce() with a ternary
// they also used a regular function instead of an arrow function for the .reduce() method
function minMax(arr){
    return arr.reduce(function(p, e){
      return [p[0] < e ? p[0] : e, p[1] > e ? p[1] : e];
    },[arr[0], arr[0]]);
}