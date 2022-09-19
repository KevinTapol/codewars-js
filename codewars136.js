// Your task is correct the errors in the digitised text. 

// Parameters: The test cases contain numbers only by mistake.
//             You only have to handle the following mistakes:
//                  S is misinterpreted as 5
//                  O is misinterpreted as 0
//                  I is misinterpreted as 1
// Return: a string of letters from an input string that had numbers 
// Examples:    assert.strictEqual(correct("L0ND0N"),"LONDON");
//              assert.strictEqual(correct("DUBL1N"),"DUBLIN");
//              assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
//              assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
//              assert.strictEqual(correct("PAR15"),"PARIS");
// Psuedo Code: take in the input string and use .replaceAll() for the numbers with their respective capital letters
//              return the new string
//              OR I could use regex with /g to target all instances and .replace()

// my answer 
// This works in the console but not in the test cases. This kata doesn't want you use replaceAll() among other metthods but did not stipulate that in the parameters.
function correct(string) {
    return string.replaceAll(5, 'S').replaceAll(0, 'O').replaceAll(1, 'I')
}

console.log(correct("51NGAP0RE"))
console.log(correct("DUBL1N"))
console.log(correct("L0ND0N"))
console.log(correct("BUDAPE5T"))
console.log(correct("PAR15"))

// my answer with arrow fn
const correct = (string) => string.replaceAll(5, 'S').replaceAll(0, 'O').replaceAll(1, 'I')

// using regex because the kata doesn't want you to use .replaceAll() 
function correct(string){
    return string.replace(/0/g, 'O').replace(/5/g, 'S').replace(/1/g, 'I')
}

// my answer arrow fn regex
// this ended up being best practices
const correct = (string) => string.replace(/0/g, 'O').replace(/5/g, 'S').replace(/1/g, 'I')

// most clever using regex but created an object key value pair with the correct characters
const corrections = {
    '5': 'S',
    '0': 'O',
    '1': 'I',
};

const correct = string => (
    string.replace(/[501]/g, character => corrections[character])
);

// an accepted answer not using regex
// using if statements to push to an array then .join to return to string
function correct(string) {
    let array = [];

    for(let i = 0; i < string.length; i++){
        if(string[i] === '5'){
            array.push('S');
        } else if(string[i] === '0'){
            array.push('O');
        } else if (string[i] === '1'){
            array.push('I');
        } else {
            array.push(string[i]);
        }
    }
    return array.join("");
}

// an accepted answer not using regex
// using spread .map() object key value pair then .join to return to string
function correct(string) {
    return [...string].map(a => ({'0':'O','5':'S','1':'I'})[a]||a).join('')
}

// object split map ternary join similar to above
function correct(string) {
    const map = {
        0: "O",
        1: "I",
        5: "S"
    };
    
    return string
        .split("")
        .map(c => map.hasOwnProperty(c) ? map[c] : c)
        .join("");
}

// regex replace in one statement
const correct = string => string.replace(/\d/g, val => `OI   S`[val]);