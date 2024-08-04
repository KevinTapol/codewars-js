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
    create an array of all the values of the input object
    iterate through the array and create a shallow copy where each element type is string or the element type is an array that includes type string 
    return the length of the new array

*/

// My Answer
function strCount(obj){
    return Object.values(obj).filter((e) => typeof(e) === 'string' || (Array.isArray(e) && e.flat(Infinity).filter((el) => typeof(el) === 'string'))).length
}

// console.log(strCount({
//     first: "1",
//     second: "2",
//     third: false,
//     fourth: ["anytime",2,3,4],
//     fifth:  null
//   })) // 3

console.log(strCount({
    first: '1',
    second: '2',
    third: false,
    fourth: [ 'anytime', 2, 3, 4 ],
    fifth: null,
    sixth: undefined,
    seventh: {}
  }))

  function strCount(obj){
    let result = Object.values(obj).flat().filter((e)=> typeof(e) === 'string')
    console.log(obj)
    console.log(' ')
    if(typeof(obj) != 'object'){
        console.log('input is an object')
    }else {
    return result.length
    }
}

function strCount(obj){
    if(typeof(obj) === 'object'){
        return Object.values(obj).flat().filter((e) => typeof(e) === 'string').length
    }if (Array.isArray(obj)){
        console.log('input is an array')
    }
}