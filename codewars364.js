/*
Hells Kitchen
Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.
Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

Parameters or Edge Cases:
    inputs will be a string of four words

Return:
    the input string with every character in upper case, every word ending with four bangs !!!!, every 'a' or 'A' replaced with '@' and every other vowel 'eiou' replaced with '*'

Examples:
    'What feck damn cake' --> 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
    'are you stu pid' --> '@R*!!!! Y**!!!! ST*!!!! P*D!!!!' 
    'i am a chef' --> '*!!!! @M!!!! @!!!! CH*F!!!!'

Pseudocode:
    uppercase the string using regex and .replace() replace every 'a' or 'A' with '@' and every 'eiou' with '*'
    replace each white space with '!!!! '
    finally concat '!!!!' to the end of the new string
    return the new string
*/

// My Answer
function gordon(a){
    return a.toUpperCase().replace(/[A]/gi,'@').replace(/[EIOU]/gi, '*').replace(/[ ]/gi, '!!!! ') + '!!!!'
}

// My Answer refactored one liner arrow fn
const gordon = a => a.toUpperCase().replace(/[A]/gi,'@').replace(/[EIOU]/gi, '*').replace(/[ ]/gi, '!!!! ') + '!!!!'

console.log(gordon('WhaAt feck damn cake')) // 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'

// Best Practices and Most Clever
function gordon(ramsay) {
    return ramsay
      .toUpperCase()
      .replace(/\w+/g, '$&!!!!')
      .replace(/[AEIOU]/g, v => v == 'A' ? '@' : '*');
}

// using .split() and .join() to replace ' ' with '!!!!' instead of replace(regex, fn)
const gordon=a=>a.toUpperCase().split(" ").map(a=>a.replace(/A/g,"@").replace(/[EIOU]/g,"*")+"!!!!").join(" ");

// brute force for loop with conditionals
function gordon(a){
    const vowels = 'AEIOU';
    let result = '';
    
    for(let char of a) {
      
      if (vowels.includes(char.toUpperCase()) && char.toUpperCase() === 'A') {
        result += '@';
      } else if (vowels.includes(char.toUpperCase())) {
        result += '*';
      } else if (char === ' ') {
        result += '!!!! ';
      } else {
        result += char.toUpperCase();
      }
    }
    
    result += '!!!!';
    
    return result;
}

// brute force for loop with switch case instead of if else conditionals
function gordon(str){
    let strUp = str.toUpperCase().split(' ')
    for(let i = 0; i < strUp.length; i++) {
      let letter = strUp[i].split('')
      for(let j = 0; j < letter.length; j++) {
        switch(letter[j]) {
            case 'A':
            letter[j] = '@';
            break;
            case 'E':
            case 'I':
            case 'O':
            case 'U':
            letter[j] = '*';
            break;
        }
      }
      strUp[i] = letter.join('') + '!!!!'
    }
    
    return strUp.join(' ') 
    
}