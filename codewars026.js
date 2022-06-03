// Parameters or Edge cases:
// Return: a string that has been split and merged with a separator
// Examples: splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
            //splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
            //splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
           //plitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"
// Psuedo code: create a function with 2 arguements string and separator 
            //.split(" ") searches for an empty space to use as a break point for the orginal string to create an array of each word of the string at its own index. Without the space in .split("")each character is an element in the array instead of each substring
            //.map to create a new array to use .split("") on every element creating a 2d array then .join(separator) to add the separator inbetween each element of the 2-d array. When .join(separator) is used it returns a string concatenating all the elements in the array returning a 1-d array 
            //.join(" ")is used on the .map() array of substrings to return a final string concatenated by a space

function splitAndMerge(string, separator) {
    return string.split(" ").map(word => word.split("").join(separator)).join(" ");
  }