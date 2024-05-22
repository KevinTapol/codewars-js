/*
Over The Road

You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.
address = 1, n = 3 return 6
1|   |6
3|   |4
5|   |2
  you
address < n return n + 1 + Math.abs(address -n)
address > n return address - 2n + 1

) 
Parameters or Edge Cases:
    Both n and address could get upto 500 billion with over 200 random tests. If you try to store the addresses of 500 billion houses in a list then    you will run out of memory and the tests will crash. This is not a kata problem so please don't post an issue. Similarly if the tests don't complete within 12 seconds then you also fail.
    To solve this, you need to think of a way to do the kata without making massive lists or huge for loops. 
Return:

Examples:
    (address, n --> output)
    Given your house number address and length of street n, give the house number on the opposite side of the street.
    1, 3 --> 6
    3, 3 --> 4
    2, 3 --> 5
    3, 5 --> 8
    7, 11 --> 16
    23633656673 ,31002769672--> 596421736780

Pseudocode:
    1st input is your house number 
    2nd input is the number on houses on each side NOT BOTH
    return the house that is opposite of your house number

    If loops or array methods were allowed, I would create an array of the length of n of odd numbers and another of even
    Then if address if even, return the indexOf the address in the even array. 
    Return the element at that same index but from the odd array.
    Else if address is odd, get the index of address from odd array and return the element of the same index in the even array.

    But we cannot so we must use some version of Gauss's theorem n(n + 1)/2
    After some guess and check, I came up with n*2 + 1 - address. Essentially I took the total number of elements in the array n*2 then subtracted the address and noticed I was 1 off. So, I added 1 after the fact.
*/


// My Answer, Best Practices and Most Clever
function overTheRoad(address, n){
return n*2 + 1 - address
}

// One liner arrow function
const overTheRoad = (a, n) => n*2 + 1 - a

// The other answers are modified versions of the same math. Using anything other than this one formula results in time out because of the boundary issues of numbers with array methods. This is also why I rated this kata as somewhat liked.