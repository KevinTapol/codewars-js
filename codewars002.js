//Parameters Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.


//Results Your task is to write a function maskify, which changes all but the last four characters into '#'.
//Examples "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//      "1" -->                "1"
//       "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"
//Psuedo Code 
//create a fn that takes user input and changes all the characters except for the final 4 into # using an array

function maskify(userInput){
    if(userInput.length > 4){
        let result = '';
        return userInput.split('').reduce((acc, cur, i) => {
            if(userInput.length - i > 4){
                result += '#';
            }else {
                result += cur;
            }
            return result;
        }, '');
    }else {
        return userInput
    }
}
