const leapYears = function(year) {
    let leapYear = (year % 4 == 0) ? 
    (year % 400 == 0) ? true : 
    (year % 100 == 0) ? false : true 
    : false;

    return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
