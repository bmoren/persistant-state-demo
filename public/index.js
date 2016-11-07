var socket = io.connect('http://localhost:80') // connect to the server

socket.on('connect', function(data){ // when connected, do something
  console.log("connected to the server" + socket.id); // log out out id
})


$('body').click(function(e){ // on click, so something
  // console.log(e) // see the results of the click event.

  $('<div>😎</div>').css({
    'position':'absolute',
    'top' : e.clientY,
    'left' : e.clientX,
  }).appendTo('body')

  var dataToSend = {
    'top': e.clientY,
    'left' : e.clientX
  }

  socket.emit('addRectangle', dataToSend ) // send out a message of addRectangle to the server, it will handle the details (party planning)!

})


