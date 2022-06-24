const readline = require('readline');
const fs = require('fs/promises');

const readFile = async (file) => {
    const data = await fs.readFile(file, { encoding: 'utf8' });
    return data;
}

const writeFile = async (file, contents) => {
    await fs.writeFile(file, contents);
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
        const answerFile = await question('Qual nome do arquivo que você quer ler? ');
        const content = await readFile(`${answerFile}`);
        console.log(content);
        const answerWordOld = await question('Qual palavra deve ser substituida? ');
        const answerReplaceWord = await question('Qual será nova palavra? ');
        const newContent = content.replace(new RegExp(answerWordOld, 'g'), answerReplaceWord);
        console.log(newContent);
        const answerWriteFile = await question('Qual nome do arquivo que você quer escrever? ');
        await writeFile(`${answerWriteFile}`, newContent);
    } catch (error) {
        console.error(error);
    }
}

main();