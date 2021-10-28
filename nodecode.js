var express = require('express');
let bodyParser = require('body-parser');
var app = express();

const absolutePath = __dirname + "/views/index.html";
const absolutePublicPath = __dirname + "/public";

const jsObject = {"message": "Hello json"};
let jsObjectServed = jsObject;

app.use((req, res, next) => {
  console.log(req.method + " "+ req.path + " - " + req.ip);
  next();
});

app.use("/public", express.static(absolutePublicPath));

app.use(bodyParser.urlencoded({extended: false}));

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase"){
  jsObjectServed.message = jsObject.message.toUpperCase();
}
  res.json(jsObjectServed);
});

app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  console.log(req.time);
  next();
}, (req, res) => {
  res.json({"time": req.time})
});

app.get("/:word/echo", (req, res, next) => {
  let wordEcho = req.params.word;
   res.json({"echo": wordEcho})
});

app.route("/name").get((req, res) => {
   res.json({"name": req.query.first + " " + req.query.last})
}).post((req, res) => {
   res.json({"name": req.body.first + " " + req.body.last})
});


app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});




console.log("Hello World");




































 module.exports = app;
