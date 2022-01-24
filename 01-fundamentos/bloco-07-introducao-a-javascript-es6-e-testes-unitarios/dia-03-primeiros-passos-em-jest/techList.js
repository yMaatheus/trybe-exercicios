function techList(array, name) {
    if (array.length <= 0) {
        return 'Vazio!';
    }
    array.sort();
    return array.map((tech) => ({ tech, name }));
}

module.exports = techList;