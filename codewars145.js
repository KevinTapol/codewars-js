// Parameters or Edge cases: After looking at the test examples, the input is a positive interger 1-10
// Return: an array with the input being the length of the array starting at 1 to input incrementing by 1
// Examples:
//          describe("Fix Timmys Counter", function() {
//              it("Fixed Tests", function() {
//                Test.assertSimilar(createArray(1),[1]);
//                Test.assertSimilar(createArray(2),[1,2]);
//                Test.assertSimilar(createArray(3),[1,2,3]);
//                Test.assertSimilar(createArray(4),[1,2,3,4]);
//                Test.assertSimilar(createArray(5),[1,2,3,4,5]);
//              });
//            });
// Psuedo code:  If I was to replicate this from scratch, I would Array.from() the first param being {length:input} and the second parameter being what I do to each element given the the new shallow array element, index where each element would be the value index +1 till I reach the length input inclusively.

// Debug infinite loop
function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number;){
        newArray.push(counter);
    }   
    return newArray;
}

// I like doing these every once in a while because it reminds me of technical interviews.

// my answer and best practices added increment to for loop
function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
        newArray.push(counter);
    }   
    return newArray;
}

// My answer one liner from scratch given the paramaters
const createArray = (number) => Array.from({length:number}, (element, index) => index + 1)

// most clever
// same idea as my one liner except using spread ...Array(number) to establish the length equal to input inclusively then use .map() instead of .from() but same exact element index and fat arrow function per element
const createArray = n => Array(...Array(n)).map((v, i) => i + 1);

// Exactly the same as above but using spread and map creating an array using literal notation and the fat arrow function is incrementing instead of additive
const createArray = number => [...Array(number)].map((_, idx) => ++idx);

// This is the first time I've seen the .apply() method.
// The apply() method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).
// The value of this provided for the call to func. If the function is not in strict mode, null and undefined will be replaced with the global object, and primitive values will be converted to objects.
function createArray(number){
    return Array.apply(null, {length:number}).map((_, i) => i + 1);
}

// using .fill() and .map()
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array 
// fill(value, start, end)  fill(default 0, default arr.length, default value)
function createArray(number){
    return Array(number).fill(1,0).map((x,i) => x + i)
}

// lol funny using arrow fn truthy ternary else return empty array
createArray=甫=排=>排?[...甫(排-1),排]:[]