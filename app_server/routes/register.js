const express = require('express');
const router = express.Router();

const ctrlRegis = require('../controllers/register');

router.get('/', ctrlRegis.register);




module.exports = router;