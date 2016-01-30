'use strict';
(function() {

class MainController {

  constructor($http, $scope, $rootScope, socket,notifications, $modal) {

    this.$http = $http;
    this.awesomeThings = [];
var qqartistpropData
    // $scope.$on('$destroy', function() {
    //   socket.unsyncUpdates('thing');
    //   socket.removeAllListeners();
    // })
    this.clickOnNotif= function(){
      if ($rootScope.qqartistpropData){
        var modalRequest = $modal.open({
          animation: true,
          templateUrl: '../../../components/qqNotifications/qqArtistProposition/qqArtistProposition.html',
          controller: 'qqArtistProposition',
          size: "lg",
          resolve: {
            data: function(){return $rootScope.qqartistpropData}
          }
        });
      }
      else if ($rootScope.qqclientvalidationData){
        var modalRequest = $modal.open({
          animation: true,
          templateUrl: '../../../components/qqNotifications/qqClientValidation/qqClientValidation.html',
          controller: 'qqClientValidation',
          size: "lg",
          resolve: {
            data: function(){return $rootScope.qqclientvalidationData}
          }
        });        
      }
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
