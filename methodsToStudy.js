/*
Given an array of elements, return an object where each array element is a key and the value is the elements occurrence in the array. 
*/
function checkThreeAndTwo(arr) {
    const counts = arr.reduce((result, key) => {
      result[key] ? result[key]++ : result[key] = 1
      // console.log(result) // logging the result here to show the change to the object result per iteration
      return result
    }, {})
    return counts
  }
  
//  console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])) // {a: 3, b: 2}
//  console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"])) // { a: 5 }
//  console.log(checkThreeAndTwo(["a", "b", "c", "b", "c"])) // { a: 1, b: 2, c: 2 }

/*
Create a unique set of elements of the input array.
*/

function uniqueArr(arr){
    return [...new Set(arr)]
    // return Array.from(new Set(arr))
    // iterate through the array and filter by where the index is equal to the indexOf the element first occurrence
    // arr.filter((e, i) => i === arr.indexOf(e))
}
// console.log(uniqueArr(["a", "a", "a", "b", "b"])) // [ 'a', 'b' ]

/*
Take in an object of key value pairs and return a 2d array where each element is an array of each key value pair.
*/
const objToMatrix = o => Object.entries(o)

console.log(objToMatrix({name: "Jeremy", age: 24, role: "Software Engineer"})) // [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

/*
Take in a 2d Array aka matrix and return an object with the nested arrays as elements and index 0 as a key and elements at index 1 as the value.
*/
const matrixToObj = matrix => Object.fromEntries(matrix)

