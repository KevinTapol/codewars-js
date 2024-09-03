/*
Sort Santa's Reindeer

Parameters or Edge Cases:
  Inputs will be an array of strings.
  Each string is composed of two words separated by a single space.
  In case of two identical last names, keep the original order in the array.

Return:
  Return a sequence with the Reindeer names sorted by their last names.

Examples:
[
  "Dasher Tonoyan", 
  "Dancer Moore", 
  "Prancer Chua", 
  "Vixen Hall", 
  "Comet Karavani",        
  "Cupid Foroutan", 
  "Donder Jonker", 
  "Blitzen Claus"
] -->
[
  "Prancer Chua",
  "Blitzen Claus",
  "Cupid Foroutan", 
  "Vixen Hall", 
  "Donder Jonker", 
  "Comet Karavani",
  "Dancer Moore", 
  "Dasher Tonoyan",
]

[ 'Akira Mori', 'Kenjiro Mori', 'Susumu Mori' ] --> [ 'Kenjiro Mori', 'Susumu Mori', 'Akira Mori' ]

Pseudocode:
  using .sort() iterate through the input array comparing last names using array methods .split(' ') to create 2d array .slice(-1) to grab last element in this case last name and [0] to call the element
  with .sort() if the current element a compared to the next element b is smaller then return -1 which keeps puts a before b
  if the current element a compared to the next element b is greater then return 1 which puts the current element a after the next element b
  if both elements are equal then return 0 which does not change the order
*/

// My Answer
function sortReindeer(arr) {
  return arr.sort((a, b) => {
    const lastA = a.split(' ').slice(-1)[0];
    const lastB = b.split(' ').slice(-1)[0];
    if (lastA < lastB) {
      return -1;
    } else if (lastA > lastB) {
      return 1;
    } else {
      return 0;
    }
  });
}

// My Answer refactored using a nested ternary instead of if else conditionals
function sortReindeer(arr) {
  return arr.sort((a, b) => {
    const lastA = a.split(' ').slice(-1)[0];
    const lastB = b.split(' ').slice(-1)[0];
    return lastA < lastB ? -1 : lastA > lastB ? 1 : 0
  });
}

console.log(sortReindeer([
  "Dasher Tonoyan", 
  "Dancer Moore", 
  "Prancer Chua", 
  "Vixen Hall", 
  "Comet Karavani",        
  "Cupid Foroutan", 
  "Donder Jonker", 
  "Blitzen Claus"
]));

// Best Practices and Most Clever
// same idea of last name comparison but instead of using -1 1 or 0 here they use the method a.localCompare(b)
const sortReindeer = reindeerNames => reindeerNames.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));

// similar to my answer but cleaner by not using .slice(-1) to grab final element but calling [1] since there will only be 2 elements in the 2d array
function sortReindeer(reindeerNames) {
  return reindeerNames.sort((a, b) => 
    a.split(' ')[1] > b.split(' ')[1] ? 1 :
    a.split(' ')[1] < b.split(' ')[1] ? -1 : 0
  )
}