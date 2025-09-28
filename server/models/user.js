const pool = require('../db');
const bcrypt = require('bcryptjs');

async function criarUsuario({ nome, email, senha, cpf, telefone }) {
  const senhaCriptografada = await bcrypt.hash(senha, 10);
  const query = `
    INSERT INTO usuarios (nome, email, senha, cpf, telefone)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, nome, email, cpf, telefone
  `;
  const values = [nome, email, senhaCriptografada, cpf, telefone];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

async function buscarPorEmail(email) {
  const query = `SELECT * FROM usuarios WHERE email = $1`;
  const { rows } = await pool.query(query, [email]);
  return rows[0];
}

module.exports = {
  criarUsuario,
  buscarPorEmail,
};