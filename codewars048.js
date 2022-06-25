// Parameters or Edge cases:
// Return: a string with the first letter of every word capitalized
// Examples: "How can mirrors be real if our eyes aren't real" => "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Psuedo code: use .split(' ') to create an array of each word then 
                    //.map to create a new array with newArr[0] capitalized
                    // add the remaining part of the string with .slice(1) from each word in each array element
                    //.join(' ')to turn back into a string and create a space inbetween each word

//my answer
String.prototype.toJadenCase = function() {
    return this.split(' ').map(newArr => newArr[0].toUpperCase() + newArr.slice(1)).join(' ')
  };

//best practices .charAt() method
String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

//.replace() with a search 
String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
  };