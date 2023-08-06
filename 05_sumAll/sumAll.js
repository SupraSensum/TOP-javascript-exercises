const sumAll = function(numA, numB) {
    let lowerBound;
    let upperBound;
    let sum = 0;

    if (numA < 0 || 
        numB < 0 ||
        typeof numA != 'number' ||
        typeof numB != 'number') {
        return 'ERROR';
    } else if (numA < numB) {
        lowerBound = numA;
        upperBound = numB;
    } else {
        upperBound = numA;
        lowerBound = numB;
    }

    for (let i = lowerBound; i <= upperBound; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
