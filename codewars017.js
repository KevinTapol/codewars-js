// Parameters or Edge cases:
// Return: comments of each function using provided methods
// Examples: 
    //var arr=[1,2,3];     //define an array arr contains elements 1 2 3
    //arr.push(4);         //add element 4 to arr
    //console.log(arr)     //[1,2,3,4]
    //arr.pop();           //remove the last element from arr
    //console.log(arr)     //[1,2,3]
// Psuedo code: 
// 1. getLength(arr)    should return length of arr
// 2. getFirst(arr)     should return the first element of arr
// 3. getLast(arr)      should return the last element of arr
// 4. pushElement(arr)  should push an element to arr, and then return arr
// 5. popElement(arr)   should pop an element from arr, and then return arr

function getLength(arr){
    //return length of arr
    return arr.length
  }
  function getFirst(arr){
    //return the first element of arr
    return arr[0]
  }
  function getLast(arr){
    //return the last element of arr
    return arr[arr.length-1]
  }
  function pushElement(arr){
    //push an element onto the end of arr
    var el=1;
    arr.push(el)
    
    return arr
  }
  function popElement(arr){
    //pop an element from arr
    arr.pop(arr[arr.length-1])
    return arr
  }