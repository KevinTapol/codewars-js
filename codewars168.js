// Parameters or Edge Cases: 
//      there will be no empty string
// Return:
//      the input string exchanging out 'A' for 'T', 'T' for 'A', 'C' for 'G' and 'G' for 'C' 
// Examples:
//      describe("Basic tests", () => {
//          it("Testing for fixed tests", () => {
//            assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
//            assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
//            assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")   
//          })
//      })
// Psuedo Code: 
//      use .split('') to convert the string to an array with each character in their own index
//      .map() to create a shallow copy of an array
//      use conditional statements to replace the characters to their respective characters
//      use .join('') to convert the array back into a string
//      return the string

// my answer 
function DNAStrand(dna){
    return dna.split('').map(e => e === 'A' ? 'T' : e === 'T' ? 'A' : e === 'C' ? 'G' : 'C').join('')
}

// my answer arrow fn
const DNAStrand = (dna) => dna.split('').map(e => e === 'A' ? 'T' : e === 'T' ? 'A' : e === 'C' ? 'G' : 'C').join('')
console.log(DNAStrand("AAAA"))
console.log(DNAStrand("ATTGC"))
console.log(DNAStrand("GTAT"))

// best practices and most clever
// using .replace() regex and object notation
function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}

// declaring an object and returning the value at index of input parameters key
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

// regex with .replace() object key value pair
let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

// clever way of using lowercase values with .replace() so that .replace() doesn't overwrite previous
// then capitalize the string
function DNAStrand(dna){
    return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}

// regex with replace string indexOf
const DNAStrand = dna => dna.replace(/./g, m => 'CGAT'['GCTA'.indexOf(m)]);

// regex .replace() with function instead of indexOf
function DNAStrand(dna){
    return dna.replace(/[ACGT]/g, function(l){ return pairs[l] });
  }
  
  var pairs = {
    A:'T',
    T:'A',
    G:'C',
    C:'G'
  };

// regex with or statements
function DNAStrand(dna){
    return dna.replace(/A|T|C|G/g,function(x){return {'A':'T','T':'A','C':'G','G':'C'}[x];});
  }

// for loop
function DNAStrand(dna){
    //your code here
    var result= "";
        for(var i =0; i<dna.length; i++) 
        {
          if (dna[i]==="A") 
         {
          result +="T";
         }
          else if (dna[i]==="T") 
         {
          result += "A";
          }
          else if (dna[i]==="C")
          {
          result +="G";
          }
          else if (dna[i]==="G")
          {
          result += "C";
          }
          else {
          result +=dna[i];
          }
       }
       return result;
}

// declaring the object inside the function
function DNAStrand(dna) {
    return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
}
