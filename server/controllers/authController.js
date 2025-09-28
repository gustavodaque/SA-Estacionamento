const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.registrar = async (req, res) => {
  try {
    const { nome, email, senha, cpf, telefone } = req.body;

    // Verifica se já existe usuário com mesmo email ou cpf
    const usuarioExistente = await User.buscarPorEmail(email);
    if (usuarioExistente) {
      return res.status(400).json({ erro: 'E-mail já cadastrado.' });
    }

    const novoUsuario = await User.criarUsuario({ nome, email, senha, cpf, telefone });

    res.status(201).json({
      mensagem: 'Usuário criado com sucesso!',
      usuario: novoUsuario
    });
  } catch (err) {
    res.status(500).json({
      erro: 'Erro ao criar o usuário',
      detalhes: err.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await User.buscarPorEmail(email);

    if (!usuario) {
      return res.status(400).json({ erro: 'Usuário não encontrado.' });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ erro: 'Senha incorreta.' });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      mensagem: 'Login realizado com sucesso!',
      token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        cpf: usuario.cpf,
        telefone: usuario.telefone
      }
    });
  } catch (err) {
    res.status(500).json({
      erro: 'Erro ao realizar login',
      detalhes: err.message
    });
  }
};