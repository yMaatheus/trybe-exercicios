const fs = require('fs/promises');

const readSimpsons = async () => {
  try {
    const data = await fs.readFile('simpsons.json', { encoding: 'utf8' });
    const array = JSON.parse(data);
    array.forEach(({ id, name}) => console.log(`${id} - ${name}`));
  } catch (err) {
    console.log(err);
  }
}

readSimpsons();