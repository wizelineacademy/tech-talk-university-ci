const express = require('express');
var engine = require('ejs-locals');
const app = express();
const port = (process.env.PORT !== undefined) ? process.env.PORT : 3000;
const version = (process.env.VERSION !== undefined) ? process.env.VERSION : 'local';

// Add images
const images = path.resolve(__dirname, 'images');
app.use(express.static(images));

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
