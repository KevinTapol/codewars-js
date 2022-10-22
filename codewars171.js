// Parameters or Edge Cases:  
//      keep the original order of the names in the output.
// Return:
//      an array of strings with ONLY 4 characters per word from an array of strings
// Examples:
//      describe("Basic tests", () => {
//          it("Testing for fixed tests", () => {
//            assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
//            assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
//            assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
//            assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
//          })
//      })
// Psuedo Code: 
//          iterate through the array and grab only the elements that have a length of 4
//          return those elements as a new array

// my answer best practices and most clever
function friend(friends){
    return friends.filter(e => e.length === 4)
}

// test cases
console.log(friend(["Ryan", "Kieran", "Mark"]))
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))
console.log(friend(["Love", "Your", "Face", "1"]))

// my answer refactored
const friend = (friends) => friends.filter(e => e.length === 4)

// for loop
// interesting declaring the loop conditional variable outside of the for loop conditional statment
function friend(friends){
    //Create new array called "myFriends" for add your friends
    var i,
        len = friends.length,
        myFriends = [];
    for (i = 0; i < len; i++) { 
        //Check for names with length equal to four and it is not a number
        if(friends[i].length == 4 && isNaN(friends[i])) {
            myFriends.push(friends[i]);
        } 
    }return myFriends;
}

// for loop 
// interesting variable declaration in for loop conditional statement
function friend(friends){
    const friend = []
    for(const str of friends) {
        if (str.length === 4) friend.push(str)
    }return friend
}

// using regex to test for non a number instead of isNan() or Number.isNan()
const friend = friends => friends.filter(f => f.length == 4 && /^[a-zA-Z]+$/.test(f))