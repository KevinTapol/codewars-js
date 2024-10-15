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
    return the new string
*/

// My Answer
function gordon(a){
    return a.toUpperCase().replace(/[A]/gi,'@').replace(/[EIOU]/gi, '*').replace(/[ ]/gi, '!!!! ') + '!!!!'
}

console.log(gordon('WhaAt feck damn cake')) // 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'