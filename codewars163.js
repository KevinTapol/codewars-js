// Parameters or Edge Cases: 
//          inputs will be list of non-negative integers and strings
// Return:
//          a new list with the strings filtered out
// Examples:
//          describe("Tests", () => {
//              it("test", () => {
//                assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
//                assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
//                assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');
//              });
//          });
// Psuedo Code: to create a shallow copy of an array use .filter() 
//              use Number() to compare each value to itself as a number 
//              return the new array

// my answer
function filter_list(l) {
    return l.filter(e => Number(e) === e)
}

console.log(filter_list([1,2,'a','b']))
console.log(filter_list([1,'a','b',0,15]))
console.log(filter_list([1,2,'aasf','1','123',123]))

// my answer arrow function
const filter_list = (l) => l.filter(e => Number(e) === e)

// best practices and most clever
// instead of using an arrow function with .filter() they used the regular function format
// they compared the value in the same idea as mine except they used typeof to check if the element is a number
// The typeof operator returns a string indicating the type of the operand's value.
function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
}

// This is a better refactor version of what I did.
// here they are using Number.isInteger to check if each value is an interger
function filter_list(l) {
    return l.filter(Number.isInteger);
}

// funny they are using math to check if it will concat or add
function filter_list(l) {
    return l.filter(x=>x+0==x)
}

// for loop instead of .filter()
function filter_list(l) {
    var res = [];
    for(var item=0;item<l.length;item++) {
        if (typeof l[item] === "number") {
            res.push(l[item]);
        }
    }
    return res;
}

// interesting how they are checking if value and type is equal
const filter_list = l => l.filter(n => n === +n)

// omit the strings instead of take the ints
// the best practices and most clever solution but looking at it another way
function filter_list(l) {
    return l.filter(i=> typeof i !== 'string');
}

// The constructor property returns a reference to the Object constructor function that created the instance object. Note that the value of this property is a reference to the function itself, not a string containing the function's name.
// using object dot notation to compare instead of typeof 
function filter_list(l) {
    // Return a new array with the strings filtered out
    var filteredList = [];
    for (var i = 0; i < l.length; i++){
      if (l[i].constructor.name !== "String"){
        filteredList.push(l[i]);
      }
    }
    return filteredList;
}