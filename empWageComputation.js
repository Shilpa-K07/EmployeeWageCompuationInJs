const FULL_TIME = 1;
const FULL_DAY_HOUR = 8;
const WAGE_PER_HOUR = 20;

const randomValue = () =>  Math.floor(Math.random()*10)%2;
const wageCalculation = (hour, wagePerHour) => hour * wagePerHour;

/**
 *  @description Check whether employee is present or not 
 */
 var attendenceCheck = function(){
    var randomNum = randomValue();
    if(randomNum == FULL_TIME ? console.log("\nEmployee is Present  !") : console.log("\nEmployee is absent !"));
    return randomNum; 
}

/**
 *  @description Daily wage calculation
 */
var calculateDailyWage = function(randomValue){
    
    let workingHour;
    let dailyWage;
    if(randomValue == FULL_TIME){
        workingHour = FULL_DAY_HOUR;
    }else{
        workingHour = 0;
    }
    dailyWage = wageCalculation(workingHour, WAGE_PER_HOUR);
    return dailyWage;
}

var randomNum = attendenceCheck();
var dailyWage = calculateDailyWage(randomNum);
console.log("Daily wage is : "+dailyWage);
