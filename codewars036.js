// Parameters or Edge cases: argument is an integer
// Return: "Even" for even integer "Odd" for odd integer
// Examples:
// Psuedo code: if(argument modulus 0 has no remainder){return "even"}else{return "odd"}

//my answer
function even_or_odd(number) {
  if(number % 2 === 0){
    return "Even"
  }else{
    return "Odd"
  }
}

//best practices
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }