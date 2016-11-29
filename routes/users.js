var express = require('express');
var router = express.Router();

const db = require("./../bin/mysql");
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  db("users").then((users)=> {
    res.send(users);
  })
  .catch((err) =>{
    res.send(err);
  });
});

module.exports = router;
