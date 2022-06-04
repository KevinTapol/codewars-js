// Parameters or Edge cases:
// Return:
// Examples:
// Psuedo code: create function with 3 paramters
                //take each paramter use .toString(16) to get hexidecimal value
                //then use .padStart(2,0) make sure any single values return a padding of 2 instead of 1
                //other methods .substr() .slice() .concat() .replace

//my answer
function colorOf(r,g,b){
  let hexR = r.toString(16).padStart(2,0)
  let hexG = g.toString(16).padStart(2,0)
  let hexB = b.toString(16).padStart(2,0)
  return '#'+hexR+hexG+hexB
}

//same answer but 1 line
function colorOf(r,g,b){
    //coding here
    return '#'+r.toString(16).padStart(2,0)+g.toString(16).padStart(2,0)+b.toString(16).padStart(2,0);
  }

//best practices 2 function
function colorOf(r,g,b)
{
   return "#" + toHex(r)+ toHex(g)+ toHex(b);  
}

function toHex(n)
{
  var result = n.toString(16);
  return result.length == 1 ? "0" + result : result;  
}

//someones answery using ternary
function colorOf(r,g,b){
    r.toString(16).length < 2 ? r = '0' + r.toString(16) : r = r.toString(16);
    g.toString(16).length < 2 ? g = '0' + g.toString(16) : g = g.toString(16);
    b.toString(16).length < 2 ? b = '0' + b.toString(16) : b = b.toString(16);
    
    return '#' + r + g + b;
  }

//interesting use of inputs as array elements
const colorOf=(r,g,b)=>'#'+[r,g,b].map(a=>a.toString(16).padStart(2,'0')).join('')