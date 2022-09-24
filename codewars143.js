// Parameters or Edge cases: Each array will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b.
// Return: You must find the difference of the cuboids' volumes regardless of which is bigger.
// Examples: ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20 -> return 8
//          describe("Tests", function(){
//              it("Basic tests", function(){
//                assert.strictEqual(findDifference([3, 2, 5], [1, 4, 4]), 14);
//                assert.strictEqual(findDifference([9, 7, 2], [5, 2, 2]), 106);
//                assert.strictEqual(findDifference([11, 2, 5], [1, 10, 8]), 30);
//                assert.strictEqual(findDifference([4, 4, 7], [3, 9, 3]), 31);
//                assert.strictEqual(findDifference([15, 20, 25], [10, 30, 25]), 0);
//              });
//            });
// Psuedo code:  take in each array and multiply their elements
//               compare the results to eachother and return the difference 
//               Sounds perfect for .reduce(acc*c) and Math.abs(productA - productB)

// my answer
function findDifference(a, b) {
    return Math.abs((a.reduce((acc,c) => acc*c)) - (b.reduce((acc,c) => acc*c))) 
}
console.log(findDifference([2, 2, 3], [5, 4, 1]))
console.log(findDifference([3, 2, 5], [1, 4, 4]))
console.log(findDifference([9, 7, 2], [5, 2, 2]))
console.log(findDifference([11, 2, 5], [1, 10, 8]))
console.log(findDifference([4, 4, 7], [3, 9, 3]))
console.log(findDifference([15, 20, 25], [10, 30, 25]))

// might as well arrow fn it to one line with implicit return
const findDifference = (a, b) => Math.abs((a.reduce((acc,c) => acc*c)) - (b.reduce((acc,c) => acc*c)))

// best practices
// same as my first answer but differenct variable names to explain how .reduce() works
function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}

// most clever
// parameters stated the arrays will always have 3 elements which is why this works
function find_difference([a,b,c], [d,e,f]) {
    return Math.abs(a*b*c-d*e*f)
}

// calling the elements by index still based on 3 element array
function find_difference(a, b) {
    return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
}

// creating a reduce function calculating volume then calling that function in another function to compare the array volumes
function volume(c) {
    return c.reduce((x, y) => x * y);
}

function find_difference(a, b) {
    return Math.abs(volume(a) - volume(b));
}

// same as above but using arrow fn
const times = (a, b) => a * b;

const find_difference = (a, b) => Math.abs(a.reduce(times) - b.reduce(times));

// for loop
function findDifference(a, b) {
    let product1=1,product2=1;
    for(let i in a){product1*=a[i]}
    for(let j in b){product2*=b[j]}
    return Math.abs(product1-product2);
}

// for loop without Math.abs()
function findDifference(a, b) {
    let res = 0;
    let a1 = 1;
    let b1 = 1;
    for (let i = 0; i < a.length; i++){
      a1 *= a[i];
    }
    for (let i = 0; i < b.length; i++){
      b1 *= b[i];
    }
    if(a1 > b1){ res = a1 - b1;}
    else {res = b1 - a1;}
    return res;
}

// using spread to iterate through each element .map()to create an array with a ternary of whatever array volume is greater  
function findDifference(a, b) {
    return [...arguments].map(e => e.reduce((x,y)=>x*y)).reduce((a,b)=> a > b ? a - b : b - a)
}