let inputObject = {"Java": 10, "Ruby": 80, "Python": 65};

let keys = Object.keys(inputObject)
let values = Object.values(inputObject)

// create an array of elements where each element is a key value par of the input object
let twoDArray = Object.entries(inputObject);

// // sort the 2d array
// let result = twoDArray.sort((a, b) => b[1] - a[1])

// // grab only the key value pairs where the values are greater or equal to 60
// result = result.filter(e => e[1] >= 60)

// // convert the 2d array into an object of key value pairs
let resultObj = {}
// result.forEach(([key,value]) => {
//     resultObj[key] = value
// })
// console.log(twoDArray);

function dict_zip(arrayOfKeys, arrayOfValues) {
    return arrayOfKeys.reduce((obj, key, index) => {
      obj[key] = arrayOfValues[index];
      return obj;
    }, {});
}

const arrayOfKeys = ["Java", "Ruby", "Python"];
const arrayOfValues = [10, 80, 65];


  
const resultObject = dict_zip(arrayOfKeys, arrayOfValues);
console.log(resultObject);