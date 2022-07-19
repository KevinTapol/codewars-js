// Parameters or Edge cases: Input constraints: 0 <= h <= 23 | 0 <= m <= 59 | 0 <= s <= 59
// Return: time since midnight in milliseconds
// Examples: h = 0
            //m = 1
            //s = 1
            //result = 61000
// Psuedo code: take inputs and multiply to get to milliseconds
                //return the sum of inputs in milliseconds

//my answer
function past(h, n, s){
    let result = (h*3600000) + (n*60000) + (s*1000)
    return result
}

//best practices and most clever
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
}

//using spread
const past = (...args) =>
  args.reduce((pre, val) => 60 * pre + val, 0) * 1e3;