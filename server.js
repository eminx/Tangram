const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const server = app.listen(port);

app.use(express.static('public'));

console.log('Socket server is running. localhost:' + port);

let socket = require('socket.io');
let io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('connection:', socket.id);
  socket.on('mouse', mouseMsg);

  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data);
  }
}
