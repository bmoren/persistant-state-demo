var app = require('express')() // use the express js framework to server out html files (handle the request and response on the server)
var server = require('http').Server( app ) // start a server instance on a port
var io = require('socket.io')(server) // use socket.io for real time connections aka. wesockets

server.listen(3000, function(){ // set up a server on port 3000, do a callback when it started successfully
  console.log("server started on 3000");
})

app.get('/', function(req, res){ // look at the root request using express.js (notice the 'app' at the beginning)
  res.sendFile(__dirname + '/public/index.html') //after a request, respond aka. 'res' with the file that we want to send back to the user, in this case index.html
})

app.get('/projection', function(req, res){ // look at the /projection path and send back the projection.html file
  res.sendFile(__dirname + '/public/projection.html')

})

io.on('connection', function(socket){  // if socket.io sees a new connection, do something with them...
  console.log(socket.id) // prints out the socket that connected (ie: all users + the projection)

  socket.on('addRectangle', function(data){ //look for any messages with the 'addRectangle'
    console.log("addRectangle" + data); // log out the 'data' in this case you get true, but you could use this to get and arbitray data you want, think position, color, etc.
    io.emit('projectionRectangle', true); // send out a message to the projection to add a rect to the screen.

  })


  // persistant variable
  // passing position data
  //storing position data in an array.....


})