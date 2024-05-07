// Code your solution in this file!
const scubaDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(scubaDrivers){
    const driver = scubaDrivers.slice(0,2);
    return driver;
}

const returnLastTwoDrivers = function(scubaDrivers){
    return scubaDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(num){
        return num * multiplier;
    }
}

function fareDoubler(fare){
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(scubaDrivers, callback){
    return callback(scubaDrivers);
}
