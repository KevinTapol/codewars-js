// Parameters or Edge cases: The input string can be of arbitrary length - in particular, it may be empty. 
//                           All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
// Return: a string conversion from DNA into RNA
// Examples: "GCAT"  =>  "GCAU"
// Psuedo code: use .replace() on the input string where T is and replace with U return the string

// my answer and best practices
function DNAtoRNA(dna) {
    return dna.replace(/T/g,'U')
}

//most clever using .split() to convert to array of elements and remove "T" then using .join() to convert back into a string joining the array elements on "U" often used for spaces .split(" ") and .join(" ")
function DNAtoRNA(dna) {
    return dna.split("T").join("U");
}