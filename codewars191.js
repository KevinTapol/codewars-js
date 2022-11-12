// Parameters or Edge Cases:
//      input will be an array of strings
// Return:
//      return an array of string without the specific strings African, Roman Tufted, Toulouse, Pilgrim, and Steinbacher
// Examples:
//      describe("Basic tests",function(){
//          it("Mixed list",function(){
//            Test.assertDeepEquals(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
//          });
//          it("No geese",function(){
//            Test.assertDeepEquals(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
//          });
//          it("All geese",function(){
//            Test.assertDeepEquals(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]);
//          });
//      });
// Psuedo Code
//      take in the input and filter out all the strings specified using .filter() and .includes() for each element of the given array of geese
//      return the new array

// my answer best practices and most clever
// Best practices and most clever used b instead of e for the variable but I used e short for element in array.
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    return birds.filter(e => !geese.includes(e))
}

// using index of instead of includes
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => geese.indexOf(bird) < 0 );
};

// for loop with array methods
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
  var newArray = [];
    for (var i =0;i<birds.length;i++) {
    if (!geese.includes(birds[i])) {
      newArray.push(birds[i]);
    }
  
    
    }
  return newArray;
};

// for loop without array methods
const gooseFilter = (birds) => {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    for (let i = 0; i < birds.length; i++) {
      for (let j = 0; j < geese.length; j++) {
        if (birds[i] == geese[j]) {
          birds.splice(i, 1);
          i--;
        }
      }
    }
    return birds;
};

// using .filter() and .some()
gooseFilter = b => b.filter(e => !["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"].some(x => x == e));

// using .test()
const gooseFilter = (birds) => {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    birds.map(item => geese.test(item));
};