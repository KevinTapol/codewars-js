// Parameters or Edge Cases: y is not considered a vowel 
// Return: a string with no vowels a e i o u
// Examples:
//          describe("Basic tests", () => {
//              it("Testing for fixed tests", () => {
//                assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
//                assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
//                assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
//                })
//          })
// Psuedo Code: take in the string then .split('') to place each character as own element in an array
//              .filter() creating a new shallow copy array where each element not equals 'aeiouAEIOU'
//              I could use regex with .replace(/[aeiouAEIOU]/g, '') to replace every instance with an empty value but I would rather use array and string methods

// my answer
function disemvowel(str) {
    return str.split('').filter(e => e !=='a' && e!=='e' && e!=='i' && e!=='o' && e!=='u' && e!=='A' && e!=='E' && e!=='I' && e!=='O' && e!=='U').join('')
}

// my answer arrow function
const disemvowel = (str) => str.split('').filter(e => e !=='a' && e!=='e' && e!=='i' && e!=='o' && e!=='u' && e!=='A' && e!=='E' && e!=='I' && e!=='O' && e!=='U').join('')

// my regex answer (don't tell my teachers I included regex)
const disemvowel = (str) => str.replace(/[aeiouAEIOU]/g, '')

// oof... best practices and most practices used regex 
// the difference is they included i in the every instance to ignore capitalzation and it's not an arrow function
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

// this should be best practices and most clever
// declare a variable string of letters to be removed
// filter but where all strings except the ones included in the declared variable is included per element as lowercase
// the only changed I would make here is include capital letters in the declared variable vowel strings and remove .toLowerCase() 
const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

// my answer of above refactored
const disemvowel = (str) => {const vowels = 'aeiouAEIOU'; return str.split('').filter(e => !vowels.includes(e)).join('')}

// for loop
const disemvowel = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let newStr = '';
    for (let i = 0; i <= str.length; i++) {
      let char = str.charAt(i);
      if (vowels.indexOf(char) == -1) {
        newStr += char;
      }
    }
      return newStr;
      
    
};

// similar to for loop above but using .toLowerCase()
function disemvowel(str) {
    var str2="";
    for (var i=0; i<str.length; i++){
      if ("aeiou".indexOf(str[i].toLowerCase())<0) {
        str2+=str[i];
      }
    }
    str=str2
    return str;
}