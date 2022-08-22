// Parameters or Edge cases:If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
// Return: the sum of an array without adding the highest and lowest values
//         if there are duplicate high and low values include the dubplicates
// Examples: { 6, 2, 1, 8, 10 } => 16 using object notation {} in example but test cases use solid brackets []
//           { 1, 1, 11, 2, 3 } => 6
// Psuedo code: return an empty array for arrays with length < 3, empty/null or undefined I can use Array.isArray(array) or array == undefined or array == null
//              .sort() the array and .shift the first element and .pop the last element
//              .reduce the new array adding up the sum and return

// my answer
// very close to best practices but they separated the test cases for empty array and array having only 2 elements return 0. 
// They used function format instead of arrow fn format with implicit return for .sort() which required them to use curly brackets for a nested return.
// They also used a for loop instead of .reduce(accumulator, currentValue)
function sumArray(array) {
    if(array == undefined || array.length < 3){
        return 0
    } else {
        array.sort((a,b)=> a-b)
        array.shift()
        array.pop()
        return array.reduce((acc, c) => acc + c)
    }
}

// best practices
function sumArray(array) {
    if (array == null) {
        return 0;
    } else if (array.length < 2) {
        return 0;
    } else {
        array = array.sort(function(a,b) {return a - b;});
        var total = 0;
        for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
        }
        return total;
    }
}

// most clever - one liner without const or let arrow fn ternary using truthy for null .sort() .slice() .reduce with 0 as the initial value
// something I forgot was you can use .slice() on both an array and string
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

// using Math.min and Math.max subtracting one instance of each min and max value
function sumArray(array) {
    return Array.isArray(array) && array.length > 1
        ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
        : 0
}

// Math.max.apply()  method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).
function sumArray(array) {
    if (array == null || array.length <= 2) {
        return 0
    }
    
    var max = Math.max.apply(Math, array);
    var min = Math.min.apply(Math, array);
    var sum = 0
    
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum - max - min
}