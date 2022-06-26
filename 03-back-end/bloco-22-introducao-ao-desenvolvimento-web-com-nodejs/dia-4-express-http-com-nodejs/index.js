const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/greetings', (req, res) => {
    const { name, age } = req.body;
    return +age > 17 ? res.status(200).json({ "message": `Hello, ${name}!` } ) : res.status(401).json({ "message": "Unauthorized" });
});

app.listen(3001, () => console.log('listening on port 3001'));