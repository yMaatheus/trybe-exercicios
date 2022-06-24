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

// createFiles();

const readFiles = async () => {
    const length = array.length + 1;
    const words = [];
    for (let i = 1; i < length; i++) {
        const content = await readFile(`./file${i}.txt`);
        words.push(content);
    }
    const phrase = words.join(' ')
    await writeFile('./fileAll.txt', phrase);
}

readFiles();