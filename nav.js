const express = require("express");
const app =  express();
const port = 8004;
app.get('/' , (req , res) => {
  res.write('Welcome to my Homepage');
  res.send();
})
app.get('/contact' , (req , res) => {
  res.write('Welcome to my ContactUs Page');
  res.status(200).send();
})
app.get('/about' , (req , res) => {
  res.write('Welcome to my About Page');
  res.status(200).send();
});

app.listen(port , '127.0.0.1' ,() => {
    console.log('Server Started !');
})

