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

// readSimpsons();

// getSimpsonById(1).then((simpson) => console.log(simpson)).catch((err) => console.log(err.message));

// getSimpsonById(11).then((simpson) => console.log(simpson)).catch((err) => console.log(err.message));

// deleteSimpsonById('6', '10').then((simpsons) => console.log(simpsons)).catch((err) => console.log(err.message));

simpsonFamily().then((simpsonsFamily) => console.log(simpsonsFamily)).catch((err) => console.log(err.message));