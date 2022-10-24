const express = require('express');
const app = express();
const port = process.env.PORT || 4000

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.end('Hello Word')
});

app.listen(port, () => {
    console.log(`Fait avec succes au " + ${port} `);

})

