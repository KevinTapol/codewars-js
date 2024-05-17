/*
Odd-Even String Sort

Parameters or Edge Cases:
    inputs will be a string of uppercase and lowercase letters
Return:
    a string of the odd index elements followed by a single whitespace and followed the whitespace with the even index elements
Examples:
    "CodeWars" --> "CdWr oeas"
    "YCOLUE'VREER" --> "YOU'RE CLEVER"   
Pseudocode:
    declare an empty string called odd
    declare an empty string called even
    iterate the length of the input string and for every odd index element, concat it to string odd and even index to string even
    return the string odd concatenated with whitespace and string odd
*/

// My Answer brute force for loop
function sortMyString(s) {
    let arr = s.split("")
    let odd = ""
    let even = ""
    for (let i = 0; i < arr.length; i++){
        if (i % 2 === 0) {
            even += arr[i]
        } else {
        odd += arr[i]
        }
    }
    return even + " " + odd;
}

// My answer using array methods
const sortMyString = (s, even = "", odd = "") => s.split("").map((e,i) => i % 2 == 0 ? even.concat(e) : odd.concat(e)).join("")

function sortMyString (s) {
    let even = []
    let odd = []
    s.split("").map((e,i) => i % 2 === 0 ? even.push(e) : odd.push(e)).join("")
    return even.join("") + " " + odd.join("")
}

// My answer one liner arrow fn
const sortMyString = (s) => s.split("").map((e,i) => i % 2 === 0 ? e : "").join("") + " " + s.split("").map((e,i) => i % 2 != 0 ? e : "").join("")

console.log(sortMyString("CodeWars")) // "CdWr oeas"
console.log(sortMyString("YCOLUE'VREER")) // "YOU'RE CLEVER"

