const express = require('express');
const authRoutes = require('./routes/auth');
const dotenv = require('dotenv');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/registrar', authController.registrar);
router.post('/login', authController.login);

module.exports = router;