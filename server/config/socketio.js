/**
 * Socket.io configuration
 */
'use strict';

import config from './environment';
import User from './../api/user/user.model';
import QQArtist from './../api/qqartist/qqartist.model';
import QqSystem from './../api/qqsystem';
// When the user disconnects.. perform this
function onDisconnect(socket) {
  QQArtist.findOne({socket:socket.id},function(err,qqartist){
    if (qqartist){
    qqartist.removeAsync()
    qqartist.save();      
    }
  })      
}

// When the user connects.. perform this
function onConnect(socket) {
  // When the client emits 'info', this listens and executes
  socket.on('info', data => {
    socket.log(JSON.stringify(data, null, 2));
  });
  socket.on('sendSocket', function(data){
    console.log('sendSocket')
    data.socket=socket.id
    User.findOne({name:data.name},function(err,user){
      user.socket=data.socket;
      user.save();
    })
  })

  socket.on('sendSocketQQ', function(data){
    data.socket=socket.id
    User.findOne({name:data.name},function(err,user){
      user.socket=data.socket;
      user.save();
      //QQArtist.createAsync(data)
      QqSystem.QQNewArtist(data)
    })
  });

  // Insert sockets below
  require('../api/currentrequest/currentrequest.socket').register(socket);
  require('../api/qqartist/qqartist.socket').register(socket);
  require('../api/qqrequest/qqrequest.socket').register(socket);
  require('../api/thing/thing.socket').register(socket);

}

export default function(socketio) {
  // socket.io (v1.x.x) is powered by debug.
  // In order to see all the debug output, set DEBUG (in server/config/local.env.js) to including the desired scope.
  //
  // ex: DEBUG: "http*,socket.io:socket"

  // We can authenticate socket.io users and access their token through socket.decoded_token
  //
  // 1. You will need to send the token in `client/components/socket/socket.service.js`
  //
  // 2. Require authentication here:
  // socketio.use(require('socketio-jwt').authorize({
  //   secret: config.secrets.session,
  //   handshake: true
  // }));

  socketio.on('connection', function(socket) {
    socket.address = socket.request.connection.remoteAddress +
      ':' + socket.request.connection.remotePort;

    socket.connectedAt = new Date();

    socket.log = function(...data) {
      console.log(`SocketIO ${socket.nsp.name} [${socket.address}]`, ...data);
    }




    // Call onDisconnect.
    socket.on('disconnect', () => {
      onDisconnect(socket);
      socket.log('DISCONNECTED');  
    });

    // Call onConnect.
    onConnect(socket);
    socket.log('CONNECTED');

  });
}
