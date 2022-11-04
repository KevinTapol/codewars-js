// Parameters or Edge Cases:
//      input is an array of intergers that can be negative
//      If the input array is empty consider it as: [0] (array with a zero).
// Return:
//      a string "odd" or "even" if the SUM of the array elements are odd or even
// Examples:
//      describe('Fixed tests', () => {
//          it('Edge tests', () => {
//            assert.strictEqual(oddOrEven([0]), 'even')
//            assert.strictEqual(oddOrEven([1]), 'odd')
//            assert.strictEqual(oddOrEven([]), 'even')
//          });
//          
//          it('Even tests', () => {
//            assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
//            assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
//            assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
//          });
//          
//          it('Negative Even tests', () => {
//            assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
//            assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
//            assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
//          });
//          
//          it('Odd tests', () => {
//            assert.strictEqual(oddOrEven([0, 1, 2]), 'odd')
//            assert.strictEqual(oddOrEven([0, 1, 4]), 'odd')
//            assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd')
//          });
//          
//          it('Negative Odd tests', () => {
//            assert.strictEqual(oddOrEven([0, -1, 2]), 'odd')
//            assert.strictEqual(oddOrEven([0, 1, -4]), 'odd')
//            assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd')
//          });
//      });
// Psuedo Code:
//      add up all the values in the array
//      divide the sum by 2
//      if there is no remainder return "even" else "odd"

// my answer
function oddOrEven(array) {
    // add up all the values in the array and divide the sum by 2
    if(array.reduce((acc,c)=> acc + c,0) %2 === 0){
    // if there is no remainder return "even" else "odd"
        return "even"
    }else {
        return "odd"
    }
}

// my answer refactored arrow function ternary
// While using truthy/falsy, 0 will evaluate to false where I have the string "even" response.
const oddOrEven = (arr) => arr.reduce((a,b)=> a + b,0) %2 ? "odd" : "even"

// best practices and most clever
// same as my refactored answer but using a regular funtion
function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

// brute force for loop and if else
function oddOrEven(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++)
    {result+=array[i];}
    if (result%2 == 0)
    {return "even";}
    else{return "odd";}
}

// same as my refactored answer but not using truthy/falsy
const oddOrEven = a => a.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';

// using nested functions
function oddOrEven(array) {
    if(array.length == 0){
      return 'even'
    }
    var sum = array.reduce(add, 0)
    function add(x, y){
      return x + y
    }
    
    if(sum % 2 == 0){return 'even'}
    else{return 'odd'}
}

// interesting way of calling truthy and false to an array 
const oddOrEven=arr=>["even","odd"][Math.abs(arr.reduce((a,b)=>a+b,0))%2];

// using .filter()
function oddOrEven(array) {
    return array.filter(number => number & 1).length & 1 ? 'odd' : 'even';
}

// using .forEach()
function oddOrEven(array) {
    let res = ''
    let sum = 0 
    array.forEach(item => {
   sum += item 
    })
     if(sum % 2 === 0){
     return res = 'even'  
     }else {
     return res = 'odd'
     }
}

// checking of the array is undefined
function oddOrEven(array) {
    //enter code here
   let a;
   if(array[0] !== undefined){
   a = array.reduce((acc,i)=> acc+i)
     } else{a=0}
   
   return (a%2)===0 ? 'even': 'odd'
}