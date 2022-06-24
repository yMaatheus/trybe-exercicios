const fs = require('fs/promises');
const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const readFile = async (file) => {
    const data = await fs.readFile(file, { encoding: 'utf8' });
    return data;
}

const writeFile = async (file, contents) => {
    await fs.writeFile(file, contents);
}

const createFiles = () => {
    array.forEach(async (str, index) => {
        await writeFile(`./file${index + 1}.txt`, str);
    });
}

createFiles();