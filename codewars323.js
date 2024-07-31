/*
Absent vowel
Parameters or Edge Cases:
    There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.
    I'm not sure but I thing that means every vowel will be lowercase.
    A has an index of 0,
    E has an index of 1,
    I has an index of 2,
    O has an index of 3,
    U has an index of 4.

Return:
    return the integer key value of the the string vowel that is missing from the input string

Examples:
    "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
    "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

Pseudoecode:
    declare a global array where lowercase vowels are the elements at index values matching the parameters
    iterate through the string with .includes() to check if a e i o or u is not in the string and return the associated value
*/

// My Answer brute force conditional
function absentVowel(x){
    if(!x.includes('a')){
        return 0
    }else if (!x.includes('e')){
        return 1
    } else if (!x.includes('i')){
        return 2
    } else if (!x.includes('o')){
        return 3
    } else if (!x.includes('u')){
        return 4
    }
}


// My Answer using array methods
function absentVowel(str){
    let check = ['a', 'e', 'i', 'o', 'u']
    let result = check.filter((e) => !str.includes(e)).join('')
    return check.indexOf(result)
}

console.log(absentVowel("John Doe hs seven red pples under his bsket")) // 0
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles")) // 3

// Best Practices
// brute force for loop checking for when the string index of vowels does not exist in the incoming string meaning indexOf() returns -1 then return the associated index of the string 'aeiou' as the answer
function absentVowel(x) {
    var vowels = 'aeiou';
    for (var i in vowels) {
      if (x.toLowerCase().indexOf(vowels[i]) == -1) {
        return Number(i);
      }
    }
}

// Most Clever
// cleaner version of array methods compared to my array methods
// creating an array for each char then iterate through the input string where the declared array is not included, and return the associated index of the missing element
const absentVowel = string => [...'aeiou'].findIndex(letter => !string.includes(letter))

// clever use of object instead of array or string
function absentVowel(x){
    let vowels = {'a' : 0, 'e' : 1, 'i' : 2, 'o' : 3, 'u' : 4};
    
    for(let i in vowels) {
      if(!x.includes(i)) return vowels[i];
    }
}

// one liner with a index for loop excluding {}
const absentVowel = x => {
    for(var v in 'aeiou')
      if(x.indexOf('aeiou'[v])==-1)
        return +v
}

// regex one liner
/* 
    declaring an array of char vowels
    creating another array of chars for the input string and replacing everything that is not 'aeiou' with empty strings
    iterate through the vowel array and create a filtered array only 1 element where the element does not exist in the input array 
    return the index of that 1 element in the vowels array
*/ 
const absentVowel = x => {
    let vowels = [...'aeiou'],
        used   = [...x.replace(/[^aeiou]/g, '')],
        absent = vowels.filter(v => used.indexOf(v) == -1)[0];
    return vowels.indexOf(absent);
}

// nested ternary conditionals
function absentVowel(x){
    return !x.includes('a') ? 0 : 
      !x.includes('e') ? 1 :
      !x.includes('i') ? 2 :
      !x.includes('o') ? 3 :
      !x.includes('u') ? 4 : null
}

// clever use of indexOf() -1 switch case
function absentVowel(x){
    switch(-1)
    {
      case x.split('').indexOf('a'): return 0;
      case x.split('').indexOf('e'): return 1;
      case x.split('').indexOf('i'): return 2;
      case x.split('').indexOf('o'): return 3;
      case x.split('').indexOf('u'): return 4;
    }
}

// nested ternary conditionals with regex
function absentVowel(x){
    return !/a/.test(x) ? 0 : !/e/.test(x) ? 1 : !/i/.test(x) ? 2 : !/o/.test(x) ? 3 : 4;
}