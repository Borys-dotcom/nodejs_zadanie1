function randomFromRange(rangeMin, rangeMax) {
    return (Math.floor(Math.random()*(rangeMax-rangeMin+1))+rangeMin);
}

module.exports = randomFromRange;