/*
Pair of gloves

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Parameters or Edge Cases:
   inputs will be an array of strings of colors
   unknown if array will be empty
   unknown if strings will always be lowercase

Return:
   return an integer representing the number of pairs of string colors

Examples:
   ["red", "green", "red", "blue", "blue"] --> 2
   ["red", "red", "red", "red", "red", "red"] --> 3
   ['red','red'] --> 1
   ['red','green','blue'] --> 0
   ['gray','black','purple','purple','gray','black'] --> 3

Pseudocode:
   declare a variable pairs and set it equal to 0
   declare an empty object counts
   iterate through the input array and if the current key does not exist in counts then add it to the object and set the value to 1
   if the key does exist then add 1 to the value
   create an array of values from the object counts
   iterate through the values array, check if the element is even, divide the current element by 2 and add it to pairs
   return pairs

*/

// My Answer
function numberOfPairs(arr){
   let pairs = 0
   const counts = arr.reduce((result, key) => {
      result[key] ? result[key]++ : result[key] = 1
      return result
   }, {})
   let vals = Object.values(counts).map(e => {
      if(e % 2 === 0){
         pairs += (e/2)
      } else {
         pairs += (e-1)/2
      }
   })
   return pairs
}

// My Answer refactored using .map() to iterate through and add to global variable instead of .reduce()
function numberOfPairs(arr){
   let pairs = 0
   const counts = arr.reduce((result, key) => {
      result[key] ? result[key]++ : result[key] = 1
      return result
   }, {})
   let vals = Object.values(counts).map(e => e % 2 === 0 ? pairs += (e/2) : pairs += (e-1)/2)
   return pairs
}

// My Answer using .map() to iterate through and add to global variable instead of .reduce()
function numberOfPairs(arr){
   let pairs = 0
   const counts = arr.reduce((result, key) => { result[key] ? result[key]++ : result[key] = 1; return result }, {})
   let vals = Object.values(counts).map(e => e % 2 === 0 ? pairs += (e/2) : pairs += (e-1)/2)
   return pairs
}


// My Answer .reduce() conditional statements
function numberOfPairs(arr) {
   const counts = arr.reduce((result, key) => { 
       result[key] ? result[key]++ : result[key] = 1
       return result
   }, {})
   
   const pairs = Object.values(counts).reduce((acc, c) => {
       if (c % 2 === 0) {
           return acc + (c / 2)
       } else {
           return acc + Math.floor((c - 1) / 2);
       }
   }, 0)

   return pairs
}
// My Answer .reduce() with conditionals
function numberOfPairs(arr) {
   const counts = arr.reduce((result, key) => { 
       result[key] ? result[key]++ : result[key] = 1; 
       return result; 
   }, {})
   
   const pairs = Object.values(counts).reduce((acc, c) => {
       return c % 2 === 0 ? acc + (c / 2) : acc + Math.floor((c - 1) / 2)
   }, 0)

   return pairs
}

// My Answer .reduce() refactored
function numberOfPairs(arr){
   const counts = arr.reduce((result, key) => { result[key] ? result[key]++ : result[key] = 1; return result }, {})
   return Object.values(counts).reduce((acc, c) => acc + Math.floor(c/2), 0)
}

console.log(numberOfPairs(["red", "green", "red", "blue", "blue"])) // 2
console.log(numberOfPairs([
   'Olive',  'Purple',  'Gray',    'Teal',
   'Blue',   'Green',   'Purple',  'Red',
   'Red',    'Olive',   'Blue',    'Lime',
   'Red',    'Olive',   'Lime',    'White',
   'Gray',   'Green',   'Teal',    'Black',
   'Olive',  'Fuchsia', 'Aqua',    'Red',
   'Lime',   'Silver',  'Silver',  'Fuchsia',
   'Teal',   'Aqua',    'Olive',   'Black',
   'Lime',   'Silver',  'Fuchsia', 'Lime',
   'Silver', 'Maroon',  'Green'
 ])) // 16

