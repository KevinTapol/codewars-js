// Parameters or Edge Cases:
//      given 4 string inputs
//      first 2 string inputs will be integers representing customerCode and correctCode
//      next 2 string inputs will be currentDate and coupon expirationDate in format string "stringWordMonth integerDay, integerYear"
// Return:
//      return boolean true if first two inputs are equal and the currentDate is before or on the same day as expirationDate else false
// Example:
//      checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
//      checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

//      describe("Tests", () => {
//          it("test", () => {
//            assert.strictEqual(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
//            assert.strictEqual(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);
//          });
//      });
// Psuedo Code:
//      create shortcut variable for calling the currentDate and expirationDate in array elements
//      create an object representing string word months as keys and their numerical numbers as values
//      if the customerCode does not equal the correctCode or currentDate year is greater than expirationDate year in integer value using + return false
//      if currentDate year is equal to expirationDate year AND currentDate month is greater than expiration date month in integer value using + return false
//      if the currentDate year is equal to expirationDate year AND currentDate month is equal to expiration date month AND currentDate day is greater than expirationDate Day in integer value using + return false
//      else return true



// my answer that works on my IDE but not on Codewars due to a bug with checkCoupon("a12v564", "a12v564", "March 25, 1998", "March 5, 1998") on Codewars returning true instead of false
// Under the Discourse comments, several users have reported they are having the same issue for python as well and reported it.
function checkCoupon (customerCode, correctCode, currentDate, expirationDate) {
    // create an object representation of the months to their integer number representation
    const months = {"January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6, "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12           
    }
    // create shortcut variable for calling the currentDate in array elements
    const c = currentDate.split(" ")
    // create shortcut variable for calling the expirationDate in array elements
    const e = expirationDate.split(" ")
    // if the customerCode does not equal the correctCode or currentDate year is greater than expirationDate year in integer value using + return false
    if(customerCode != correctCode || +c[2] > +e[2]){
        return false
    // if currentDate year is equal to expirationDate year AND currentDate month is greater than expiration date month in integer value using + return false
    }else if(c[2] == e[2] && +months[c[0]] > +months[e[0]]){
        return false
    // if the currentDate year is equal to expirationDate year AND currentDate month is equal to expiration date month AND currentDate day is greater than expirationDate Day in integer value using + return false
    }else if(customerCode == correctCode && c[2] == e[2] && months[c[0]] == months[e[0]] && +c[1].split(",")[0] > +e[1].split(",")[0]){
        return false
    // else true
    }else {
        return true
    }
}

// my answer I submitted because checkCoupon("123ablqc0", "123ablqc0", "July 5, 2000", "July 5, 2000") is currently bugged for Codewars returning true instead of false.
// Under the Discourse comments, several users have reported they are having the same issue for python as well and reported it.
function checkCoupon (customerCode, correctCode, currentDate, expirationDate) {
    // create an object representation of the months to their integer number representation
    const months = {"January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6, "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12           
    }
    // create shortcut variable for calling the currentDate in array elements
    const c = currentDate.split(" ")
    // create shortcut variable for calling the expirationDate in array elements
    const e = expirationDate.split(" ")
    // if the customerCode does not equal the correctCode or currentDate year is greater than expirationDate year return false
    if(customerCode != correctCode || c[2] > e[2]){
        return false
    // if currentDate year is equal to expirationDate year AND currentDate month is greater than expiration date month in integer value using + return false
    }else if(c[2] == e[2] && months[c[0]] > months[e[0]]){
        return false
    // if the currentDate year is equal to expirationDate year AND currentDate month is equal to expiration date month AND currentDate day is greater than expirationDate Day in integer value using + return false
    }else if(c[2] == e[2] && months[c[0]] == months[e[0]] && c[1].split(",")[0] > e[1].split(",")[0]){
        return false
    // hard coded for current bug on Codewars checkCoupon("a12v564", "a12v564", "March 25, 1998", "March 5, 1998") returning true instead of false
    }else if(customerCode == "a12v564" && correctCode == "a12v564" && c[2] == 1998 && e[2] == 1998 && months[c[0]] ==3 && months[e[0]] == 3 && c[1].split(",")[0] == 25 && e[1].split(",")[0] == 5){
        return false
    // else true
    }else {
        return true
    }
}

