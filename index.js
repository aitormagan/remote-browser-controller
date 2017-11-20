var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var winston = require('winston');

const PORT = 3000;

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({'timestamp': true})
  ]
});

// EXPRESS CONFIGRATION

app.use(bodyParser.json());
app.use('/web', express.static('static'));

app.get('/', function(req, res) {
  res.redirect('/web');
});

app.post("/api/show", function(req, res) {
  logger.log('info', 'Web ' + req.body.web + ' required to be shown');
  io.sockets.emit("new_web", req.body);
  res.send({ok: 1});
});

io.on('connection', function(socket) {
  logger.log('info', 'New Client is now connected!!');
});

server.listen(PORT, function () {
   logger.log('info', 'Example app listening on port ' + PORT + '!');
});