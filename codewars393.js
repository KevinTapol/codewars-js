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
        }arr.push(sum)
    }let max = arr.indexOf(Math.max(...arr))
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