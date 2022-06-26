const express = require('express');
const cors = require('cors');

const salesMiddleware = require('./ middlewares/salesMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/sales', salesMiddleware, async (_req, res) =>
    res.status(201).json({ "message": "Venda cadastrada com sucesso" }));

app.listen(3001, () => console.log('listening on port 3001'));