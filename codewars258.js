// Parts of a list
/*
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
Examples of returns in different languages:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
or
 a = {"az", "toto", "picaro", "zone", "kiwi"} -->
{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or 
a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
"(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"
*/ 

// Parameters or Edge Cases:
/*
    inputs will be an array of string words that can be uppercase or lowercase
    inputs will not be empty or null
    Elements of a pair must be in the same order as in the original array.
*/ 

// Return:
/*
    without moving the order of the elements , return a 2D array with each element being an array of ONLY 2 ELEMENTS!! where the first element is only the first element in the input and the second is the rest of the elements concatenated together while maintaining whitespace. For each additional element in the 2D array, remove one word from the concatenated 2nd element to the 1st element.
*/ 

// Examples:
/*
    ["I", "wish", "I", "hadn't", "come"] => [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]
    ["cdIw", "tzIy", "xDu", "rThG"] => [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]
    ["vJQ", "anj", "mQDq", "sOZ"] => [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]
*/ 

// Pseudocode:
/*
    // for loop
    // declare a global empty array called result 
    // iterate through the input array length -1 because we are using the next index value
    //create a copy of the input array from start to current index + 1 to include the current index, convert it to a string and push it to combo
    // create a copy of the input array sliced from current index +1 to exclude the current index and to the end of the input array, convert it to a string and push it to combo
    // push combo to result
    // return result
*/ 

// my answer
function partlist(arr) {
    // declare a global empty array called result
    let result = []
    // iterate through the input array length -1 because we are using the next index value
    for (let i = 0; i < arr.length -1; i++){
        // declare a local empty array called combo
        let combo = []
        //create a copy of the input array from start to current index + 1 to include the current index, convert it to a string and push it to combo
        combo.push(arr.slice(0, i+1).join(' '))
        // create a copy of the input array sliced from current index +1 to exclude the current index and to the end of the input array, convert it to a string and push it to combo
        combo.push(arr.slice(i + 1).join(' '))
        // push combo to result
        result.push(combo)
    }
    // return result
    return result
}

function partlist(arr) {
    // create a shallow copy of the input array where each element is a string copy of the start to current index + 1 and a string copy of the current index + 1 to final value separated by a comma
    // remove the final element with slice
    return arr.map((e,i) =>[arr.slice(0,i + 1).join(' '), arr.slice(i+1).join(' ')]).slice(0,-1)
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"])) // [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]
console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"])) // [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]
console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"])) // [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]

// best practices very similar to my answer but using var instead of let, starting the for loop at 1 allowing slice from 0 to i and i to end
function partlist(arr) {
    var newArray;
    var returnArray=[];
    for( var i=1; i<arr.length; i++){
      newArray = [];
      newArray.push(arr.slice(0,i).join(" "));
      newArray.push(arr.slice(i).join(" "));
      returnArray.push(newArray);
    }
    
    return returnArray;
}

// most clever 
// arrow fn implicit return simliar to my array method answer but creating copies at start to index and index to end then slicing off the first element instead of index + 1
var partlist=a=>a.map((v,i)=>[a.slice(0,i).join(' '),a.slice(i).join(' ')]).slice(1)

// same as most clever but using .pop() instead of slice()
function partlist(arr){
    arr = arr.map((_, i)=> [arr.slice(0,i+1).join(' '), arr.slice(i+1).join(' ')])
    arr.pop();
    return arr
  }

// using reduce() and filer()
const partlist = arr => arr
  .reduce((a,p,i) => {
    if (i < arr.length-1) {
      a[i].push(arr.slice(0,i+1).join(' '), arr.slice(i+1).join(' '));
      a.push([])
    }
    return a;
  },[[]])
  .filter(arr => arr.length)