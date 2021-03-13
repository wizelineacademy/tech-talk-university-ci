const express = require('express');
const app = express();
const port = process.env.PORT;

const version = process.env.VERSION;

app.get('/', (req, res) => res.send('Holiss :) version: ' + version));
app.listen(port, () => console.log(port));
