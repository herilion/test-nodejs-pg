<!-- markdownlint-disable no-inline-html -->
<h1 align='center' >test-nodejs-pg</h1>

<p > Une application en JavaScript utilisant l'environnement <br> NodeJs pour se connecter à une base de données PostgreSQL</p>

> L'utilisation de l'application nécessite une version de Nodejs 16.x, se rassurer que npm est aussi installer
>
> Une base de données (PostgreSQL) doit être créée au préalable, avec une table persona(id, nom, prenom, genre, email)

<h3>Installation</h3>

* __Clôner le repertoire avec__ ```git```

```bash
git clone https://github.com/herilion/test-nodejs-pg.git
```

* __Installer les modules nécessaires avec__ ```npm```

```bash
npm install
```

<h3>Configuration</h3>

La configuration se fait dans le fichier ```.env``` à la racine du projet. Il devra contenir les informations de connexion à la base de données à utiliser.

```bash
PGHOST='DATABASE_SERVER_HOST'
PGPORT='DATABASE_SERVER_PORT'
PGUSER='USERNAME_TO_USE'
PGPASSWORD='USER_PASSWORD'
PGDATABASE='DATABASE_NAME'
```

Vous pouvez personnaliser le port sur lequel le serveur sera demarré en ajoutant la ligne suivante dans le fichier ```.env```

```bash
PORT='PORT_NUMBER'
```

<h3>Utilisation</h3>

🌟Utiliser la ligne de commande pour demarrer le serveur, par defaut au port 4000,

```bash
npm start
```

🌍[http://localhost:4000](http://localhost:4000 "Ouvrir")

🛑 Le serveur peut être arrêter à tout moment avec le racourci ```ctrl+c``` sur la ligne de commande

<br>

💻[Annette Bwemere](https://github.com/Annette-Bwemere-Salama)

🖥️[Alexandre Chambu](https://github.com/lexnotor)

🖱️[Heritier Lionge](https://github.com/herilion)
