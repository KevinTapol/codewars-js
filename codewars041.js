// Parameters or Edge cases: The size will always be positive and will only use whole numbers.
// Return: a string of alternating '1s' and '0s'
// Examples: write me a function stringy that takes a size 
        //the string should start with a 1.
        //a string with size 6 should return :'101010'.
        //with size 4 should return : '1010'.
        //with size 12 should return : '101010101010'.
// Psuedo code: declare string '1'
                //for loop i < size
                //math.random() if output < 0.5 .concat('0') else .concat('1')

//my answer                
function stringy(size) {
  let string = "1";
  for (let i = 0; i < size-1; i++) {
    if(i % 2 === 0){
      string = string + "0";
    }else{
      string = string + "1";
    }  
  }
  return string;
}

//best practices
function stringy(size) {
    var str='';
    for( var i=1; i<=size; i++ )
      str+=i%2;
    return str;
}

//interesting 1 line code
const stringy = x => ''.padStart(x,'10');

//another interesting 1 line code
const stringy = size => "10".repeat(size).slice(0,size);