const express = require('express');
const router  = express.Router();
const { Home } = require('../controllers/home');

router.get('/',Home);

module.exports = router;