// Parameters or Edge Cases: 
//      inputs will be a string of characters capital and lowercase a-z
//      can have duplicate characters but treat them as their own index
// Return: 
//      the string separating each character by - and repeating the characters between the - by their index location +1 with the first instance of every character to capital then the reamining to lowercase
// Examples:
//      describe("accum",function() {
//          it("Basic tests",function() {    
//              Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
//              Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
//              Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
//              Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
//              Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
//      })})
// Psuedo Code: 
//      capitalize each element with .toUpperCase()
//      turn the string into an array using .split('') to put each character it their own element
//      use .map() to create a shallow copy array and concat the orginal array and repeat() each element by their index value but to lowercase
//      then use .join('-') to return the array to a string with - separating each element of characters

// my answer
function accum(s) {
	return s.toUpperCase().split('').map((e,i) => e.concat(e.toLowerCase().repeat(i))).join('-')
}

// my answer arrow function
const accum = (s) => s.toUpperCase().split('').map((e,i) => e.concat(e.toLowerCase().repeat(i))).join('-')

// best practices and most clever
// similar to mine but I used concat() and they used +
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

// used Array() instead of repeat()
function accum(s) {
    return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}

// for loop
// pushed the input element per index to a new array
// used + to concat an array to the array per element creating a 2d array or matrix but using .join() per element to lowercase to immediately return to a 1d array with the characters repeated to lowercase
// then used .join() again but with - to separate each element in the array back into a string with - between
function accum(str) {
    var letters = str.split('');
    var result = [];
    for (var i = 0; i < letters.length; i++) {
      result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }
    return result.join('-');
}

// using spread to iterate through each element [...s]
function accum (s) {
    return [...s].map((element, index) => {
      return element.toUpperCase() + element.toLowerCase().repeat(index);
    }).join('-');
}

// nested for loop with a ternary deep inside
function accum(str) {
    var res = [];
    for(var i = 0; i < str.length; i++) {
      var row = '';
      for(var j = 0; j < i + 1; j++) {
        row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();      
      }
      res.push(row);
    }
    return res.join('-');
}

// for loop using .charAt()
function accum(s) {
    var array = [];
    for (i = 0; i < (s.length); i++) {
      array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
    };
    return array.join("-");
}

// using Array.from(define length, what do per each element using arrow function)
const repeat = (s, n) => Array.from({length: n}, () => s).join("")
const accum = (s) => s.split("").map((c, i) => c.toUpperCase() + repeat(c.toLowerCase(), i)).join("-")

// using .reduce(previousValue, currentValue, currentIndex, array)
function accum(s) {
    return s.toUpperCase().split("").reduce((a,v,i) => a+"-"+v+v.toLowerCase().repeat(i))
}