// Code your solution in this file!
const scubaDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(scubaDrivers){
    return scubaDrivers.slice(0,2);
}

const returnLastTwoDrivers = function(scubaDrivers){
    return scubaDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (scubaDrivers, callback) => callback(scubaDrivers); 
