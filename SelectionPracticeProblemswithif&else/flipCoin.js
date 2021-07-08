//function for flipcoin
function flipCoin() {
    // Following line will returns the value of 0 and 1
    flip = Math.floor(Math.random() * 2);  
       // condition is checked for head and tail using if else      
    if (flip == 0) console.log("Head");    
     else console.log("Tail");
}
//calling function
flipCoin();