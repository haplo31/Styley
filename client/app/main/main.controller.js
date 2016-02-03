'use strict';
(function() {

class MainController {

  constructor($http, $scope, $rootScope, socket,notifications, $modal) {

    this.$http = $http;
    this.awesomeThings = [];
    // $scope.$on('$destroy', function() {
    //   socket.unsyncUpdates('thing');
    //   socket.removeAllListeners();
    // })

    $http.get("/api/publicrequests/most").success(function(photos){
      $scope.photos = photos;
      console.log(photos);
    });

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
      else if($rootScope.qqrequestrefused){
        var modalRequest = $modal.open({
          animation: true,
          templateUrl: '../../../components/qqNotifications/qqRequestRefused/qqRequestRefused.html',
          controller: 'qqRequestRefused',
          size: "md"
        });         
      }
      else if ($rootScope.qqrequestvalidatedData){
        var modalRequest = $modal.open({
          animation: true,
          templateUrl: '../../../components/qqNotifications/qqRequestValidated/qqRequestValidated.html',
          controller: 'qqRequestValidated',
          size: "lg",
          resolve: {
            data: function(){return $rootScope.qqrequestvalidatedData}
          }
        });         
      }
      else if ($rootScope.qqclientresultvalidation){
        var modalRequest = $modal.open({
          animation: true,
          templateUrl: '../../../components/qqNotifications/qqClientResultValidation/qqClientResultValidation.html',
          controller: 'qqClientResultValidation',
          size: "lg",
          resolve: {
            data: function(){return $rootScope.qqclientresultvalidation}
          }
        });         
      }
    }


    $scope.vote=function(pic){
      console.log("kikou");
    }


    //     $scope.vote=function(pic){
    //   console.log(pic)
    //   pic.vote+=1;
    //   console.log(pic)
    //   $http.put('/api/pictures/'+pic._id, pic);
    // }




    $scope.modalPic = function(item) {
      console.log(item);
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: '../../../components/modalPublicRequests/modalPublicRequests.html',
        controller: 'ModalPublicRequestsCtrl',
        size: "lg",
//        modalTemplate: '<div class="modal modal-width-override" ng-transclude></div>',
//        backdrop: true,
        resolve: {
          item: function () {
            return item;
          },
          vote: function () {
          return $scope.vote;
          }
        }
      });
      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
      });
    };


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
