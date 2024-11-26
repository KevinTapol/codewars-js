/*
Array Helpers

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers

Parameters or Edge Cases:
    inputs will be an array of numbers
    array can be empty

Return:
    using Array.prototype.fnName() create six different functions to return a copy of the input array modded given the name of the function with dot notation numbers.fnName() 

Examples:
    var numbers = [1, 2, 3, 4, 5];

    numbers.square();  // must return [1, 4, 9, 16, 25]
    numbers.cube();    // must return [1, 8, 27, 64, 125]
    numbers.average(); // must return 3
    numbers.sum();     // must return 15
    numbers.even();    // must return [2, 4]
    numbers.odd();     // must return [1, 3, 5]

Pseudocode:
    create a function with Array.prototype.square setting it equal to a function that returns the elements squared, .cube cubed, .average returning the average, .sum returning the sum, even returning only even elements and .odd returning only odd elements

*/

// My Answer
Array.prototype.square = function (){
    return this.map(e => e*e)
}
Array.prototype.cube = function (){
    return this.map(e => e*e*e)
}
Array.prototype.average = function (){
    return this.reduce((acc, c)=> acc + c, 0)/this.length
}
Array.prototype.sum = function (){
    return this.reduce((acc, c) => acc + c, 0)
}
Array.prototype.even = function (){
    return this.filter(e => e % 2 === 0)
}
Array.prototype.odd = function (){
    return this.filter(e => e % 2 !== 0)
}

// My Answer refactored using .sum() inside of .average() 
Array.prototype.square = function (){
    return this.map(e => e*e)
}
Array.prototype.cube = function (){
    return this.map(e => e*e*e)
}
Array.prototype.average = function (){
    return this.sum()/this.length
}
Array.prototype.sum = function (){
    return this.reduce((acc, c) => acc + c, 0)
}
Array.prototype.even = function (){
    return this.filter(e => e % 2 === 0)
}
Array.prototype.odd = function (){
    return this.filter(e => e % 2 !== 0)
}



// Best Practices
// similar to my answer but not using arrow methods
Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }

// Most Clever
// using Object.assign(Array.prototype, {fnName(){}, {fnName(){}, {fnName(){}}) to use Array.prototype only once
Object.assign(Array.prototype, {
    square() {return this.map(n => n * n);},
    cube() {return this.map(n => Math.pow(n, 3));},
    sum() {return this.reduce((p,n) => p + n, 0);},
    average() {return this.reduce((p,n) => p + n, 0) / this.length;},
    even() {return this.filter(n => !(n % 2));},
    odd() {return this.filter(n => n % 2);}
});

// clever in that you can rename the function to use arrow fn consts etc
Array.prototype.square  = Square;
Array.prototype.cube    = Cube;
Array.prototype.average = Average;
Array.prototype.sum     = Sum;
Array.prototype.even    = Even;
Array.prototype.odd     = Odd;

function Square()  { return this.map(function(e){return e*e;});                         }
function Cube()    { return this.map(function(e){return e*e*e;});                       }
function Average() { return this.sum() / this.length;                                   }
function Sum()     { return (this == '') ? 0 : this.reduce(function(a,b){return a+b;}); }
function Even()    { return this.filter(function(e){return e%2==0;});                   }
function Odd()     { return this.filter(function(e){return e%2!=0;});                   }

// not using .reduce(), using Math.pow(element, exponent) and for loops
Array.prototype.square = function() {
    var squared = [];
    for (var i = 0; i < this.length; i++) {
      squared[i] = Math.pow(this[i], 2);
    }
    return squared;
  }
  
  Array.prototype.cube = function() {
    var cubed = [];
    for (var i = 0; i < this.length; i++) {
      cubed[i] = Math.pow(this[i], 3);
    }
    return cubed;
  }
  
  Array.prototype.sum = function() {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum;
  }
  
  Array.prototype.average = function() {
    if (this.length == 0) return NaN;
    return this.sum() / this.length;
  }
  
  Array.prototype.even = function() {
    var evens = [];
    for (var i = 0; i < this.length; i++) {
      if (this[i] % 2 == 0) evens.push(this[i]);
    }
    return evens;
  }
  
  Array.prototype.odd = function() {
    var odds = [];
    for (var i = 0; i < this.length; i++) {
      if (this[i] % 2 == 1) odds.push(this[i]);
    }
    return odds;
  }

// interesting use of pulling out the logic for each fn
const square = x => x*x;
const cube   = x => x*x*x;
const sum    = (p, c) => p + c;
const even   = x => x % 2 == 0;
const odd    = x => !even(x);

Array.prototype.square =  function() { return this.map(square); }
Array.prototype.cube =    function() { return this.map(cube); }
Array.prototype.sum =     function() { return this.reduce(sum, 0); }
Array.prototype.average = function() { return this.length ? this.reduce(sum, 0) / this.length : NaN; }
Array.prototype.even =    function() { return this.filter(even); }
Array.prototype.odd =     function() { return this.filter(odd); }

// assigning Array.prototype to a variable for dry code
with(require('ramda')){
    const pow = flip(Math.pow)
    const isOdd = flip(modulo)`2`
    const isEven = complement(isOdd)
    const Ꭿ = Array.prototype
    Ꭿ.square  = function(){return map(pow`2`)(this)}
    Ꭿ.cube    = function(){return map(pow`3`)(this)}
    Ꭿ.average = function(){return mean(this)}
    Ꭿ.sum     = function(){return sum(this)}
    Ꭿ.even    = function(){return filter(isEven)(this)}
    Ꭿ.odd     = function(){return filter(isOdd)(this)}
}

// using a spread operator and array brackets for the input
Array.prototype.square = function() {
    return [...this].map(num => num * num);
  }
  
  Array.prototype.cube = function() {
    return [...this].map(num => num * num * num);
  }
  
  Array.prototype.average = function() {
    return [...this].reduce((sum, num) => sum + num, 0) / this.length;
  }
  
  Array.prototype.sum = function() {
    return [...this].reduce((sum, num) => sum + num, 0);
  }
  
  Array.prototype.even = function() {
    return [...this].filter((num) => num % 2 === 0);
  }
  
  Array.prototype.odd = function() {
    return [...this].filter((num) => num % 2 !== 0);
  }