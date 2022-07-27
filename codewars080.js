// Parameters or Edge cases: debug code
// Return: debug and return greeting statment for special user
// Examples:
// Psuedo code:

//my answer - solution close as possible to original code otherwise I would have used ternary
function greet(name){
    if(name === "Johnny"){
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }
}

//my 2nd answer but this deviates from the original code
function greet(name){
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
  }