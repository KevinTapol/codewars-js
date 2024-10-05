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

// My Answer refactored ternary
function crap(x, bags, cap){
  let result = x.flat().filter(e => e != '_')
  return result.includes('D')? 'Dog!!' : result.length > bags*cap ? 'Cr@p' : 'Clean'
}

// My Answer one liner arrow fn
const crap = (x, bags, cap, result = x.flat().filter(e => e != '_')) => result.includes('D')? 'Dog!!' : result.length > bags*cap ? 'Cr@p' : 'Clean'


console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2)) // "Dog!!"
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1)) // "Cr@p"
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2)) // "Clean"

// Best Practices and Most Clever
// using .concat() and .reduce() to flatten the array instead of .flat()
function crap(x, bags, cap){
  var yard = x.reduce( (a, b) => a.concat(b) );
  return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter( val => val === '@' ).length > 0 ? 'Clean' : 'Cr@p';
}

// using .split() to remove '_' instead of .filter()
crap=(a,b,c)=>(a+"").includes("D")?"Dog!!":(a+"").split("@").length-1<=b*c?"Clean":"Cr@p"

// using .match() and regex
function crap(x, bags, cap){
  let crap = String(x).match(/@/g) === null ? 0 : String(x).match(/@/g).length
  let d = String(x).match(/[D]/g) === null ? 0 : String(x).match(/[D]/g).length
  return d > 0 ? 'Dog!!' : bags*cap >= crap ? 'Clean' : 'Cr@p'
}