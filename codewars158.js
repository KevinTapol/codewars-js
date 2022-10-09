// Parameters Edge Cases: input will be a interger and so should be the output
// Return: return the square of each individual interger of a multiple digit integer and concat them together and return it to an integer
// Examples:
//          describe("Basic tests", () => {
//            
//              it("squareDigits(3212) should equal 9414", () => {
//                assert.strictEqual(squareDigits(3212), 9414);
//              });
//            
//              it("squareDigits(2112) should equal 4114", () => {
//                assert.strictEqual(squareDigits(2112), 4114);
//              });
//            
//              it("squareDigits(0) should equal 0", () => {
//                assert.strictEqual(squareDigits(0), 0);
//              });
//          })
// Psuedo Code: take in the interger convert it to a string  
//              split each character into it's own value in an array
//              return each value to an integer 
//              square each value and concat the squares and return the answer to an integer

// my answer
function squareDigits(num){
    return Number(num.toString().split('').map(e => Math.pow(Number(e), 2)).join(''))
}

// my answer arrow function
const squareDigits = (num) => Number(num.toString().split('').map(e => Math.pow(Number(e), 2)).join(''))

// best practices and most clever
// here they used '' + num to covert to sting instead of .toString() a regular function instead of an arrow function then multiplied the individual element by itself instead of using Math.pow(val, 2)
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

// here they used parseInt() instead of Number()
function squareDigits(num){
    var array = num.toString().split('').map( function(int) {
      var i = parseInt(int);
      return i * i;
    });
    
    return parseInt(array.join(""));
}

// for loop
// in the for loop they set the index value of the array equal to the string index multiplied by itself at the same index
// everything else is the same
function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};

// using +String()
function squareDigits(num){
    return +String(num).split('').map(function(num){return +num * +num;}).join('');
}

// interesting for loop using += to a new string
function squareDigits(num){
    //may the code be with you
    var numS = num.toString();
    var output = "";
    for (var i = 0; i < numS.length; i++) {
      output += parseInt(numS[i]) * parseInt(numS[i]);
    }
    return parseInt(output);
}