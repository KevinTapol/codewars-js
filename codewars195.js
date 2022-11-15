// Parameters or Edge Cases:
//      input will be an array of numbers
//      if the array is empty or null return an empty array
// Return:
//      an input array of numbers sorted in ascending order
// Examples:
//      solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
//      solution(null); // should return []
// Psuedo Code:
//      return an empty array if the input is not an array using !Array.isArray(arrayName)
//      use .sort((a,b)=> a-b) to sort the numbers of the array and return the array 

// my answer
function solution(nums){
    // return an empty array if the input is not an array using !Array.isArray(arrayName)
    if(!Array.isArray( nums )){
        return []
    } else {
    // use .sort((a,b)=> a-b) to sort the numbers of the array and return the array     
        return nums.sort((a,b)=>a-b)
    }
}

// my answer refactored arrow function and ternary
const solution = (nums) => !Array.isArray(nums) ? [] : nums.sort((a,b)=>a-b)

// best practices and most clever
// here they are using a normal function for .sort() instead of an arrow function
// what is interesting is they either return an empty array or the array instead of testing if the array is null
function solution(nums){
    return (nums || []).sort(function(a, b){
      return a - b
    });
}

// the reason I like this answer is because the problem DIRECTLY asked for null array situations
function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
}

// brute force for loop and conditionals
function solution(arreglo){
    if(arreglo==null || arreglo.length===0){
          return arreglo=[];
  
      }
      var n,  aux;
      n = arreglo.length;
      for ( let k = 1; k < n; k++) {
          for ( let i = 0; i < (n - k); i++) {
              if (arreglo[i] > arreglo[i + 1]) {
                  aux = arreglo[i];
                  arreglo[i] = arreglo[i + 1];
                  arreglo[i + 1] = aux;
              }
          }
      }
    return arreglo;
}

// arrow function using truthy/falsy
const solution = nums =>
  nums ?
  nums.sort((a,b) => a-b) :
  [];

// calling a function in a function
function solution(nums){
    if(nums===null)
      return [];
   return nums.sort(sortNum);
}
  
  function sortNum(a,b) {
      return a - b;
}

// iteresting use of input manipulation
const solution = (nums, arr = nums === null ? [] : nums) => arr.sort((a, b)=> a - b)

// arrow function using spread
solution = (nums) => nums ? [...nums].sort((a,b) => a-b) : [];