const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended: true}));
app.listen(3000, function() {
  console.log('listening on 3000')
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});
app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!');
  res.send(req.body);
});
MongoClient.connect('mongodb://nikShc:fuckfuck@ds056559.mlab.com:56559/monbase', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})