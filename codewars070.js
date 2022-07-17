// Parameters or Edge cases: input is an array of of strings
// Return: a string "found the needle at position " plus the index it found the needle
// Examples: ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Psuedo code: iterate through the array with forEach(element, index) 
                //if(element = 'needle') return('message' + String(location))

//my answer
function findNeedle(haystack) {
    let response = null;
      const arr = haystack;
      arr.forEach((e, i) => {    
        if(e ==='needle') {
          response = 'found the needle at position ' + String(i);
        }
      });
      return response;
};

//best practices
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }