// Parameters or Edge Cases:
//      both inputs will be only letters in strings
// Return:
//      a new sorted string combining both inputs removing duplications and sorted alphabetically
// Examples:
//      describe("longest",function() {
//          it("Basic tests",function() {
//              Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
//              Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
//              Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
//      })})
// Psuedo Code:
//      combine the inputs into 1 string and convert it to an array
//      sort the array
//      iterate through the array and eliminate duplicates
//      convert the array into a string
//      return the new string

// my answer
function longest(s1,s2){
    let arr = s1.concat(s2).split('').sort()
    var i, j
    for(i = 0; i < arr.length; i++) {
       for(j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                arr[j] = ' '
            }
       }
    }return arr.filter(e => e !== ' ').join('')
}

// my answer after looking at best practices and most clever
// I used spread to join any number of input strings
const longest = (...s) => [...new Set(s.join(''))].sort().join('')

// my answer using .filter() array parameter
// I've done this before. I completely forgot about .filter() array parameter
function longest (s1,s2) {
    return s1.concat(s2).split('').sort().filter((e,i,arr) => e !== arr[i -1]).join('')
}

// best practices and most clever
// The Set constructor lets you create Set objects that store unique values of any type, whether primitive values or object references.
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// using Array.from() and new Set()
function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}

// using .filter()
function longest(s1, s2) {
    s3 = s1 + s2;
    s4 = s3.split("");
    s4 = s4.sort().filter(function(element, index, array){
      return element !== array[index - 1];
    });
    return s4.join("");
}


// interesting how they used spread here
function longest(s1, s2) {
    let str = new Set([...s1, ...s2]);
    return [...str].sort().join('');
}

// this is a cleaner version of my initial answer
function longest(s1, s2) {
    let output = [];
    let combi = s1.concat(s2);
    let array = combi.split('').sort();
 
    for (let i = 0; i <= array.length; i++) {
        console.log(array[i]);//test
        if (!output.includes(array[i]) ) {
              output.push(array[i]);
        }
    }
    return output.join('');
}

// regex
function longest(s1, s2) {
    return (s1+s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}

// for loop with nested conditionals
function longest(s1, s2) {
    // your code
    let duplicates = {}, uniqueChars = [];
    for(let i = 0; i < Math.max(s1.length,s2.length); i++){
      if(i < s1.length){
        if(duplicates[s1[i]]){
          duplicates[s1[i]]++
        } else {
          duplicates[s1[i]] = 1;
        }
      }
      if(i < s2.length){
        if(duplicates[s2[i]]){
          duplicates[s2[i]]++
        } else {
          duplicates[s2[i]] = 1;
        }
      }
    }
    for(let key in duplicates){
      uniqueChars.push(key)
    }
    return uniqueChars.sort().join('')
}

// using indexOf() with .filter()
const longest = (s1, s2) => s1.concat(s2)
    .split('')
    .sort()
    .filter((item, pos, self) => self.indexOf(item) == pos)
    .join('');

// using .includes()
function longest(s1, s2) {
    let combined = s1.concat(s2);
    let toLowerCase = combined.toLowerCase();
    let split =toLowerCase.split('');
    let sorted = split.sort();
    let output = [];
  
    for (let element of sorted) 
       if (!output.includes(element)) {
        output.push(element)
       }
      return (output.join(''));
}

// using every alphabet character with regex
function longest(s1, s2) {
    var a = 'abcdefghijklmnopqrstuvwxyz';
    return a.replace(new RegExp('[^' + s1 + s2 + ']', 'g'), '');
}