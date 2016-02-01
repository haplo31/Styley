/* global io */
'use strict';

angular.module('styleyApp')
  .factory('socket', function(socketFactory,$rootScope,notifications) {
    // socket.io now auto-configures its connection when we ommit a connection url
    var ioSocket = io('', {
      // Send auth token on connection, you will need to DI the Auth service above
      // 'query': 'token=' + Auth.getToken()
      path: '/socket.io-client'
    });
    console.log("initsocket")
    var socket = socketFactory({ ioSocket });

    socket.on('qqartistprop', function (data) {
      console.log("received socket artist")
      notifications.showSuccess({message: 'A new request corresponding your profile has been found !'});
      $rootScope.qqartistpropData=data;
      $rootScope.qqclientvalidationData=null;
      $rootScope.qqrequestrefused=null;
      $rootScope.qqrequestvalidatedData=null;
    })

    socket.on('qqclientvalidation', function (data) {
      console.log("received socket client")
      notifications.showSuccess({message: 'An artist has been found for your request !'});
      $rootScope.qqclientvalidationData=data;
      $rootScope.qqartistpropData=null;
      $rootScope.qqrequestrefused=null;
      $rootScope.qqrequestvalidatedData=null;
    })

    socket.on('qqclientartistoffline', function (data) {
      console.log("received socket offline")
      notifications.showError({message: "Your artist is disconnected, we are searching a new one for you."});
      $rootScope.qqartistpropData=null;
      $rootScope.qqclientvalidationData=null;
      $rootScope.qqrequestrefused=null;
      $rootScope.qqrequestvalidatedData=null;
    })

    socket.on('qqrequestrefused', function () {
      console.log("received request refused")
      notifications.showError({message: "The client has refused your proposition..."});
      $rootScope.qqartistpropData=null;
      $rootScope.qqclientvalidationData=null;
      $rootScope.qqrequestrefused=true;
      $rootScope.qqrequestvalidatedData=null;
    })

    socket.on('qqrequestvalidated', function (data) {
      console.log("received request validated")
      notifications.showSuccess({message: "The client has confirmed, the request is yours !"});
      $rootScope.qqartistpropData=null;
      $rootScope.qqclientvalidationData=null;
      $rootScope.qqrequestrefused=null;
      $rootScope.qqrequestvalidatedData=data;
    })
    return {
      socket,

      /**
       * Register listeners to sync an array with updates on a model
       *
       * Takes the array we want to sync, the model name that socket updates are sent from,
       * and an optional callback function after new items are updated.
       *
       * @param {String} modelName
       * @param {Array} array
       * @param {Function} cb
       */
      on(eventName, callback) {
        socket.on(eventName, function () {  
          var args = arguments;
          $rootScope.$apply(function () {
            callback.apply(socket, args);
          });
        });
      },
      removeAllListeners(){
        socket.removeAllListeners();
      },
      emit(msg,param){
        socket.emit(msg,param)
      },
      syncUpdates(modelName, array, cb) {
        cb = cb || angular.noop;

        /**
         * Syncs item creation/updates on 'model:save'
         */
        socket.on(modelName + ':save', function (item) {
          var oldItem = _.find(array, {_id: item._id});
          var index = array.indexOf(oldItem);
          var event = 'created';

          // replace oldItem if it exists
          // otherwise just add item to the collection
          if (oldItem) {
            array.splice(index, 1, item);
            event = 'updated';
          } else {
            array.push(item);
          }

          cb(event, item, array);
        });

        /**
         * Syncs removed items on 'model:remove'
         */
        socket.on(modelName + ':remove', function (item) {
          var event = 'deleted';
          _.remove(array, {_id: item._id});
          cb(event, item, array);
        });



      },

      /**
       * Removes listeners for a models updates on the socket
       *
       * @param modelName
       */
      unsyncUpdates(modelName) {
        socket.removeAllListeners(modelName + ':save');
        socket.removeAllListeners(modelName + ':remove');
      }
    };

  });
