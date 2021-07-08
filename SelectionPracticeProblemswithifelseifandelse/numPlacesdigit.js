//function keyword, followed by a name, followed by parentheses (parameter1)
function displayUnit(digitPlace) {
    if (digitPlace == 1) console.log("Units");
    else if (digitPlace == 10) console.log("Tens");
    else if (digitPlace == 100) console.log("Hundreds");
    else if (digitPlace == 1000) console.log("Thousands");
    else if (digitPlace == 10000) console.log("Ten Thousands");
    else if (digitPlace == 100000) console.log("Lakhs");
    else if (digitPlace == 1000000) console.log("Ten Lakhs");
    else if (digitPlace == 10000000) console.log("Crores");
    else if (digitPlace == 1000000) console.log("Ten Crores");
    // if other than 1 to 1000000
    else console.log("Invalid number.");
  }
// to read data from the user
  var readline = require("readline-sync");
  var digitPlace = readline.question("Enter the decimal place");
//parseInt function converts its first argument to a string,
  displayUnit(parseInt(digitPlace));