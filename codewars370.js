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

// here the 0 index element is not being removed but the above is why? .map '' vs undefined altering index ? maybe acting like a .find() first instance?
function lengthOfSequence (arr, n) {
    let fArr = arr.map((e, i) => e === n ? i : undefined).filter(e => e != undefined)
    return arr.length === 2 ? 2 : arr.filter(e => e === n).length != 2 ? 0 : arr.slice(fArr[0], fArr[1] + 1).length
}


console.log(lengthOfSequence([1, 2, 3, 1], 1)) // 4
console.log(lengthOfSequence([1, 1], 1)) // 2
