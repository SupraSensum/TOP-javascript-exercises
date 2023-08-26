const reverseString = function(leString) {
    let tempString = '';
    for (let i = leString.length - 1; i >= 0; i--) {
        tempString += leString.charAt(i);
    }
    return tempString;
};

// Do not edit below this line
module.exports = reverseString;
