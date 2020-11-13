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

var wageForMaxDayOrHour = wageCalculationForMaximumHourOrAndDay();
console.log("Wage calculated for maximum days or hours is : "+wageForMaxDayOrHour);