console.log(matrixToObj([["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]])) // {name: "Jeremy", age: 24, role: "Software Engineer"}


/*
Gauss Theorem n(n+1)/2 but for the power of 3 per each element ((n*(n + 1))/2)**2
Return the sum of 1 to the input integer with each element to the power of 3
input n 1^3 + 2^3 + ... + n^3
    2 => 9
    3 => 36
*/
const sumCubes = (n) => ((n*(n + 1))/2)**2

// Alternative Answer
// const sumCubes = n => [...Array(n + 1).keys()].reduce((acc, c) => acc + c**3)

console.log(sumCubes(2)) // 9
console.log(sumCubes(3)) // 36

/*
Return an integer representing the average of all the object value integers to the key age of all the objects rounded to the nearest integer
NOTE even though age does not have quotes, we MUST use quotes to dynamically iterate through each object in the array for the .reduce() method. Otherwise, age will return as undefined.
*/
const getAverageAge = arr => Math.round(arr.reduce((acc, c) => acc + c['age'], 0)/arr.length)

console.log(getAverageAge([
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
])) // 50

/*
Math.methods() 
.round() to nearest int 
.ceil() rounds up 
.floor() rounds down
.trunc() removes decimal values and returns the integer
.pow() 1st input is the base 2nd is the exponent 1st**2nd
.sqrt() returns the square root of the input aka **0.5
*/

/*
a.localCompare(b) is supplementing the comparison return for a < b return -1 a > b return 1 a === b return 0
.localCompare() can reverse the search with b.localCompare(a)
.localCompare() can take into account accented chars
*/ 
const sortReindeer = reindeerNames => reindeerNames.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));
// const sortReindeer = reindeerNames => reindeerNames.sort((a, b) => ((a.split(' ')[1]) > (b.split(' ')[1])) ? 1 : ((a.split(' ')[1]) < (b.split(' ')[1])) ? -1 : 0);
// const sortReindeer = reindeerNames => reindeerNames.sort((a, b) => b.localeCompare(a));


console.log(sortReindeer([
    "Dasher Tonoyan", 
    "Dancer Moore", 
    "Prancer Chua", 
    "Vixen Hall", 
    "Comet Karavani",        
    "Cupid Foroutan", 
    "Donder Jonker", 
    "Blitzen Claus"
  ]));

// how to flatten an object
function flattenObject(obj) {
  const result = [];
  
  while (obj !== null) {
    result.push(obj.value);
    obj = obj.next;
  }

  return result;
}

// how to flatten an object using recursion
function listToArray(obj) {
  return !obj ? [] : [obj.value].concat(listToArray(obj.next));
}

// clever use of for loop start is input obj for loop based on element start is input obj stop on e and increment on e.next. Each iteration pushes the value of the current element. Finally return the result
function listToArray(obj) {
  let array = [];
  for (let e = obj; e; e = e.next)
    array.push(e.value);
  return array;
}

const input = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
const output = flattenObject(input);
console.log(output); // Output: [1, 2, 3]

/*
Return a unique array of inputs where only duplicates remain also excluding the first occurrence of duplicates 
NOTE .reduce() logic iterates only once creating a unique set using the conditions of if the current element is not the first occurrence AND does not currently exists in the accumulative object prev.
The arrow fn answer keeps the 2nd and on duplicates then creates a unique array of elements with [...new Set(array)].
*/
function duplicates(arr) {
  return arr.reduce((prev, cur, i, a) => {
    if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
      prev.push(cur);
    }
    return prev;
  }, []);
}

const duplicates = arr => [...new Set(arr.filter((el, i) => i !== arr.indexOf(el)))]

/*
varied amount of inputs
*/
function randNumOfInputs(...obj){
  return obj
}

console.log(randNumOfInputs({name: 'Santa', wasNice: true}, {name: 'Warrior reading this kata', wasNice: true})) 
/*
Output
[
{ name: 'Santa', wasNice: true },
{ name: 'Warrior reading this kata', wasNice: true }
]
*/ 

/*
varied amount of inputs including arrays then flattened to a 1d array of inputs
*/
function randNumAndTypeOfInputs(...obj){
  return obj.flat(Infinity)
}

console.log(randNumAndTypeOfInputs(
  {name: 'Santa', wasNice: true}, 
  {name: 'Warrior reading this kata', wasNice: true},
  ['soloArr'],
  [['2DNestedArr'], '1DNestedArr']
)) 
/*
Output
[
{ name: 'Santa', wasNice: true },
{ name: 'Warrior reading this kata', wasNice: true },
'soloArr',
'2DNestedArr',
'1DNestedArr'
]
*/ 

/*
  Given an array of integers, create an array of objects where the integers are the keys and the values are the charCode values of the integers.
*/

// .reduce
function numObj(s){
  return s.reduce((acc, c) => {
      let obj = {}
      obj[c] = String.fromCharCode(c)
      acc.push(obj)
      return acc
  }, [])
}

// .reduce refactored one liner REQUIRED ; PER LOGIC STEP
const numObj = s => s.reduce((acc, c) => { let obj = {}; obj[c] = String.fromCharCode(c); acc.push(obj); return acc }, [])

// .map() note necessary () outside of object and [] for dynamic iteration of keys [e]
/*
  The parentheses () around the object literal tell JavaScript that you are returning an object, not opening a block of code.
  When using arrow functions, if the function body directly returns an object literal, JavaScript will interpret the curly braces {} as the start of a block of code rather than an object literal. To indicate that you're returning an object, you need to wrap the object literal in parentheses.
*/
function numObj(s){
  return s.map(e => ({ [e]: String.fromCharCode(e) }))
}

const numObj = s => s.map(e => ({ [e]: String.fromCharCode(e) }))

console.log(numObj([118,117,120])) // [{'118':'v'}, {'117':'u'}, {'120':'x'}]
console.log(numObj([101,121,110,113,113,103])) // [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]

// Difference between String.fromCodePoint() and String.fromCharCode()
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804))
console.log(String.fromCharCode(9731, 9733, 9842, 0x2f804))

/*
sorting numbers and letters with local compare
*/
console.log([ 6, 'c' ].sort((a, b) => String(b).localeCompare(String(a))))

