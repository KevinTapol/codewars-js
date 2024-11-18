/*
Highest Scoring Word

Parameters or Edge Cases:
    inputs will be a string of words
    all strings will be valid and consist of lowercase letters 

Return:
    return the earliest occurrence of a word from the input string where the combination of each char added up is the highest value with char value based on a-z 1-26

Examples:
    'man i need a taxi up to ubud' --> 'taxi'
    'what time are we climbing up the volcano' --> 'volcano' 
    'take me to semynak' --> 'semynak'   
    'aa b' --> 'aa'
    'b aa' --> 'b'
    'bb d' --> 'bb'
    'd bb' --> 'd'
    'aaa b' --> 'aaa'

Pseudocode:
    convert the input string of words into an array where each element is a word
    create a shallow copy array converting each word into unicode values using string.charCodeAt(index) - 96 on each char to get a-z 1-26 and add each char together for each word
    grab the index of the max value from the shallow copy array and return the element from the input array with that index value
*/

// My Answer brute force nested for loops 
function high(x){   
    const key = '0abcdefghijklmnopqrstuvwxyz'
    let words = x.split(' ').map((e) => e.split(''))
    let arr = []

    for(e of words){
        let sum = 0

        for(let i = 0; i < e.length; i++){
            sum += key.indexOf(e[i])
        }
        arr.push(sum)
    }
    let max = arr.indexOf(Math.max(...arr))
    return x.split(' ')[max]
}

// My Answer using array methods with a string key reference for alphabet chars a-z index values 1-26 with the first char as 0 for 0
function high(x){   
    const key = '0abcdefghijklmnopqrstuvwxyz'
    const arr = x.split(' ').map((e) => e.split('').reduce((acc, c) => acc + key.indexOf(c), 0))
    return x.split(' ')[arr.indexOf(Math.max(...arr))]
}

// My Answer refactored one liner arrow fn
const high = (x, key = '0abcdefghijklmnopqrstuvwxyz', arr = x.split(' ').map((e) => e.split('').reduce((acc, c) => acc + key.indexOf(c), 0))) => x.split(' ')[arr.indexOf(Math.max(...arr))]

console.log(high('take me to semynak')) // 'semynak'

// Best Practices and Most Clever
// similar to my array method answer but using .charCodeAt() instead of an array to reference index values of a-z
// Since every current element is a single string char, the value passed in .charCodeAt() will always be 0 for index 0. (static instead of dynamic)
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}

// Very similar to my brute force for loop but using an array for a key instead of a string
function high(x){
    let alphabets = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    
    let words = x.split(" ");
    let highestScore = 0;
    let highestScoreWord = "";
    
    for (let word of words) {
      let lettersSum = 0;
      
      for (let letter of word) {
        lettersSum += alphabets.indexOf(letter) + 1;
      }
      
      if (lettersSum > highestScore) {
        highestScore = lettersSum;
        highestScoreWord = word;
      }
    }
    
    return highestScoreWord;
}

// clever round about way to deconstruct the current element being reference for .map()
function high(words) {

    const alpha = ' abcdefghijklmnopqrstuvwxyz';
    const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0);
  
    return words
      .split(' ')
      .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
      .sort((a, b) => a.score - b.score || b.pos - a.pos)
      .pop()
      .word;
      
}

// separating functions where one converts the elements into sums using .charCodeAt() but without passing in an argument and the other to return the answer
function high(x){
    return x.split(' ').reduce((accum, current)=>{
        return score(current) > score(accum)? current:accum;  
    })
}

function score(word){
    return word.split('').reduce((accum,current)=>{return accum+(current.charCodeAt()-96)},0)
}

// dynamically calling .charCodeAt() with a for loop meaning outer for loop is referencing the word and the inner for loop is referencing each char index of the word
function high(x){
    var arr = x.toLowerCase().split(" ");
    var sum = 0;
    var holder = 0;
    var holder2 = 0;
    for(var i = 0; i < arr.length; i++) {
    
      for(var j = 0; j < arr[i].length; j++) {
      
        sum += arr[i].charCodeAt(j) - 96;
        
      }
    
      if (sum > holder) { 
        holder = sum;
        holder2 = i;
  
       }
      sum = 0;
    }
     console.log(arr[holder2]);
     return arr[holder2];
    
}

/*
    clean separate function .reduce() with dynamic .charCodeAt() that returns the sum value of a word of chars  using a .reduce() to compare  
    the second fn uses .reduce() and the first fn to find the highest value word without using Math.max(...array)
*/ 
function high(x){
    const score = s => s.split('').reduce((m,i) => m + i.charCodeAt(0)-96,0);
    return x.split(' ').reduce((s,n)=> score(s) < score(n) ? n : s);
}

// clever using an object key for a-z instead of an array or string
const charToScore = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26 };


function high(x){
    const array = x.split(" ");
    const arrayOfScores = array.map(word => word.split("").reduce((score, char) => score + charToScore[char], 0))
    const indexOfResult = arrayOfScores.indexOf(Math.max(...arrayOfScores));
    return array[indexOfResult];
}