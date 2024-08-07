/*
Count strings in objects

Parameters or Edge Cases:
    inputs will be objects

Return:
    return an integer representing the count of values that contain strings in the value of the key value pair
    the values may be arrays of mixed types with strings as elements and should be counted towards the integer return value

Examples:
    strCount({
      first: "1",
      second: "2",
      third: false,
      fourth: ["anytime",2,3,4],
      fifth:  null
    }) --> 3

Pseudocode
    declare an empty array result to push the string elements to
    create an array of all the input objects values using Object.values(inputObject)
    create another copy of that array but flatten the array to infinity making a single 1 dimensional array of elements
    iterate through the flattened array by index
        if the type of the current element value is a string then push it to the array named result
        if the current element value is an object and not null, undefined or empty then create a local array of the values of the current element value and iterate through the local current element value
            if the nested for loop element object value type is a string then push the current element to the global array result
    outside of both of the for loops return the length of the array of strings

*/

// My Answer
function strCount(obj){
    let arrOfStrings = [];
    let arrOfValues = Object.values(obj);
    let flatArr = arrOfValues.flat(Infinity);

    for (let i = 0; i <= flatArr.length; i++){
        if (typeof flatArr[i] === "string") {
            arrOfStrings.push(flatArr[i]);

        } else if (typeof flatArr[i] === "object" && flatArr[i] !== null) {
            let localArr = Object.values(flatArr[i]);

            for (let j = 0; j <= localArr.length; j++) {
                if (typeof localArr[j] === "string") {
                    arrOfStrings.push(localArr[j]);
                } 
            }
        }
    }return arrOfStrings.length;
}

// Best Practices and Most Clever
// using recursion for nested objects instead of infinitely flattened array of values
function strCount(obj){
    let count = 0;
    for (key in obj) {
      if (typeof obj[key] == 'string') count++;
      if (typeof obj[key] == 'object') count += strCount(obj[key]);
    }
    return count;
}

// one liner with recursion inside of .reduce()
const strCount = obj => typeof obj !== `string` ? Object.values(obj || {}).reduce((pre, val) => pre + strCount(val), 0) : 1;

// Very Clever to use JSON.stringify() for the object 
// IMO should be Most Clever and maybe even Best Practices
function strCount(obj){
    let temp = 0;
    JSON.stringify(obj,(key,value)=>{
        if (typeof value === 'string') {
            temp++
        }
        return value;
    })

    return temp
}