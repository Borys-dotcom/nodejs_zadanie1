const randomFromRange = require('./randomFromRange')

function arrayOfRandomNumbers(rangeMin, rangeMax, numberOfNumbers) {

    let outputArray = [];

    for (i = 0; i < numberOfNumbers; i++) {
        let nextNumber = 0;
        nextNumber = randomFromRange(rangeMin, rangeMax);
        outputArray = outputArray.concat(nextNumber);
    }

    return outputArray;
}

module.exports = arrayOfRandomNumbers;