var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('what it do');
  res.render('index', {title: 'IVEA'});
});

module.exports = router;
