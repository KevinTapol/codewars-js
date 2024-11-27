/*
Highest Rank Number in an Array

Parameters or Edge Cases:
    inputs will be an array of numbers
    arrays will never be empty

Return:
    return a number that occurs the most frequently from the input array and if there is a tie then return the highest value of the numbers

Examples:
    [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
    [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
    [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

Pseudocode:
    declare an empty array result to push objects to
        if the current element does not exist push it to result and set the value to 1
        else add 1 to the value
    iterate through the array of objects and find the highest value
    if there are more than one then return the highest key of the highest values
*/

// My Answer
function highestRank(arr){
    const counts = arr.reduce((result, key) => {
        result[key] ? result[key]++ : result[key] = 1
        return result
      }, {})
    const sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1])
    let fArr = sortedCounts.filter(e => e[1] === sortedCounts[0][1])
    let answer = fArr.sort((a, b) => Number(b[0]) - Number(a[0]))
    return Number(answer[0][0])
}

// My Answer using objects refactored to Math.max() for the final return of the element instead of sorting and returning the first element
function highestRank(arr){
    const counts = arr.reduce((result, key) => {
        result[key] ? result[key]++ : result[key] = 1
        return result
      }, {})
    const sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1])
    let fArr = sortedCounts.filter(e => e[1] === sortedCounts[0][1])
    let answer = fArr.map(e => Number(e[0]))
    return Math.max(...answer)
}

// My Answer using objects refactored
function highestRank(arr){
    const counts = arr.reduce((result, key) => { result[key] ? result[key]++ : result[key] = 1; return result}, {})
    const sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1])
    return Math.max(...sortedCounts.filter(e => e[1] === sortedCounts[0][1]).map(e => Number(e[0])))
}

// My Answer using a matrix 2D array instead of an object and using .find() to check if the element exists and if not then create a 1D array of the element and 1 for the count else if the element does exists using the .find() method then increment the element and index 1 of the element by 1
function highestRank(arr){
    const counts = arr.reduce((result, key) => {
        const pair = result.find(([k]) => k === key)
        if (pair) {
            pair[1]++
        } else {
            result.push([key, 1])
        }
        return result
    }, [])
    const sortedCounts = counts.sort((a, b) => b[1] - a[1])
    return Math.max(...sortedCounts.filter(e => e[1] === sortedCounts[0][1]).map(e => Number(e[0])))
}

// My Answer matrix refactored ternary
function highestRank(arr){
    const counts = arr.reduce((result, key) => {
        const pair = result.find(([k]) => k === key)
        pair ? pair[1]++ : result.push([key, 1])
        return result
    }, [])
    const sortedCounts = counts.sort((a, b) => b[1] - a[1])
    return Math.max(...sortedCounts.filter(e => e[1] === sortedCounts[0][1]).map(e => Number(e[0])))
}

// My Answer matrix refactored one line .reduce()
function highestRank(arr){
    const counts = arr.reduce((result, key) => { const pair = result.find(([k]) => k === key); pair ? pair[1]++ : result.push([key, 1]); return result }, [])
    const sortedCounts = counts.sort((a, b) => b[1] - a[1])
    return Math.max(...sortedCounts.filter(e => e[1] === sortedCounts[0][1]).map(e => Number(e[0])))
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])) // 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])) // 12

// Best Practices
// creating an object of several key value pairs, setting the value to 0, using .forEach, using Object.keys() to create an array of the keys, grabbing the highest key and returning the key using parseInt() instead of Number()
function highestRank(arr){
    var obj = {};
    arr.forEach(function(elem){
       if(obj[elem] === undefined)
         obj[elem] = 0;
       obj[elem]++;
    });
    var keys = Object.keys(obj), highest = 0, key;
    keys.forEach(function(elem){
       if(obj[elem] >= highest){
          highest = obj[elem];
          key = elem;
       }
    })
    return parseInt(key);
}

// Most Clever
// one liner sorting the input by a filtered version of the input array in descending order and returning the first element
const highestRank = arr => arr.sort((a, b) => arr.filter(val => val === b).length - arr.filter(val => val === a).length || b - a)[0];

// a refactored version of Most Clever pulling out .filter()
function highestRank(arr) {
    var getNum = num => arr.filter(n => n === num).length;
    return arr.sort((a,b) => getNum(b) - getNum(a) || b - a)[0];
}

// similar to Best practices in creating a single object of multiple pairs of elements and their count but using .reduce() to grab the highest key and using + to convert from string to number instead of parseInt() or Number()
const highestRank = arr => {
    let nums = {};
    arr.forEach(el => {
        nums[el] ? nums[el]++ : nums[el] = 1
    })   
    return +Object.keys(nums).reduce((a, b) => nums[a] > nums[b] ? a : b);
}

// one liner .reduce() using destructuring and using .pop() to return the answer
const highestRank = arr => arr.reduce(({ counts, ...acc }, cur) => {
    const count = (acc[cur] || 0) + 1;
    counts[count] = Math.max(cur, counts[count] || 0);
    return { ...acc, [cur]: count, counts  };
  }, { counts: [0] }).counts.pop();

// using .reduce() to set up an object of multiple key value pairs then a for loop to iterate through with Math.max() to grab the most frequently repeated key and converting it into a number from string with +
const highestRank = arr => {
    const counts = arr.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})
    
    let max = 0
    let num = 0
    
    for(const k in counts){
      if(counts[k] >= max){
        max = counts[k]
        num = Math.max(+k, num)
      }
    }
    
    return num
}