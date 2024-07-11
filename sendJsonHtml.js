const express = require("express");
const app = express();
const port = 8006 ;
// res.send() closes the connection
// sending html
app.get("/html" , (req , res) => {
    res.send('<button>Hi! I am a server</button>');
})

// sending json --> when we send js object as response , it is automatically stringified to json format .

// You can also pass it as array of object , we can add multiple objects to it , it is then converted to json. 
app.get("/object" ,(req , res) => {
  res.send({
    id : 1223,
    name : 'Prathamesh',
  });
})


app.get("/arrayofobject" ,(req , res) => {
  res.send([{
    id : 1223,
    name : 'Prathamesh',
  },{
    id : 4324,
    name : 'Naman',
  },{
    id : 2334,
    name : 'Atharva',
  }]);
});


// instead of send ,we can use res.json() which converts object as well as non-object into json , such as undefined and null ,(if we print any variable);
const name = 'Prathamesh';
app.get("/json" , (req , res) => {
   res.json({name});
})

app.listen(port , '127.0.0.1' , () => {
  console.log('Server Started!');
})