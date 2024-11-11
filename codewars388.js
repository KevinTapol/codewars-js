/*
Take a Ten Minutes Walk

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

Parameters or Edge Cases:
    inputs will be an array of chars of 'n', 's', 'w' and/or 'e'
    inputs will never be an empty array

Return:
    return boolean true if the number of 'n' is equal to the number of s and the number of 'w' is equal to the number of 'e' else false.

Examples:
    ['n','s','n','s','n','s','n','s','n','s'] --> true
    ['w','e','w','e','w','e','w','e','w','e','w','e'] --> false
    ['w'] --> false
    ['n','n','n','s','n','s','n','s','n','s'] --> false

Pseudocode:
    if the length of the input array is not 10 then return false
    filter the input array into 4 separate arrays of only each char
    if the length of the 'n' array and 's' array are equal and the length of 'w' array and 'e' array are equal then return true else return false

*/

// My Answer 
function isValidWalk(walk) {
    const n = walk.filter(e => e === 'n').length
    const s = walk.filter(e => e === 's').length
    const e = walk.filter(e => e === 'e').length
    const w = walk.filter(e => e === 'w').length

    if(walk.length === 10 && n === s && e === w){
        return true
    } else {
        return false
    }
}

// My Answer refactoring conditional into ternary
function isValidWalk(walk) {
    const n = walk.filter(e => e === 'n').length
    const s = walk.filter(e => e === 's').length
    const e = walk.filter(e => e === 'e').length
    const w = walk.filter(e => e === 'w').length

    return walk.length === 10 && n === s && e === w ? true : false
}

// My Answer refactoring dry fn code for length
function isValidWalk(walk) {
    const len = x => walk.filter(e => e === x).length 
    return walk.length === 10 && len('n') === len('s') && len('e') === len('w') ? true : false
}

// My Answer refactored one liner arrow fn
const isValidWalk = (walk, len = x => walk.filter(e => e === x).length)=> walk.length === 10 && len('n') === len('s') && len('e') === len('w') ? true : false

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // true
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) // false
console.log(isValidWalk(['w'])) // false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) // false

// Best Practices
// using switch case but very clever use with increment and decrement on x and y values to return true on 0 for both x and y axis
function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
}

// Most Clever
// the same as my refactored answer but not using arrow fn
function isValidWalk(walk) {
    function count(val) {
      return walk.filter(function(a){return a==val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}

// clever use of .forEach() with an object value comparison for keys being direction and value being distance
function isValidWalk(walk) {
    var res = {n:0, w:0, s:0, e:0};
    walk.forEach((c) => res[c]++);
    return walk.length === 10 && res.n == res.s && res.e == res.w;
}

// .reduce() and creating an object
function isValidWalk(walk) {
    return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
}

// .forEach() with object value comparison
function isValidWalk(walk) {
    if(walk.length != 10) return false;
    var c = {}
    walk.forEach(function(d){ c[d] ? c[d] += 1 : c[d] = 1 });
    return c["w"] == c["e"] && c["n"] == c["s"];
}