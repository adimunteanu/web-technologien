let books = require("./books.json");
const express = require("express");
const app = express();
const port = 8001;

books = books.sort((a, b) => a.title.localeCompare(b.title));

app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/books", function (req, res) {
  const from = req.query.from || 0;
  const to = req.query.to || books.length;

  res.type("application/json");
  res.status(200);
  res.send(JSON.stringify(books.slice(from, to)));
});

app.get("/book/:id", function (req, res) {
  const id = parseInt(req.params.id);

  const filteredBooks = books.filter((book) => book.isbn13 === id);

  if (filteredBooks.length > 0) {
    res.type("application/json");
    res.status(200);
    res.send(JSON.stringify(filteredBooks[0]));
  } else {
    res.type("application/json");
    res.status(404).end();
  }
});

app.post("/book", function (req, res) {
  const newBook = req.body;

  const filteredBooks = books.filter((book) => book.isbn13 === newBook.isbn13);

  if (filteredBooks.length > 0) {
    res.type("application/json");
    res.status(400).end();
    res.type("application/json");
  } else {
    res.status(201);
    books.push(newBook);
    res.send(JSON.stringify(newBook));
  }
});

app.put("/book/:id", function (req, res) {
  const newBook = req.body;
  const id = parseInt(req.params.id);

  const filteredBooks = books.filter((book) => book.isbn13 === newBook.isbn13);

  if (!filteredBooks.length > 0) {
    res.type("application/json");
    res.status(404).end();
    res.type("application/json");
  } else {
    res.status(200);
    books = books.map((book) => (id === book.isbn13 ? newBook : book));
    res.send(JSON.stringify(newBook));
  }
});

app.delete("/book/:id", function (req, res) {
  const id = parseInt(req.params.id);

  const filteredBooks = books.filter((book) => book.isbn13 === id);

  if (!filteredBooks.length > 0) {
    res.type("application/json");
    res.status(404).end();
    res.type("application/json");
  } else {
    res.status(200);
    books = books.filter((book) => book.isbn13 !== id);
    res.end();
  }
});

app.get("/book/:id/:property", function (req, res) {
  const id = parseInt(req.params.id);
  const property = req.params.property;

  const filteredBooks = books.filter((book) => book.isbn13 === id);
  const book = filteredBooks[0];

  if (book && book[property]) {
    res.type("application/json");
    res.status(200);
    res.send(JSON.stringify({ [property]: book[property] }));
  } else {
    res.type("application/json");
    res.status(404).end();
  }
});

app.put("/book/:id/:property", function (req, res) {
  const id = parseInt(req.params.id);
  const property = req.params.property;
  const newProperty = req.body;

  const filteredBooks = books.filter((book) => book.isbn13 === id);
  let updatedBook = filteredBooks[0];

  if (updatedBook && updatedBook[property]) {
    updatedBook = { ...updatedBook, [property]: newProperty[property] };
    books = books.map((book) => (id === book.isbn13 ? updatedBook : book));
    res.type("application/json");
    res.status(200);
    res.send(JSON.stringify(newProperty));
  } else {
    res.type("application/json");
    res.status(404).end();
  }
});

app.listen(port, () => {
  console.log("Server running at 8001");
});
