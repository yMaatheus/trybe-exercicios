const object = {
    name: 'Matheus',
    age: 18
}

function newKey(object, key, value) {
    object[key] = value;
}

console.log(object);
newKey(object, 'fullName', `${object['name']} Henrique`);
console.log(object);
