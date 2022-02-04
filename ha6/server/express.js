let books = require('./books.json');
const express = require('express')
const app = express();
const port = 8001;

books = books.sort((a, b) => a.title.localeCompare(b.title));

app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

// block to be deleted
app.use(function (req, res, next) {
  res.send('Hello client!');
});

// TODO: implement me

app.listen(port, () => {});