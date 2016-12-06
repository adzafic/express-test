var express = require('express');
var router = express.Router();
var mail = require('./../modules/mail');


router.get('/', function(req, res, next) {
  mail.setFrom("from@form.com");
  mail.setSubject("add file");
  //mail.setAttachment("./my_file.txt");
  //console.log(mail);
  //next();
  if (!mail.send()) {
    res.send({"enviado":"true"});
  }else{
    res.send({"enviado":"false"});
  }
});

module.exports = router;
