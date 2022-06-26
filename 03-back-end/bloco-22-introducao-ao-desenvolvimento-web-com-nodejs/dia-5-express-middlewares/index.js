const express = require('express');
const cors = require('cors');

const writeFile = require('./helpers/writeFile');
const generateToken = require('./helpers/token');

const validateSale = require('./middlewares/salesMiddleware');
const validateSignup = require('./middlewares/signupMiddleware');
const validateToken = require('./middlewares/tokenMiddleware');


const app = express();

app.use(express.json());
app.use(cors());

app.post('/sales', validateSale, validateToken, async (_req, res) =>
    res.status(201).json({ "message": "Venda cadastrada com sucesso" }));

app.post('/signup', validateSignup, async (_req, res) => {
    try {
        const token = generateToken();
        await writeFile('token.json', JSON.stringify(token));
        res.status(200).json({ token })
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
});

app.listen(3001, () => console.log('listening on port 3001'));