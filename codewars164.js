//      An isogram is a word that has no repeating letters, consecutive or non-consecutive.
//      Assume the empty string is an isogram. Ignore letter case.
// Parameters or Edge Cases:
//          Inputs will be a string.
//          Inputs can be empty, uppercase and/or lowercase.
// Return: return boolean true if input has no duplicate characters else false
// Examples:
//      describe("Tests", () => {
//          it("test", () => {
//            assert.strictEqual( isIsogram("Dermatoglyphics"), true );
//            assert.strictEqual( isIsogram("isogram"), true );
//            assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
//            assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
//            assert.strictEqual( isIsogram("isIsogram"), false );
//            assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
//          });
//      });
// Psuedo Code: 
//          take the input string and use .lowerCase() for comparison .split('') to convert to an array .sort() to sort the array 
//          compare each character to the character following it since it is sorted duplicates will be next to eachother
//          if there are no duplicate characters or the input is an empty string return boolean true
//          else return false


// my answer
function isIsogram(str){
    let arr = str.toLowerCase().split('').sort()
    if(str === "") {
        return true
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i + 1]) {
            return false
        } 
    } return true
}
console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("isogram"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))
console.log(isIsogram("isIsogram"))
console.log(isIsogram(''))

// best practices
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
}

// most clever uses regex
function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
}

// nested for loops
function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
}

// .match() with regex
function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
}

// creating a function to compare elements index to its input index then using .filter() on that function to compare lengths
function isIsogram(str)  {
    // Downcase everything, split on letters.
    str_lc = str.toLowerCase();
    var letters = str_lc.split('');
    
    // Utility: checks whether the given "value" at "index" is actually
    // first encountered at this "index" position within a string ("self").
    // Expected to be used with Array#filter.
    var check4uniqueness = function(value, index, self) { 
      return self.indexOf(value) === index;
    }
    
    // An isogram string contains no duplicate, hence must have the same
    // length than the array composed of unique letters from that string.
    return letters.filter(check4uniqueness).length == str.length;
  }

// for loop using indexOf(element, index to start the search at) and .charAt()
// clever using the if element doesn't exist indexOf() returns -1 so if the character does exit(duplicates) return false else true
function isIsogram(str) {
    str = str.toLowerCase()
    
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(str.charAt(i), i + 1) >= 0) {
        return false
      }
    }
    
    return true
  }

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// !str testing if empty .every() checks if each indexOf() each value is equal to that index. 
function isIsogram(str) {
    return !str || str.toLowerCase().split('').every(function(v, i, arr) {return arr.indexOf(v) == i;});
}

// regex with .test()
// The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
function isIsogram(str){
    return !/(.).*?\1/i.test(str);
}

// regex with .match()
// The match() method retrieves the result of matching a string against a regular expression.
function isIsogram(str){
    return !str.match(/(.).*\1/i);
}

// using .map() but same idea as function(element, index, array)
function isIsogram(str){
    let value = true;
    str.toLowerCase().split('').sort().map((letter, index, array) => {
      if (letter === array[index + 1]) value = false;
    });
    return value;
}