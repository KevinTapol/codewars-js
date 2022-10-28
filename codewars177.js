// Parameters or Edge Cases: 
//          inputs will always be in string format but can be floating numbers, negative values and letters
// Return:
//      boolean true if input string contains 4 or 6 positive integers else false
// Examples:
//      describe("validatePIN", function() {
//          it("should return False for pins with length other than 4 or 6", function() {
//            Test.assertEquals(validatePIN("1"),false, "Wrong output for '1'")
//            Test.assertEquals(validatePIN("12"),false, "Wrong output for '12'")
//            Test.assertEquals(validatePIN("123"),false, "Wrong output for '123'")
//            Test.assertEquals(validatePIN("12345"),false, "Wrong output for '12345'")
//            Test.assertEquals(validatePIN("1234567"),false, "Wrong output for '1234567'")
//            Test.assertEquals(validatePIN("-1234"),false, "Wrong output for '-1234'")
//            Test.assertEquals(validatePIN("1.234"),false, "Wrong output for '1.234'")
//            Test.assertEquals(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
//            Test.assertEquals(validatePIN("00000000"),false, "Wrong output for '00000000'")
//          });
//          
//          it("should return False for pins which contain characters other than digits", function() {
//            Test.assertEquals(validatePIN("a234"),false, "Wrong output for 'a234'")
//            Test.assertEquals(validatePIN(".234"),false, "Wrong output for '.234'")
//          });
//          
//          it("should return True for valid pins", function() {
//            Test.assertEquals(validatePIN("1234"),true, "Wrong output for '1234'");
//            Test.assertEquals(validatePIN("0000"),true, "Wrong output for '0000'");
//            Test.assertEquals(validatePIN("1111"),true, "Wrong output for '1111'");
//            Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
//            Test.assertEquals(validatePIN("098765"),true, "Wrong output for '098765'");
//            Test.assertEquals(validatePIN("000000"),true, "Wrong output for '000000'");
//            Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
//            Test.assertEquals(validatePIN("090909"),true, "Wrong output for '090909'");
//          });
//      });
// Psuedo Code: 
//      take in the string input and check if the length is not 4 or 6 return false 
//      loop through the string and check if each element is less than 0 or greater than 9 IN TYPE NOT VALUE!!
//      if yes return false else true

// my answer
function validatePIN (pin) {
    if(pin.length !== 4 && pin.length !== 6)
        return false
    for (let i = 0; i < pin.length; i++){
        if (pin[i] < '0' || pin[i] > '9')
            return false
    }return true
}

// best praciices and most clever
// using regex and .test()
// The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}

// using regex and .match()
function validatePIN (pin) {
  
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);
      
    if(isCorrectLength && hasOnlyNumbers){
      return true;
    }
    
    return false;
  
}

// for loop similar to mine but cleaner/refactored for loop condition with global variables
function validatePIN (pin) {
    //return true or false
    var n = pin.length;
    if( n != 4 && n != 6)
        return false;
    for (var i in pin)
        if (pin[i] > '9' || pin[i] < '0')
            return false;
    return true;
}

// using parseInt()
function validatePIN (pin) {
    pin = pin.split('')
   const findNaN = pin.find(character => !(parseInt(character) >= 0))
    if ((pin.length === 4 || pin.length === 6) && !findNaN) {
      return true
    } else {
      return false
    }
  
}

// arrow function .match() regex
const validatePIN = pin => !!pin.match(/^(\d{4}|\d{6})$/);

// reminds me a bit of polymorphism
function NaN(num)
{
  if (num == "\n" || num == "" || num != 0 && num != 1 && num != 2 && num != 3 && num != 4 && num != 5 && num != 6 && num != 7 && num != 8 && num != 9)
  {
    console.log(num);
    return true;
  }
}

function validatePIN (pin) {
  var digits = pin.split('');
  console.log(digits);
  for(var i = 0; i < digits.length; i++)
  {
    if (NaN(digits[i]))
      return false;
  }
  if (digits.length == 4 || digits.length == 6)
  return true;
    
  return false;
}

// .includes() and declared array of ints
function validatePIN (pin) {
    let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let count = 0;
    let pinArr = pin.split('');
    for (let i of pinArr) {
      if (num.includes(i)) {
        count += 1;
      } else {
        return false;
      }
    }
    return count == 4 || count == 6;
}

// isFinite() and parseInt()
// The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.
function validatePIN (pin) {
    for (let i of pin) {
        if (!isFinite(parseInt(i))) return false;
    }
    return pin.length === 4 || pin.length === 6;
}

// using Array.from()
function validatePIN (pin) {
    return Array.from(pin).every(c => c >= '0' && c <= '9') && [4, 6].includes(pin.length);
  }