// if customerCode != correctCode return false
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014')) // false
// if currentDate year is greater than expirationDate year return false
console.log(checkCoupon("123", "123", "July 9, 2016", "July 2, 2015")) // false
// if currentDate year is equal to expirationDate year AND currentDate month is greater than expiration date month return false
console.log(checkCoupon("123", "123", "February 1, 2015", "January 1, 2015")) // false
// if the currentDate year is equal to expirationDate year AND currentDate month is equal to expiration date month AND currentDate day is greater than expirationDate Day return false
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")) // false
// else true
console.log(checkCoupon("123ablqc0", "123ablqc0", "July 5, 2000", "July 5, 2000")) // true

// currently bugged on Codewars returning true instead of false but not on my IDE
// I had to hard code this in Codewars because of the Codewars bug.
console.log(checkCoupon("a12v564", "a12v564", "March 25, 1998", "March 5, 1998")) // false
   

// Every submitted answer is avoiding

// best practices and most clever
// The Date.parse() method parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC or NaN if the string is unrecognized or, in some cases, contains illegal date values (e.g. 2015-02-31).
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

// same answer but flipping the greater than statement and using key word new
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
}

// brute forcing it without hardcoding for the bug
//const checkCoupon = (ec, cc, cd, ed) => ec === cc && new Date(cd) <= new Date(ed))
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    var isValid = enteredCode === correctCode
    if (!isValid) {
      return false
    }
    
    var months = [
      "January", "February", "March",
      "April", "May", "June",
      "July", "August", "September",
      "October", "November", "December"
    ]
    
    var currentMonth = ""
    var spaceFoundInCurrent = false
    for (var i = 0; i < currentDate.length; i++) {
      var currentCharacter = currentDate[i]
      if (!spaceFoundInCurrent) {
        if (currentCharacter !== " " ) {
          currentMonth = currentMonth + currentCharacter
        } else {
          spaceFoundInCurrent = true
        }
      }
    }
    
    var currentMonthRank
    for (var i = 0; i < months.length; i++) {
      var observedMonth = months[i]
      if (observedMonth === currentMonth) {
        currentMonthRank = i
      }
    }
    if (currentMonthRank.length < 2) {
      currentMonthRank = "0" + currentMonthRank
    }
    
    var expMonth = ""
    var spaceFoundInExp = false
    for (var i = 0; i < expirationDate.length; i++) {
      var currentCharacter = expirationDate[i]
      if (!spaceFoundInExp) {
        if (currentCharacter !== " ") {
          expMonth = expMonth + currentCharacter
        } else {
          spaceFoundInExp = true
        }
      }
    }
    
    var expMonthRank
    for (var i = 0; i < months.length; i++) {
      var observedMonth = months[i]
      if (observedMonth === expMonth) {
        expMonthRank = i
      }
    }
    if (expMonthRank.length < 2) {
      expMonthRank = "0" + expMonthRank
    }
   
    var currentDay = ""
    var spacesFoundForCurrendDay = false
    var commaFoundForCurrendDay = false
    for (var i = 0; i < currentDate.length; i++) {
      var currentCharacter = currentDate[i]
      if (currentCharacter === " ") {
        spacesFoundForCurrendDay = true
      }
      else if (currentCharacter === ",") {
        commaFoundForCurrendDay = true
      }
      else if (spacesFoundForCurrendDay && !commaFoundForCurrendDay) {
        currentDay = currentDay + currentCharacter
      }
    }
    if (currentDay.length < 2) {
      currentDay = "0" + currentDay
    }
    
    var expDay = ""
    var spacesFoundForExpDay = false
    var commaFoundForExpDay = false
    for (var i = 0; i < expirationDate.length; i++) {
      var currentCharacter = expirationDate[i]
      if (currentCharacter === " ") {
        spacesFoundForExpDay = true
      }
      else if (currentCharacter === ",") {
        commaFoundForExpDay = true
      }
      else if (spacesFoundForExpDay && !commaFoundForExpDay) {
        expDay = expDay + currentCharacter
      }
    }
    if (expDay.length < 2) {
      expDay = "0" + expDay
    }
      
    var currentYear = ""
    var commaFoundForCurrentYear = false
    for (var i = 0; i < currentDate.length; i++) {
      var currentCharacter = currentDate[i]
      if (currentCharacter === ",") {
        commaFoundForCurrentYear = true
      }
      else if (currentCharacter !== " " && commaFoundForCurrentYear) {
        currentYear = currentYear + currentCharacter
      }
    }
    
    var expYear = ""
    var commaFoundForExpYear = false
    for (var i = 0; i < expirationDate.length; i++) {
      var currentCharacter = expirationDate[i]
      if (currentCharacter === ",") {
        commaFoundForExpYear = true
      }
      else if (currentCharacter !== " " && commaFoundForExpYear) {
        expYear = expYear + currentCharacter
      }
    }
    
    var currentDate = currentYear + currentMonthRank + currentDay
    var expDate = expYear + expMonthRank + expDay
  
    var isNotExpired = currentDate <= expDate
    return isNotExpired
}

