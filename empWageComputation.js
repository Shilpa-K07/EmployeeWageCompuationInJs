const FULL_TIME = 1;
var randomValue = () =>  Math.floor(Math.random()*10)%2;

/**
 *  @description Check wheteher employee is present or not 
 */
 var attendenceCheck = function(){
    var randomNum = randomValue();
    if(randomNum == FULL_TIME ? console.log("\nEmployee is Present  !") : console.log("\nEmployee is absent !"));
    return randomValue; 
}
attendenceCheck();
