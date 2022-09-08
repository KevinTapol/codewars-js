// Removing Elements
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Parameters or Edge cases: None of the arrays will be empty.
// Return: an array with the first element and every odd number index removed from the original array 
// Examples: ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// Psuedo code:  use .filter() to make a copy of the array using % 2 to keep the even number indexes
//               might as well one line arrow fn it

// my answer with one arrow fn for the .filter() method
function removeEveryOther(arr){
    return arr.filter((element, index) => index % 2 === 0)
}

// my answer with two arrow fns
// it is force of habit to use the format const fnName = (parameters) => {implicit return} instead of not having {}
const removeEveryOther = (arr) => arr.filter((e,i) => i % 2 === 0)

// best practices
// not using any arrow fn
// strange it feels harder to read to me than my idea of best practices answer because of the nested return
function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
        return index % 2 === 0;
    });
}

// using for loop
// declare new array outside the for loop
// .push() each element one at a time inside the loop
// return the new array outside of the for loop
function removeEveryOther(arr){
    var newArr=[];
    for (var i = 0; i < arr.length; i+=2){
        newArr.push(arr[i]);
    }
    return newArr;
}

// using .forEach() and .splice() instead of .filter()
function removeEveryOther(arr){
    arr.forEach((item, index) => {
        arr.splice(index + 1, 1)
    })
    return arr
}