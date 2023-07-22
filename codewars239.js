// Sorted? yes? no? how?
/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/ 

// Parameters or Edge Cases:
/*
    inputs will be an array of positive or negative integers
    inputs will always be valid
*/ 

// Return:
/*
    string 'yes, ascending' if the input array elements are sorted min to max, 'yes, descending' if sorted max to min else no
*/ 

// Examples:
/* 
    [1, 2] => 'yes, ascending' 
    [15, 7, 3, -8] => 'yes, descending'          
    [4, 2, 30] => 'no'        
*/ 

// Pseudocode:
/*
    // declare a variable named asc_count to count the number of times the input array and sorted min to max array indexes have the same elements and set it equal to 0
    // declare a variable named asc_count to count the number of times the input array and sorted max to min array indexes have the same elements and set it equal to 0
    // create a copy of the input array named asc and sort it from min to max
    // create a copy of the input array named des and sort it from max to min
    // iterate through the input array comparing each index to asc and des
    // if the current element is equal to asc add 1 to asc_count
    // if the current element is equal to dex add 1 to des_count
    // if every index of asc is equal to the input array return 'yes, ascending'
    // if every index of des is equal to the input array return 'yes, descending'
    // else return 'no'
*/ 

// my answer
function isSortedAndHow(array) {
    // declare a variable named asc_count to count the number of times the input array and sorted min to max array indexes have the same elements and set it equal to 0
    let asc_count = 0
    // declare a variable named asc_count to count the number of times the input array and sorted max to min array indexes have the same elements and set it equal to 0
    let des_count = 0
    // create a copy of the input array named asc and sort it from min to max
    let asc = array.slice().sort((a,b)=>a-b)
    // create a copy of the input array named des and sort it from max to min
    let des = array.slice().sort((a,b)=>b-a)
    // iterate through the input array comparing each index to asc and des
    for (let i = 0; i < array.length; i++){
        // if the current element is equal to asc add 1 to asc_count
        if (array[i] === asc[i]) {
            asc_count += 1
        }
        // if the current element is equal to dex add 1 to des_count
        if (array[i] === des[i]) {
            des_count += 1
        }
    }
    // if every index of asc is equal to the input array return 'yes, ascending'
    if (asc_count == array.length){
        return 'yes, ascending'
    }
    // if every index of des is equal to the input array return 'yes, descending'
    if (des_count == array.length){
        return 'yes, descending'
    // else return 'no'
    } else {
        return 'no'
    }
}

// my answer comparing strings
function isSortedAndHow(array) {
    // create a copy of the input array named asc and sort it from min to max element value
    let asc = array.slice().sort((a,b)=>a-b)
    // create a copy of the input array named des and sort it from min to max element value
    let des = array.slice().sort((a,b)=>b-a)
    // if array asc converted to a string is equal to the input array converted to a string, return 'yes, ascending'
    if (asc.join('') == array.join('')){
        return 'yes, ascending'
    }
    // if array des converted to a string is equal to the input array converted to a sting, return 'yes, descending'
    if (des.join('') == array.join('')) {
        return 'yes, descending'
    // else return 'no'
    } else {
        return 'no'
    }
}

// my string answer refactored
function isSortedAndHow(array) {
    let asc = array.slice().sort((a,b)=>a-b)
    let des = array.slice().sort((a,b)=>b-a)
    return asc.join('') == array.join('') ? 'yes, ascending' : des.join('') == array.join('') ? 'yes, descending' : 'no'
}

// my string answer refactored arrow fn implicit return for Codewars only
const isSortedAndHow = (array) => array.slice().sort((a,b)=>a-b).join('') == array.join('') ? 'yes, ascending' : array.slice().sort((a,b)=>b-a).join('') == array.join('') ? 'yes, descending' : 'no'

console.log(isSortedAndHow([1, 2])) // 'yes, ascending'
console.log(isSortedAndHow([15, 7, 3, -8])) // 'yes, descending'
console.log(isSortedAndHow([4, 2, 30])) // 'no'

// best practices and most clever
// using array.every(function(currentValue, index, arr), thisValue)
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// NOTE The every() method does not change the original array!!!!
function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }

// using array.filter((e, i, arr) => )
const isSortedAndHow = array => {
    let ascending = array.filter((e, i, a) => e > a[i+1]).length == 0
    let descending = array.filter((e, i, a) => e < a[i+1]).length == 0
    
    return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
  }

// similar to my refactored string answer
// creating a copy of the input array converted to a string
// then using nested ternaries to compare sorting the array based on min to max or max to min
const isSortedAndHow = a => {
    const s = a.join``;
    return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
           s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
  }

// clean for loops and conditionals comparing elements at index locations
function isSortedAndHow(array){
	var ans;
	if (array[1] > array[0]){
		ans = "yes, ascending";
	}

	if (ans==="yes, ascending"){
			for (var i = 1; i<array.length; i++){
			if(array[i]>= array[i-1]){
				ans = "yes, ascending";
			} else return ans = "no";
		}
	}
	if (ans!=="yes, ascending"){
			for (var i = 1; i<array.length; i++){
			if(array[i]<= array[i-1]){
				ans = "yes, descending";
			} else return ans = "no";
		}		
	}
	return ans;
}

// switch case with JSON.stringify
function isSortedAndHow(array) {
    switch (JSON.stringify(array)) {
      case JSON.stringify(array.sort((a, b) => a - b)): return 'yes, ascending'; 
      case JSON.stringify(array.sort((a, b) => b - a)): return 'yes, descending'; 
      default: return 'no';
    }
  }