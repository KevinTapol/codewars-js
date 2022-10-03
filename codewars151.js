// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// Parameters or Edge Cases: If no occurrences can be found, a count of 0 should be returned.
//                           The first argument can be an empty string.
//                           The second string argument will always be of length 1
// Return:  an integer with the number of times input2 occurs in input1
// Examples:
//          ("Hello", "o")  ==>  1
//          ("Hello", "l")  ==>  2
//          ("", "z")       ==>  0
// Psuedo Code: use .split('') to put each character as an array of elements
//              .filter() where then 2nd input is equal to each element of the array
//              return the new array length


// my answer
function strCount(str, letter){  
    return str.split('').filter(e => e === letter).length
}

// my answer arrow fn
const strCount = (str, letter) => str.split('').filter(e => e === letter).length

// best practices and most clever
// wow... hindsight I am surprised I didn't think of this.
// split directly on the 2nd input 
function strCount(str, letter){  
    return str.split(letter).length-1
}

// for loop
function strCount(str, letter){  
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter)
        count++;
    }
    return count;
}

// regex
function strCount(str, letter) {  
    return str.length - str.replace(new RegExp(letter, "gi"), '').length;
}

// regex with .match()
function strCount(str, letter){  
    return (str.match(new RegExp(letter, 'g')) || []).length;
}