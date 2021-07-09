//function keyword, followed by a name, followed by parentheses (parameter1)
function displayDay(dayNumber) {
//check whether the day number is in b/w 0 to 6
    if (dayNumber == 0) console.log("Sunday");
    else if (dayNumber == 1) console.log("Monday");
    else if (dayNumber == 2) console.log("Tuesday");
    else if (dayNumber == 3) console.log("Wednesday");
    else if (dayNumber == 4) console.log("Thursday");
    else if (dayNumber == 5) console.log("Friday");
    else if (dayNumber == 6) console.log("Saturday");
    // if other than 0 to 6 
    else console.log("Invalid number.");
  }
  // to read data from the user
  var readline = require("readline-sync");
  let dayNumber = readline.question("Enter the number of day: ");
//parseInt function converts its first argument to a string,
  displayDay(parseInt(dayNumber));