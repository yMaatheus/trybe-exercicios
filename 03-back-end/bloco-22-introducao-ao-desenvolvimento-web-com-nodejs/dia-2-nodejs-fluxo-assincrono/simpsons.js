const fs = require('fs/promises');

const readFile = async (file) => {
  const data = await fs.readFile(file, { encoding: 'utf8' });
  const array = JSON.parse(data);
  return array;
}

const readSimpsons = async () => {
  try {
    const array = await readFile('./simpsons.json');
    array.forEach(({ id, name }) => console.log(`${id} - ${name}`));
  } catch (error) {
    console.log(error);
  }
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

readSimpsons();

getSimpsonById(1).then((simpson) => console.log(simpson)).catch((err) => console.log(err.message));

getSimpsonById(11).then((simpson) => console.log(simpson)).catch((err) => console.log(err.message));