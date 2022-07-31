// Parameters or Edge cases: weight, height
// Return: strings Underweight Normal Overweight or Obese
// Examples:
// Psuedo code: using the provided formula of bmi = weight / (height**2) calculate the bmi
//              compare the result with if statements
//              if bmi <= 18.5 return "Underweight"
//              if bmi <= 25.0 return "Normal"
//              if bmi <= 30.0 return "Overweight"
//              if bmi > 30 return "Obese"

//my answer
function bmi(weight, height) {
    let bmi = weight/(height**2)
    if(bmi <= 18.5) {
        return "Underweight"
    }else if (bmi <= 25.0) {
        return "Normal"
    }else if (bmi <= 30.0) {
        return "Overweight"
    }else {
        return "Obese" 
    }
}

//best practices uses Math.pow()
function bmi(weight, height) {
    var result = weight/Math.pow(height,2) 
    
    if (result <= 18.5) {
      return "Underweight";
    } else if (result <= 25) {
      return "Normal";
    } else if (result <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
    
}

// most clever arrow fn into ternaries
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";

//same answer but 1 line return
function bmi(weight, height) {
  
    var bmi  = weight/(height*height);
    
     return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
    
}

// switch cases
function bmi(weight, height) {
    var formula = (weight / Math.pow(height, 2));
    switch (true) {
      case formula <=18.5:
      return 'Underweight';
      case formula <=25.0:
      return 'Normal';
      case formula <=30:
      return 'Overweight';
      default:
      return 'Obese';
      
    }
  }