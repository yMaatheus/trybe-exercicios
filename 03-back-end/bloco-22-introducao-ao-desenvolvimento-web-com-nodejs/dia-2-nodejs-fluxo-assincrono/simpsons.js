const fs = require('fs/promises');

const readFile = async (file) => {
  const data = await fs.readFile(file, { encoding: 'utf8' });
  const array = JSON.parse(data);
  return array;
}

const writeFile = async (file, contents) => {
  await fs.writeFile(file, contents);
}

const readSimpsons = async () => {
  const array = await readFile('./simpsons.json');
  array.forEach(({ id, name }) => console.log(`${id} - ${name}`));
}

const getSimpsonById = async (id) => {
  const promise = new Promise(async (resolve, reject) => {
    const array = await readFile('./simpsons.json');
    const simpson = array.find(({ id: simpsonId }) => +simpsonId === id);
    if (!simpson) {
      return reject(new Error('id não encontrado'));
    }
    return resolve(simpson)
  });
  return promise;
}

const deleteSimpsonById = async (...ids) => {
  const array = await readFile('./simpsons.json');
  const simpsons = array.filter(({ id }) => !ids.includes(id));
  await writeFile('./simpsons.json', JSON.stringify(simpsons));
  return simpsons;
}

const simpsonFamily = async () => {
  const array = await readFile('./simpsons.json');
  const simpsonsFamily = array.filter(({ id }) => id < 4);
  await writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
  return simpsonsFamily;
}

const addToSimpsonFamily = async (name) => {
  const array = await readFile('./simpsonFamily.json');
  const newId = `${array.reduce((acc, { id }) => acc < +id && +id, 0) + 1}`;
  const newArray = [...array, { id: newId, name }]
  await writeFile('./simpsonFamily.json', JSON.stringify(newArray));
  return newArray;
}

const replaceToSimpsonFamily = async (oldName, newName) => {
  const array = await readFile('./simpsonFamily.json');
  const { id } = array.find((simpson) => simpson.name === oldName);
  const arrayFilter = array.filter(({ name }) => name !== oldName);

  if (!id) {
    throw new Error(`${oldName} não encontrado.`);
  }

  const newArray = [...arrayFilter, { id, name: newName }];
  await writeFile('./simpsonFamily.json', JSON.stringify(newArray));
  return newArray;
}

// readSimpsons();

// getSimpsonById(1).then((simpson) => console.log(simpson)).catch((err) => console.log(err.message));

// getSimpsonById(11).then((simpson) => console.log(simpson)).catch((err) => console.log(err.message));

// deleteSimpsonById('6', '10').then((simpsons) => console.log(simpsons)).catch((err) => console.log(err.message));

// simpsonFamily().then((simpsonsFamily) => console.log(simpsonsFamily)).catch((err) => console.log(err.message));

// addSimpsonFamily('Nelson Muntz').then((simpsonFamily) => console.log(simpsonFamily)).catch((err) => console.log(err.message));

replaceToSimpsonFamily('Nelson Muntz', 'Maggie Simpson').then((simpsonFamily) => console.log(simpsonFamily)).catch((err) => console.log(err.message));