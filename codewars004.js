//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]


//Parameters or edge cases can't divide by 0
//Return element can evenly divide by index of that element
//Examples Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
//example 1 element/index 22/0 no -6/1 yes 32/2 yes 82/3 no 9/4 no 25/5 yes return answer [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
//Psuedo Code
// filter() out the values where the index can divide evenly into the element. When filter runs it grabs the element, the index and the array. I need the parameters element and index to check if it divides evenly. filter() returns an array. in example 1 the returned array will be [-6, 32, 25]

function isMultiple(arr){
    return arr.filter((e,i ) => e % i === 0 )
}
//I'm creating an array named arr and using the method .filter() I'm taking in only the element e and index i not array a or whatever I choose to declare the array as. E modulus i is checking to see if the element in index i can evenly divide element by index and returns 0 by value and type if it can. If the element cannot be divided by the index evenly then it is not included.