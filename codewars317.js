/*
Parameters or Edge Cases:
    1st input array length can be greater than or equal to 0 and less than or equal to 100
    2nd input integer can be greater than or equal to 0 and less than or equal to 500
    Do not expect any negative or invalid inputs.
Return:
    the most amount of elements including 0 from the input array that when summed are less than or equal to the 2nd input 

Examples:
    [4,4,4,3,3], 12 --> 3
    [4,4,4,3,3], 11 --> 2
    [12, 0, 0, 1], 12 --> 3

Pseudocode:
    sort the input array
    declare a global variable int named count and set it equal to 0
    iterate through the sorted array counting the number of elements summed while not exceeding the 2nd integer input adding 1 to count each time
    return the count
*/

// My Answer
function save(sizes, hd) {
    let count = 0
    let total = 0
    let arr = sizes.sort((a, b) => a - b)
    for(let i =0; i <= sizes.length; i++){
        // console.log(total)
        // console.log(sizes[i])
        total += sizes[i]
        if(total <= hd){
            count++   
        }
    }return count
}

console.log(save([4,4,4,3,3], 12)) // 3