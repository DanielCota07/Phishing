const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const prediction = require('./functions/func');
const { response } = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use('/css', express.static(path.resolve(__dirname, 'css')))

let urlencodedParser = bodyParser.urlencoded({ extended: false })

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/prediction', urlencodedParser, async (req, res, next) => {
  let url = req.body.url
  console.log(url)
  let ans = await prediction.main(url);
  console.log(ans)
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(ans));
});

app.get('/prediction/:id', async (req, res) => {
  ///console.log(req.params['id']);

  let ans = await prediction.main('google.com/mail/u/1/#inbox');
  console.log(ans)
  res.end(JSON.stringify(ans));
  ///res.end(JSON.stringify(prediction.main(decodeURIComponent(req.params['id']))));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);