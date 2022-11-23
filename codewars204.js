// Parameters or Edge Cases:
//      input will be a string
// Return:
//      returns the url with anything after the anchor (#) removed if the url has a #
// Examples:
//      "www.codewars.com#about" --> "www.codewars.com"
//      "www.codewars.com?page=1" -->"www.codewars.com?page=1"
//      describe("Basic tests", () => {
//          it("Testing for fixed tests", () => {
//            assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
//            assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
//            assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
//            })
//      })
// Psuedo code:
//      search the string using .indexOf(#)
//      if it returns a -1 then the # doesn't exist and return the input
//      if it returns a location, return the string from the start up to the index location to of the #

// my answer
function removeUrlAnchor(url){
    // search the string using .indexOf(#)
    //  if it returns a -1 then the # doesn't exist and return the input
    if(url.indexOf('#') === -1){
        return url
    }else {
        // if it returns a location, return the string from the start up to the index location to of the #
        return url.slice(0,url.indexOf("#"))
    }
}

// my refactored answer arrow function ternary
const removeUrlAnchor = (url) => url.indexOf("#") === -1? url : url.slice(0,url.indexOf("#"))

// best practices and most clever used .split()
// The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
// In other words split("#") will split on the "#" omitting it and create an array between each location
// what this code is doing is splitting on the # then calling the first element in the array which would be everything before the "#"
function removeUrlAnchor(url){
    return url.split('#')[0];
}

// if I were to refactor this answer to an arrow function
const removeUrlAnchor = (url) => url.split("#")[0]

// using regex to replace # and everything after it with an empty string
function removeUrlAnchor(url){
    // TODO: complete
    return url.replace(/#.*/gi,"");
}

// another regex same as above but using +$ instead of *
const removeUrlAnchor = url => url.replace(/#.+$/,'');

// another regex
function removeUrlAnchor(url){
    // TODO: complete
    return url.replace(/#\w+/, '');
}

// another regex
function removeUrlAnchor(url) {
    return url.replace(/#.+/ig, "");
}

// another regex
function removeUrlAnchor(url){
    // TODO: complete
    return url.replace(/#\w+/, '');
}

// brute force for loop with break
function removeUrlAnchor(url){
    let string = ""
    for(let i = 0; i < url.length; i++){
      if(url[i] === "#") { break }
      string += url[i]
    }
    return string 
}

// using .includes()
function removeUrlAnchor(url){
    // first check if url contains #
    if(url.includes("#")) {
      // 1st parameter start at: index 0
      // 2nd parameter end at: index of #
      const routelessUrl = url.substring(0, url.indexOf('#'));
      return routelessUrl;
    }
    return url;
}

// using array methods
function removeUrlAnchor(url){
    return url
    // splitting each individual character into it's own element 
    .split("")
    // using a ternary for slice end location if # doesn't exist return the 2nd param as full length else return the index of the #
    .slice(0, url.indexOf("#") === -1 ? url.length : url.indexOf("#"))
    .join("");
}

// brute force for loop using .splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
function removeUrlAnchor(url){
    // TODO: complete
    let arr = url.split('');
    for(let i = 0; i < arr.length; i ++) {
      if(arr[i] === '#') {
        arr.splice(i, arr.length-i);
      }
    }
    return arr.join('');
}