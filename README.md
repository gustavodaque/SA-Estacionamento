Membros: Kauã, Ana, Beatriz e Gustavo

Backend aplicativo de estacionamento Floripa

Estrutura e Funcionalidade do Projeto

Nosso projeto de back-end utiliza Node.js para criar um servidor, Express para roteamento e Sequelize como ORM (Object-Relational Mapping) para interagir com o banco de dados. Essa combinação nos permite construir uma API robusta e organizada.

Servidor e Rotas

O arquivo server.js é o ponto de entrada da nossa aplicação. Ele inicia o servidor, define a porta de escuta e carrega as dependências necessárias, como o Express e o dotenv, que gerencia as variáveis de ambiente. As rotas da nossa aplicação estão definidas em routes/auth.js. Nelas, direcionamos as requisições para os controladores apropriados. Por exemplo, a rota POST /registrar lida com a criação de um novo usuário.

Modelos de Dados

Em models/user.js, definimos o modelo de dados para a entidade User. Esse modelo especifica os campos nome, email, senha, cpf e telefone. Usamos o Sequelize para configurar as propriedades de cada campo, como o tipo (STRING), e aplicar validações, como unique: true para o email e cpf. Um ponto importante aqui é o uso de um hook beforeCreate. Antes de um novo usuário ser criado, esse hook é executado para criptografar a senha usando a biblioteca bcrypt. Isso garante que as senhas não sejam armazenadas em texto simples no banco de dados, aumentando a segurança.

Conexão com o Banco de Dados

Os arquivos db.js e models/index.js são responsáveis pela conexão com o banco de dados. Estamos utilizando o PostgreSQL e o Sequelize para gerenciar essa conexão, configurando as credenciais através das variáveis de ambiente (process.env).

Controlador de Autenticação

O controllers/authController.js contém a lógica de negócios para a nossa rota de registro. A função registrar recebe os dados do corpo da requisição e, usando a função User.create do Sequelize, tenta criar um novo usuário no banco de dados. Em caso de sucesso, ela retorna um status 201 com a mensagem "Usuário criado com sucesso!". Se ocorrer um erro, ele é capturado e retorna um status 500 com uma mensagem de erro detalhada.

Comando npm não reconhecido

O erro npm não é reconhecido como um comando interno ou externo, programa operável ou arquivo em lote` indica que o sistema não consegue encontrar o executável do Node.js e do npm.
Solução: Verifique se o Node.js está instalado corretamente no seu computador. Você pode fazer o download no site oficial: https://nodejs.org/.
Durante a instalação, certifique-se de marcar a opção para adicionar o Node.js e o npm ao PATH do sistema.
Se o Node.js já estiver instalado, feche e reabra o terminal ou o Visual Studio Code para que as alterações no PATH tenham efeito.

Pacotes não instalados

O projeto depende de pacotes como express e dotenv, que não parecem ter sido instalados. Isso causará erros de execução, pois o servidor não conseguirá encontrar as bibliotecas necessárias.

