
const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error('parameters must be numbers');
    }
    return value1 + value2;
}
    

module.exports = sum;