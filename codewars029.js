// Parameters or Edge cases: str is a string c is a character
// Return: instructions said return the gap between the first position of c and the last position of c
        //test cases said return 1 solid interger for length of gap, 0 if character occurs only once, -1 if no character occurance
// Examples: firstToLast("ababc","a") should return 2(2-0) 
            //firstToLast("ababc","c") should return 0(4-4)
            //firstToLast("ababc","d") should return -1
// methods: if string doesn't exist all methods return -1
          //indexOf(element, index value then to right)  given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number. case sensitive returns -1
         
          //lastIndexOf(element, index value then to the left)  given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number. If 2nd parameter includes a position number it searches at that value or less than instead of full length of the array R to L
          
          //search(regexp) method executes a search for a match between a regular expression and this String object. regexp - regular expression object
          //const regex = /[^\w\s]/g; any character that is not a word character or whitespace 
          // /[A-Z]/g index of first capital letter
          // /[.]/g returns index of first .
// Psuedo code:


function firstToLast(str,c){
    let first = str.indexOf(c), last = str.lastIndexOf(c);
    return first == -1 ? -1 : last - first;
  }