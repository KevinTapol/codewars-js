/*
Tribonacci Sequence
    Description and examples state inputs will be a matrix or 2D array where the first element is a 1D array of non-negative numbers and the second element is a single non-negative number
    This is false. The actual inputs will be two separate inputs of one being a 1D array of non-negative numbers and the second being a single non-negative number.

Parameters or Edge Cases:
    1st element will be a 1D array of numbers greater than or equal to 0 and will have a length greater than or equal to 3
    2nd input will be a non-negative number greater than or equal to 0

Return:
    if the 2nd input is 0 then return []
    else return a 1D array with a length of the 2nd input starting with the 3 elements of the 1st input where each next index element is equal to the sum of the previous 3 index elements

Examples:
    [1,1,1], 10 --> [1,1,1,3,5,9,17,31,57,105]   
    [0,0,1], 10 --> [0,0,1,1,2,4,7,13,24,44]     
    [0,1,1], 10 --> [0,1,1,2,4,7,13,24,44,81]    
    [1,0,0], 10 --> [1,0,0,1,1,2,4,7,13,24]      
    [0,0,0], 10 --> [0,0,0,0,0,0,0,0,0,0]        
    [1,2,3], 10 --> [1,2,3,6,11,20,37,68,125,230]
    [3,2,1], 10 --> [3,2,1,6,9,16,31,56,103,190] 
    [1,1,1],  1 --> [1]
    [300,200,100], 0 --> []

Pseudocode:
    if n <= 3 then return the input array with the respective 2nd input value length so that 0 values will return an empty array
    create an array with the length of the 2nd input value where the first three elements are the elements from the 1st input value
    each successive value will be the sum of the three previous index values
    return the new array
*/

// My Answer brute force for loop
function tribonacci(arr,n){
    let result = arr.slice(0)
    if(n <= 3){
        return arr.slice(0,n)
    } 
    for(let i = 0; i < n - 3; i++){
        let lArr = result.slice(i, i + 4)
        let sum = lArr.reduce((acc, c) => acc + c)
        result.push(sum)
    }
    return result
}

// // My Answer refactored
function tribonacci(arr,n){
    let result = arr.slice(0)
    if(n <= 3){
        return arr.slice(0,n)
    } 
    for(let i = 0; i < n - 3; i++){
        result.push(result.slice(i, i + 4).reduce((acc, c) => acc + c))
    }return result
}

console.log(tribonacci([300,200,100], 0)) // []
console.log(tribonacci([1,1,1],  1)) // [1]
console.log(tribonacci([1,1,1], 10)) // [1,1,1,3,5,9,17,31,57,105]

// Best Practices and Most Clever
// similar to my answer but using only 1 return statement
function tribonacci(signature,n){  
    for (var i = 0; i < n-3; i++) { // iterate n times
      signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
    }
    return signature.slice(0, n); //return trib - length of n
}

// while loop with .reduce()
function tribonacci(signature,n) {
    const result = signature.slice(0, n);
    while (result.length < n) {
      result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
    }
    return result;
}

// pushing to an empty array with a for loop
function tribonacci(s,n){
    var arr = [];
    for(var i=0; i<n; i++) {
      arr.push((i<3) ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
    }
    return arr;
}

// pushing to an array with .reduce()
function tribonacci(signature,n){
    while (signature.length < n) {
      signature.push(signature.slice(-3).reduce((a, b) => a + b));
    }
    return signature.slice(0, n);
}

// recursion
function tribonacci(arr,n){
    if (n < 3) return arr.slice(0, n);
    return [arr[0]].concat(tribonacci([arr[1], arr[2], arr[0] + arr[1] + arr[2]], n-1));
}

// clever to start for loop at index 3
function tribonacci(signature,n){
    var l = signature.splice(0, n);
      
    for (var i=3; i<n; i++)
      l.push(l[i-3] + l[i-2] + l[i-1]);
      
    return l;
}

// clever one liner using [...Array(n)] to create an array of elements with the length of n then .reduce() referencing accumulated array and index with the default being the input array
const tribonacci = (signature, n) => [...Array(n)].reduce((arr, _, idx) => [...arr, arr[idx] + arr[idx+1] + arr[idx+2]], signature).slice(0, n);