'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {

    this.$http = $http;
    this.awesomeThings = [];

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });
    socket.on('qqartistprop', function (data) {
      console.log("QQArtistProp")
    })
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
      socket.removeAllListeners();
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('styleyApp')
  .controller('MainController', MainController);

})();
