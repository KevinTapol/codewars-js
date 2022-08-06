// Parameters or Edge cases:
// Return: if input is even multiply by 8 if odd multplipy by 9
// Examples:
// Psuedo code: take input modulus 2 to check if there is a remainder
//              if no remainder multiply by 8 else 9 
//              return product

//my answer
function simpleMultiplication(number) {
    if(number % 2 === 0){
        return number*8
    } else {
        return number*9
    }
}

//best practices and most clever
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}

//similar but using not 
function simpleMultiplication(num){
    return !(num % 2) ? num * 8 : num * 9; 
}

//my examply of ternary
function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
}

//good practice imo use typeof to check if input is a number 
// typeof operator returns a string indicating the type of the unevaluated operand.
function simpleMultiplication(number) {
    if (typeof number === 'number') {
      return number * (8 + number % 2);
    } else {
        console.log(arguments.callee.name + ': Invalid argument');
    }
}
