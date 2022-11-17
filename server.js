const express = require('express');
const path = require('path');
const http = require('http');
const prediction = require('./functions/func')

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/:id', function(req, res) {
  console.log(req.params['id']);
  res.setHeader('Content-Type', 'application/json');
  //res.end(JSON.stringify(prediction.main('google.com/mail/u/1/#inbox')));
  res.end(JSON.stringify(prediction.main(decodeURIComponent(req.params['id']))));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);