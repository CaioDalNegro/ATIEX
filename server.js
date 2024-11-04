const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 7000;

// Middleware para permitir CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Permite todas as origens. Ajuste para especificar origens específicas, se necessário.
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Métodos permitidos
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Serve arquivos estáticos da pasta public
app.use(express.static('public'));

// Rota para o jogo de perguntas
app.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'inicio', 'inicio.html'));
});

// Rota para index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
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
