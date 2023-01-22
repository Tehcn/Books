const express = require('express');
const fs = require('fs');
const app = express();

app.use('/static', express.static('public/static'));
let opt = { root: __dirname+'/public' };
let books = { root: __dirname+'/public/books' };

app.get('/', (req, res) => {
    res.sendFile('index.html', opt);
});

app.get('/book/:id', (req, res) => {
    res.sendFile(req.params.id+".html", books);
});

app.get('/books', async (req, res) => {
    let books = fs.readdirSync("public/books").flatMap((item) => {
        const path = `${item.replace('.html', '')}`;
        return path;
    });
    res.setHeader('ContentType', 'application/json');
    res.send({names: books});
})

app.listen(3000, () => {
    console.log('server started');
});
