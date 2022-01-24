// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Maracujá', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Cortar', 'Assar', 'Mel'];

const fruitSalad = (fruit, additional) => {
    return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));