// Parameters or Edge Cases:
//      input will be a 2d array or matrix of pairs of integers
//      will they always be integers?
//      second input can be a negative integer
// Return:
//      an array of strings Senior if the first input is 55 or more AND the second input greater than 7 else string Open
// Examples:
//      describe("Basic tests", () => {
//          it("Fixed tests", () => {
//            assert.deepEqual(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
//            assert.deepEqual(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])
//            assert.deepEqual(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])
//          });
//      });
// Psuedo Code:
//      for each element in the array grab the inner array first integer and check if it is equal to 55 or greater 
//      grab the second interger and check if it is greater than 7
//      if both conditions are met return the string 'Senior' in the respective array element index else 'Open' in the array
//      return the new array


// my answer
function openOrSenior(data){
    // declare an empty array
    var member = []
    // loop through each element and grab the first element array value of 0 and 1 comparing the values
    for(let i = 0; i < data.length; i++){
    // If each element in the 2d array first element is greater than or equal to 55 AND the second is greater than 7 push to the empty array at the same index as data the value 'Senior'. 
        if(data[i][0] >= 55 && data[i][1] > 7){
            member.push('Senior')
    // If the conditions aren't met, push 'Open'.        
        } else {
            member.push('Open')
        }
    // Outside of the for loop, return the new array of strings.
    } return member
}

// my answer refactored arrow function and ternary 
const openOrSenior = (data) => {
    var member = []; {
        // for(let i = 0; i < data.length; i++) is the same as for(var i in data)
        for(var i in data){
            // loop through each element comparing the first and second index values
            // if the conditions are met at the same index value of the empty array push 'Senior' if not push 'Open'
            data[i][0] >= 55 && data[i][1] > 7 ? member.push('Senior') : member.push('Open')
        }
        // return the new array of strings
    } return member   
}

// best practices and most clever
// very clever This reminds me of React.js array/object destructuring of useState
// here they are using .map() to destructure each element of the 2d array comparing the age input and handicap input
// then they are using a ternary
// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

// same as best practices and most clever except as an arrow function
const openOrSenior = (members) => members.map(([age, handicap]) => (age >= 55) && (handicap > 7) ? 'Senior' : 'Open')

// nested function
// 
function openOrSenior(data){
    function determineMembership(member){
      return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
    }
    return data.map(determineMembership);
}

// same answer as mine but using forEach instead of a for loop
function openOrSenior(data){
    var result = [];
    data.forEach(function(member) {
      if(member[0] >= 55 && member[1] > 7) {
        result.push('Senior');
      } else {
        result.push('Open');
      }
    })
    return result;
}

// same as above but using arrow function instead of a regular function
function openOrSenior(data){
    var result = [];
    data.forEach(member => {
      if(member[0] >= 55 && member[1] > 7) {
        result.push('Senior');
      } else {
        result.push('Open');
      }
    })
    return result;
}

// declaring and object
const Category = {
    Open: 'Open',
    Senior: 'Senior',
  };
  
  function openOrSenior(data){
   return data.map(([age, handicap]) => {
      if (age >= 55 && handicap > 7) {
        return Category.Senior;
      }
  
      return Category.Open;
   });
}

// global array declaration where each element has 4 index and values
// essentially adding another 2 index elements into the 2d array per element where 3 index is the condition and 4th is if the condition is met return 'Senior' else 'Open'
function openOrSenior(data){
    var age, handicap, category, output = [];
    
    data.forEach(function(person) {
      age = person[0];
      handicap = person[1];
      category = (age >= 55 && handicap > 7) ? 'Senior' : 'Open';
      
      output.push(category);
    });
    
    return output;
}