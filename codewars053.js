// Parameters or Edge cases: s is a string 
        //Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.
        //Note2: Using a string template can make your job easier.
// Return: a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;
// Examples: fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
            // a
            // aa
            // aaa
            // aaaa
            // aaaaa       <---The effect when you console.log it
            // fiveLine("  xy ") 
            // should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
            // xy
            // xyxy
            // xyxyxy
            // xyxyxyxy
            // xyxyxyxyxy  <---The effect when you console.log it
// Psuedo code: take input string and trim() to remove whitespace
                //then use a string template to return the string as `${string}\n${string}${string}\n${string}${string}${string}\n${string}${string}${string}${string}\n${string}${string}${string}${string}${string}`

//my answer
function fiveLine(s){
    let st = s.trim()
    return `${st}\n${st}${st}\n${st}${st}${st}\n${st}${st}${st}${st}\n${st}${st}${st}${st}${st}`
    
  }

//best practices
function fiveLine(s){
    s = s.trim();
    var tmp = s;
    var res = [s];
    
    for (var i = 1; i < 5; i++) {
      res.push(s += tmp);
    } 
    return res.join("\n");
  }