// Parameters or Edge cases:
// Return: the century a year is
// Examples: 1705 --> 18
            //1900 --> 19
            //1601 --> 17
            //2000 --> 20
// Psuedo code: take input year 
                //divide by 100 
                //round up

//my answer
function century(year) {
  return Math.ceil(year/100);
}

//best practices and most clever (same as my answer but arrow function)
const century = year => Math.ceil(year/100)