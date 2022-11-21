// Parameters or Edge Cases:
//      anagrams are case insensitive
//      An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Return:
//      true if words contain the same characters else false
// Examples:
//      "foefet" is an anagram of "toffee"
//      "Buckethead" is an anagram of "DeathCubeK"
// Psuedo Code:
//      take both inputs and put them both to lowercase
//      convert the string into an array of characters and sort them alphabetically
//      convert the array back into a string
//      compare the strings using a boolean response true if they are equal false if they are not

// my answer
function isAnagram (test, original){
    return test.toLowerCase().split("").sort().join() === original.toLowerCase().split("").sort().join()
}

console.log(isAnagram("foefet", "toffee"))
console.log(isAnagram("foefet", "toffe"))

// my answer arrow function
const isAnagram = (x, y) => x.toLowerCase().split("").sort().join() === y.toLowerCase().split("").sort().join()

// best practices and most clever 
// same as my answer but more steps 
// they are saving the functions as variables on another line
// return comparing === implicitly returns a boolean
var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
};

// multiple functions
String.prototype.sortLetters = function() {
    return this.toLowerCase().split('').sort().join('');
  }
  
  var isAnagram = function(test, original) {
    return test.sortLetters() == original.sortLetters();
};

// using a function to prepare to compare the input strings then another to compare
// write the function isAnagram
function isAnagram(str1, str2){
    return sortWord(str1) == sortWord(str2);
}

function sortWord(word){
    return word.toLowerCase().split("").sort().join("");
}

// clever using .map() for preparing the strings and .reduce() to compare them
let isAnagram = (a, b) => [a,b].map(i=> i.toLowerCase``.split``.sort``.join``).reduce((a,b)=> a==b)

// using spread ... to go through each character to prepare to compare the strings
const isAnagram = (test, original) =>
  (fn => fn(test) === fn(original))
  (val => [...val.toLowerCase()].sort().join(``));

  // write the function isAnagram
var isAnagram = function(test, original) {
    // NOTE: there is a pretty solution with sort(), but sort is pretty heavy, which is not pretty (:
    if (test.length !== original.length) return false;
    test = test.toUpperCase();
    original = original.toUpperCase();
    const m1 = getMap(test);
    const m2 = getMap(original);
    return Object.keys(m1).every((key) => m1[key] === m2[key]);
  };
  
  function getMap(word) {
    return word.split('').reduce((a, l) => {
      a[l] ? a[l]++ : a[l] = 1;
      return a;
    }, {});
}

// nested for loop
// write the function isAnagram
var isAnagram = function(test, original) {
    if(test.length !== original.length) return false;
    
    test = test.toLowerCase();
    original = original.toLowerCase();
    
    let obj = {};
    
    for(let i = 0; i< test.length; i++) {
      if(obj.hasOwnProperty(test[i])) {
        obj[test[i]] += 1;
        } else {
        obj[test[i]] = 1;
        }
       }
       
       for(let i = 0; i< original.length; i++) {
         if(obj.hasOwnProperty(original[i])) {
           obj[original[i]] -= 1;
           if(obj[original[i]] === 0) delete obj[original[i]];
           } else {
           return false
           }
        }
        
        return Object.keys(obj).length === 0 && obj.constructor === Object;
};

// arrow function and spread to compare with an emoji!
isAnagram=(t,o,f=_=>[..._.toLowerCase()].sort())=>''+f(t)==''+f(o), '🤔'

// using every() 
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
var isAnagram = function(test, original) {
    if (test.length != original.length) return false
    
    const map = new Int32Array(26)
    
    for (let i = test.length - 1; i >= 0; --i) {
       ++map[(test.charCodeAt(i) & 31) - 1]
       --map[(original.charCodeAt(i) & 31) - 1]
    }
      
    return map.every(count => count == 0)
};

// while loop nested inside a for loop
// write the function isAnagram
var isAnagram = function(test, original) {
    if (test.length !== original.length) return false;
    let j = 0, flag;  
    let t = test.toLowerCase()
    let o = original.toLowerCase();
    
    for(let i = 0; i < t.length; i++) {
      while(j < o.length) {
        flag = t[i] === o[j];
        if(flag) {
          t = t.substring(0, i) + t.substring(i + 1, t.length);
          o = o.substring(0, j) + o.substring(j + 1, o.length);
          i--;
          j = 0;
          break;
        }
        j++;
      }
    }
    return flag;
};

// nested for loops using i and j
// this would have been similar to my brute force answer had I not thought about using .sort()
// write the function isAnagram
var isAnagram = function(test, original) {
    let desintegrate = function (str)
    {
      str = str.toLowerCase();
      let temp = [];
      let n = str.length;
      for (i = 0; i < n; i++)
      {
        temp[i] = str[i];
      }
      let buf;
      for (i = 0; i < n-1; i++)
      {
        for (j = i+1; j < n; j++)
        {
          if (temp[j] < temp[i]) 
          {
            buf = temp[j]; 
            temp[j] = temp[i]; 
            temp[i] = buf;
          }
        }
      }
      let out = ""
      for (i = 0; i < n; i++)
      {
        out += temp[i];
      }
      return out;
    }
    return desintegrate(test) == desintegrate(original);
};