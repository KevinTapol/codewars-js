// Parameters or Edge cases:
// Return:
// Examples:
// Psuedo code: debug code

//given
//function multiply(a, b){
//     a * b
//   }

//my answer and best practices
function multiply(a, b){
    return a * b
}
   
//most clever
function multiply(a, b){
    if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
      return 0;
    }
    return a * b;
  }