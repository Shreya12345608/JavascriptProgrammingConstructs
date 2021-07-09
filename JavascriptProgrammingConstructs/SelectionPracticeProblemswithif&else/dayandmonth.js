//take a input fromht user
var readline =  require('readline-sync');
console.log("Select Date b/w March 20 and June 20");
// Wait for user's response.
var date1 = readline.question("Enter date in (numbers): ");
// Wait for user's response.
var month = readline.question("Enter month in words: ");
if (month == "march" && date1 >= 20 && date1 < 31) console.log("True");    // Do something...

else if (month == "april" && date1 < 30) console.log("True");    // Do something...

else if (month == "may" && date1 < 31) console.log("True");    // Do something...

else if (month == "june" && date1 < 20) console.log("True");    // Do something...
// if upr condition is not true then its is false
else {
  console.log("False");
}