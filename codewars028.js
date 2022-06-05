// Parameters or Edge cases: parameter is an array of strings
// Return: 1. traverse an array and return the shortest string length
        // 2. traverse an array and intercept all the strings to the length of the shortest string length starting from index0
// Examples:
    //cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
    //cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
    //cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
// Psuedo code: create a function with parameter of given array
              //delcare variable of the first element in the array as it's length
              //loop through the array comparing the current element length to the previous element length starting with index 0
              //if the length is less than the previous then reassign the declared variable to the current variable
              //assign a new array using parameter.map and slice() through each element at start 0 and end at the length of the smallest string
              //return the new array
//my answer
function cutIt(arr) {
  let smallestString = arr[0].length;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length < smallestString) {
      smallestString = arr[i].length;
    }
  }
  let newArr = arr.map(function(x) {
    return x.slice(0, smallestString);
  });
  return newArr;
};

//best practices                
function cutIt(arr){
  const minLength = Math.min(...arr.map(x => x.length));
  return arr.map(x => x.slice(0, minLength));
}