const FULL_TIME = 1;
const PART_TIME = 2;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 100;

const randomValue = () =>  Math.floor(Math.random()*10)%3;
const wageCalculation = (hour, wagePerHour) => hour * wagePerHour;
const totalWageCalculation = (dailyWage, totalWage) => totalWage + dailyWage;
const totalWorkingHour = (workingHour, currentWorkingHour) => currentWorkingHour + workingHour;

/**
 *  @description Check wheteher employee is present or not 
 */
 var attendenceCheck = function(){
    var randomNum = randomValue();
    if(randomNum == FULL_TIME){
        console.log("\nEmployee is full time  !")
    }else if(randomNum == PART_TIME){
        console.log("\nEmployee is part time !");
    }else{
        console.log("\nEmployee is absent !")
    }
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
    }else if(randomValue == PART_TIME){
        workingHour = PART_TIME_HOUR;
    }else{
        workingHour = 0;
    }
    dailyWage = wageCalculation(workingHour, WAGE_PER_HOUR);
    return dailyWage;
}

/**
 *  @description Wage calculation using switch statement
 */
var calculateDailyWageUsingSwitch = function (randomValue){
    let dailyWage;
    switch(randomValue){
        case FULL_TIME : 
        workingHour = FULL_DAY_HOUR;
        break;
        case PART_TIME : 
        workingHour = PART_TIME_HOUR;
        break;
        default:
        workingHour = 0;
    }
    dailyWage = wageCalculation(workingHour, WAGE_PER_HOUR);
    return dailyWage;
}

/**
 *  @description Wage calculation for a month
 */
var wageCalculationForMonth = function (){
    let currentWorkingDay = 0;
    let dailyWage = 0;;
    let totalWage = 0;
    while(currentWorkingDay <= MAX_WORKING_DAYS){
        var randomNum = randomValue();
        switch(randomNum){
            case FULL_TIME : 
            workingHour = FULL_DAY_HOUR;
            break;
            case PART_TIME : 
            workingHour = PART_TIME_HOUR;
            break;
            default:
            workingHour = 0;
        }
        currentWorkingDay ++;
        dailyWage = wageCalculation(workingHour, WAGE_PER_HOUR);
        totalWage = totalWageCalculation(dailyWage, totalWage); 
    }
    return totalWage;
}

/**
 *  @description Wage calculation till condition of 
 * maximum days or maximum hours is reached
 */

var wageCalculationForMaximumHourOrAndDay = function (){
    let currentWorkingDay = 0;
    let dailyWage = 0;;
    let totalWage = 0;
    let currentWorkingHour = 0;
    let workingHour = 0;
    while(currentWorkingDay <= MAX_WORKING_DAYS || currentWorkingHour <= MAX_WORKING_HOURS){
        var randomNum = randomValue();
        switch(randomNum){
            case FULL_TIME : 
            workingHour = FULL_DAY_HOUR;
            break;
            case PART_TIME : 
            workingHour = PART_TIME_HOUR;
            break;
            default:
            workingHour = 0;
        }
        dailyWage = wageCalculation(workingHour, WAGE_PER_HOUR);
        currentWorkingDay ++;
        currentWorkingHour = totalWorkingHour(workingHour, currentWorkingHour);
        if(currentWorkingHour <= 100){
            totalWage = totalWageCalculation(dailyWage, totalWage);
        } 
    }
    return totalWage;
}

var randomNum = attendenceCheck();
var dailyWage = calculateDailyWage(randomNum);
console.log("Daily wage is : "+dailyWage);
var dailyWageUsingSwitch = calculateDailyWageUsingSwitch(randomNum);
console.log("Daily Wage calculated using switch statement is : "+dailyWageUsingSwitch);
var wageForMonth = wageCalculationForMonth();
console.log("Wage for a month is : "+wageForMonth);
var wageForMaxDayOrHour = wageCalculationForMaximumHourOrAndDay();
console.log("Wage calculated for maximum days or hours is : "+wageForMaxDayOrHour);

