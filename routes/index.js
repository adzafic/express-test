var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var array = ['Home','Mail','Usuarios']
  res.render('index', { title: 'Express' });
});

module.exports = router;
