const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

var db;
MongoClient.connect('mongodb://nikShc:fuckfuck@ds056559.mlab.com:56559/monbase', (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000');
  });
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
});

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to database');
    res.redirect('/');
  });
});

app.put('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndReplace({_id: new mongodb.ObjectID(req.body._id)}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/quotes', (req, res) => {
  db.collection('quotes').deleteOne({ _id: new mongodb.ObjectID(req.body._id) },
    (err, result) => {
      if (err) return res.send(500, err)
      if (result.deletedCount == 1) res.send('Succesfull');
      else res.send('Failed');
    })
})