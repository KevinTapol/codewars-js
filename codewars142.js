// Parameters or Edge cases: input will be an array of 3 strings 
// Return: return an arrays in switching places of the first and last element in the array
// Examples: describe("Basic tests",() =>{
//              it("Testing for fixed tests", () => {
//    assert.deepEqual(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
//    assert.deepEqual(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
//    assert.deepEqual(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
//    assert.deepEqual(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
//    assert.deepEqual(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);
//  })
//})

// Psuedo code: reverse the array might as well arrow fn it too

// my answer and best practice 
function fixTheMeerkat(arr) {
    return arr.reverse()
}

// my answer arrow fn
const fixTheMeerkat = (arr) => arr.reverse()

// most clever
const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]

// using .shift() .unshift() .pop() and .push() array methods
function fixTheMeerkat(arr) {
    var end = arr.shift();
    var begin = arr.pop();
    arr.push(end);
    arr.unshift(begin);
    return arr;
}

// declare an empty array, loop through and push decrementing
function fixTheMeerkat(arr) {
    //your code here 
    var newarr=[];
    for(var i=arr.length-1;i>=0;i--)
    {
        newarr.push(arr[i]);
    }
    return newarr;
}