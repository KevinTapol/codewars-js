/*
Holiday III - Fire on the boat

Parameters or Edge Cases:
Return:
    return the input string replacing all instances of 'Fire' with ~~
Examples:
    "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast" --> "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast"

    "Mast Deck Engine Water Fire" --> "Mast Deck Engine Water ~~"

    "Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain" --> "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain"
Psuedocode:
    use the .replace() string method using regex to replace every instance of 'Fire' case sensitive with '~~'
*/

// My Answer using regex with string methods
function fireFight(s){
    return s.replace(/Fire/gi, '~~')
}

// My Answer one liner and Best Practices 
const fireFight = s => s.replace(/Fire/gi, '~~')

console.log(fireFight("Mast Deck Engine Water Fire")) // "Mast Deck Engine Water ~~"

// Voted Most Clever
// Brute force while loop
function fireFight(s){
    while(s.includes("Fire"))
    {
      s = s.replace("Fire","~~");
    }
    return s;
}

// IMO Best Practices without using regex
function fireFight(s) {
    return s.replaceAll('Fire', '~~');
}

// array methods replacing 'Fire' with '~~'
function fireFight(s){
    return s.split(' ').map((item) => item === 'Fire' ? item = '~~' : item).join(' ');
    
}

// Brute Force for loop
function fireFight(s){
    var arr=s.split(' ');
    for (var i=0; i<arr.length; ++i)
      if (arr[i]=='Fire')
        arr[i]='~~';
    return arr.join(' ');
}