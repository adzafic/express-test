var express = require('express');
var router = express.Router();

const db = require("./../bin/mysql");
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  db("users").then((users)=> {
    res.render("users",{
      title: "All Users",
       users
    });
  })
  .catch((err) =>{
    res.send(err);
  });
});

router.get('/:id',function(req,res,next){
  const id = req.parmas.id;
  db("users")
    .where("id",id)
    .then((users)=>{
      res.render("users",{
        title: "User",
         users
      });
    })
    .catch((err) =>{
      res.send(err);
    });
});

module.exports = router;
