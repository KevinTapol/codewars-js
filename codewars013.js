// Parameters or Edge cases: Note: The parameter is optional. So you have to give it a default value.
// Return: return a function that produces an array with the numbers 0 to N-1 in it.
// Examples: For example, the following code will result in an array containing the numbers 0 to 4: arr(5) // => [0,1,2,3,4]
// Psuedo code: create an array .push() method adds on the end of the array the current value of i
function arr(n){
    let newArr = [];
    for(let i = 0; i < n; i++){
      newArr.push(i);
    }
    return newArr;
  }

//this is the answer they wanted 
const arr = N => Array.from({length: n}, (_, i) => i);

