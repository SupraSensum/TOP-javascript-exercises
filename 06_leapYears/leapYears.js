const leapYears = function(year = 2000) {
    // if % 4 = 0 && % 100 != 100 || % 400 = 0
    // console.log(year % 4 === 0);
    // console.log(year % 100 != 100);
    // console.log(year % 4 === 0 && year % 100 != 100);
    // console.log(year % 400 === 0);
    // console.log((year % 4 === 0 && year % 100 != 100) || year % 400 === 0);
    return (year % 4 === 0 && year % 100 != 0) || year % 400 === 0;
};

// Do not edit below this line
module.exports = leapYears;
