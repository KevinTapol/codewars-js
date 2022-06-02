// Task
// Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

// Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

// And then sort array in descending order.

// Finally, use the separator ">" to connect the elements into a string.

// Parameters or Edge cases:
// Return:
// Examples:
// Psuedo code:

// When there is a large number of strings that need to be connected to a string, the use of the + operator speed is slow, the correct method should be to put them into the array, and then use the join() method:

// Here we look at some examples of join(). Its main purpose is to merge the elements of an array into a string, using a parameter separator to connect each element. If the separator is omitted, the default separator is ",":

// var arr=[1,2,3,4,5];
// console.log(arr.join());      //output: 1,2,3,4,5
// console.log(arr.join(","));   //output: 1,2,3,4,5
// console.log(arr.join(" "));   //output: 1 2 3 4 5
// console.log(arr.join("and")); //output: 1and2and3and4and5

// One of its classic applications is to produce a specified number of repeating characters:

// function repeat(s,n){
//   return [...Array(n+1)].join(s);
// }
// console.log(repeat("a",5)); //output: aaaaa
// console.log(repeat("abc",5)); //output: abcabcabcabcabc

// This example by traversing the array and concat() method to get a one-dimensional array, which contains all the elements of the two-dimensional array. Or use more simple code:

// var arr=[[1,2],[3,4],[5,6]];
// var result=[].concat(...arr);
//console.log(result);    output: [ 1, 2, 3, 4, 5, 6 ]

//more readable separated variables per each method
function bigToSmall(arr){
    //coding here...
   //.concat() 2d array into 1
    let twoToOne = [].concat(...arr);
    //.sort()array in decending order
    let arrDecending = twoToOne.sort((a, b) => b - a);
    // .join()adding separator >
    let rightCarrotArr = arrDecending.join(">");
    return rightCarrotArr
  }

//my submited answer of nested methods
  function bigToSmall(arr){
    let rightCarrotArr = (([].concat(...arr)).sort((a, b) => b - a)).join(">");
    return rightCarrotArr
    }
//cleaner nested methods
    const bigToSmall = arr => [].concat(...arr).sort((a,b) => b-a).join('>')

//same answer just using function layout    
    function bigToSmall(arr) {
        return [].concat(...arr).sort((a, b) => b - a).join('>');
      }