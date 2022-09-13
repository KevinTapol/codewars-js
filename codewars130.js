// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
// Parameters Edge Case: function/method should be pure, i.e. it should not mutate the original string.
// Return: a string reversing the case sensativity
// Example: "hello world".toAlternatingCase() === "HELLO WORLD"
//          "HELLO WORLD".toAlternatingCase() === "hello world"
//          "hello WORLD".toAlternatingCase() === "HELLO world"
//          "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
//          "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
//          "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
//          "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// Psuedo Code: same as always split('') to create an array of elements for each character
//              .map() each character using a ternary if that character is upper case return lower case else return upper case
//              .join('') to return the answer into an array


// my answer
String.prototype.toAlternatingCase = function () {
    let arr = this.split('')
    let newArr = arr.map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('')
    return newArr
}

// best practices and most clever
// same as my answer but one liner
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

// using spread [...] to iterate through each character like .forEach()
const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase = function() {
    return [...this].map(swapCase).join('');
};

// for loop to create a new string an add each character 
// note the stop point for the for loop this.length for object notation
String.prototype.toAlternatingCase = function () {
    new_str = "";
    for(var i = 0; i < this.length; i++) {
        if(this[i] === this[i].toUpperCase()) {
            new_str += this[i].toLowerCase();
        }
            else {
                new_str += this[i].toUpperCase();
        }
    }
    return new_str;
}

// regex with nested return statements
String.prototype.toAlternatingCase = function () {
    return this.replace(/./g, function (match) {
        return /[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase();
    });
}

// regex
// note the x > "Z" for ternary conditional
String.prototype.toAlternatingCase = function () {
    return this.replace(/[A-Za-z]/g, x => x > "Z" ? x.toUpperCase() : x.toLowerCase()) 
}

// using .test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
String.prototype.toAlternatingCase = function () {
    return this.replace(/[a-z]/gi, e => /[a-z]/.test(e) ? e.toUpperCase() : e.toLowerCase())
}

// using a while loop
String.prototype.toAlternatingCase = function () {
    var letter, idx = 0, alt ='';
    while (idx < this.length) {
        letter = this[idx];
        if (letter === letter.toUpperCase()) {
            alt += letter.toLowerCase();
        } else {
            alt += letter.toUpperCase();
        }
        idx++;
    }
    return alt;
} 

// completely forgot about using an or | for regex
String.prototype.toAlternatingCase = function () {
    return this.replace(/([a-z])|([A-Z])/g, (_, $1, $2) => { if ($1) return $1.toUpperCase(); if ($2) return $2.toLowerCase()})
}