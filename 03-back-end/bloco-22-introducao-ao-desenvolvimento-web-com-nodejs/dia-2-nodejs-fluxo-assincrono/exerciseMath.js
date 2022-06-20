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