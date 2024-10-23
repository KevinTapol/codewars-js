/*
Finding length of the sequence

Return:
    return the length of sub-array based on the input array that begins and ends with the 2nd input value. If the 2nd input occurs less than 2 times or more than 2 times, return 0.

Examples:
    [1, 1], 1 --> 2, 'Returns two when there are only two elements in the array');
    [1, 2, 3, 1], 1 --> 4, 'Returns four for an array of length four and the number to be searched at the boundaries');
    [-7, 5, 0, 2, 9, 5], 5 --> 5, 'Returns five');
    [-7, 6, 2, -7, 4], -7 --> 4, 'Returns four');

Pseudocode:
    filter the input array by the 2nd input integer returning their index value instead of the element
    if the new array length is not equal to 2, then return 0
    else slice the input array from the index values of the filtered copy
    return the new sliced array
*/

// My Answer
function lengthOfSequence (arr, n) {
    let fArr = arr.map((e, i) => e === n ? i : '').filter(e => e != '')
    if(fArr.length === 1){
        fArr.unshift(0)
    }
    return arr.length === 2 ? 2 : arr.filter(e => e === n).length != 2 ? 0 : arr.slice(fArr[0], fArr[1] + 1).length
}

// If I add a char to the empty string the .map() index won't be altered removing 0 index elements. Using this, I can remove the conditional adding back 0 index.
function lengthOfSequence (arr, n) {
    let fArr = arr.map((e, i) => e === n ? i : 'x').filter(e => e != 'x')
    return arr.length === 2 ? 2 : arr.filter(e => e === n).length != 2 ? 0 : arr.slice(fArr[0], fArr[1] + 1).length
}

// here the 0 index element is not being removed but the above is why? .map '' vs undefined altering index ? maybe acting like a .find() first instance?
function lengthOfSequence (arr, n) {
    let fArr = arr.map((e, i) => e === n ? i : undefined).filter(e => e != undefined)
    return arr.length === 2 ? 2 : arr.filter(e => e === n).length != 2 ? 0 : arr.slice(fArr[0], fArr[1] + 1).length
}


console.log(lengthOfSequence([1, 2, 3, 1], 1)) // 4
console.log(lengthOfSequence([1, 1], 1)) // 2

// Best Practices and Most Clever
// indexOf() and lastIndexOf()
function lengthOfSequence(arr, n){
    return arr.count(n) == 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;
  }
  
  Array.prototype.count = function(n){
    return this.filter(function(v){ return v == n }).length;
}

// one liner using indexOf() and lastIndexOf()
const lengthOfSequence = (arr, n) => arr.filter(val => val === n).length === 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;

// declared variables and conditionals
var lengthOfSequence = function (arr, n) {
    // TODO: Write some scripts here
    var index1 = arr.indexOf(n);
    var index2 = arr.indexOf(n,index1 + 1);
    var index3 = arr.indexOf(n,index2 + 1);
    if (index1 == -1 || index2 == -1 || index3 != -1) {return 0} ;
    return index2 - index1 + 1;
}