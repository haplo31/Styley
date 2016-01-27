'use strict';
(function() {

class MainController {

  constructor($http, $scope, socket,notifications, $modal) {

    this.$http = $http;
    this.awesomeThings = [];
var qqartistpropData
    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });
    socket.on('qqartistprop', function (data) {
      console.log("received socket")
      notifications.showSuccess({message: 'A new request corresponding your profile has been found !'});
      qqartistpropData=data;
    })
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
      socket.removeAllListeners();
    })
    this.clickOnNotif= function(){
      var modalRequest = $modal.open({
        animation: true,
        templateUrl: '../../../components/qqNotifications/qqArtistProposition/qqArtistProposition.html',
        controller: 'qqArtistProposition',
        size: "lg",
        resolve: {
          data: function(){return qqartistpropData}
        }
      });
    }
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
