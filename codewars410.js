/*
Extra Perfect Numbers (Special Numbers Series #7)

Parameters or Edge Cases:
    inputs will be integers

Return:
    return an array from 1 to the input integer of odd integers

Examples:
    3 --> [1,3]
    5 --> [1,3,5]
    7 --> [1,3,5,7]
    28 --> [1,3,5,7,9,11,13,15,17,19,21,23,25,27]
    39 --> [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]

Pseudocode:
    declare an empty array named answer
    iterate from 1 to the input integer and if the current element is odd then push it to answer
    return the array answer

*/

// My Answer Brute Force for loop
function extraPerfect(n){
    let answer = []
    for(let i = 1; i <= n; i++){
        if(i % 2 != 0){
            answer.push(i)
        }
    }return answer
}

// My Answer using array methods and Most Clever
function extraPerfect(n){
    return Array.from({length: n}, (el, i) => i + 1).filter(e => e % 2 != 0)
}

console.log(extraPerfect(7)) // [1,3,5,7]

// Best Practices
// incrementing by 2 to avoid evens instead of using modulus
function extraPerfect(n){
    result=[];
    for (i=1;i<=n;i=i+2) {
      result.push(i);
    }
    return result;
}

// IMO Most Clever because it removes the need for .filter()
const extraPerfect = n => Array.from({length:(n+1)/2}, (_,i) => 2*i+1)

// Instead of using Array.from() they use a spread operator 
const extraPerfect = n => [...Array(n + 1).keys()].filter(cur => cur % 2)

// do while loop
function extraPerfect(n){
    let arr = []
    let i = 0;
    do { 
      i++;
      if (i % 2 != 0) { 
        arr.push(i);
    }  
    } while (i < n);
    return arr;
}

// for loop starting at 0 to use the 2*i + 1
function extraPerfect(n){
    const result = []
    for(let i = 0; i < Math.ceil(n /2); i++) {
      result.push(1 + 2 * i)   
    }
    
    return result
}

// Clever to get .reduce() to work by setting a default value of [1]
const extraPerfect = (n) =>
	[...Array(Math.round(n / 2))].reduce(
		(acc) => {
			const lastNumber = acc[acc.length - 1];
			if (lastNumber + 2 <= n) {
				acc = acc.concat(lastNumber + 2);
			}
			return acc;
		},
		[1]
	);

// while loop
function extraPerfect(n){
    let i = 1;
    let arr = []
    while (i <= n) {
      arr.push(i);
      i += 2;    
    }
    return arr;
  }