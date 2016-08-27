var express = require('express')
var server = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


var port = process.env.PORT || 8080;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors());
server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.listen(port, function(){
  console.log('Now running on port...', port);
});
