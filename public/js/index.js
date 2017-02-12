var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
  var li = $('<li></li>').text(`${message.from}: ${message.text}`);

  $('#messages').append(li);
});

// socket.emit('createMessage', {
//   from:"Guest",
//   text:"Hi"
// }, function(data){
//   console.log('Got it', data);
// });
  socket.on('newLocationMessage', function(message) {
    console.log('location!');
    var li = $('<li></li>');
    var a = $('<a target="_blank">My current location</a>');
    
    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);

    $('#messages').append(li);
  });

$('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: $('[name=message]').val()
  }, function (){

  });
});

var locationButton = $('#send-location')

locationButton.on('click',function (e) {
  if (!navigator.geolocation) {
    return alert('geolocation not supported by your browswer')
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    console.log('sent');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }, function() {
    alert('Unable to fetch location');
  });

});