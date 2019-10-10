

 export function findBf(g, w, n, ht, h) {
    const Log10 = X => (Math.log(X) / Math.log(10));
    
    let mCalc = ((86.010 * (Log10(w - n))) - (70.041 * (Log10(ht))) + 36.76);
    let fCalc = (163.205 * Log10(w + h - n) - 97.684 * Log10(ht) - 78.387);

    var bf = (g === 'male') ? mCalc : fCalc;
    return bf
  };


 export  function bmiRange(bmi) {
    return (bmi < 18.5)              ? "Underweight"
          :(bmi >= 18.5 && bmi < 25) ? "Normal"
          :(bmi >= 25 && bmi < 30)   ? "Overweight"
          :                            "Obese";
  };


 export function findTdee(gender, activity, w, ht, age) {
    // BMR = Basal Metabolic Rate
    var mBMR = 66 + (6.23 * w) + (12.7 * ht) - (6.8 * age);
    var fBMR = 655 + (4.35 * w) + (4.7 * ht) - (4.7 * age);

    var tdee = (gender === "male") ? (mBMR * activity) : (fBMR * activity);
    return tdee
  };