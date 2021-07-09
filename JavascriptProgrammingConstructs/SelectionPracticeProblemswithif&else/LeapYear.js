//leap year program
var readline = require("readline-sync");
var year = readline.question("Enter a year");
//The year is also evenly divisible by 400. Then it is a leap year.
//The year must be evenly divisible by 4;
//If the year can also be evenly divided by 100, it is not a leap year;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0))
  console.log("It is a leap year");
else console.log("It is not a leap year");