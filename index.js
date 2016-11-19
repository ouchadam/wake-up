const express = require('express');
const app = express();
const httpServer = require('http').Server(app);
const wol = require('wake_on_lan');
const http = require('request');

applyBasicAuth();

app.use("/public", express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/wake', function(req, res){
  wol.wake('94:DE:80:AA:CF:63');
  res.end();
});

app.get('/shutdown', function(req, res){
  http('http://192.168.0.8:3000', function(err, res) {
    res.end();
  });
});

httpServer.listen(3001, function(){
  console.log('listening on *:3001');
});

function applyBasicAuth() {
  const secrets = require('./secrets');
  if (secrets) {
    const basicAuth = require('basic-auth-connect');
    app.use(basicAuth(secrets.auth.username, secrets.auth.password));
  }
}
