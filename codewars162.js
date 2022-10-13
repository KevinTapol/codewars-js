// Parameters or Edge Cases: 
//          argument will be a non-negative integer 
// Return:
//          return input with its digits in descending order
// Examples:
//          describe("Basic tests", () => {
//              it("Testing for fixed tests", () => {
//                assert.strictEqual(descendingOrder(0), 0)
//                assert.strictEqual(descendingOrder(1), 1)
//                assert.strictEqual(descendingOrder(111), 111)
//                assert.strictEqual(descendingOrder(15), 51)
//                assert.strictEqual(descendingOrder(1021), 2110)
//                assert.strictEqual(descendingOrder(123456789), 987654321)
//                })
//          })
// Psuedo Code: take the input interger and covert it to a string
//              convert that string to each character as an element in an array
//              sort that array in descending order
//              convert the array into a string
//              convert the string into a number and return it 

// my answer
function descendingOrder(n){
    return Number(n.toString().split('').sort((a, b) => b - a).join(''))
 }

//  my answer arrow function
const descendingOrder = (n) => Number(n.toString().split('').sort((a, b) => b - a).join(''))

// best practices and most clever
// instead of .toString() they used String() 
// instead of sorting in reverse order they sorted in ascending then reversed the array
// they converted to a string they same way I did using .join('')
// instead of Number() the used pasreInt()
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}

// here they used '' to initially convert the input interger into a string
// they used + to convert back into an int for the final answer instead of Number() or parseInt()
function descendingOrder(n){
    return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}

// here they are specifying the second paramter of parseInt() as 10 for default
// parseInt(string, radix) radix is an integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the string. 
// It is converted to a 32-bit integer; if it's outside the range of [2, 36] after conversion, the function will always return NaN. If 0 or not provided, the radix will be inferred based on string's value. Be careful — this does NOT always default to 10! The description below explains in more detail what happens when radix is not provided.
function descendingOrder(n){
    return parseInt(n.toString().split('').sort().reverse().join(''), 10);
}

//interesting a do while loop 
function descendingOrder(n) {
    return n.digits().sort().reverse().undigits();
  }
  
  Number.prototype.digits = function() {
    const result = [];
    let n = this;
    do {
      result.unshift(n % 10);
      n = Math.floor(n / 10);
    } while(n);
    return result;
};
  
  Array.prototype.undigits = function() {
    return this.reduce((n, d) => n * 10 + d, 0);
};

// using [...n.toString()] n.toString() to convert to string then use [...] to iterate through each character and covert to an array of elements per character
function descendingOrder(n){
  
    n = [...n.toString()];
    
    return Number(
              n
              .sort()
              .reverse()
              .join('')
            );
}

// here they are checking if the input is an interger
function descendingOrder(n){
    if(Number.isInteger(n) && n >= 0){
      return parseInt(n.toString()
                        .split('')
                        .sort()
                        .reverse()
                        .join(''));
    }else{
      return "Argument is negative or not integer";
    }
}

// using template literals
const descendingOrder = n => +[...`${n}`].sort().reverse().join(``);