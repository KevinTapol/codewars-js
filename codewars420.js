/*
Slaphead

Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"



Parameters or Edge Cases:
    inputs will be a string containing either - or /

Return:
    return an array where the first element is the length of the input string filled with only '-' chars and the second element is the string related to the number of '/' in the input string

Examples:
    '/---------' --> ['----------', 'Unicorn!']
    '/-----/-' --> ['--------', 'Homer!']
    '--/--/---/-/---' --> ['---------------', 'Careless!']

Pseudocode:
    create an array named key where each index represents the count of '/' chars and the element is the string return of the integer index
    declare an integer count and set it equal to 0
    declare an array result with the first element being a string of '-' chars with the length of the input array
    iterate through the input array and for every element that is equal to '/' add 1 to the variable count
    if count is greater than 5 then push "Hobo!" to result else push the element at the index of key equal to count to result
    return result

*/

// My Answer Brute force for loop using array methods instead of string methods
function bald(x){
    const key = ["Clean!", "Unicorn!", "Homer!", "Careless!", "Careless!", "Careless!"]
    let result = [Array.from({length: x.length}, e => e = '-').join('')]
    let count = x.split('').filter(e => e === '/').length 
    if(count > 5){
        result.push("Hobo!")
    } else{
        result.push(key[count])
    }
    return result
}
console.log(bald('/---------')) //

// Best Practices
// switch case with regex
function bald(x) {
    const count = x.split('/').length - 1;
    let look;
    switch (count) {
      case 0: look = 'Clean'; break;
      case 1: look = 'Unicorn'; break;
      case 2: look = 'Homer'; break;
      case 3:
      case 4:
      case 5: look = 'Careless'; break;
      default: look = 'Hobo';
    }
    return [x.replace(/\//g, '-'), look + '!'];
}

// Most Clever using array methods and a declared array
const bald=x=>[(y=x.split("/")).join("-"),["Clean!","Unicorn!","Homer!","Careless!","Careless!","Careless!"][y.length-1]||"Hobo!"]

// Using .repeat() instead of array methods to create the 1st element in the returned array
const bald = function(x){
    return ['-'.repeat(x.length), 
            {0:'Clean!', 1:'Unicorn!',2:'Homer!', 3:'Careless!', 
             4:'Careless!', 5:'Careless!'}[x.replace(/-/g, '').length] || 'Hobo!']
  }

// clean arrow fn using greater than conditionals
const bald = (x, hair = x.replace(/-/g, '').length ) =>
    [ x.replace(/\//g, '-'), 
     hair < 1 ? "Clean!": 
     hair < 2 ? "Unicorn!" : 
     hair < 3 ? "Homer!" : 
     hair < 6 ? "Careless!" : "Hobo!" ]

// clever to use .match() with regex to create an array
function bald(x){
    let hairStr = ['Clean!', 'Unicorn!', 'Homer!', 'Careless!', 'Careless!', 'Careless!', 'Hobo!']  
    let hairCount = (x.match(/\//g) || []).length
    
    return [x.replace(/\//g, '-'), hairCount > 5 ? hairStr[6] : hairStr[hairCount]]
}