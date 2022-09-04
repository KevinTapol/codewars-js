// Get Planet Name By ID
// The function is not returning the correct values. Can you figure out why?
// 3 --> "Earth"

// Fix this code
function getPlanetName(id){
    var name;
    switch(id){
        case 1:
            name = 'Mercury'
        case 2:
            name = 'Venus'
        case 3:
            name = 'Earth'
        case 4:
            name = 'Mars'
        case 5:
            name = 'Jupiter'
        case 6:
            name = 'Saturn'
        case 7:
            name = 'Uranus'
        case 8:
            name = 'Neptune'
    }
    
    return name;
}

// Parameters or Edge cases: input will be integer 1-8
// Return: a string value for key input
// Examples: 3 --> "Earth"
// Psuedo code: fix the switch case statement
//              delete the variable name and its respective reassignment per each case and instead return the string
//              I would rather use if else statements then case but in this case I would like to improve the code by creating an object key being the interger and value being the respective string. Then arrow fn call the key

// my answer
function getPlanetName(id){
    switch(id){
        case 1:
            return 'Mercury'
        case 2:
            return 'Venus'
        case 3:
            return 'Earth'
        case 4:
            return 'Mars'
        case 5:
            return 'Jupiter'
        case 6:
            return 'Saturn'
        case 7:
            return 'Uranus'
        case 8:
            return 'Neptune'
    }
}

// improving upon code my arrow fn using object and return
const getPlanetName = id => {
    const planets = {1:'Mercury', 2:'Venus', 3:'Earth', 4:'Mars', 5:'Jupiter', 6:'Saturn', 7:'Uranus', 8:'Neptune'}
    return planets[id]
}

// best practices
function getPlanetName(id){
    var name;
    switch(id){
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
    }
    
    return name;
}

// most clever
// the point of this was to fix the switch case but this is the exact same as my object answer taking it a step further and call the input as key id and output as object value
function getPlanetName(id){
    return {
        1: 'Mercury',
        2: 'Venus',
        3: 'Earth',
        4: 'Mars',
        5: 'Jupiter',
        6: 'Saturn',
        7: 'Uranus',
        8: 'Neptune'
    }[id]
}

// arrow fn using array and return by index taking id -1
const getPlanetName = id => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'][id-1];

// Maps are very new
const getPlanetName = id => {
    const planets = new Map([
        [1, 'Mercury'],
        [2, 'Venus'],
        [3, 'Earth'],
        [4, 'Mars'],
        [5, 'Jupiter'],
        [6, 'Saturn'],
        [7, 'Uranus'],
        [8, 'Neptune']
    ]);
    return planets.get(id);
}

// friggin hilarious refuse to let go of Pluto
// smart using first element as null so that when you call [id] the key matches the index value
function getPlanetName(id){
    const names = [
        null, 
        'Mercury', 
        'Venus', 
        'Earth', 
        'Mars', 
        'Jupiter', 
        'Saturn', 
        'Uranus', 
        'Neptune',
        'Pluto' //I still believe in you, Pluto!
    ]
    return names[id];
}

// ternaries
var getPlanetName = (id) => 
    id === 1 ? 'Mercury' 
        : id === 2 ? 'Venus' 
        : id === 3 ? 'Earth' 
        : id === 4 ? 'Mars' 
        : id === 5 ? 'Jupiter' 
        : id === 6 ? 'Saturn'
        : id === 7 ? 'Uranus' 
        : id === 8 ? 'Neptune' 
        : 'Sorry Pluto';