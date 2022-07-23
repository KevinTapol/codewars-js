// Parameters or Edge cases: examples lead to believe that the result shouldn't be less than zero so anything 0 or less return 0
// Return: an integer of required pages of product classmates*paperwork
// Examples: n= 5, m=5: 25
            //n=-5, m=5:  0
// Psuedo code: //multiply number of people by number of pages and return pages


//my answer
function paperwork(n, m) {
    let pages = n*m
  if(n <= 0 || m <= 0){
    return 0
  }else {
    return pages
  }
}

//best practices
function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
}

//arrow fn using Math.max
const paperwork = (n, m) => Math.max(0, n) * Math.max(0, m);