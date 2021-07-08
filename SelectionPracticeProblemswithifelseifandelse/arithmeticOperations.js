function arithmaticOperation(numberOne, numberTwo, numberThree) {
    let opOne = numberOne + numberTwo * numberThree;
    console.log("anumberOne + numberTwo * numberThree = " + opOne);
    let opTwo = (numberOne % numberTwo) + numberThree;
    console.log("numberOne % numberTwo + numberThree = " + opTwo);
    let opThree = numberThree + numberOne / numberTwo;
    console.log("numberThree + numberOne / numberTwo = " + opThree);
    let opFour = numberOne * numberTwo + numberThree;
    console.log("numberOne * numberTwo + numberThree = " + opFour);
  
    opArray = [opOne, opTwo, opThree, opFour];
    min = opArray[0];
    max = opArray[0];
  //oparray has 4 element in it by using we can accress one by one
  //array acts as model class
    for (array of opArray) {
      if (array < min)   min = array;
    }
  //oparray has 4 element in it by using we can accress one by one
  //array acts as model class
    for (array of opArray) {
      if (array > max)  max = array;
    }
  // print max and min number
    console.log("maximum number: " + max);
    console.log("minimum number: " + min);
  }
  //reading input from user
  var readline = require("readline-sync");
  let FirstNum = readline.question("Enter the first number");
  let secondNum = readline.question("Enter the second number");
  let thirdNum = readline.question("Enter the third number");
  //parseInt function converts its first argument to a strin
  arithmaticOperation(parseInt(FirstNum), parseInt(secondNum), parseInt(thirdNum));