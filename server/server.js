var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil');
})
.get('/admin',function(req,res) {
	res.setHeader('Content-Type','text/plain');
	res.end('Admin DTC');
});

app.listen(8080);