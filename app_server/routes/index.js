const express = require('express');
const router = express.Router();
const ctrlLogin = require('../controllers/login');

router.get('/', ctrlLogin.login);



module.exports = router;
