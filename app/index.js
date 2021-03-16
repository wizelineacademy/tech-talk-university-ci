const express = require('express');
const path = require('path');
const app = express();
const port = (process.env.PORT !== undefined) ? process.env.PORT : 3000;
const version = (process.env.VERSION !== undefined) ? process.env.VERSION : 'local';
const templates = path.resolve(__dirname, 'templates');
const index = path.resolve(templates, 'index.html');

app.get('/', (req, res) => {
    //res.send('Holiss :) version: ' + version)
    res.sendFile(index);
});

app.get('/health', (req, res) => {
    res.send('OK')
});

app.listen(port, () => console.log(port));
