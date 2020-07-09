/*

bmi = weight / height ^ 2

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

function bmi(weight, height) {
 bmiCalc = (weight / Math.pow(height, 2));
 if (bmiCalc <= 18.5)
  return 'Underweight'
 else if (bmiCalc > 18.5 && bmiCalc <= 25.0)
  return 'Normal'
 else if (bmiCalc > 25.0 && bmiCalc <= 30.0)
  return 'Overweight'
 else
  return 'Obese'
}

console.log(bmi(80, 1.80));