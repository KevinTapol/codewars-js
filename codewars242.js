// Sort the Gift Code
/*
Happy Holidays fellow Code Warriors!
Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

Sort the Gift Code
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
*/ 
// Parameters or Edge Cases: 
/*
    inputs will be strings of lowercase letters
    can they be empty or null?
*/ 

// Return:
/*
    the input string in alphabetical order
*/ 

// Examples:
/*
    'abcdef' => 'abcdef'
    'pqksuvy' => 'kpqsuvy'
    'zyxwvutsrqponmlkjihgfedcba' => 'abcdefghijklmnopqrstuvwxyz'
*/ 

// Pseudocode:
/*
// convert the input string to an array of elements, sort the characters, convert it back into an array and return it
*/ 

// my answer, best practices and most clever
function sortGiftCode(code){
    // convert the input string to an array of elements, sort the characters, convert it back into an array and return it
    return code.split('').sort().join('')
}

// my answer refactored arrow fn implicit return
const sortGiftCode = (x) => x.split('').sort().join('')

console.log(sortGiftCode("abcdef")) // "abcdef"
console.log(sortGiftCode("pqksuvy")) // "kpqsuvy"
console.log(sortGiftCode("zyxwvutsrqponmlkjihgfedcba")) // "abcdefghijklmnopqrstuvwxyz"

// interesting using [...input] to create an array of elements with the spread function
function sortGiftCode(code){
    return [...code].sort().join``
  }

// regex
function sortGiftCode(code){
    var reg= new RegExp('[^'+code+']','gi');
    
    return 'abcdefghijklmnopqrstuvwxyz'.replace(reg,'');
  }


// user created an array and used nested for loops to to sort
function sortGiftCode(code){
    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const odenAlfabeto = []
  
    for (let i = 0; i < alfabeto.length; i++){
        for (let j = 0; j < code.length; j++){
            if (alfabeto[i] === code[j]){
                odenAlfabeto.push(code[j])
            }
        }
    }
    return odenAlfabeto.join('')
};

// using .sort((a,b)=>a-b) to sort on the numerical value given with .charCodeAt()
function sortGiftCode(code){
    return code.split('').map(a => a.charCodeAt()).sort((a,b) => a - b).map(a => String.fromCharCode(a)).join('');
  }