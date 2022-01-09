var express = require('express');
var emailRouter = express.Router();
var nodemailer = require('nodemailer');


emailRouter.get('/home', function(req, res, next) {
  res.render('mail-form', { title: 'Send Mail with nodejs' });
});


emailRouter.post('/mailer', function(req, res){
   
    var receiver = req.body.to;
    var subject = req.body.subject;
    var message = req.body.message;
    
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure:false,
        requireTLS:true,
        auth: {
          user: 'rrmrev@gmail.com', 
          pass: 'rrmrev123'  
        }
      });
      
      var mailOptions = {
        from: 'rrmrev@gmail.com',
        to: receiver,
        subject: subject,
        text: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email was sent successfully: ' + info.response);
        }
      });
      res.render('mail-form', { title: 'Send Mail with nodejs' });
})
module.exports = emailRouter;