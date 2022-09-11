// Parameters or Edge cases: inputs will be strings
// Return: true if the entire string is upper case else false
// Examples: (input -> output)
//           "c" -> False
//           "C" -> True
//           "hello I AM DONALD" -> False
//           "HELLO I AM DONALD" -> True
//           "ACSKLDFJSgSKLDFJSKLDFJ" -> False
//           "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// Psuedo code:  take the string input and create a new string.toUpperCase() and compare them
//               if they are equal in value and type then return true else false
//               might as well do an arrow fn and ternary answer too


//               ***Test cases are ONLY accepting object prototype solutions so... ***

// New Psuedo code after looking at the test cases: use object string .prototype with the method .isUpperCase() set equal to a function String.prototype.isUpperCase = function() {}
//               that checks if the the object .toString() is equal to the object .toUpperCase() 
//               return true if they are equal else false

// my answer
String.prototype.isUpperCase = function(){
    if(this.toString() == this.toUpperCase()){
        return true;
    } else{
        return false;
    }
}

// best practices and most clever
// Since String.prototype.isUpperCase=function() is demanded in the answer via test cases and not description, there are not that many alternate solutions.
String.prototype.isUpperCase=function() {return this==this.toUpperCase()}

// another user submission using using regex
// It's much faster to search for one lowercase character
// than to match the entire string of uppercase characters
const isUpperCase = x => !x.match(/[a-z]/);
// Why on earth do those tests expect prototype pollution???
''.__proto__.isUpperCase = function () { return isUpperCase(this) };

// another user submission using for loop
String.prototype.isUpperCase = function() {
    let str = this.split('');
    for(let i = 0; i < str.length; i++){
        if(str[i] !== str[i].toUpperCase()) {
        return false;
        }
    }
        return true;
}