//  Best Practices and Most Clever
// Meme but also clever
// They pulled every possible glove color from the kata and created a for loop function to iterate through and count every instance of each color.
function numberOfPairs(gloves){
   function getAllIndexes(arr, val) {
       var indexes = [], i;
       for(i = 0; i < arr.length; i++)
           if (arr[i] === val)
               indexes.push(i);
       return indexes;
   }
   let a=Math.floor(getAllIndexes(gloves,'Red').length/2)
   let b=Math.floor(getAllIndexes(gloves,'Green').length/2)
   let c=Math.floor(getAllIndexes(gloves,'Blue').length/2)
   let d=Math.floor(getAllIndexes(gloves,'Gray').length/2)
   let e=Math.floor(getAllIndexes(gloves,'Black').length/2)
   let f=Math.floor(getAllIndexes(gloves,'Purple').length/2)
   let g=Math.floor(getAllIndexes(gloves,'Lime').length/2)
   let h=Math.floor(getAllIndexes(gloves,'Silver').length/2)
   let i=Math.floor(getAllIndexes(gloves,'Maroon').length/2)
   let j=Math.floor(getAllIndexes(gloves,'Navy').length/2)
   let k=Math.floor(getAllIndexes(gloves,'Teal').length/2)
   let l=Math.floor(getAllIndexes(gloves,'White').length/2)
   let m=Math.floor(getAllIndexes(gloves,'Aqua').length/2)
   let n=Math.floor(getAllIndexes(gloves,'Fuchsia').length/2)
   let o=Math.floor(getAllIndexes(gloves,'Olive').length/2)
   let p=Math.floor(getAllIndexes(gloves,'Yellow').length/2)
   let aa=Math.floor(getAllIndexes(gloves,'red').length/2)
   let bb=Math.floor(getAllIndexes(gloves,'green').length/2)
   let cc=Math.floor(getAllIndexes(gloves,'blue').length/2)
   let dd=Math.floor(getAllIndexes(gloves,'gray').length/2)
   let ee=Math.floor(getAllIndexes(gloves,'black').length/2)
   let ff=Math.floor(getAllIndexes(gloves,'purple').length/2)
   let gg=Math.floor(getAllIndexes(gloves,'lime').length/2)
   let hh=Math.floor(getAllIndexes(gloves,'silver').length/2)
   let ii=Math.floor(getAllIndexes(gloves,'maroon').length/2)
   let jj=Math.floor(getAllIndexes(gloves,'navy').length/2)
   let kk=Math.floor(getAllIndexes(gloves,'teal').length/2)
   let ll=Math.floor(getAllIndexes(gloves,'white').length/2)
   let mm=Math.floor(getAllIndexes(gloves,'aqua').length/2)
   let nn=Math.floor(getAllIndexes(gloves,'fuchsia').length/2)
   let oo=Math.floor(getAllIndexes(gloves,'olive').length/2)
   let pp=Math.floor(getAllIndexes(gloves,'yellow').length/2)
   

   return a+b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+aa+bb+cc+dd+ee+ff+gg+hh+ii+jj+kk+ll+mm+nn+oo+pp
}

// IMO Best Practices 
// using a single for loop
function numberOfPairs(gloves) {

   var pairs = 0
   ,  counts = {};
   
   for (var color of gloves) {
   
     if (!counts.hasOwnProperty(color))
       counts[color] = 0;
 
     if (++counts[color] === 2) {
       counts[color] -= 2;
       pairs++;
     }
   }
   return pairs;
 }

//  another single iteration with a for loop
function numberOfPairs(gloves) {
   let pairs = 0;
   let count = {}
   for (let color of gloves) {
     if (color in count) {
       count[color]++;
     } else {
       count[color] = 1;
     }
     if (count[color] === 2) {
       pairs++;
       count[color] = 0;
     }
   }
   return pairs;
}

// iterating through a unique array of inputs filtering the input array length pair and adding to a global count
function numberOfPairs(gloves) {
   const uniques = new Set(gloves);
   let amount = 0;
   for (let unique of uniques) {
     const count = Math.floor(gloves.filter((pair) => pair === unique).length/2);
     amount += count;
   }
   return amount;
}

// very clever
// creating a unique array of each color glove and using .reduce() once but with String.match() regex for current element
function numberOfPairs(gloves){
  var arr = Array.from(new Set(gloves));
  return arr.reduce((a,b) => a + Math.floor(gloves.join('').match(new RegExp(b, 'g')).length / 2), 0);
}

// similar to above but using a bitwise operator
numberOfPairs=a=>[...new Set(a)].map(b=>a.join``.split(b).length-1).reduce((a,b)=>a+(b>>1),0)

// creating an array of the inputs, sorting it then comparing the current element to the next element in a for loop to add to a global variable count
function numberOfPairs(gloves) {
   let counter = 0;
   let copyGloves = [...gloves].sort();
   for (let i = 0; i < copyGloves.length; i++) {
       if (copyGloves[i] === copyGloves[i+1]) {
           counter++;
           copyGloves.splice(i, 2)
           i--;
       }
   }
   return counter;
}

// .reduce() with an or 0 statement default empty object and the 2nd .reduce() using parseInt() instead of Math.floor() to grab everything to the left of the decimal point of a decimal
function numberOfPairs(gloves) {
   pairsCounts = gloves.reduce((acc, current) => {
     acc[current] = (acc[current] || 0) + 1;
     return acc;
   }, {});
   return Object.values(pairsCounts).reduce((acc, current) => acc + parseInt(current / 2), 0);
 }