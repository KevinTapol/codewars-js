
// Parameters or Edge Caes: input array of strings 'bad' and 'good'
// Return: if all strings are 'bad' return 'Fail!' 
//         if 1 or 2 strings are 'good' return 'Publish!' 
//         if more than 2 strings are 'good' return 'I smell a series!'
// Examples:
//          describe("Basic tests", () => {
//              it("Testing for fixed tests", () => {
//                assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
//                assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
//                assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
//              });
//            });
// Psuedo Code: take in the array and filter the array by elements === 'good'
//              take the new array length if 0 return 'Fail! 1 or 2 return 'Publish!' if > 2 return 'I smell a series!'

// my answer
function well(x){
    let newArr = x.filter(e => e === 'good')
    if(newArr.length === 0){
        return 'Fail!'
    } else if (newArr.length < 3){
        return 'Publish!'
    } else {
        return 'I smell a series!'
    }
}

// my answer one liner one arrow function and nested ternary oof
const well = (x) => {let y = x.filter(e => e === 'good').length; return y === 0 ? 'Fail!' : y < 3 ? 'Publish!' : 'I smell a series!'}

// best practices and most clever
// same as my above answer but spaced out
const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
           good_count < 3 ? 'Publish!' : 'I smell a series!';
}

// odd seeing a switch case as the 2nd best answer
function well(x) {
    switch (x.filter(i => i === 'good').length) {
      case 0:
        return 'Fail!'
      case 1:
      case 2:
        return 'Publish!'
      default:
        return 'I smell a series!'
    }
}

// interesting
// for loop declaring a count then calling the index of an array based on the count number
function well(x){
    let count = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i] === 'good') {
        count++;
        if (count == 3)
          break;
      }
    }
    return ['Fail!', 'Publish!', 'Publish!', 'I smell a series!'][count]
}
// for loop creating a count looping through and a ternary
function well(x) {
    var good = 0
    
    for (var i = 0; i < x.length; ++i)
      if (x[i] == 'good' && ++good > 2)
        return 'I smell a series!'
    
    return good ? 'Publish!' : 'Fail!'
  }

// using .includes()
const well = x => x.includes('good') ? x.filter(s => s == 'good').length < 3 ? 'Publish!' : 'I smell a series!' : 'Fail!';