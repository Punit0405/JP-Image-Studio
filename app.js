const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 8080;
const accountSid = 'ACb6b5d28cebc0b8ceeec993645392f774'; 
const authToken = 'b6a8d146c1e18bbbd87f2c5863d0feab'; 
const client = require('twilio')(accountSid, authToken); 

  app.use(express.urlencoded());

const gallary=fs.readFileSync('./gallary.html');
const contact=fs.readFileSync('./contact.html');
const index=fs.readFileSync('./index.html');
const about=fs.readFileSync('./about.html');

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

app.get('/gallary',(req,res)=>{
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

    

    let Details=`First Name: ${FirstName}\nLast Name: ${LastName}\nSubject: ${Subject}\nMessage : ${Message}\nPhone: ${Phone}\nEmail: ${Email}\nreference: ${reference}`
    
    client.messages.create({ 
         body: `Form Filled On JP IMAGING STUDIO!!.Here Are The Details!.\n${Details}`, 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+919265517932'  
       }) 
      .then(message => console.log(message.sid)) 
      .done();
    
  res.status(200).end(contact);
        
});



app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});


