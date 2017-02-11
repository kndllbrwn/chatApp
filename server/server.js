const express = require('express');
const http = require('http');
const path = require('path');

const publicPath = path.join(__dirname, '../public');
const socketIO = require('socket.io');
var app = express();
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit('newEmail', {
    //     from: 'mike@example.com',
    //     text: 'Hey. What is going on',
    //     createdAt: 123
    // });

    // socket.emit('newMessage', {
    //     from: 'mike@example.com',
    //     text: 'Hey. What is going on',
    //     createdAt: 123
    // });    

    socket.on('createMessage', (message) => {
        console.log('Message received from:', message.from);
        console.log('Message:', message.text);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
    });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('Create email', newEmail);
    // });
    socket.on('disconnect', (socket) => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});