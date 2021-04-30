const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  let num1 = Number(req.body.num1); //uses name attr from html input
  let num2 = Number(req.body.num2);
  let answer = num1 + num2;
  res.send("Your answer is " + answer);
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
