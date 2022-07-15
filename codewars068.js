// Parameters or Edge cases: input is 2 words with a space inbetween them
// Return: first initials capitalized with a . inbetween
// Examples: Sam Harris => S.H
            //patrick feeney => P.F
// Psuedo code: .split(' ') to create an array of elements where there is a space
                //.map(each elements => where array index 0.toUpperCase).join('.')to add a . inbetween

//my answer
function abbrevName(name){
    return name.split(' ').map(word => word[0].toUpperCase()).join('.')
}

//best practices
function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//using substr()
function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

//using .match()
const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()

//using indexOf(" ")+1 to find the next character after a space
function abbrevName(name){

    return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();

}

//capitalize all the things then take initials
function abbrevName(name){
    name = name.toUpperCase().split(' ');
    return name[0][0] + '.' + name[1][0];
}