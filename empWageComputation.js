const FULL_TIME = 1;
const PART_TIME = 2;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;

const randomValue = () =>  Math.floor(Math.random()*10)%3;
const wageCalculation = (hour, wagePerHour) => hour * wagePerHour;
const totalWageCalculation = (dailyWage, totalWage) => totalWage + dailyWage;

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

var wageForMonth = wageCalculationForMonth();
console.log("Wage for a month is : "+wageForMonth);

