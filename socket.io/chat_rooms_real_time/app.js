/**
 * Dependencias
 */

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const port = 3333;

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

let lastSocket;
let roomsData = {};
const chat = io.of('/chat');// namespace
const notifications = io.of('/notifications');//namespace
const getRoom = rooms => rooms[1];

chat.on('connection', function (socket) {
    console.time(socket.id);
    console.log("socket connected:", socket.id);

    if(!lastSocket) lastSocket = socket.id;
    chat.emit("lastSocket", lastSocket);
    lastSocket = socket.id;

    socket.on('join-room', (room, user) => {
        socket.join(room);
        if (typeof roomsData[room] === "undefined") {
            roomsData[room] = {
                createAt: "time...",
                participants: {[user.id]: user.nickname }
            }
        }else{
            roomsData[room]['participants'][user.id] = user.nickname;
        }
        chat.to(room).emit("update-room", roomsData[room]);
        console.log(">>>>join room:", {room, user, roomsData});
    })
    socket.on('leave-room', room => {
        socket.leave(room);
    })

    socket.on("add-message", data => {
        socket.to([...socket.rooms]).emit("add-message", data);
    })

    socket.on('disconnecting', () => {
        console.log(">>>>disconnecting:")
        const room = getRoom([...socket.rooms]);
        delete roomsData[room]['participants'][socket.id];
        chat.to(room).emit("update-room", roomsData[room]);
    })

    socket.on('disconnect', reason => {
        console.log("socket disconnected:", socket.id, reason);
        console.timeEnd(socket.id);
    })
});

notifications.on("connection", socket => {
    socket.on("alert", message => {
        socket.broadcast.emit("alert", message);
    })
});

server.listen(port, function(){
    console.log(`Server running on port ${port}`);
});