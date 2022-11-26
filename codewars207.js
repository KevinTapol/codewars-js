// Parameters or Edge Cases:
//      input will be a string word with upper and lowercase letters
// Return:
//      an array of the indexes of the capital letters
// Examples:
//      Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
// Psuedo Code:
//      declare an empty array
//      loop through the string comparing each character to its upperCase character
//      if they are equal then push that index value as an integer to the empty array
//      return the array

// my answer
function capitals (word){
    // declare an empty array
    let arr = []
    // loop through the string comparing each character to its upperCase character
    for(let i in word){
    // if they are equal then push that index value to the empty array   
        if(word[i] === word[i].toUpperCase()){
            arr.push(+i)
        }
    // return the array    
    }return arr
}

console.log(capitals('CodEWaRs')) // [0,3,4,6] 

// my answer refactored arrow function one liner
const capitals = (word) => {var arr = [];{for(let i in word){if(word[i] === word[i].toUpperCase()){arr.push(+i)}}}return arr}

// best practices same as my unrefactored answer but declaring the function as an object
var capitals = function (word) {
    var caps = [];
      for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
};

// most clever using array methods .split() and .reduce()
var capitals = function (word) {
	return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

// very clever imo
// using .match() with regex and array methods
const capitals = word => { return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) }) }

// using spread .map() ternary return index if condtion met else return -1 then use .filter() to create a shallow array of the met conditions
var capitals = word => [...word].map((el, i) => el === el.toUpperCase() ? i : -1).filter((e)=> e >= 0)

// using .match() regex and .map()
const capitals = WORD => WORD.match(/[A-Z]/g).map(el => WORD.indexOf(el))

// using .map() and .filter()
var capitals = function (word) {
	return word.split('')
             .map(function(l, i) { if (l.toUpperCase() === l) return i; })
             .filter(function(i) { return i != null })
};

// using array methods and regex
var capitals = function (word) {
    return word.split('').reduce(function(n, l, i){
      return /[A-Z]/.test(l) && n.push(i), n;
    }, []);
};


// using .split() and .reduce()
var capitals = function (word) {
    return word.split('').reduce(function(result, c, i) {
      if (c.toUpperCase() === c) result.push(i);
      return result;
    }, []);
};

// using spread .reduce() and regex
const capitals = word => [...word].reduce((pre, val, idx) => /[A-Z]/.test(val)? [...pre, idx] : pre, []);

// using .replace() and regex
var capitals = function (word) {
	var ret = [];
  word.replace(/[A-Z]/g, function(_, i){ ret.push(i) });
  return ret;
};