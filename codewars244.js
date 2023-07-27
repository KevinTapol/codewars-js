// Find the vowels
/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
*/ 

// Parameters or Edge Cases:
/*
    inputs will be a string of letters that can be uppercase or lowercase
    can inputs be empty or null?
*/ 

// Return:
/*
    an array WITH THE INDEX STARTING AT 1 AND NOT 0!!! of all the vowels index locations in the string
*/ 

// Examples:
/*
    "Mmmm"  => []
    "Super" => [2,4]
    "Apple" => [1,5]
    "mmm" => []
    "apple" => [1,5]
    "super" => [2,4]
    "orange" => [1,3,6]
    "supercalifragilisticexpialidocious" => [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]
*/ 

// Pseudocode:
/*
    // take in the string and lowercase it and set it equal to the variable lower
    // declare an empty array named result
    // iterate through lower and if the element is either a,e,i,o,u or y append the current index + 1 to result
    // return result
*/ 

// my answer
function vowelIndices(word){
    // take in the string and lowercase it and set it equal to the variable lower
    let lower = word.toLowerCase()
    // declare an empty array named result
    let result = []
    // iterate through lower and if the element is either a,e,i,o,u or y append the current index + 1 to result
    for (let i = 0; i <lower.length; i++) {
        if (lower[i] == "a" || lower[i] == "e" || lower[i] == "i" || lower[i] == "o" || lower[i] == "u" || lower[i] == "y") {
            result.push(i+1)
        }
    }
    // return result
    return result
}

// my answer refactored using array.includes() and converting the vowels to an array of each sting instead of a single string
function vowelIndices(word){
    let lower = word.toLowerCase()
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let result = []
    for (let i = 0; i <lower.length; i++) {
        if (vowels.includes(lower[i])) {
            result.push(i+1)
        }
    }return result
}

console.log(vowelIndices("Mmmm")) // []
console.log(vowelIndices("Super")) // [2,4]
console.log(vowelIndices("Apple")) // [1,5]
console.log(vowelIndices("supercalifragilisticexpialidocious")) // [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]

// best practices
// using regex
// The test() method tests for a match in a string returning boolean true else false
function vowelIndices(word) {
    var arr = [];
    for(var i = 0; i < word.length; i++) {
      if(/[aeioyu]/i.test(word[i])) {
        arr.push(i+1);
      }
    }
    return arr;
}

// most clever
// using regex with string.replace() for every instance of vowels arrow fn push index + 1 to empty array
function vowelIndices(word,a=[]){
    return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
  }

// similar to my refactored answer but using array.forEach() instead of a for loop
function vowelIndices(word){
    const str = 'aeiouy';
    const arr = word.toLowerCase().split('');
    let answer = [];
    arr.forEach((name, i) => {
      if (str.indexOf(name) !== -1) {
        answer.push(i + 1);
      }
    });
    return answer;
  }

// iterating through the inputs as elements of an array with [...word]
// then using .map() to match each element to regex and if true return index + 1 else empty string
// then filter the array copy element to remove the empty strings
const vowelIndices = (word) => [...word].map((el, i) => el.match(/[aeiouy]/ig) ? i+1 : '').filter(el => el)

// similar to above but using .reduce((acc, c, i)=> regex ternary append to empty array)
const vowelIndices = (word) =>
	[...word].reduce((ac, cur, i) =>
  	/[aeiouy]/i.test(cur) ? [...ac, i + 1] : ac
  , []);

// regex but using matchAll()
function vowelIndices(word) {
	return [...word.matchAll(/[aeiouy]/gi)].map((match) => match.index + 1);
}

// same as above but using .map to increment the index + 1 with index++
const vowelIndices = word => [...word.matchAll(/[aeiouy]/gi)].map(e => ++e.index)
