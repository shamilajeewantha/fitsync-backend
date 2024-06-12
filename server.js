const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

const keyValuePairs = [
    { key: 1, value: 100 },
    { key: 2, value: 200 },
    { key: 3, value: 300 },
    { key: 4, value: 400 }
];

app.get('/integer-key-value-pairs', (req, res) => {
    res.json(keyValuePairs);
    console.log('GET /integer-key-value-pairs');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
