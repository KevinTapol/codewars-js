// Parameters or Edge cases: check for bad values null/undefined
// Return: number of true in an array
// Examples: [true,  true,  true,  false,
            //true,  true,  true,  true ,
            //true,  false, true,  false,
            //true,  false, false, true ,
            //true,  true,  true,  true ,
            //false, false, true,  true]
            //The correct answer would be 17
// Psuedo code: .filter() the array then for true then .length the new array for how many

//my answer
function countSheeps(arrayOfSheep) {
   let arr = arrayOfSheep.filter((x) => x === true)
   return arr.length
  }

//best practices
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }

//interesting counting the booleans with .reduce() and a ternary
function countSheeps(arrayOfSheep) {
    var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
    return array;
  }