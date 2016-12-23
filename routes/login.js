var express = require('express');
var passport = require('passport');
require('./../config/passport');
var router = express.Router();
/* GET home page. */

router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post('/login',   passport.authenticate("local",{
    successRedirect: '/',
    failureRedirect: '/login'
}));
router.get('/logout', function(req, res, next){
  req.session.destroy((err) => {
    res.redirect('/login');
  });
});
/*router.get('/set', function(req, res, next) {
  req.session.name = "Adnan";
  res.send(req.session);
});*/

module.exports = router;
