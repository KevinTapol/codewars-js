// Parameters or Edge cases:
// Return: a volume of a cuboid given 3 values length width and height
// Examples:
// Psuedo code:  return length multiplied by width multiplied by height

//my answer, best practices and most clever
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length*width*height
    }
}

// arrow fn using this. 
var Kata = (() => {
    this.getVolumeOfCuboid = (l, w, h) => l * w * h;
    return this;
})();

// checking if inputs are not a number and less than or equal to 0
// parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.
var Kata;

Kata = (function() {
    function Kata() {}

    Kata.getVolumeOfCuboid = function(length, width, height) {
    var l = parseFloat(length);
    var w = parseFloat(width);
    var h = parseFloat(height);

    if(isNaN(l) || isNaN(w) || isNaN(h)) return 0;
    if(l<=0 || w<=0 ||h <= 0)  return 0;
    
    return l*w*h;
    };

    return Kata;

})();