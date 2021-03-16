const express = require('express');
const app = express();
const port = process.env.PORT;

const version = process.env.VERSION;

console.log(process.env);

app.get('/', (req, res) => res.send('Holiss :) version: ' + version));
app.get('/health', (req, res) => res.send('OK'));

app.listen(port, () => console.log(port));
