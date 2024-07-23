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
    declare a global variable int named count and set it equal to 0
    iterate through the sorted array counting the number of elements summed while not exceeding the 2nd integer input adding 1 to count each time
    return the count
*/

// My Answer
function save(sizes, hd) {
    let count = 0
    let total = 0
    for(let i =0; i <= sizes.length; i++){
        total += sizes[i]
        if(total <= hd){
            count++   
        } else if (total > hd){
            return count
        }
    }return count
}

console.log(save([4,4,4,3,3], 12)) // 3

// Best Practices and Most Clever
// while loop manipulating input hd
function save(sizes, hd) {
    let i = -1;
    while (hd >=0) {
      hd -= sizes.shift();
      i++;
    }
    return i;
}

// IMO Most Clever to use .reduce({conditional},0) 
function save(sizes, hd) {
    let result = 0;
    sizes.reduce((acc, curr) => {
      if ((acc += curr) <= hd) result += 1;
      return acc;
    }, 0);
    return result;
  }

// Confusing at first glance but incredibly clever to create an array with the 2nd parameter including a spread operator and finally recursion
save=([a,...b],h)=>h-a>=0?1+save(b,h-a):0

// Very Clever creating a copy of the input array where each element has .reduce() applied to it with conditional <= hd and finally .filter().length
const save = ($, hd) => $.map((_, i)=> $.slice(0, i+1).reduce((a,b)=> a+b, 0) <= hd ).filter(el => el == true).length