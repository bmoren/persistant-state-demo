var socket = io.connect('http://localhost:80') //set up a place for us to connect to, and try to connect.

socket.on('connect', function(data){ // when we are connected do something.
  console.log("connected to the server" + socket.id); // log out our socket's id, some long garbled number letter thing that is unique!
})

socket.on('storedPositions', function(data){
  console.log(data)

  data.forEach(function(position){
    $('<div>👻</div>').css({
      'position':'absolute',
      'top' : position.top,
      'left' : position.left,

    }).appendTo('body')


  })
})

socket.on('projectionRectangle', function(data){ // if we see a projectionRectangle message then do some stuff
  console.log(data) //see the coordinates come down.


    //first make a div, chage the css, then append to the body. this is not possible with the 'normal' syntax, becayse order of operations (with chained methods)
    $('<div>🔥</div>').css({
      'position':'absolute',
      'top' : data.top,
      'left' : data.left,

    }).appendTo('body')

})