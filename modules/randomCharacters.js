const randomFromRange = require('./randomFromRange')

function randomCharacters(numberOfCharacters) {
    //48-57 - numbers => 0
    //65-90 - lowercase => 1
    //97-122 - uppercase => 2

    outputString = ''

    for (i = 0; i < numberOfCharacters; i++) {
        let chooseRange = Math.floor(Math.random()* 3) ;
        console.log('wybór: '+chooseRange)
        let charNum = 0;

        if (chooseRange === 0) {
            charNum = randomFromRange(48, 57);
        } else if (chooseRange === 1) {
            charNum = randomFromRange(65, 90);
        } else if (chooseRange === 2) {
            charNum = randomFromRange(97, 122);
        }

        outputString += String.fromCharCode(charNum);
    }

    return outputString

}

module.exports = randomCharacters