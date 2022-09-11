// Basic variable assignment
// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
// var a == "code";
// var b == "wa.rs";
// var name == a + b;

// Psuedo Code: This one also makes me feel unfulfilled. Single = is asigning a varialbe. Double == is asking if they are equal in value. Triple === is asking if they are equal in value and type. It may be time to go to the next kyu.

// my answer and best practices
var a = "code";
var b = "wa.rs";
var name = a + b;

// most clever
// looks like someone was bored
const name = [
    1100011,
    1101111,
    1100100,
    1100101,
    1110111,
    1100001,
    101110,
    1110010,
    1110011
    ]
    .map(x=>x+'')
    .map(x=>parseInt(x,2))
    .map(x=>String.fromCharCode(x))
    .join('')