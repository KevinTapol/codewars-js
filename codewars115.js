// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// Parameters or Edge cases: The array will always have at least 2 elements1 and all elements will be numbers.
//                           The numbers will also all be unique and in ascending order.
//                           The numbers could be positive or negative and the first non-consecutive could be either too!
// Return: null2 for both [] and [ x ]
// Examples: [1,2,3,4,6,7,8] ->  then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// Psuedo code: use a for loop add 1 to the 1st element and compare it to the value of the next element in the array
//              if the values are not equal meaning the difference is not 1 return the 2nd value being compared(the reason this works is because the array is in ascending order. If it wasn't we could do .sort()to make it in ascending order)
//               else return null

// my answer and best practices 
// simple and easy to read
// the reason I am using arr.lenth -1 here is because we are always comparing the 2nd element to the first element. If we are already at the last element , there is no element arr[i +1]. Meaning we NEED to stop before the last element.
function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
        }
    }
    return null
}

// most clever
// using find() and Number.isInteger() with truthy returning using ternary 
function firstNonConsecutive (arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);

    return (Number.isInteger(result)) ? result : null;
}

// the one liner except they didn't declare the arrow fn with const or let
firstNonConsecutive = arr => arr.length == 1 ? null : arr[0] + 1 != arr[1] ? arr[1] : firstNonConsecutive(arr.slice(1))

// using .find() and a ternary
function firstNonConsecutive (arr) {
    return (r=arr.find((x,i)=>i>0&&x!=arr[i-1]+1))===undefined?null:r
}

// the one 
// arrow fn using .slice() .filter() and .concat()
const firstNonConsecutive=arr=>arr.slice(1).filter((a,i)=>a!=(arr[i]+1)).concat(null)[0];

// I think this is clever
// declaring a variable null outside the for loop then loop through and reassign the variable INSIDE the for loop if the compared value of following index to previous index is not equal to 1 set the 2nd value equal to the declared variable
function firstNonConsecutive(arr){
    var out = null;
    for(var i = 1; i < arr.length; i++){
        if((arr[i] - arr[i - 1]) != 1){
        out = arr[i];
        break;
        }
    }
    return out;
}

// using .find() but more descriptive with variable names
function firstNonConsecutive (arr) {
    var first = arr.find( (element,index,array) => (index!=0 && element-1!=array[index-1]) ) 
    return first != undefined ? first : null
}