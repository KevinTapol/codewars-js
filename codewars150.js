// Parameters or Edge Cases: parameters may be capitalized
// Return: true or false if the input is a palindrome
// Examples:
// describe("Fixed tests", function() {
//     it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
//     it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
//     it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
//     it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
//     it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
//     it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
//     it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
//     it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
//   });
// Psuedo Code: use .toLowerCase() to turn the string into characters that you can compare to eachother
//              use .split('') to convert the string to an array 
//              use .reverse() to reverse the array
//              use .join('') to return the array back into a string and compare it to the parameter
//              return the new string === parameter string
//              if the strings are equal true will automagically be the return
//              if the strings are not equal false will automagically be the return

// my answer and what I feel is best practices.
function isPalindrome(x) {
    let newString = x.toLowerCase().split('').reverse().join('')
    return newString === x.toLowerCase()
}

// my answer one liner arrow fn ternary and what I feel is best practices.
const isPalindrome = (x) => x.toLowerCase().split('').reverse().join('') === x.toLowerCase()

// best practices and most clever
// I disagree for best practices. I think best practices should be a simple function, declaring a new variable and using a simple return statement for boolean.
// I also disagree for most clever because they are using a ternary when they don't need to. More code is being used than needed. 
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

// while loop
// Interesting. Comparing the lengths to return false which is clever in my opinion.
function isPalindrome(x) {
    x = x.toLowerCase()
    let a = 0
    let b = x.length
    while (a < b) {
        if (x[a] != x[b-1])
        return false
        a++
        b--
    }
    return true
}

// very clever (Something I frequently forget to do is upvote for Clever on Codewars for other users answers)
// using spread and declaring a new parameter 
// clever using [...string] to iterate through each string and convert to array
// also they are using a simple return for boolean response.
function isPalindrome(x, str = x.toLowerCase()) {
    return str === [...str].reverse().join('')
}

// interesting use of template literals
let isPalindrome = x => RegExp(x, 'i').test([...x].reverse``.join``)

    isPalindrome = (x, X = x.toUpperCase``) => X == [...X].reverse``.join``

    isPalindrome = x => x.toLowerCase`` == [...x].reverse``.join``.toLowerCase``

    isPalindrome = (x, X = x.toUpperCase``) => `${[...X]}` == `${[...X].reverse``}`

// I've never seen Buffer() before. Also the user is using double equals comparing value and not type.
function isPalindrome(x) {
    return x.toLowerCase() == Buffer(x.toLowerCase()).reverse();
}

// classic for loop
// Before I had the strings and array methods memorized, this was my go to answer. They are using a ternary here though instead of a return comparison implicitly returning boolean
function isPalindrome(x) {
    x = x.toLowerCase()
    let y = ''
    for (let i = x.length - 1; i >= 0; i--) {
        y += x[i].toLowerCase()
    }
    return y == x ? true : false
}

// classic for loop start stop step
// declare variables first
// loop through modifying through each step
// exit the loop and compare using return for implicit boolean true false return
function isPalindrome(x) {
    let xl = x.toLowerCase();
    let res = '';
    for (let i = xl.length - 1; i >= 0; i--) {
        res += xl[i];  
    }
    return res == x.toLowerCase();
}