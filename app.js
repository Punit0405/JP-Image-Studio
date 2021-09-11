const express = require("express");
require('dotenv').config();
const mysql = require('mysql');
const fs = require("fs");
const path = require("path");
const app = express();
const port =8080;






app.use(express.urlencoded());

const gallary=fs.readFileSync('./gallary.html');
const contact=fs.readFileSync('./contact.html');
const index=fs.readFileSync('./index.html');
const about=fs.readFileSync('./about.html');
var connection = mysql.createConnection({
  host:process.env.DB_HOST,
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");});
  
  
  
  
// // For serving static files
app.use('/static', express.static('static'))


 
// Our pug demo endpoint

app.get('/',(req,res)=>{
    res.status(200).end(index);
});

app.get('/home',(req,res)=>{
    res.status(200).end(index);
});


app.get('/contact',(req,res)=>{
    res.status(200).end(contact);
});

app.get('/about',(req,res)=>{
    res.status(200).end(about);
});

app.get('/gallery',(req,res)=>{
    res.status(200).end(gallary);
});

app.post('/submit',(req,res)=>{
    let FirstName = req.body.FirstName;
    let LastName = req.body.LastName;
    let Phone = req.body.Phone;
    let Email = req.body.Email;
    let Message = req.body.Message;
    let Subject = req.body.Subject;
    let reference = req.body.reference;

    const formsql =`INSERT INTO contactdata ( FirstName, LastName, Phone, Email, Message, Subject, Reference, Date) VALUES ( '${FirstName}', '${LastName}', '${Phone}', '${Email}', '${Message}', '${Subject} ', '${reference} ', current_timestamp())`;

    connection.query(formsql, function (err, result) {
        if (err) throw err;
        console.log("formsql Row Insterted");
      });

    

   
    
  res.status(200).end(contact);
        
});



app.listen();


