const express = require('express'); 
const path = require ('path'); 

const bodyParser = require('body-parser'); 


const app = new express; 
app.use(bodyParser.urlencoded({extended:true}));

app.set('views','./views'); 
app.set('view engine','ejs'); 
var emailRouter = require('./routes/email-route.js');
app.use('/', emailRouter);
 

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Ready on 3000"); 
});
