// Parameters or Edge Cases: The input string will only consist of lower case letters and/or spaces.
//                           We will consider a, e, i, o, u as vowels for this Kata (but not y).
// Return:  the number (count) of vowels in the given string.
// Examples: 
//          describe("Vowels Count Tests",function(){
//              it("should return 5 for 'abracadabra'",function(){
//                assert.strictEqual(getCount("abracadabra"), 5) ;
//              });
//          });
// Psuedo Code: use .split('') to put each character of the string as it's own element in an array
//              create a shallow array copy using .filter() where the element is a, e, i, o, or  u 
//              return the length of the new array
//              I could simply use regex but I'd much rather practice methods I used in production.

// my answer
function getCount(str) {
    return str.split('').filter(e => e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u').length
}

// might as well one line it arrow function
const getCount = (str) => str.split('').filter(e => e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u').length


// lol best practices and most clever was regex
// .match() creates an array using the search per character taking it's own spot per index then just like my answer return .length to the the number of elements in the array
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}

// same regex but using .replace() to create an string of indexes of empty values per each count then use .length to return that count of empty values
function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}

// Nice! A better way of my answer without using regex. I love this answer. I am upvoting this for best practice because it is not using regex.
function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }


// switch case
function getCount(str) {
    var vowelsCount = 0;
    for (index in str){
      switch (str[index]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      vowelsCount++;
      break;
      }   
    }
    return vowelsCount;
}

// for loop
function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
}

// using .call()
function getCount(str) {
    var vowels = 'aeiouAEIOU';
    return [].reduce.call(str, function(sum, char) {
      return vowels.indexOf(char) !== -1 ? sum + 1 : sum;
    }, 0);
}