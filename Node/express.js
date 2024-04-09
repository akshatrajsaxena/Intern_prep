const express = require('express');
const app = express();
const port = 3000;

app.get('/about', (req,res) => {
    res.send('About page\n');
});

app.get('/', (req,res) => {
    res.send('Hello World\n');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
