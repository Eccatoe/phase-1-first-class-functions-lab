// Code your solution in this file!



const returnFirstTwoDrivers= function(driverArray){
    return driverArray.slice(0,2);
}


const returnLastTwoDrivers=function(driverArray){
    return driverArray.slice(-2)
}

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(fare){
        return fare *  multiplier
    } 
}

const fareDoubler=createFareMultiplier(2);

const fareTripler=createFareMultiplier(3);


function selectDifferentDrivers(drivers, func){
    // console.log("DRIVERS", drivers);
    // console.log("FUNC", func);
    return func(drivers)
}

// const driverArray=['Antonia', 'Nuru', 'Amari', 'Mo']
// selectDifferentDrivers(driverArray, returnFirstTwoDrivers)


