// type nul > add.js   --> to create nwe file 
// we cannot create npm pacakage for directoru with capitals in its name 

const path = require('path');
const express = require('express');
const app = express();

// html ka path nahi dena hai , uske folder tak ka hi , then uske andar tu kitni bhi frontend ki files add kr .


// name your main file as index.html , otherwise it is not displayed on page , instead it returns the data from the home route.

const staticWebsitePath = path.join(__dirname , './public');


// built in middleware
app.use(express.static(staticWebsitePath));

app.get("/" , (req,res) => {
  res.send("Hello World from the express");
});

// app.get('/about' , (req, res) => {
//   res.send('Hello  fromm about us page');
// })

app.listen(8008 , () => {
  console.log('Server started!');
});
