// Parameters or Edge cases: will a always be less than b? will they always be positive integers?
// Return:  an array of all integers between the input parameters and the input parameters themselves
// Examples: a = 1 b = 4 --> [1, 2, 3, 4]
// describe("Basic tests", () => {
//     it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
//     it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
// });
// Psuedo code:  declare an emtpy array
//               for loop starting with a stop at b and increment by 1 and push that value to the array
//               return the array

// my answer also best practices
function between(a, b) {
    let arr = []
    for(let i = a; i <= b; i++) {
        arr.push(i)
    }return arr
}
console.log(between(1, 4))
console.log(between(-2, 2))

// most clever
// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// arrow fn does an implicit return create a new array with Array.from(new Array(elements), (index) => do stuff to the elements)
// defining the elements as b-a+1 and index as (x, i) => a + index so first value is a + 0
const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);


// using spread and .map() instead of Array.from()
const between = (a, b) => [...Array(b - a + 1)].map((_, idx) => idx + a);

// interesting using the inputs as start stop step in a for loop
function between(a, b) {
    var all = [];
    for(a;a<=b;a++){
        all.push(a);
    }
    return all;
} 

// changing inputs using Array.from but using the same formula other than {length:(b-a+1)}
function between(q, q2) {
    let a = Array.from({length:(q2-q+1)},(_,i)=>i+q);
    return a;
}

// same as above but using an arrow fn for the index part of Array.from(element, index)
function between(a, b) {
    return Array.from({ length: b - a + 1 }, () => a++)
}

// using .fill() and .map()
function between(a, b) {
    return Array(b - a + 1).fill(1).map((_, i) => a + i)
}

// elusive while loop
/*
1) Let A = 1 and B = 10
2) Determine which number is higher/lower
3) Push lower number to start of array
4) Add 1 to lower number until it's equal to the higher number
*/
function between(a, b) {  
    const betweenArray = []
    while (a <= b) {
        betweenArray.push(a);
        a++;
    } return betweenArray;
}

