const whatIsThisNumber = (number) => {
    if (number > 0) {
        return 'positivo';
    } else if (number < 0) {
        return 'negativo';
    } else if (number === 0) {
        return 'neutro';
    } 
    throw new Error('Invalid number');
}

module.exports = whatIsThisNumber;