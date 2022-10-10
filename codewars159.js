// Parameters or Edge Cases: 
//              All numbers are valid Int32, no need to validate them.
//              There will always be at least one number in the input string.
//              Output string must be two numbers separated by a single space, and highest number is first.
// Return:  
//          the highest and lowest number in a string
// Examples:
//          describe("Example tests", () => {
//              it("Test 1", () => {
//                assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
//              });
//              it("Test 2", () => {
//                assert.strictEqual(highAndLow("1 2 3"), "3 1");
//              });
//          });
// Psuedo Code: 
//              take the string and split.(' ') to omit the space and create an array of each number
//              .sort() the new array from highest to lowest
//              return the first and last index of the array using array[0] and array[length -1] as a string with a space inbetween the numbers using + ' '

// my answer
function highAndLow(numbers){
    let newArr = numbers.split(' ').sort((a,b) => b -a)
    if(newArr.length > 1) {
        return newArr[0] + ' ' + newArr[newArr.length -1]
    } else {
        return newArr[0] + ' ' + newArr[0]
    }
    
}

// my answer refactored
// An arrow function when including a declaration with a ternary, It is best practices to use handlebars with the declared variables and ternary and then return before the ternary condition.
const highAndLow = (numbers) => {
    let newArr = numbers.split(' ').sort((a,b) => b -a);
    return newArr.length > 1 ? newArr[0] + ' ' + newArr[newArr.length -1] : newArr[0] + ' ' + newArr[0]
}

// best practices and most clever
// using Math.min() and Math.max() instead of sorting
// .map(Number) is using the Object method Number() to create a shallow copy coverting the array to integers
// The apply(thisArg/null/undefined, argsArray) method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

// most clever
// using template literals and (...input) to iterate through each element of the array
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// same as most clever but usint + instead of template literals and using .map(Number) to create a shallow array of numbers per element
function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
}

// for loop but declaring variable min and max as the same index prior to looping and declaring but not assigning the looped compared value at index in the for loop
function highAndLow(numbers){

    var numArray = numbers.split(" ");
    var max      = Number(numArray[0]);
    var min      = Number(numArray[0]);
    var num;
    
    for(var i = 1; i< numArray.length; i++){
    
      num = Number(numArray[i]);
      
      if(num > max) max = num;
      if(num < min) min = num;
    }
    
    return max + " " + min;
    
}