//P:arameters edge cases - If the array is empty or the array has only one element, the result should be 0
//R:eturn Sum differences between consecutive pairs in the array in descending order
//E:xamples 
    // sumOfDifferences([2, 1, 10])
    // Returns 9

    // Descending order: [10, 2, 1]

    // Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
//P:suedo code
//Reverse array order
let arr = [2, 1, 10];
arr.sort((a,b) => b - a);
console.log(arr);

//sum consecutive pairs and subtract the pairs
let sumOfDifferences = 0;
for (let i = 0; i < arr.length - 1; ++i) {
    sum += arr[i] - arr[i + 1];
}

//return sum
console.log(sum);

//this is my answer but it failed 
//something i forgot about 
    //const sumOfDifferences = arr =>
    //  arr.sort((a, b) => b - a).shift() - arr.pop() || 0;


//correct answer
function sumOfDifferences(arr) {
    return arr
      .sort((a, b) => b - a)
      .reduce((acc, curr, index, array) => {
        const next = array[index + 1];
        if (!isNaN(curr - next)) {
          acc += curr - next;
        }
        return acc;
      }, 0);
  }
  
  console.log(sumOfDifferences([]));
  console.log(sumOfDifferences([10]));
  console.log(sumOfDifferences([10, 1, 2]));

  //stuff to understand
  function sumOfDifferences(arr) {
    return arr.sort((a,b)=>b-a).reduce((o,c,i,a)=>{
    if(a.length-1>i)
       o +=c-a[i+1];
    return o;
    },0) || 0;
  }

  //another solution that makes more sense
  function sumOfDifferences(arr) {

    // Create decending order array
    
    const arrDecending = arr.sort((a, b) => b - a);
    
    let sumOfDiff = 0;
    
    const pairDiffs = (pair) => {
    
      // We check to see if the parameter is a pair.
      // If not, then we used the last value already and no longer need to add the difference
      
      if (pair[1] !== undefined) {
        return pair[0] - pair[1]
      } else {
       return 0;
      }
    }
  
    arrDecending.forEach((num, index, array) => {
    
      // Call our function with consecutive pair array argument, and capture the difference
      
      const difference = pairDiffs([num, array[index + 1]]) 
      
      // Add the differences together
      
      sumOfDiff += difference;
    })
    
    if (arr.length < 2) {
      return 0;
    } else {
      return sumOfDiff
    }
  }

  //another solution 
  function sumOfDifferences(arr) {
    //create empty array variable
   let sum = 0;
   //sort 
   let sortedArray = arr.sort(function(a, b){return b-a})
  // pair and subtract
  for ( let i = 0; i < (sortedArray.length - 1); i++) {
      sum += sortedArray[i] - sortedArray[i + 1]
    } return sum 
  } 