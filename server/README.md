
# 🔐 Sistema de Login com Node.js, PostgreSQL, JWT e Bcrypt

Este é um projeto simples de autenticação com **Node.js**, **PostgreSQL**, **JWT** e **Bcrypt** — sem utilizar ORMs como Sequelize. Ideal para fins educacionais ou projetos básicos.

---

## 📁 Estrutura de Pastas

```
jwt-login/
├── .env                       # Variáveis de ambiente (credenciais e porta)
├── db.js                      # Conexão com PostgreSQL
├── package.json               # Gerenciador de dependências
├── server.js                  # Arquivo principal da aplicação
├── routes/
│   └── auth.js                # Rotas de autenticação (login e registro)
├── controllers/
│   └── authController.js      # Lógica de autenticação
```

---

## ✅ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [pg (node-postgres)](https://node-postgres.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## ⚙️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/jwt-login.git
cd jwt-login
```

### 2. Instale as dependências (caso não clone com o node_modules)

```bash
npm init -y
npm install express pg sequelize bcryptjs jsonwebtoken dotenv
```

### 3. Crie o banco de dados PostgreSQL

Use este script SQL no pgAdmin ou DBeaver:

```sql
CREATE DATABASE jwt_login;

\c jwt_login;

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  senha TEXT NOT NULL
);
```

### 4. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz com os seguintes dados:

```
PORT=3000
DB_USER=seu_usuario_postgres
DB_PASSWORD=sua_senha_postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=jwt_login
JWT_SECRET=chave_secreta_segura
```

---

## ▶️ Como Rodar o Projeto

```bash
node server.js
```

Servidor iniciado em:  
[http://localhost:3000](http://localhost:3000)

---

## 🧪 Testando a API

Você pode usar o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

### 📌 Registro

**POST** `/api/auth/register`

```json
{
  "nome": "João",
  "email": "joao@email.com",
  "senha": "123456"
}
```

### 📌 Login

**POST** `/api/auth/login`

```json
{
  "email": "joao@email.com",
  "senha": "123456"
}
```

**Resposta esperada:**

```json
{
  "mensagem": "Login realizado com sucesso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

---

## 🔐 Sobre o Token JWT

- Após o login, um **token JWT** é gerado.
- Esse token pode ser usado para proteger rotas privadas.
- Ele contém o ID do usuário e expira em 1 hora.

---

## 📚 Explicação Simples do Código

- `bcryptjs`: usado para **criptografar** senhas.
- `jsonwebtoken`: gera e valida tokens JWT.
- `pg`: permite executar comandos SQL diretamente no PostgreSQL.
- `dotenv`: carrega variáveis de ambiente do `.env`.
- O código não usa ORM, tudo é feito com comandos SQL simples e diretos.

