import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';

// Initialisation des variables
dotenv.config();
// 
const { Client } = pg;
// Création d'un client postgres
const client = new Client({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    port: process.env.PGPORT
});
// Connexion à la base de données
client
    .connect()
    .then(con => console.log('Connexion reussie'))
    .catch(err => console.log(err));

// Initialisation de Express
const app = express();
const port = process.env.PORT || 4000

app
    .use(express.static('public'))
    .use(express.urlencoded())
    .set('view engine', 'ejs')
    .set('views', 'views')
    .get('/', (req, res) => {
        res.end('Hello Word')
    })
    .get('/table', (req, res) => {
        client
            .query('SELECT * FROM persona ORDER BY id')
            .then(rep => {
                res.render('table', { array: rep.rows })
            })
            .catch(e => console.log('error'));
    })
    .get('/addform', (req, res) => {
        res.render('addform');
    })
    .get('/updateform/:id', (req, res) => {
        if (isNaN(req.params.id)) res.redirect('/table');
        else {
            client
                .query("SELECT * FROM persona WHERE id=$1", [req.params.id])
                .then(personas => {
                    if (personas.rows.length == 0) res.redirect('/table');
                    else
                        res.render('updateform', { persona: personas.rows[0] });
                })
                .catch(err => res.redirect('/table'))
        }
    })
    .post('/update', (req, res) => {
        if (isNaN(req.body.id)) res.redirect('/table');
        else {
            client
                .query("UPDATE persona SET nom=$1, prenom=$2, genre=$3  WHERE id=$4",
                    [req.body.nom || '', req.body.prenom || '', req.body.sexe || 'M', req.body.id]
                )
                .then(() => {
                    res.redirect('/table');
                })
                .catch(err => res.redirect('/table'))
        }
    })
    .post('/saveform', (req, res) => {
        if (req.body.prenom && req.body.nom && req.body.genre && req.body.email) {
            client
                .query("INSERT INTO persona(prenom,nom,genre,email) VALUES($1,$2,$3,$4)",
                    [req.body.prenom, req.body.nom, req.body.genre, req.body.email])
                .then(() => {
                    res.redirect('/table')
                })
                .catch(err => res.redirect('/addform'))
        } else res.redirect('/addform')
    })
    .get('/delete/:id', (req, res) => {
        if (isNaN(req.params.id)) res.redirect('/table');
        else {
            client
                .query("DELETE FROM persona WHERE id=$1", [req.params.id])
                .then(() => {
                    res.redirect('/table');
                })
                .catch(err => res.redirect('/table'))
        }
    })

app.listen(port, () => {
    console.log(`Fait avec succes au port ${port} `);

})

