/*
Partial Word Searching

Parameters or Edge Cases:
    1st input will be a string of characters to be used as search params
    2nd input will be an array of strings that the 1st input will search through
    inputs will be a mix of upper and lowercase

Return:
    return an array of strings from the 2nd input that contain the 1st input search params
    if none exist then return an array with the string 'Empty'

Examples:
    "ab", ["za", "ab", "abc", "zab", "zbc"] --> ["ab", "abc", "zab"]
    "aB", ["za", "ab", "abc", "zab", "zbc"] --> ["ab", "abc", "zab"]
    "ab", ["za", "aB", "Abc", "zAB", "zbc"] --> ["aB", "Abc", "zAB"]
    "abcd", ["za", "aB", "Abc", "zAB", "zbc"] --> ["Empty"]

Pseudocode:
    create a copy of the input array using .map() of each element to lowercase includes the search params to lowercase but push the element without altering case
*/

// My Answer
function wordSearch(query, seq){
    let arr = seq.map((e) => e.toLowerCase().includes(query.toLowerCase()) === true ? e : '').filter((e) => e != '')
    return arr.length ? arr : ['Empty']
}

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])) // ["ab", "abc", "zab"]
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"])) // ["aB", "Abc", "zAB"]
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"])) // ["Empty"]

// Best Practices and Most Clever
// using regex
function wordSearch(query, seq){
    var reg = new RegExp(query,"i");
    var res = seq.filter(function(val){
      return reg.test(val);
    });
    return (res.length > 0) ? res : ["Empty"];
  }

// Similar to my answer but using indexOf() property of -1 instead of .includes()
function wordSearch(query, seq){
    query = query.toLowerCase();
    var res = seq.filter(function(item) {
      return item.toLowerCase().indexOf(query) !== -1;
    });
    
    return res.length ? res : ["Empty"];
  }

// using regex with .match()
wordSearch = (q, a) => (a = a.filter(e => e.match(new RegExp(q,'i'))))[0] ? a : ["Empty"];

// Brute force for loop
const wordSearch = (query, seq) => {
	let res = [], q = query.toLowerCase();
	for (var item of seq) {
  	let curr = item.toLowerCase();
  	if (curr.indexOf(q) > -1) res.push(item);
  }
  return res.length ? res : ['Empty'];
}