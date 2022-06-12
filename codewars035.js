// Parameters or Edge cases:
// Return: true if string all caps false if not
// Examples: "c" -> False
        //"C" -> True
        //"hello I AM DONALD" -> False
        //"HELLO I AM DONALD" -> True
        //"ACSKLDFJSgSKLDFJSKLDFJ" -> False
        //"ACSKLDFJSGSKLDFJSKLDFJ" -> True
// Psuedo code: take input object string and compare to .toUppercase() in boolean if caps return true else false

//myanswer
String.prototype.isUpperCase = function(){
    if(this.toString() == this.toUpperCase()){
      return true;
    } else{
      return false;
    }
  }

//ternary
String.prototype.isUpperCase = function() {
    return this.toUpperCase() == this ? true : false
}

//best practices
String.prototype.isUpperCase=function() {return this==this.toUpperCase()}