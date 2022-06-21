// Parameters or Edge cases: ignore unneccesary whitespace
// Return: a string in reverse
// Examples: "Hello World" --> "World Hello" 
            //"Hi There." --> "There. Hi"
// Psuedo code: .split(' ')to convert into an array of words .reverse() to reverse array .join(' ') to return to string

//my answer also best practices
function reverse(string){
    return string.split(' ').reverse().join(' ')
}
