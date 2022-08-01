// Parameters or Edge cases:
// Return:  an array of integers from n to 1 where n>0
// Examples: Example : n=5 --> [5,4,3,2,1]
// Psuedo code:

//my answer
const reverseSeq = n =>{
    let array = []
    for(let i = 1; i <= n; i++){
        array.push(i)
    }return array.reverse()
}

//best practices
const reverseSeq = n => {
    let arr = [];
      for (let i=n; i>0; i--) {
        arr.push(i);
        } return arr;
};

//most clever
const reverseSeq = length => Array.from({length}, () => length--)

//very close to most clever
const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
};