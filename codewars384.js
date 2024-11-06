/*
MinMaxMin: Bounded Nums

Parameters or Edge Cases:
    inputs will be an array of integers that may be positive or negative

Return:
    return an array from the input array where the min value is the first element, the max value is the third element and the second element value exists between the min and max, as close as possible to min and does not exist in the input array 

Examples:
    [-1, 4, 5, -23, 24] --> [-23, -22, 24]
    [1, 3, -3, -2, 8, -1] --> [-3, 0, 8]
    [2, -4, 8, -5, 9, 7] --> [-5, -3, 9]

Pseudocode:
    declare an empty array result
    find the min value from the input array and set it equal to the 0 index of the result
    find the max value from the input array and set it equal to the 2 index of the result
    create an array from the min value + 1 to the max value -1 and filter elements that do not exist in the input array
    set the first element from the created array to the 1 index of result
    return result
*/

// My Answer Brute force for loop
function minMinMax(array) {
    
    const min = Math.min(...array)
    const max = Math.max(...array)
    const result = [min, '', max]

    for(let i = min + 1; i < max; i++){
        if(!array.includes(i)){
            result[1] = i
            return result
        }
    }
}

console.log(minMinMax([-1, 4, 5, -23, 24])) // [-23, -22, 24]
console.log(minMinMax([1, 3, -3, -2, 8, -1])) // [-3, 0, 8]
console.log(minMinMax([2, -4, 8, -5, 9, 7])) // [-5, -3, 9]

// Best Practices and Most Clever
// using a while loop with the same conditional logic of my answer 
minMinMax=(array)=> {
    b = Math.min(...array)
    while (array.includes(b) == true){b += 1}
    return [Math.min(...array),b,Math.max(...array)]
}

// Clever but creating an entire array instead of finding the first occurrence of lowest value incremented from min that does not exist in input array 
const minMinMax = array =>
    ((min, max) => [min, min + [...Array(max - min)].findIndex((_, idx) => !array.includes(min + idx)), max])
    (Math.min(...array), Math.max(...array));

// using .find() to find the first occurrence IMO Most Clever
const minMinMax = a =>(b=> [b[0], b.find((e,i)=>b[i+1] > e+1)+1, b[b.length-1]])(a.sort((a,b)=>a-b)) 

// Very clean and easy to follow code
function minMinMax(arr) {
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    let ab = min + 1;
    while(arr.includes(ab)) ab++
    
    return [min,ab,max]
}