/*
Clean up after your dog

Parameters or Edge Cases:
  there will be 3 inputs
  1st input will be a 2D array or matrix of single char strings of either 'D', '@' or '-'
  2nd input will be an integer representing a number of bags
  3rd input will be an integer representing a number of how much '@' can each bag hold

Return:
  return string 'Dog!!' if 'D' is in the 2d array, 'Cr@p' if the count of '@' chars is greater than the product of bag and cap or else 'Clean'

Examples:
    [['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2 --> "Clean"
    [['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1 --> "Cr@p"
    [['_','_'], ['_','@'], ['D','_']], 2, 2 --> "Dog!!"

Pseudocode:
  create a copy of the input array flattening it into a 1D array and removing all '_' chars
  if the copy includes the char 'D' return 'Dog!!'
  count the number of '@' chars and if it is greater than the product of bag and cap then return 'Cr@p' else 'Clean'

*/

// My Answer
function crap(x, bags, cap){
  let result = x.flat().filter(e => e != '_')
  if(result.includes('D')){
    return 'Dog!!'
  } else if (result.length > bags*cap){
    return 'Cr@p'
  } else {
    return 'Clean'
  }
}

console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2)) // "Dog!!"
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1)) // "Cr@p"
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2)) // "Clean"