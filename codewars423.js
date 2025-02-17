/*
Batman Quotes

Batman & Robin have gotten into quite a pickle this time. The Joker has mixed up their iconic quotes and also replaced one of the characters in their names, with a number. They need help getting things back in order.

Implement the getQuote method which takes in an array of quotes, and a string comprised of letters and a single number (e.g. "Rob1n") where the number corresponds to their quote indexed in the passed in array.

Return the quote along with the character who said it:

getQuote(["I am vengeance. I am the night. I am Batman!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"], "Rob1n") 
  // =>  "Robin: Holy haberdashery, Batman!
Hint: You are guaranteed that the number in the passed in string is placed somewhere after the first character of the string. The quotes either belong to "Batman", "Robin", or "Joker".


Parameters or Edge Cases:
    first input will be an array of elements where each element is a string of words
    second input will be a single string representing either Batman, Robin or Joker with an integer in string representation in the name

Return:
    return a string with the name of the owner of the quote, a colon, whitespace, and the quote

Examples:
quotes = ["WHERE IS SHE?!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"]

quotes, "Rob1n" --> "Robin: Holy haberdashery, Batman!"
quotes, "Joke2" --> "Joker: Let's put a smile on that faaaceee!"
quotes, "Batm0n" --> "Batman: WHERE IS SHE?!"

Pseudocode:
    declare an empty string named result
    if the second input starts with 'R' add 'Robin: ' to result, 'B' add 'Batman: ' to result or 'J' add 'Joker: ' to result 
    search through the second input searching for 0-9
    convert the integer in string representation into an integer to get the index of the target quote and add the element to result
    return result

*/

// My Answer conditionals string.replace(regex)
var getQuote = function(quotes, hero){
    let result = ''
    if(hero[0] === 'B'){
        result += 'Batman: '
    } else if(hero[0] === 'R'){
        result += 'Robin: '
    } else {
        result += 'Joker: '
    }
    let index = hero.toLowerCase().replace(/[a-z]/gi, '')
    result += quotes[index]
    return result
}
console.log(getQuote(["WHERE IS SHE?!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"], "Rob1n")) // 