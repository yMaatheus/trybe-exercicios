const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    return names.reduce((acc, name) => acc += name.split('').reduce((count, char) => char.toLowerCase() === 'a' ? count += 1 : count, 0), 0);
}

console.log(containsA());