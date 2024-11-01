const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 5000;

// Serve arquivos estáticos da pasta public
app.use(express.static('public'));

// Rota para o jogo de perguntas
app.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'inicio', 'inicio.html'));
});

// Rota para index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'jogo', 'index.html'));
});

// API para perguntas
app.get('/api/perguntas', (req, res) => {
    fs.readFile('questions.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Erro ao ler o arquivo JSON:", err);
            res.status(500).json({ error: 'Erro ao obter perguntas.' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
