const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 80;

  app.use(express.urlencoded());

const wp=fs.readFileSync('./index.html');
fs.writeFileSync("code.txt",wp);

// // For serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))
 
// Our pug demo endpoint

app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
});
app.get('/home',(req,res)=>{
    res.status(200).render('index.pug');
});

app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug');
});

app.post('/submit',(req,res)=>{
    let Bridename = req.body.BrideName;
    let GroomName = req.body.GroomName;
    let EventDate = req.body.EventDate;
    let VenueDetails = req.body.VenueDetails;
    let Phone = req.body.Phone;
    let Email = req.body.Email;
    

    let Details=`Groom Name: ${GroomName} 
                 Bride Name: ${Bridename} 
                 Event Date: ${EventDate} 
                 Venue Details : ${VenueDetails} 
                  Phone:     ${Phone} 
                  Email:     ${Email}`
    
    fs.writeFileSync('Details.txt', Details);
});



app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});


