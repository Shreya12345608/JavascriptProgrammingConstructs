//let is type
//variable declaration
let maxValue = 0;
let minValue = 1000;
//loop
   for (i = 1; i <= 5; i++) {
       //900 is the number of possible results () start (0) - end (999))
        num = Math.floor(Math.random() * 999);
        //prinitng no of element in op 
        console.log(num);
        //checking whether max value is< num print max value       
        if (maxValue < num) maxValue = num;
        //checking whether max value is< num print max value 
        if (minValue > num) minValue = num;
      }
      // op
      console.log("Maximum Value  :" + maxValue);
      console.log("Minimum Value  :" + minValue);