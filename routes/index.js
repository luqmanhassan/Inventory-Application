const express = require('express');
const router = express.Router();
const Controller = require('../controllers/index.js');

/* GET home page. */
router.get('/', Controller.Home);

module.exports = router;
