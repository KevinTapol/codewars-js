/*
Number Of Occurrences

Write a function that returns the number of occurrences of an element in an array.
This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN).

Parameters or Edge Cases:
    inputs will be an object meaning you need the this. notation to access the inputs
    
Return:
    an integer of the total count of the input element from the object arr
Examples:
    var arr = [0, 1, 2, 2, 3];
    arr.numberOfOccurrences(0) === 1;
    arr.numberOfOccurrences(4) === 0;
    arr.numberOfOccurrences(2) === 2;
    arr.numberOfOccurrences(3) === 1;
Pseudocode:
    create a return statement in the curly brackets using object reference this
    filter through the object grabbing only the elements equal to the argument being passed in
    return the length of the new array
*/

// My Answer using .filter() and .length
Object.defineProperty(Array.prototype, 'numberOfOccurrences', {
    value: function numberOfOccurrences(element) {
      return this.filter(e => e === element).length;
    }
});


// brute force for loop
  Object.defineProperty(Array.prototype, 'numberOfOccurrences', {
    value: function numberOfOccurrences(element) {
      let count = 0; // We start counting from 0
      for (let i = 0; i < this.length; i++) {
        if (this[i] === element) { // If the current element matches the one we're looking for
          count++; // We increase the count
        }
      }
      return count; // Finally, we return the count
    }
  });


// using .map() and .reduce()
Object.defineProperty(Array.prototype, 'numberOfOccurrences', {
    value: function numberOfOccurrences(element) {
      return this.map(item => item === element ? 1 : 0).reduce((acc, val) => acc + val, 0);
    }
  });
  
// Best Practices and Most Clever
// Using Array directly instead of Object but the same as my answer with .filter() and .length
Array.prototype.numberOfOccurrences = function(search) {
    return this.filter( function(num){ return search === num } ).length;
  }

// Array.prototype using a for loop
Array.prototype.numberOfOccurrences = function (element) {
    
    var counter = 0;
    for (var i = 0; i < this.length; i++)
    {
        if (this[i] == element) { counter++; }
    }
    
    return counter;
}

// Array.prototype .reduce
Array.prototype.numberOfOccurrences = function(element) {
    return this.reduce(function(acc, current) {
      return current === element ? acc + 1 : acc;
    }, 0);
  }

// Array.prototype but renaming the input to f
Array.prototype.numberOfOccurrences = function(f) {
    return this.filter(i => i === f).length;
  }

// Object.prototype using this.forEach instead of a for loop
Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value : function numberOfOccurrences(element) {
      let res = 0
      
      this.forEach(val => {
        val === element ? res += 1 : res
      })
  
      return res
    }
  });