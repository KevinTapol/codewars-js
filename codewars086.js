// Parameters or Edge cases: no emtpy  arrays/vectors take in an array of integers creat two functions
// Return: return the largest int for one function and lowest int for another function
// Examples: * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
//           * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
//           * [42, 54, 65, 87, 0]             -> min = 0, max = 87
//           * [5]                             -> min = 5, max = 5
// Psuedo code: use object Math and methods .min() and .max() iterate through the array with .forEach() to compare the values

//my answer
function min(list){
    let minVal = list[0]
    for(let i = 0; i < list.length; i++){
        if(list[i] < minVal){
            minVal = list[i]
        }
    }return minVal
}

function max(list){
    let maxVal = list[0]
    for(let i = 0; i < list.length; i++){
        if(list[i] > maxVal){
            maxVal = list[i]
        }
    }return maxVal
}

//best practices and most clever
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

//using .sort()
var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}

//using .apply()
var min = function(list){
    return Math.min.apply(null,list);
}

var max = function(list){
    return Math.max.apply(null,list);
}