/*
Since boolean true false combos evaluate to false I need to isolate the condition when both elements are strings to return 'Void!'. So, if I reverse the boolean true false with a ! then I can isolate all instances where the elements are numbers to generate an array else return 'Void!'.

add both elements then use regex to remove all str that are not [0-9] and convert the result into a number
create an array with the length of the result with the element(s) equal to the input 
sort fails because it alters the original value
*/
function explode(x){
  if(!(typeof x[1] === 'string' && typeof x[0] === 'string')){
      let str = (x[0] + x[1]).toString()
      let n = Number(str.replace(/[^0-9]/g, ''))
      return Array.from({length:n}, (e) => e = x)
  } else {
      return 'Void!'
  }
}

console.log(explode([9, 3])) // [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
console.log(explode(['a', 3])) // [['a', 3], ['a', 3], ['a', 3]]
console.log(explode(['a', 'b'])) // 'Void!'
console.log(explode(["a", 0])) // []
console.log(explode([ 6, 'c' ])) // [ [ 6, 'c' ], [ 6, 'c' ], [ 6, 'c' ], [ 6, 'c' ], [ 6, 'c' ], [ 6, 'c' ] ]


// check to see if default can be non zero
function test (arr){
  return arr.reduce((acc, c) => acc + c, 1)

}
console.log(test([4, 1, 1, 1, 4])) // [4, 1, 4]

/*
  Output array must have no pairs of consecutive elements which sum equal to t
  .reduce() with non empty default
*/  
function trouble(x, t){
  let arr = x.slice(1)
  let result = arr.reduce((acc, c) => {
      acc[acc.length - 1] + c != t ? acc.push(c) : ''
      return acc
  }, [x[0]])
  return result
}

console.log(trouble([4, 1, 1, 1, 4],2)) // [4, 1, 4]

// new line 
console.log('cheeseburgers\n)())())')

// brute force for loop
function tribonacci(arr,n){  
  for (let i = 0; i < n-3; i++) { // iterate n times
    arr.push(arr[i] + arr[i+1] + arr[i+2]); // add last 3 array items and push to trib
  }
  return arr.slice(0, n); //return trib - length of n
}

// clever one liner using [...Array(n)] to create an array of elements with the length of n then .reduce() referencing accumulated array and index with the default being the input array
const tribonacci = (signature, n) => [...Array(n)].reduce((arr, _, idx) => [...arr, arr[idx] + arr[idx+1] + arr[idx+2]], signature).slice(0, n);

console.log(tribonacci([300,200,100], 0)) // []
console.log(tribonacci([1,1,1],  1)) // [1]
console.log(tribonacci([1,1,1], 10)) // [1,1,1,3,5,9,17,31,57,105]


// My Answer using array methods with a string key reference for alphabet chars a-z index values 1-26 with the first char as 0 for 0
function high(x){   
  const key = '0abcdefghijklmnopqrstuvwxyz'
  const arr = x.split(' ').map((e) => e.split('').reduce((acc, c) => acc + key.indexOf(c), 0))
  return x.split(' ')[arr.indexOf(Math.max(...arr))]
}


/*
  Return the earliest occurrence of a word from the input string where the combination of each char added up is the highest value with char value based on a-z 1-26
  
  Best Practices and Most Clever
  similar to my array method answer but using .charCodeAt() instead of an array to reference index values of a-z
  Since every current element is a single string char, the value passed in .charCodeAt() will always be 0 for index 0. (static instead of dynamic)
*/ 
function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}

/*
    clean separate function .reduce() with dynamic .charCodeAt() that returns the sum value of a word of chars  using a .reduce() to compare  
    the second fn uses .reduce() and the first fn to find the highest value word without using Math.max(...array)
*/ 
function high(x){
  const score = s => s.split('').reduce((m,i) => m + i.charCodeAt(0)-96,0);
  return x.split(' ').reduce((s,n)=> score(s) < score(n) ? n : s);
}

console.log(high('take me to semynak')) // 'semynak'