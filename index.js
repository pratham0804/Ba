// type nul > add.js   --> to create nwe file 
// we cannot create npm pacakage for directoru with capitals in its name 


const express = require('express');
const app = express();

app.get("/" , (req,res) => {
  res.send("Hello World from the express");
});

app.get('/about' , (req, res) => {
  res.send('Hello  fromm about us page');
})

app.listen(8002 , () => {
  console.log('Server started!');
});
