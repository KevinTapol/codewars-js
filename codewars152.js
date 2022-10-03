// Parameters or Edge Cases: Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
// Return: make the first character in the string "word" upper case
// Examples:
//          describe("Tests", () => {
//            it("test", () => {
//          Test.assertSimilar(capitalizeWord('word'), 'Word');
//          Test.assertSimilar(capitalizeWord('i'), 'I');
//          Test.assertSimilar(capitalizeWord('glasswear'), 'Glasswear');
//            });
//          });
// Psuedo Code: Debug Code
//              function capitalizeWord(word) {
//                  word[0].toUpperCase();
//                  return word;
//              }
//              They are returning the orginal parameter and here instead of changes made

//              create a shallow copy grabbing the first element to upper case
//              slice the rest of the array at index 1 and concat it to the shallow copy and return the mutated string 

// my debug answer
function capitalizeWord(word) {
    return word[0].toUpperCase().concat(word.slice(1))
}
console.log((capitalizeWord('word'), 'Word'))
console.log((capitalizeWord('i'), 'I'))
console.log((capitalizeWord('glasswear'), 'Glasswear'))

// my debug answer arrow fn
const capitalizeWord = (word) => word[0].toUpperCase().concat(word.slice(1))

// best practices uses + instead of .concat()
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

// most clever
// arrow fn using .replace() to implicitly return the word changing the first index to upper case
const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());

// using template literals
const capitalizeWord = w => `${w[0].toUpperCase()}${w.slice(1)}`;

// using regex
const capitalizeWord = word => word.replace(/^\w/, val => val.toUpperCase());

// another regex but using ^.
const capitalizeWord = w => w.replace(/^./, $1 => $1.toUpperCase())

// for loop
function capitalizeWord(word) {
    var str = word[0].toUpperCase();
    for (let i = 1; i<word.length; i++) {
    str += word[i];
    }
    return str;
}

// using substring instead of slice
const capitalizeWord = word => word[0].toUpperCase() + word.substr(1);

// specifying the end point of .slice(start, end)
function capitalizeWord(word) {
    return word.slice(0,1).toUpperCase() + word.slice(1, word.length)
}