
/**
 * Dependencias
 */

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

/**
 * Configuración del servidor
 */

 app.use(express.static('public'));

/**
 * Rutas del servidor
 */

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

/**
 * Lógica de socket.io
 */

io.on('connection', function (socket) {
  socket.on('mensaje creado', function(mensaje) {
    socket.broadcast.emit('nuevo mensaje', mensaje);
  });
});

server.listen(3333);
