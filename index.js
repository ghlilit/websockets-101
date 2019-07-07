const express = require('express');
const socket = require('socket.io');

//App setup
const app = express();
const server = app.listen(4000, () =>{
    console.log("listeing to 4k")
})

//Static files
app.use(express.static('public'));

//Socket setup
const io = socket(server);

io.on('connection', socket => {
    console.log('made socket connection');

    socket.on('chat', data => {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', data => {
        socket.broadcast.emit('typing', data);
    });
})