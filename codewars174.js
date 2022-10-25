// Parameters or Edge Cases:
//      both inputs will be strings
//      case sensitivity?
//      if one string is empty return true
// Return: 
//      true if the first input ends with the entire string of characters of the second input in the same order else false
// Examples:
//      describe("Tests", () => {
//          it("test", () => {
//        Test.assertEquals(solution('abcde', 'cde'), true)
//        Test.assertEquals(solution('abcde', 'abc'), false)
//        });
//      });
  
// Psuedo Code: 
//      if the first input string ends with the second input string return true else false


// my answer best practices and most clever
function solution(str, ending){
    return str.endsWith(ending)
}

console.log(solution('abcde', 'cde'))

// my answer refactored
const solution = (a,b) => a.endsWith(b)

// lol submitted answer that no longer works
function solution(str, ending){
    return str.substr(-ending.length) == ending;
}

// answer with test cases also no longer works
function solution(str, ending){
    if (typeof(str) != "string" || typeof(ending) != "string")
      throw "wrong type";
    if (ending.length>str.length)
      return false;
    return str.substr(str.length-ending.length, ending.length) == ending;
}

// I love this because it is array methods
function solution(str, ending){
    return str.split('').reverse().join('').search(ending.split('').reverse().join('')) === 0;
}

// classic brute force for loop
function solution(str, ending){
    var strCharacters = Array.from(str).reverse()
    var endingCharacters = Array.from(ending).reverse()
    for (let i = 0; i < endingCharacters.length; i++) {
      if (strCharacters[i] != endingCharacters[i]) {
        
        return false
      }
    }
    return true    
}

// for loop
function solution(str, ending){
    let strArray = str.split("");
    let endArray = ending.split("");
    let wasteArrayLength = strArray.length - endArray.length;
    let newArray = [];
  
    for (let i = wasteArrayLength; i < strArray.length; i++) {
      newArray.push(strArray[i]);
    } 
  
    let newEnding = endArray.join();
    let newString = newArray.join();
  
    if (newString == newEnding) {
        return true;
    } else {
        return false;
    }
}

// very clever using indexOf()
// if indexOf() does not contain the input it will return a -1 
function solution(str, ending){
    return str.indexOf(ending,str.length - ending.length) !== -1;
}

// using lastIndexOf()
function solution(str, ending){
    let num = str.lastIndexOf(ending);
    return str.length >= ending.length ? ( (num == str.length - ending.length) ? true : false ) : false;
}

// while loop
function solution(str, ending){
    let i = str.length - ending.length;
    let j = 0;
    while (i < str.length) {
      if (str[i] == ending[j]) {
        j++;
      }
      i++;
    }
    return j == str.length - (str.length - ending.length);
}