/*
Mexican Wave

Parameters or Edge Cases:
    inputs will be strings containing lowercase chars
    inputs may be empty

Return:
    return an array containing each iteration of the input string capitalizing the current element and lowercase the rest skipping over whitespace and capitalize the next element but still including whitespace in the string to pushed in each iteration

Examples:
    "hello" --> ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

Pseudocode:
    create a empty array to push to named result
    if the current element is not a whitespace uppercase the current character lowercase the remaining chars and push it to result
    if the current element is a whitespace then skip to the next element
    return result 

*/

// My Answer brute force for loop checking for last element being a whitespace
function wave(str){
    let result = []
    for(let i = 0; i < str.length; i++){
        str.toLowerCase()
        if(str[i] === ' ' && i === str.length -1){
            return result
        }
        if(str[i] === ' '){
            i++
        }
        if(str[i] !== ' '){
        result.push(str.slice(0, i) + str.slice(i, i + 1).toUpperCase() + str.slice(i+1))
        }
    }
    return result
}

// My Answer brute force for loop refactored
function wave(str){
    let result = []
    for(let i = 0; i < str.length; i++){
        str.toLowerCase()
        if(str[i] === ' ' && i < str.length -1){
            i++
        } 
        if(str[i] !== ' ' ){
            result.push(str.slice(0, i) + str.slice(i, i + 1).toUpperCase() + str.slice(i+1))
        }
    }
    return result
}



console.log(wave("hello")) // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave("two words")) // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
console.log(wave(" gap ")) // [ ' Gap ', ' gAp ', ' gaP ' ]
console.log(wave(" more     gaps ")) // [' More     gaps ', ' mOre     gaps ', ' moRe     gaps ', ' morE     gaps ', ' more     Gaps ', ' more     gAps ', ' more     gaPs ', ' more     gapS ']

// Best Practices
// using .forEach() and regex
function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    return result;
}

// Most Clever
// using array methods to break each char including whitespace into their own index then create a shallow copy array altering only letters
var wave=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)

// making a local copy of the input into an array of each char, uppercase the single char, convert the array back into a string and push the result to a global array
function wave(str){
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
      let copy = str.split('');
      if(copy[i] !== ' ') {
      copy[i] = copy[i].toUpperCase()
      newArr.push(copy.join(''))
      }
    }
    return newArr
}

// using .reduce() with the spread operator on the array
const wave = str => str.split("").reduce((acc, val, i, [...arr]) => {
    if(val === " ") return acc;
    arr[i] = arr[i].toUpperCase();
    acc.push(arr.join(""));
    return acc;
  }, []);

// .reduce()
  function wave(str){
    return str.split('').reduce((p,c,i) => c !== ' ' ? (p.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1, str.length)), p) : p,[]);
  }

// clever Array.from() with regex on a null check then filtering out boolean values
const wave = s => Array.from( s, (_,i) => /\s/.test(s[i]) ? null : s.slice(0,i) + s[i].toUpperCase() + s.slice(i+1) ).filter(Boolean) ;

// using the array paramenter/argument inside .map(e, i, array)
function wave(str) {
    return str.split('').map((l, i, a) => {
      let c = a.slice();
      c[i] = c[i].toUpperCase();
      return c.join('');
    }).filter((w, i) => w[i] !== ' ');
}

// using .substring() 
function wave(s){
    // Code here
    let w=[]
    for(let i=0;i<s.length;i++){
      w.push(s.substring(0,i)+s.charAt(i).toUpperCase()+s.slice(i+1))
  
    }
    return w.filter(x=>x!=s);
}

// easily readable and using .charAt() instead of calling the element with [index]
function wave() {
    const str = wave.arguments[0].toLowerCase();
    const arr = [];
    for (let i = 0; i < str.length; i += 1) {
      if (str.charAt(i) !== ' ') {
        const cap = str.charAt(i).toUpperCase();
        const front = str.substr(0, i);
        const back = str.slice(i + 1);
        arr.push(front + cap + back);
      }
    }
    return arr;
}