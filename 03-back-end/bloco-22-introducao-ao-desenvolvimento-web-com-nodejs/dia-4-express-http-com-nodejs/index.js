const express = require('express');
const cors = require('cors');

const readFile = require('./readFile');
const writeFile = require('./writeFile');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/greetings', (req, res) => {
    const { name, age } = req.body;
    return +age > 17 ? res.status(200).json({ "message": `Hello, ${name}!` }) : res.status(401).json({ "message": "Unauthorized" });
});

app.put('/users/:name/:age', (req, res) => {
    const { name, age } = req.params;
    res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', async (_req, res) => {
    try {
        const simpsons = await readFile('./simpsons.json');
        res.status(200).json(simpsons);
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
});

app.get('/simpsons/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const simpsons = await readFile('./simpsons.json');
        const simpson = simpsons.find(({ id: simpsonId }) => simpsonId === id);
        if (!simpson) {
            res.status(404).json({ message: 'simpson not found' });
        }
        res.status(200).json(simpson);
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
});

app.post('/simpsons', async (req, res) => {
    try {
        const { id, name } = req.body;
        const simpsons = await readFile('./simpsons.json');
        if (simpsons.some(({ id: simpsonId }) => simpsonId === id)) {
            res.status(409).json({ message: 'id already exists' });
        }
        const newSimpsons = [...simpsons, { id, name }];
        await writeFile('./simpsons.json', JSON.stringify(newSimpsons));
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
});

app.listen(3001, () => console.log('listening on port 3001'));