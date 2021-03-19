const express = require('express');
const path = require('path');
const engine = require('ejs-locals');
const app = express();
const port = (process.env.PORT !== undefined) ? process.env.PORT : 3000;
const version = (process.env.VERSION !== undefined) ? process.env.VERSION : 'local';

// Add images
const static = path.resolve(__dirname, 'public');
app.use(express.static(static));

// use the ejs template engine
app.set('view engine', 'html');
app.engine('html', engine);

app.get('/', (req, res) => {
    res.render('index', {
        version: version
    });
});

app.get('/health', (req, res) => {
    res.send('OK')
});

app.listen(port, () => console.log(port));
