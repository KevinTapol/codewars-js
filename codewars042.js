// Parameters or Edge cases: input data is always a string
// Return: string with ! removed from the end of the input string
// Examples: remove("Hi!") === "Hi"
            //remove("Hi!!!") === "Hi!!"
            //remove("!Hi") === "!Hi"
            //remove("!Hi!") === "!Hi"
            //remove("Hi! Hi!") === "Hi! Hi"
            //remove("Hi") === "Hi"
// Psuedo code: convert to array .pop() last value and check if it is '!' then convert the array back to string with .join('') else return string

//my answer
function remove (string){
    let arr = string.split('')
    let lastVal = arr.pop()
    if(lastVal == '!'){
      return (arr.join(''))
    }else{
      return string
    }
}

//best practices
const remove = s => s.replace(/!$/, '');

//using .slice()
function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }