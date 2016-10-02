// var app = require('express')() // use the express js framework to server out html files (handle the request and response on the server)
var express = require('express');
var app = express();
var server = require('http').Server( app ) // start a server instance on a port
var io = require('socket.io')(server) // use socket.io for real time connections aka. wesockets

server.listen(3000, function(){ // set up a server on port 3000, do a callback when it started successfully
  console.log("server started on 3000");
})

app.use(express.static('public')); //load out anything in the 'public' folder

var storedPositions = [];

io.on('connection', function(socket){  // if socket.io sees a new connection, do something with them...
  console.log(socket.id) // prints out the socket that connected (ie: all users + the projection)

  io.emit('storedPositions', storedPositions); // when someone connects, send out the stored positions to them...

  socket.on('addRectangle', function(data){ //look for any messages with the 'addRectangle'
    console.log("addRectangle" + data); // log out the 'data' in this case you get true, but you could use this to get and arbitray data you want, think position, color, etc.
    storedPositions.push(data) //add the stored positions into the array for temp storage as long as the server is up.
    io.emit('projectionRectangle', data); // send out a message to the projection to add a rect to the screen.

  })


  // persistant variable
  // passing position data
  //storing position data in an array.....


})