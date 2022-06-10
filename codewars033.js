// Parameters or Edge cases:
// Return: repeated string nth times
// Examples: repeatStr(6, "I") // "IIIIII" repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
// Psuedo code: .repeat() the input string nth times return repeated string

function repeatStr (n,s){
  let repeat = s.repeat(n)
  return repeat
}