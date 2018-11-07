const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('express app is up and running');
});

app.listen(3000);