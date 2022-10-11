// Parameters or Edge Cases: 
//      A word (string) of length 0 < str < 1000
// Return: 
//      If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// Examples:
//      describe("GetMiddle", function() {
//          2
//            it("Tests", function() {
//          3
//              Test.assertEquals(getMiddle("test"),"es");
//          4
//              Test.assertEquals(getMiddle("testing"),"t");
//          5
//              Test.assertEquals(getMiddle("middle"),"dd");
//          6
//              Test.assertEquals(getMiddle("A"),"A");
//          7
//            });
//          8
//      });
// Psuedo Code: 
//      The length returns the number of elements starting count at 1 and index starting count at 0. 

//      If string length is odd say 5, return 3 which would be at index 2. I have to take the final index of 4 divide by 2 and return the character at that index. So, I have to return string.[(string.length -1) / 2]
//      If the string length is even say 6, return 3 and 4 which would be at index 2 and 3. I have to take the final index of 5 add 1 then divide by 2 and return that index and the next index value. So, I would return string.string[(string.length /2) -1] and string[string.length /2]

// my answer
function getMiddle(s) {
  if(s.length % 2 === 0){
    return s[(s.length /2) -1] + s[s.length /2]
  } else {
    return s[(s.length -1) / 2]
  }
}

// my answer refactored to arrow function and ternary
const getMiddle = (s) => s.length % 2 === 0 ? s[(s.length /2) -1] + s[s.length /2] : s[(s.length -1) / 2]

// best practices and most clever
// substr() is deprecated
// The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
// Math.ceil() rounding up is the first input for substr()
// if the length is even then the second input for substr() is 2 else 1
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// Using charAt() and Math.floor() to round down incase it is odd
// if length is even, use .slice() length returning 2 characters
function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
}

// slice() with floats? I didn't think that was possible
function getMiddle(s) {
  return s.slice((s.length-1)/2, s.length/2+1);
}

// using substring() Math.ceil and Math.floor()
function getMiddle(s){
  return s.substring(Math.ceil(s.length/2)-1, Math.floor(s.length/2)+1)
}

// using Math.round()
function getMiddle(s) {
    var h = s.length / 2;
    h = Math.round(h);
    if(s.length % 2 === 0){
      return s.slice(h - 1, h + 1);
    }else{
      return s.slice(h - 1, h);
    }
}
