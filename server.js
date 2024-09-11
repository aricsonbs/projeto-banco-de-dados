const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'feedback_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL.');
});

// Rota para processar o feedback
app.post('/submit-feedback', (req, res) => {
    const { name, email, rating, comments } = req.body;

    const query = 'INSERT INTO feedbacks (name, email, rating, comments) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, rating, comments], (err, result) => {
        if (err) {
            res.status(500).json({ success: false });
        } else {
            res.status(200).json({ success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});
