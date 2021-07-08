//function keyword, followed by a name, followed by parentheses (parameter1)
function getWord(dayNumber) {
//check whether the day number is in b/w 0 to 6
    switch (dayNumber) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
         // if other than 0 to 6 
    default:
      console.log("Invalid Number");
  }
}
 // to read data from the user
 var readline = require("readline-sync");
 let dayNumber = readline.question("Enter the number of day: ");
//parseInt function converts its first argument to a string,
getWord(parseInt(dayNumber));