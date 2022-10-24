const express = require('express');
const app = express();
const port = process.env.PORT || 4000

app.use(express.static('public'));


app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.end('Hello Word')
});

app.get('/table', (req, res) => {
    res.render('table');
})

app.listen(port, () => {
    console.log(`Fait avec succes au ${port} `);

})

