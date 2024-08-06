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

*/

// My Answer
function strCount(obj){
    let result = [];
    let arrOfVals = Object.values(obj);
    let flatArr = arrOfVals.flat(Infinity);

    for (let i = 0; i <= flatArr.length; i++){
        if (typeof flatArr[i] === "string") {
            result.push(flatArr[i]);

        } else if (typeof flatArr[i] === "object" && flatArr[i] !== null) {
            let newArr = Object.values(flatArr[i]);

            for (let j = 0; j <= newArr.length; j++) {
                if (typeof newArr[j] === "string") {
                    result.push(newArr[j]);
                } 
            }
        }
    }return result.length;
}

