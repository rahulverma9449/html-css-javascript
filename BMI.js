// Write your code here:
// Function to calculate BMI
function calculateBMI(weight,height){
    var bmi = weight /(height * height);

    return bmi;
}

  
  // Function to determine BMI category
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Healthy";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
  
  // Input data
  var weight = 58; // kg
  var height = 1.60; // meters
  
  // Calculate BMI
  var bmi = calculateBMI(weight, height);
  
  // Determine BMI category
  var category = getBMICategory(bmi);
  
  // Output results
  console.log("Your Body Mass Index is: " + bmi.toFixed(2));
  console.log("You are " + category);














// var i = 1;

// */while(i <=5){
//     console.log(i);
//     i++;
// }
// */
// for(; i <=5; i++){
//     console.log(i);
// }

