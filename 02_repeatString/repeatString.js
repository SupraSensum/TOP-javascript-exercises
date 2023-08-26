const repeatString = function(inputString, repeatFactor) {
    let affectedString = '';
    if (repeatFactor < 0) {
        return 'ERROR';
    }
    for (i = 0; i < repeatFactor; i++) {
        affectedString += inputString;
    }
    return affectedString;
};

// Do not edit below this line
module.exports = repeatString;
