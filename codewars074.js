// Parameters or Edge cases: all values are integers do not mutate the input array list
// Return: an array of additive inverse of each element
// Examples: invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
            //invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
            //invert([]) == []
// Psuedo code: if array length is 0 return []
                //else map()through each element and multiply by -1 
                //return array

//my answer
function invert(array){
    if(array.length ===0){
        return []
    } else{
       return array.map(num => num * -1)
    }
}

//best practices
function invert(array) {
    return array.map( x => x === 0 ? x : -x);
}

//most clever
function invert(array) {
    return array.map(i => 0 - i);
}

//putting - infront of element using a for loop
function invert(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
      newArr.push(-array[i]);
    }
     return newArr;
}

//interesting using .map and ternary
const invert = a => a.map(x=>x!==0?-x:x)

//using ~
function invert(array) {
    return array.map(v => ~v+1);
}

//using ~~ with -element
invert=a=>a.map(n=>~~-n)