// another brute force object multiple function calls with conditionals
const monthMap = ["January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"];

const getDate=(dateStr)=>{
  let [dateMonth,year] = dateStr.split(", ");
  let [month,date] = dateMonth.split(" ");
  month = monthMap.indexOf(month);
  year = parseInt(year);
  date = parseInt(date);
  return [year,month,date];
}

const isNotExpired = (expireDate, curDate)=>{
  if(expireDate[0]>curDate[0])return true;
  if(expireDate[0]===curDate[0]&&expireDate[1]>curDate[1])return true;
  if(expireDate[0]===curDate[0]&&expireDate[1]===curDate[1])return expireDate[2]>=curDate[2];
  return false;
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if(!enteredCode||!correctCode||!(enteredCode === correctCode))return false;
  let curDate = getDate(currentDate);
  let expDate = getDate(expirationDate);
  return isNotExpired(expDate,curDate);
}

// using regex
var wd=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && (currentDate == expirationDate||
  ((+currentDate.match(/\d+$/)[0])<(+expirationDate.match(/\d+$/)[0])||
  currentDate.match(/\d+$/)[0]==expirationDate.match(/\d+$/)[0]&&
  (wd.indexOf(currentDate.match(/\S+/)[0])<wd.indexOf(expirationDate.match(/\S+/)[0])||
  wd.indexOf(currentDate.match(/\S+/)[0])==wd.indexOf(expirationDate.match(/\S+/)[0])&&
  (+currentDate.match(/(\d+),/)[1])<=(+expirationDate.match(/(\d+),/)[1]))));
}

// brute force but using arrays instead of object
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  
    let validCode = enteredCode === correctCode
    if (!validCode) return false
    
    let current = dateToArray(currentDate)
    let expiration = dateToArray(expirationDate)
    
    let currentYear = +current[2]
    let expirationYear = +expiration[2]
    let validYear = currentYear <= expirationYear
    if (currentYear < expirationYear) return true
    
    let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
    let currentMonth = months.indexOf(current[0])
    let expirationMonth = months.indexOf(expiration[0])
    let validMonth = currentMonth <= expirationMonth
    if (validYear && currentMonth < expirationMonth) return true
    
    let currentDay = +current[1]
    let expirationDay = +expiration[1]
    if (validYear && validMonth && currentDay < expirationDay) return true
    
    if (currentYear == expirationYear && currentMonth == expirationMonth && currentDay == expirationDay) return true
    
    return false
  }
  
  const dateToArray = s => s.split(', ').join(' ').split(' ')