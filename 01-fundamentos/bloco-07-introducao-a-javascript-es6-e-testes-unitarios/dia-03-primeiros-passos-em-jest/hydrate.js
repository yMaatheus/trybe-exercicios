function hydrate(str) {
    const sum = str.match(/[0-9]/g).reduce((acc, current) => acc + parseInt(current), 0);
    if (sum == 1) {
        return sum + " copo de água";
    }
    return sum + " copos de água";
}

module.exports = hydrate;