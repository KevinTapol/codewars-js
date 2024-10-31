/*
Well of Ideas - Harder Version

Parameters or Edge Cases:
    inputs will be a matrix or 2D array of elements of arrays of strings of mixed Upper and Lower case words
    sub arrays may not be the same length
    elements may be strings other than variations of 'good' and/or 'bad' such as 'six' and 'CAPS'

Return:
    return 'Fail!' if the input array contains only strings of 'bad', 'Publish!' if there are 1 or 2 'good' and 'I smell a series!' if there are more than 2 'good'

Examples:
    [['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']] --> 'Fail!'
    [['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']] --> 'Publish!'
    [['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']] --> 'I smell a series!'

Pseudocode:
    create a shallow copy of the input array flattened to 1D, converting all elements to lowercase and filtering elements keeping only 'good'
    if the length of the new array is greater than 2 return 'I smell a series!', equal to 1 or 2 'Publish!' or 0 'Fail!'
    filter to include elements that contain either 'g' or 'G'
*/

// My Answer if .toLowerCase() or .toUpperCase() was allowed in this kata
function well(x){
    const arr = x.flat().map(e => e.toLowerCase()).filter(e => e === 'good').length
    return arr > 2 ? 'I smell a series!' : arr === 0 ? 'Fail!' : 'Publish!'
}

// My Answer if .includes() was allowed and not .toLowerCase() or .toUpperCase() and there would be only 2 varied lengths of inputs
function well(x){
    const arr = x.flat().filter(e => e.includes('g') || e.includes('G')).length
    return arr > 2 ? 'I smell a series!' : arr === 0 ? 'Fail!' : 'Publish!'
}

// Kata hidden description elements may be strings other than various cases of either 'good' or 'bad'
function well(x){
    const arr = x.flat().filter(e => e.length === 4).length
    return arr > 2 ? 'I smell a series!' : arr === 0 ? 'Fail!' : 'Publish!'
}

// Since .toLowerCase() .toUpperCase() .includes() and other hidden limitations exist, I had to resort to varied combinations of the string 'good'.
function well(x){
    const arr = x.flat().filter(e => e === 'good'||e ==='Good'||e ==='gOod'||e ==='goOd'||e ==='gooD'||e ==='GOod'||e ==='GoOd'||e ==='GooD'||e ==='gOOd'||e ==='goOD'||e ==='gOoD'||e ==='gOOD'||e ==='GOod'||e ==='GoOD'||e ==='GOOd'||e ==='GOOD').length
    return arr > 2 ? 'I smell a series!' : arr === 0 ? 'Fail!' : 'Publish!'
}

console.log(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']])) // 'Fail!'
console.log(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']])) // 'Publish!'
console.log(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']])) // 'I smell a series!'

// Best Practices and Most Clever
// adding whitespace to the front of the input then using .match() to create an arrays with regex
function well(x) {
    let match = (''+x).match(/good/gi) || []
    if (match.length == 0) return 'Fail!'
    if (match.length <= 2) return 'Publish!'
    return 'I smell a series!'
}

// .forEach()
function well(x){
    var count = 0;
    x.forEach(function(arr) {
      arr.forEach(function(elem) {
        if(typeof(elem) === 'string' && elem.toLowerCase() === 'good') {
          count++;
        }
      });
    });
    if(count === 0) {
      return 'Fail!';
    }
    return count > 2 ? 'I smell a series!' : 'Publish!';
}

// very clever to convert the entire input into a string allowing the use of string methods
function well( x ) {
    const $ = x.toString().toLowerCase().split(/good/g).length-1
    return $ > 2 ? 'I smell a series!' : $ > 0 ? 'Publish!' : 'Fail!'
}

// Brute force for loop
function well(x){
    let count = 0;
    for (let i = 0; i < x.length; i++){
      for (let j = 0; j < x[i].length; j++){
        if (`${x[i][j]}`.toLowerCase() == 'good'){
          count += 1;
        };
      };
    };
    return count < 1 ? 'Fail!' : count <= 2 ? 'Publish!' : 'I smell a series!';
}

// clever to use a separate fn
function isGood(idea) {
    return typeof idea === 'string' && idea.toLowerCase() === 'good'
  }
  
  function well([first, ...rest]) {
    const all = first.concat(...rest)
    const good = all.filter(isGood).length
    if (good > 2) return 'I smell a series!'
    if (good > 0) return 'Publish!'
    return 'Fail!'
}

// clever using concat to convert the input into a string
const well = a => {
    let goodCounts = a.map(e => e.filter(e => (''+e).toLowerCase() == 'good').length)
    let goodCount = goodCounts.reduce((p,c) => p + c)
    return goodCount == 0 ? 'Fail!' : goodCount > 2 ? 'I smell a series!' : 'Publish!'
}

// .reduce() and regex
function well(x){
    x = x.reduce((p, c) => p + c.filter(f => /^good$/i.test(f)).length, 0);
    return x === 0 ? 'Fail!' : x <= 2 ? 'Publish!' : 'I smell a series!';
}

// another string conversion but template literals to convert the input into a string
const well = x =>   (x = x.map(e=>e.join``).join(``).replace(/[^g]/gi,'').length) == 0 ? 'Fail!' : x > 2 ? 'I smell a series!' : 'Publish!'