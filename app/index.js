const express = require('express');
const app = express();
const port = process.env.PORT;

const version = NODE.env.VERSION;

app.get('/', (req, res) => res.send('Holiiii :) version: ' + version));
app.listen(port, () => console.log(port));
