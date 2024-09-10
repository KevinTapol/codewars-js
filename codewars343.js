/*
LinkedList -> Array
Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

Here's an example of a list:

{value: 1, next: {value: 2, next: {value: 3, next: null}}}
Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

[1, 2, 3]
Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.

Parameters or Edge Cases:
    inputs will be an array of objects that can have nested objects as values
    values can be objects, integers, strings or booleans
Return:

Examples:
{value: 1, next: {value: 2, next: {value: 3, next: null}}} --> [1, 2, 3]
{value: "foo", next: {value: "bar", next: null}} --> ["foo", "bar"]

Pseudocode:
    declare an empty array name result to push the values that are not null to
    loop through the input object and while the object is not null push the value of the object
        set the next input using the input object with .next
    outside of the while loop return the array result

    thinking of a way to do it with .reduce() .map() with obj.next
*/

// My Answer
function listToArray(obj) {
    let result = [];
    
    while (obj !== null) {
      result.push(obj.value);
      obj = obj.next;
    }
    return result;
}

console.log(listToArray({value: 1, next: {value: 2, next: {value: 3, next: null}}})) //