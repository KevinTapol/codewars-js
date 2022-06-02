//Implement Array.prototype.filter()

// Parameters or Edge cases:
// Return:
// Examples: [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Psuedo code: declare an array, loop through the array compare parameter with index, if conditions met .push() parameter to new array, outside of for loop return the new array with compared parameter values

Array.prototype.filter = function (func) {
    //nothing here, you will feel pretty awesome to write down by yourself
    //have fun :)
    var res = [];
    for (var i = 0; i < this.length; i++){
        if (func(this[i])){
            res.push(this[i]);
        }
    }
    return res;
  }

