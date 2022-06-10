// Parameters or Edge cases: string
// Return: reverse string
// Examples: 'world'  =>  'dlrow' 'word'   =>  'drow'
// Psuedo code: .split("") to turn it into an array .reverse() to reverse the array .join()to turn it back into a string
            //or .length

//my answer
function solution(str){
   let arr = str.split("")
   let revArr = arr.reverse()
   let revStr = revArr.join("")
   return revStr
}

//best practices
function solution(str){
    return str.split('').reverse().join('');  
  }

//best practices 1 liner
const solution = str => str.split('').reverse().join('');
  

//using .length
function solution(s){
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
  }