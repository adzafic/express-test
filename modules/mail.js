var mail = (function(){
  const helper = require('sendgrid').mail;
  const config = require('./../config/config.js');
  const sg = require('sendgrid')(config.SENDGRID_API_KEY);
  const fs = require('fs');

  var from_email = new helper.Email('no.replay@localhost.com');
  var to_email = new helper.Email(config.TO_MAIL);
  var subject = 'Hello World';
  var content = new helper.Content('text/html', '<h1>Hello, Email!</h1>');
  var mail = new helper.Mail(from_email, subject, to_email, content);
  var personalization = new helper.Personalization();
  var attachment = new helper.Attachment();

  function send(){
    var request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON(),
    });
    sg.API(request, function(error, response) {
      return error;
    });
  }


  function setFrom(value){
    from_email=new helper.Email(value);
    mail.setFrom(from_email);
    //mail = new helper.Mail(from_email, subject, to_email, content);
  }

  function setTo(value){
    to_email = new helper.Email(value);
    personalization.addTo(to_email);
    mail.addPersonalization(personalization);
    //mail = new helper.Mail(from_email, subject, to_email, content);
  }

  function setSubject(subject){
    mail.setSubject(subject)
    //mail = new helper.Mail(from_email, subject, to_email, content);
  }

  function setContent(type,text){
    content = new helper.Content(type, text);
    mail.addContent(content);
    //mail = new helper.Mail(from_email, subject, to_email, content);
  }

  function setAttachment(file){
    var file = fs.readFileSync(file);
    var base64File = new Buffer(file).toString('base64');
    attachment.setContent(base64File);
    attachment.setType('application/text');
    attachment.setFilename('my_file.txt');
    attachment.setDisposition('attachment');
    mail.addAttachment(attachment);
  }

  return {
  	send,
    setFrom,
    setTo,
    setSubject,
    setContent,
    setAttachment
  }
})();

module.exports = mail;
