// Importa as dependências
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rotas de autenticação
app.use('/api/auth', authRoutes);

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
