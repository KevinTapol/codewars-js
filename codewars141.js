// Parameters or Edge cases: inputs will be positive integers
// Return: one of 6 strings based on the input
// Examples: 
//          describe("howMuchILoveYou",function() {
//              it("Basic tests",function() { 
//                assert.strictEqual(howMuchILoveYou(7),"I love you")
//                assert.strictEqual(howMuchILoveYou(3),"a lot")
//                assert.strictEqual(howMuchILoveYou(6),"not at all")
//              });
//            })
// Psuedo code:  create an object key value number and phrase
//               if the input is less than or equal to 6 take the user input call the key that matches and return the value
//               if the input is greater than 6 divide by the input and take the remainder and

// my answer
// I'm creating an object inside a function and calling the input as the key
// For numbers greater than 6 I am taking the remainder the input divided by 6
// If there is no remainder then return 6 'not at all'
// else take that remainder and call the object by that key
// If I started the key at 0, I could avoid my if statement. Also, I should have declared the object outside of the function unless I was one lining it.
function howMuchILoveYou(nbPetals) {
    const response = {1: 'I love you',
                2: 'a little',
                3: 'a lot',
                4: 'passionately',
                5: 'madly',
                6: 'not at all'
    }
    let rem = nbPetals % 6
    if (rem === 0) {
        return response[6]
    } else {
        return response[rem]
    }

}
console.log(howMuchILoveYou(7))
console.log(howMuchILoveYou(3))
console.log(howMuchILoveYou(6))
console.log(howMuchILoveYou(330))

// found a much cleaner refactored version of my code minus the ternary
const answers = {
    1:'I love you',
    2:'a little',
    3:'a lot',
    4:'passionately',
    5:'madly',
    0:'not at all'
};

const howMuchILoveYou = nbPetals => answers[nbPetals % 6];


// best practices
// declare the array outside of the function
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
    return phrases[(n - 1) % phrases.length] 
}

// most clever same answer as best practice using arrays but one liner
const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]

// same answer as mine but starting at 0 for key instead of 1 this allows the case for remainder 0 when using input % 6
function howMuchILoveYou(nbPetals) {
    let phrase = {    
        0: "not at all",
        1: "I love you",
        2: "a little",
        3: "a lot",
        4: "passionately",
        5: "madly"
    }
    return phrase[nbPetals%6]
}


// using a while loop to reduce the input to 1-6
function howMuchILoveYou(petals){
    const arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    while(petals > 6) petals -= 6
    return arr[petals - 1]
}
