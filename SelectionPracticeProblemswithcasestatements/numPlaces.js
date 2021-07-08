//function keyword, followed by a name, followed by parentheses (parameter1)
function displayUnit(digitPlace) {
    
    switch (digitPlace) {
      case 1:
        console.log("Units");
        break;
      case 10:
        console.log("Tens");
        break;
      case 100:
        console.log("Hundreds");
        break;
      case 1000:
        console.log("Thousands");
        break;
      case 10000:
        console.log("Ten Thousands");
        break;
      case 100000:
        console.log("Lakhs");
        break;
      case 1000000:
        console.log("Ten Lakhs");
        break;
      case 10000000:
        console.log("Crores");
        break;
      case 100000000:
        console.log("Ten Crores");
        break;
         // if other than 1 to 100000000
      default:
        console.log("Invalid unit");
    }
  }
  
  // to read data from the user
  var readline = require("readline-sync");
  var digitPlace = readline.question("Enter the decimal place");
//parseInt function converts its first argument to a string,
  displayUnit(parseInt(digitPlace));