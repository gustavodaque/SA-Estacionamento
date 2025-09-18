exports.registrar = async (req, res) => {
  try {
      const { nome, email, senha, cpf, telefone } = req.body;
      const usuario = await User.create({ nome, email, senha, cpf, telefone });

      res.status(201).json({
          mensagem: 'Usuário criado com sucesso!',
          usuario
      });
  } catch (err) {
      res.status(500).json({
          erro: 'Erro ao criar o usuário',
          detalhes: err.message
      });
  }
};
