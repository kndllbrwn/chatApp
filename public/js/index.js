var socket = io();

socket.on('connect', function() {
    // console.log("Connected to server");

    // socket.emit('createEmail', {
    //     to: 'jen@example.com',
    //     text: 'Hey. This is Andrew'
    // });

    socket.emit('createMessage', {
        from: 'kb3',
        text: 'Hi, I\'m writing from the server'
        });
});

socket.on('newMessage', function(message) {
    console.log("Message from:", message.from);
    console.log("Message:", message.text);
    console.log("Created at:", message.createdAt);
}); 

socket.on('disconnect', function() {
    console.log("Disconnected from server");
});

// socket.on('newEmail', function(email){
//     console.log("New email", email);
// });

    