// Parameters or Edge cases: given an array with positive numbers and a non-negative number N
// Return: find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1
// Examples: array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
//           array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

//          (index([1, 2, 3, 4],2),9);
//          (index([1, 3, 10, 100],3),1000000);
//          (index([1, 2],3),-1);
//          (index([1,1,1,1,1,1,1,1,1,1], 9),1);
//          (index([1,1,1,1,1,1,1,1,1,2], 9),512);
//          (index([29,82,45,10], 3),1000);
//          (index([6,31], 3),-1);
//          (index([75,68,35,61,9,36,89,0,30], 10),-1);
// Psuedo code: take the value at array[n] and use Math.pow on the value to the power of n
//              one liner arrow fn and ternary

// my answer
function index(array, n){
    if(array.length <= n){
        return -1
    }else {
        return Math.pow(array[n], n)
    }
    
}

// my answer arrow fn ternary
const index = (array, n) => array.length <= n ? -1 : Math.pow(array[n], n)

// best practices  to funny same as my answer but reversed cases for ternary
const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;

// most clever
// if the first or statement is false such as array[n] doesn't exist then return -1
function index(array, n){
    return array[n] ** n || -1;
}

// for loop
function index(array, n){
    var p = array.length;
    if(n < p){
        for(i=0; i<p; i++){
            if(n == i){
                return Math.pow(array[i], n);
            }
        }
    }else{
        return -1;
    }
}

// arrow fn ternary truthy
index = (array, n) => array[n] ? Math.pow(array[n], n) : -1

// arrow fn ternary truthy but using in
// index in array? conditional for ternary truthy
const index = (ns, k) => k in ns ? ns[k] ** k : -1; 

// undefined index
function index(array, n){
    const newNum = array[n];
    if (array[n] === undefined) {
    return -1}; return Math.pow(newNum,n);
}