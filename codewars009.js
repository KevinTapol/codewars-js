//Given an array of integers your solution should find the smallest integer.
//You can assume, for the purpose of this kata, that the supplied array will not be empty.

//Parameters or Edge cases: array won't be empty
//Return: smallest value integer of a given array
//Examples:Given [34, 15, 88, 2] your solution will return 2 Given [34, -345, -1, 100] your solution will return -345
//Psuedo code: .sort() The static function Math.min() returns the lowest-valued number passed into it

//simplest MDN text book answer Math.min() returns the lowest-valued number passed into it (...args) is used for the array args
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

//knee jerk first thought was to use .sort() but I messed up the [0] return
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0];
    }
  }


//submitted answer create a var use a for loop to iterate through the array compare each element at each index and return the var
  class SmallestIntegerFinder {
    findSmallestInt(args) {
    var temp  ;
   
      for (var i=0;i<args.length;i++){
          if(args[i]<=args[0]){
              args[0]  = args[i];    
              temp = args[i];
          }
        }
      return temp;
    }
  }