const auth = require('./auth')
const express = require('express');

const app = express();
app.use(express.json());

app.get('/index', (req, res) => { 
  res.send('/ap/index - SonarSource Code Challenge Day 4')
});

app.get('/admin', (req, res) => {
  res.send("/api/admin - Welcome The Admin Page")
});
  
app.post('/createUser', (req, res) => {
  let jwt = auth.generateToken( { username: req.body.username } );
  res.json(jwt)
});


module.exports = app;
