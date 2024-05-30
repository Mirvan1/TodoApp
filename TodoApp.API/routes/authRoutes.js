const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { loginValidation, registerValidation } = require('../validation/validation');

router.post('/register', registerValidation,register);
router.post('/login',loginValidation,login);

module.exports = router;
