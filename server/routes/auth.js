const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Define as rotas de autenticação
router.post('/registrar', authController.registrar);
router.post('/login', authController.login);

module.exports = router;
