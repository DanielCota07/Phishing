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
  console.log(typeof(ans))
  console.log(ans)
  let good = ans.confidences[0]
  let bad = ans.confidences[1]
  if (good > bad) {
    res.sendFile(path.join(__dirname, '/god.html'));
  }
  else {
    res.sendFile(path.join(__dirname, '/bad.html'));
  }
});

app.listen(port);
console.log('Server started at http://localhost:' + port);