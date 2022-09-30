// Parameters or Edge Cases: You will be given a list of strings. The returned value must be a string, and have "***" between each of its letters. You should not remove or add elements from/to the array.

// Return: Sort the list of strings alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// Examples:
//          describe("Basic tests",() =>{
//              it("Testing for fixed tests", () => {
//                  assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
//                  assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
//              });
//          });

// Psuedo Code: sort the array by first string element
//              .split('') to create a 2d array of each character as an element
//              .join('***') to return to string but with *** between each character per letter

// my answer, best practices and most clever
function twoSort(s) {
    return s.sort()[0].split('').join('***')
}

// my answer one liner arrow fn 
const twoSort = (s) => s.sort()[0].split('').join('***')

// using spread to iterate through the array
const twoSort = s => [...s.sort()[0]].join('***');

// for loop
function twoSort(s) {
    var last = s.sort()[0];
    var a = last[0];
    for(var i = 1; i < last.length; i++) {
        a += "***" + last[i];
    }
    return a;
}

// using a function inside .sort()
function twoSort(a){
    var s =''
    var a = a.sort(function (a,b) {
        if(a < b){return -1;}
        if(a > b) {return 1;}
        return 0;});
    var r = a[0];
    for(i=0;i<r.length-1;i++){s+=r[i]+'***';}
    return s +r[r.length-1];
}

// regex
function twoSort(q) {
    let a = q.sort(); 
    a = a[0].replace(/(.)(?=.{1,}$)/g, '$1***');
    return a;
}

// using spread .reduce() ternary
function twoSort(array) {
    return [...array.reduce((min, str) => min < str ? min : str)].join("***");
}

// using .shift()
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
function twoSort (strings) {
    return [...strings]
        .sort()
        .shift()
        .split("")
        .join("***")
}


// funny using .repeat() for the * 
const twoSort = s => s.sort()[0].split('').join('*'.repeat(3));

// using Array.from()
function twoSort(s) {
    let arr = s.sort();
    return Array.from(arr[0]).join('***');
}