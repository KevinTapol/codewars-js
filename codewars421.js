/*
Sequence generator
Implement function sequence, which returns new n-size Array filled according to pattern.

pattern may be:

a function that takes two: (element, index), one: (element) or any arguments (similar to map function), then filled running this function, in other words: function describes sequence,
number, string or any other object, then filled by copying, this object n-times.
Examples:

sequence(3, 4); // [4, 4, 4]
sequence(5, []); // [[], [], [], [], []]
sequence(2, "s"); // ["s", "s"]
sequence(5, (x, idx) => idx%2) // [0, 1, 0, 1, 0];
sequence(10, (x, idx) => idx+1) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Note: Sequences are great to work with functional methods like map, reduce, forEach, every or any. For example:

// sum of numbers 1-10
let sum = sequence(10, (x, idx) => idx+1).reduce((sum, num) => sum + num);
Be careful with long sequences. They are just arrays, every element is created when function is called.
Parameters or Edge Cases:

Return:
    return an array with the length of the first input and with elements directed by the 2nd input whether arrow fn or static input

Examples:
    3, 4), [4, 4, 4], "number filled");
    3, 's'), ['s', 's', 's'], "string filled");
    5, []), [[], [], [], [], []], "5 empty arrays");
    5, (x, idx) => idx%2), [0, 1, 0, 1, 0], "have to filled by two parram function pattern");

Pseudocode:
    generate an array result with the length of the 1st input
    if the second input does not contain => then fill the elements with the 2nd input
    else grab the index and modify it based on the arrow fn to fill the elements
    return the array result

*/

// My Answer
function sequence(n, pattern) {
    console.log(pattern)
    if(!pattern){
      return []
    }
    if(!pattern.toString().split(' ').includes('=>')){
        return Array.from({length:n}, e=> e = pattern)
    } else{
        return Array.from({length:n}, pattern)
    }
}
function sequence(n, pattern) {
    if(!pattern.toString().split(' ').includes('=>')){
        return Array.from({length:n}, e=> e = pattern)
    } else{
        return Array.from({length:n}, pattern)
    }
}


function sequence(n, pattern) {
    if(pattern.toString().split(' ').includes('=>')){
        return Array.from({length:n}, pattern)
    } else{
        return Array.from({length:n}, e=> e = pattern)
    }
}

console.log(sequence(3, 4)) // [4, 4, 4]
console.log(sequence(5, (x, idx) => idx%2)) // [4, 4, 4]