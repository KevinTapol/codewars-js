/*
The Office II - Boredom Score

Parameters or Edge Cases:
    inputs will be an object of key value pairs where the values will be integers
    we will be given a object to call for department reference to value

Return:
    if the sum of the values of the input objects's string key value pair integers is less than or equal to 80 return the string 'kill me now'
    if the sum is greater than 80 and less than 100 return 'i can handle this'
    if the sum is greater than or equal to 100 return 'party time!!'

Examples:
    given the key values 
        accounts = 1
        finance = 2
        canteen = 10
        regulation = 3
        trading = 6
        change = 6
        IS = 8
        retail = 5
        cleaning = 4
        pissing about = 25

    {tim: 'change', jim: 'accounts', randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS', laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts', mr: 'finance' } --> 'kill me now'

    {tim: 'IS', jim: 'finance', randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning', katie: 'cleaning', laura: 'pissing about', saajid: 'regulation', alex: 'regulation', john: 'accounts', mr: 'canteen' } --> 'i can handle this'

    {tim: 'accounts', jim: 'accounts', randy: 'pissing about', sandy: 'finance', andy: 'change', katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about', john: 'retail', mr: 'pissing about' } --> 'party time!!'

Pseudocode:
    declare a global object named dept for the key string department to integer value 
    iterate through the object values calling the global object dept on the value string to get the integer values and sum them up
    if the sum is <=80 return 'kill me now'
    if the sum is <80 and <100 return 'i can handle this'
    if the sum is >=100 return 'party time!!'

*/

// My Answer
function boredom(staff){
    const dept = {
        "accounts": 1,
        "finance" : 2,
        "canteen" : 10,
        "regulation" : 3,
        "trading" : 6,
        "change" : 6,
        "IS" : 8,
        "retail" : 5,
        "cleaning" : 4,
        "pissing about" : 25
    }

    let sum = Object.values(staff).reduce((acc, c) => acc + dept[c], 0)
    if(sum <= 80){
        return 'kill me now'
    } if (sum > 80 && sum < 100){
        return 'i can handle this'
    } if (sum >= 100) {
        return 'party time!!'
    }
}

// My Answer refactored conditionals
function boredom(staff){
    const dept = {
        "accounts": 1,
        "finance" : 2,
        "canteen" : 10,
        "regulation" : 3,
        "trading" : 6,
        "change" : 6,
        "IS" : 8,
        "retail" : 5,
        "cleaning" : 4,
        "pissing about" : 25
    }
    let sum = Object.values(staff).reduce((acc, c) => acc + dept[c], 0)
    return sum <= 80 ? 'kill me now' : sum > 80 && sum < 100 ? 'i can handle this' : sum >= 100 ? 'party time!!' : ''
}

console.log(boredom({tim: 'change', jim: 'accounts', randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS', laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts', mr: 'finance' })) // 'kill me now'


console.log(boredom({ tim: 'cleaning', jim: 'pissing about', randy: 'cleaning', sandy: 'retail', andy: 'cleaning', katie: 'pissing about', laura: 'pissing about', saajid: 'trading', alex: 'pissing about', john: 'retail', mr: 'retail' })) // 'party time!!'

console.log(boredom({ tim: 'canteen',jim: 'trading',randy: 'cleaning',sandy: 'regulation',andy: 'finance',katie: 'pissing about',laura: 'pissing about',saajid: 'trading',alex: 'regulation',john: 'IS',mr: 'IS' })) // 'party time!!'


// Best Practices and Most Clever
// similar to my refactored version but using var instead of cont and let
function boredom(staff){
    var map = {
      accounts:1,
      finance:2,
      canteen:10,
      regulation:3,
      trading: 6,
      change:6,
      IS:8,
      retail:5,
      cleaning:4,
      'pissing about':25
    };
    
    var score = Object.keys(staff).reduce(
      function(a,b){       
        return a+map[staff[b]]
     },0); 
    
    return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!';
 }

//  using conditionals instead of object .reduce()
function boredom(staff) {
    var arr = [];
    for(var i in staff) {
      if(staff.hasOwnProperty(i)) {
        arr.push(staff[i]);
      }
    }
    arr = arr.map(function(x) {
      if(x === 'accounts') {
        return 1;
      } else if(x === 'finance') {
        return 2;
      } else if(x === 'canteen') {
        return 10;
      } else if(x === 'regulation') {
        return 3;
      } else if(x === 'trading') {
        return 6;
      } else if(x === 'change') {
        return 6;
      } else if(x === 'IS') {
        return 8;
      } else if(x === 'retail') {
        return 5;
      } else if(x === 'cleaning') {
        return 4;
      } else if(x === 'pissing about') {
        return 25;
      }
    });
    var value = arr.reduce(function(a, b) {
      return a + b;
    });
    if(value <= 80) {
      return 'kill me now';
    } else if(value < 100) {
      return 'i can handle this';
    } else {
      return 'party time!!';
    }
  };

// clean 3 function answer
const data = {accounts: 1, finance: 2, canteen: 10, regulation: 3, trading: 6, change: 6, IS: 8, retail: 5, cleaning: 4, 'pissing about': 25};
const score = x => x < 81 ? 'kill me now' : x < 100 ? 'i can handle this' : 'party time!!';
const boredom = s => score(Object.values(s).reduce((a,b)=>a+data[b],0));