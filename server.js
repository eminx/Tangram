const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const server = app.listen(port);

app.use(express.static('public'));

console.log('Socket server is running at localhost:' + port);

let socket = require('socket.io');
let io = socket(server);

io.sockets.on('connection', client => {
  client.on('mouse', data => {
    client.broadcast.emit('mouse', data);
  });
    
  client.on('moveShape', data => {
    client.broadcast.emit('moveShape', data);  
  });
    
  client.on('colorChangeRequest', data => {
      console.log("received color");
  	io.sockets.emit('colorChangeConfirm', data);  
  });
});