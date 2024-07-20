/*
Numbers to Letters

Parameters or Edge Cases:
    all inputs will be integers represented as string  with the given values
    'a' = '26' to 'z' = '1'
    '!' = '27'
    '?' = '28'
    ' ' = '29'

Return:
    return the string representation of an array of string integers concatenated 

Examples:
    ['24', '12', '23', '22', '4', '26', '9', '8'] --> 'codewars'
    ['25','7','8','4','14','23','8','25','23','29','16','16','4'] --> 'btswmdsbd kkw' 
    ['4', '24'] --> 'wc'

Pseudocode:
    declare an array using the indexes 1 to 29 where the elements are z to a and the extra characters
    create a copy of the input array where the elements are converted over to integers calling the array index to return the elements
    concatenate the array into a single string and return it 
*/

// My Answer
function switcher(x){
    const alpha = [null, 'z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a','!','?',' ']
    return x.map((e) => alpha[Number(e)]).join('')
}

// My Answer array as default param One liner arrow fn
const switcher = (x, a =[null, 'z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a','!','?',' ']) => x.map((e) => a[Number(e)]).join('')

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])) // 'codewars'

// Best Practices
// IDK why I didn't think of using a declared string instead of an array. The logic is the same.
const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher = x => x.map(item => alpha[item]).join('')

// Most Clever
// using .reduce() with the declared string where acc or accumulatedValue is a and c or currentElement is b with an empty string as default ""
const switcher=x=>x.reduce((a,b)=>a+" ?!abcdefghijklmnopqrstuvwxyz"[29-b],"")

// Same idea as most clever but going backwards
const switcher = x =>
    x.reduce((pre, val) => pre + `zyxwvutsrqponmlkjihgfedcba!? `[--val], ``);

// using .fromCharCode() instead of a declared string
function switcher(x)
{
  return x.map(a => 
    {
      if(a == 27) return "!";
      if(a == 28) return "?";
      if(a == 29) return " ";
      return String.fromCharCode(97 + 26 - parseInt(a));
      
    }).join('');
}

// switch cases instead of if else
function switcher(x){
    return x
    .map(x => {
      x = parseInt(x)
      switch(x){
          case 27: return '!'
          case 28: return '?'
          case 29: return ' '
          default: return String.fromCharCode(26-x+97)        
      }
    })
    .join('')
  }

// declaring an object for special characters, using .fromCharCode() with .reduce()
function switcher(arr) {
    let signs = { '27': '!', '28': '?', '29': ' ' };
    return arr.reduce((res, c) => res + (c >= 27 ? signs[c] : String.fromCharCode(123 - (+c))), '');
}