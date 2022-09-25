// Parameters or Edge cases: Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
    // Possible invalid inputs include:
    //      IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
    //      IP_ADDRESS_NOT_FOUND - ip address not in the database
    //      IP_ADDRESS_REQUIRED - no ip address was supplied
// Return: welcome visitors to the site in their own language
// Examples:
//          describe("Tests", () => {
//              it("test", () => {
//            Test.assertEquals(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
//            Test.assertEquals(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
//            Test.assertEquals(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
//              });
//            });
// Psuedo code:  create an object of key value pairs of strings that have the language as the user input 
//               create a function that calls the object key of user input and returns the respective value

// my answer 
const greetings = {
    'english': 'Welcome',
    'czech': 'Vitejte',
    'danish': 'Velkomst',
    'dutch': 'Welkom',
    'estonian': 'Tere tulemast',
    'finnish': 'Tervetuloa',
    'flemish': 'Welgekomen',
    'french': 'Bienvenue',
    'german': 'Willkommen',
    'irish': 'Failte',
    'italian': 'Benvenuto',
    'latvian': 'Gaidits',
    'lithuanian': 'Laukiamas',
    'polish': 'Witamy',
    'spanish': 'Bienvenido',
    'swedish': 'Valkommen',
    'welsh': 'Croeso',
    'IP_ADDRESS_INVALID': 'Welcome',
    'IP_ADDRESS_NOT_FOUND': 'Welcome',
    'IP_ADDRESS_REQUIRED': 'Welcome'
    }
    
function greet(language) {
    return greetings[language]
}
// or one line the function
const greet = (language) => greetings[language]

// best practices and most clever
// For the random input test cases, instead of adding them to the object key value pair return the key value pair of 'english' : 'Welcome'
// What this means is anything that is not a key equal to user input will return 'Welcome' such as typos.
function greet(lang) {
    return langs[lang]||langs['english'];
}
var langs = {
    'english': 'Welcome',
    'czech': 'Vitejte',
    'danish': 'Velkomst',
    'dutch': 'Welkom',
    'estonian': 'Tere tulemast',
    'finnish': 'Tervetuloa',
    'flemish': 'Welgekomen',
    'french': 'Bienvenue',
    'german': 'Willkommen',
    'irish': 'Failte',
    'italian': 'Benvenuto',
    'latvian': 'Gaidits',
    'lithuanian': 'Laukiamas',
    'polish': 'Witamy',
    'spanish': 'Bienvenido',
    'swedish': 'Valkommen',
    'welsh': 'Croeso'
};

// they included the object inside the arrow function
const greet = language =>
    (val => val[language] || `Welcome`)
    ({
        english: `Welcome`,
        czech: `Vitejte`,
        danish: `Velkomst`,
        dutch: `Welkom`,
        estonian: `Tere tulemast`,
        finnish: `Tervetuloa`,
        flemish: `Welgekomen`,
        french: `Bienvenue`,
        german: `Willkommen`,
        irish: `Failte`,
        italian: `Benvenuto`,
        latvian: `Gaidits`,
        lithuanian: `Laukiamas`,
        polish: `Witamy`,
        spanish: `Bienvenido`,
        swedish: `Valkommen`,
        welsh: `Croeso`
});

// for loop
var languages = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
}
function greet(language) {
    for(var k in languages){
        if(k == language){
            return languages[k];
        }
    }
    return "Welcome";
}

// switch case
function greet(language) {
    switch(language){
        case "english": return "Welcome";
        case "czech": return "Vitejte";
        case "danish": return "Velkomst";
        case "dutch": return "Welkom";
        case "estonian": return "Tere tulemast";
        case "finnish": return "Tervetuloa";
        case "flemish": return "Welgekomen";
        case "french": return "Bienvenue";
        case "german": return "Willkommen";
        case "irish": return "Failte";
        case "italian": return "Benvenuto";
        case "latvian": return "Gaidits";
        case "lithuanian": return "Laukiamas";
        case "polish": return "Witamy";
        case "spanish": return "Bienvenido";
        case "swedish": return "Valkommen";
        case "welsh": return "Croeso";
        default: return "Welcome";
    }
    
}

// switch case using an array instead of object
function greet(language) {
    var r = [
        'Vitejte',
        'Velkomst',
        'Welkom',
        'Tere tulemast',
        'Tervetuloa',
        'Welgekomen',
        'Bienvenue',
        'Willkommen',
        'Failte',
        'Benvenuto',
        'Gaidits',
        'Laukiamas',
        'Witamy',
        'Bienvenido',
        'Valkommen',
        'Croeso'
    ];
    
    switch (language){
        case "czech":
            return r[0]
        case "danish":
            return r[1]
        case "dutch":
            return r[2]
        case "estonian":
            return r[3]
        case "finnish":
            return r[4]
        case "flemish":
            return r[5]
        case "french":
            return r[6]
        case "german":
            return r[7]
        case "irish":
            return r[8]
        case "italian":
            return r[9]
        case "latvian":
            return r[10]
        case "lithuanian":
            return r[11]
        case "polish":
            return r[12]
        case "spanish":
            return r[13]
        case "swedish":
            return r[14]
        case "welsh":
            return r[15]
        default:
            return 'Welcome'
    
    }
}