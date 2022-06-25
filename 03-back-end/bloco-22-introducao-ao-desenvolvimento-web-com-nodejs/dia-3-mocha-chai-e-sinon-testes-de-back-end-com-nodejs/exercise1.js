const whatIsThisNumber = (number) => {
    if (number > 0) {
        return 'positivo';
    } else if (number < 0) {
        return 'negativo';
    } else if (number === 0) {
        return 'neutro';
    }
}

module.exports = whatIsThisNumber;