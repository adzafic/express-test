var express = require('express');
var router = express.Router();
var functions = require('./functions');
var loginRequired = functions.loginRequired;
var adminRequired = functions.adminRequired;
/* GET home page. */
router
  .get('/', loginRequired, adminRequired, function(req, res, next) {
    var array = ['Home','Mail','Usuarios']
    res.render('index', { title: req.user.name });
    /*res.send({
      user:req.user,
      auth: req.isAuthenticated()
    });*/
  })
  .get('/403',function(req, res, next) {
      res.render('403');

  });

module.exports = router;
