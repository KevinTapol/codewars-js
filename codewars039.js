// Parameters or Edge cases: If either input is an empty string, consider it as zero. Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
// Return: a sum of strings as a string
// Examples: (Input1, Input2 -->Output) "4",  "5" --> "9" 
            //"34", "5" --> "39"
            //"", "" --> "0"
            //"2", "" --> "2"
            //"-5", "3" --> "-2"
// Psuedo code: convert both strings to numbers using Number() add them then convert back into string using .toString

//my answer
function sumStr(a,b) {
  let sum = Number(a) + Number(b)
  return sum.toString()
}

//best practices
function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }

//clever answer
function sumStr(a,b) {
    return (+a+ +b)+''  
  }