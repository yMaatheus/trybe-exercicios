const readline = require('readline');
const fs = require('fs/promises');

const readFile = async (file) => {
    const data = await fs.readFile(file, { encoding: 'utf8' });
    return data;
}

const question = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(question, async (answer) => {
            resolve(answer);
            rl.close();
        });
    })
}

const main = async () => {
    try {
        const answer = await question('Qual nome do arquivo que você quer ler? ');
        const content = await readFile(`./${answer}`);
        console.log(content);
    } catch (error) {
        console.error('Arquivo inexistente');
    }
}

main();