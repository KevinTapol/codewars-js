/*
Double Trouble

Parameters or Edge Cases:
    first input will be an array of integers
    second input will be a single integer
    unknown if array can be empty or integers will be greater than 0

Return:
    return an Output array that has no pairs of consecutive elements which sum equal to t 

Examples:
    [1, 3, 5, 6, 7, 4, 3],7 --> [1, 3, 5, 6, 7, 4]
    [4, 1, 1, 1, 4],2 --> [4, 1, 4] 
    [2, 2, 2, 2, 2, 2], 4 --> [2] 
    [2, 6, 2], 8 --> [2, 2] 

Pseudocode:
    *NOTE* found hidden description amongst discussion  Output array must have no pairs of consecutive elements which sum equal to t
    This means we have to constantly reevaluate the input array comparing the current element to the next element after the next element is removed.

    iterate through the input array
        if the current element and the next element sum is equal to t then delete the next element with .splice() and decrement the iteration 
        *NOTE* This allows us to stay at the current index comparing the next element after the the deletion from the input array.
        return the input array

        array method logic
        push first element of input to result and .slice() input to exclude first element
            if the last element of result and the current element of the input sum does not equal t then push the current element input to result
*/

// My Answer Brute force for loop, Best Practices and Most Clever
function trouble(x, t){
    for(let i = 0; i < x.length; i++){
        if(x[i] + x[i + 1] === t){
            x.splice(i + 1,1)
            i--
        }
    }
    return x
}

// My Answer Brute force for loop starting and 1 and using - as comparison
function trouble(x, t){
    for(let i = 1; i < x.length; i++){
        if(x[i] + x[i - 1] === t){
            x.splice(i,1)
            i--
        }
    }
    return x
}

// My Answer using .map() but only to iterate through the input array and push to another when certain conditions are met
function trouble(x, t){
    let result = [x[0]]
    let arr = x.slice(1)
    arr.map(e => result[result.length -1] + e != t ? result.push(e) : '')
    return result
}

// My Answer using .reduce() with default value being the first element of the input array instead of an empty array
function trouble(x, t){
    let arr = x.slice(1)
    return arr.reduce((acc, c) => {
        acc[acc.length - 1] + c != t ? acc.push(c) : ''
        return acc
    }, [x[0]])
}

// *NOTE*  The use of ; after each logic step is necessary to include multiple conditional logic to one line.
function trouble(x, t, arr = x.slice(1)){ 
    return arr.reduce((acc, c) => {acc[acc.length - 1] + c != t ? acc.push(c) : ''; return acc;}, [x[0]])
}

// My Answer .reduce() one liner arrow fn
const trouble = (x, t, arr = x.slice(1)) => arr.reduce((acc, c) => {acc[acc.length - 1] + c != t ? acc.push(c) : ''; return acc;}, [x[0]])

console.log(trouble([1, 3, 5, 6, 7, 4, 3],7)) // [1, 3, 5, 6, 7, 4]
console.log(trouble([4, 1, 1, 1, 4],2)) // [4, 1, 4]
console.log(trouble([2, 2, 2, 2, 2, 2], 4)) // [2]

// similar to my .reduce() but default being empty and conditional logic spread operator
const trouble = (x, t) => x.reduce((pre, val) => val + pre[pre.length - 1] !== t ? [...pre, val] : pre, []);

// clever use of while loop with .splice()
function trouble(x, t){
    let arr = x;
    for (let i = 1; i < arr.length; ++i) {
      while ((arr[i] + arr[i-1]) === t) {
        arr.splice(i, 1);
      }
    }
    return arr;
}

// clever conditional logic for .reduce()
const trouble = (x,t) => x.reduce((prev, curr) => {
    if( !prev.length || curr+prev[prev.length - 1] !== t )
      prev.push(curr)
    return prev
  }, [])

// .filter()
function trouble(x, t){
    var prev = null;
    return x.filter((v,i)=>(!i||v+prev!=t)&&(prev=v));
}

// clean while loop logic
function trouble(x, t){

    let n = [];
    let i = 0;
    
    while(i < x.length - 1){
      
      if( x[i] + x[i + 1] === t ) { 
      n =  x.splice(i + 1,1) ;
       }else{
         i++
       }      
    }
    return x;
}