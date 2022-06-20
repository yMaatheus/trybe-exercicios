const sumAndMultiply = (a, b, c) => {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
            reject('Informe apenas números');
        }
        const sum = (a + b) * c;
        if (sum < 50) reject('Valor muito baixo');
        resolve(sum);
    });
}

const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

sumAndMultiply(getRandomNumber(), getRandomNumber(), getRandomNumber())
    .then(result => console.log(result))
    .catch(err => console.log(err.message));