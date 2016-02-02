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
    }




    $scope.photos = [
    {id: 'p1', 'title': 'A nice day!', src: "http://lorempixel.com/300/400/"},
    {id: 'p2', 'title': 'Puh!', src: "http://lorempixel.com/300/400/sports"},
    {id: 'p3', 'title': 'What a club!', src: "http://lorempixel.com/300/400/nightlife"},
    {id: 'p4', 'title': 'drougui', src: "http://joombig.com/demo-extensions1/images/gallery_slider/Swan_large.jpg"},  
    {id: 'p5', 'title': 'jeanjak', src: "http://technologie-f-mauriac.jimdo.com/app/download/8664189394/bmp_oiseau004.bmp?t=1395577376"},
    {id: 'p6', 'title': 'meuh', src: "http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg"},               
    {id: 'p7', 'title': 'cheah', src: "https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg"},
    {id: 'p8', 'title': 'sangochu', src: "http://cdn-uploads.gameblog.fr/images/dossiers/goku_iu_800.jpg"},
    {id: 'p9', 'title': 'iluminati', src: "http://images.jedessine.com/_uploads/_tiny_galerie/20080728/er985_21lgj_1image-illusion-optique07.gif"},
    {id: 'p10', 'title': 'mec', src: "http://s1.lemde.fr/image/2016/01/21/534x0/4851232_7_b49a_image-extraite-du-documentaire-de-jacques_8044ee22a06f4268f664c6ea1a68b1c7.jpg"},
    {id: 'p11', 'title': 'gadjo', src: "http://blogs.mathworks.com/pick/files/zebrainpastelfield.png"},
    {id: 'p12', 'title': 'minou', src: "http://www.sporting-promotion.fr/v2/wp-content/uploads/Fotolia_10703851_XL.jpg"},
    {id: 'p13', 'title': 'josiane', src: "http://idata.over-blog.com/3/69/76/43/evenements/Novela-2010/r135_c_toulouse_1280.jpg"},
    {id: 'p14', 'title': 'ccado', src: "http://media.paperblog.fr/i/586/5863481/arttitude-graphisme-seulement-L-TO6IeJ.bmp"},
    {id: 'p15', 'title': 'gros', src: "http://previews.123rf.com/images/scyther5/scyther51404/scyther5140400024/27356839-Graphiste-des-chantillons-de-swatch-travail-de-couleur-Banque-d'images.jpg"},
    {id: 'p16', 'title': 'moche', src: "http://www.instancespherique.fr/public/images/2009/juin/jmaller_2009.jpg"},
    {id: 'p17', 'title': 'joli', src: "http://img1.mxstatic.com/wallpapers/7825e673793be2609cd14e22c4d9083c_large.jpeg"},
    {id: 'p18', 'title': 'amour', src: "http://www.tourisme-saint-cyprien.com/sites/otstcyp/files/styles/teaser/public/Bandas%20plage-2.jpg?itok=V0SBcZQj"},
    {id: 'p19', 'title': 'gloire', src: "http://www.airstop.be/library/photos/11166815_berlin.jpg"},
    {id: 'p20', 'title': 'beauté', src: "https://cdn1.getyourguide.com/niwziy2l9cvz/3Nl5nGC5fq2CQ0O42awIwq/0cff0ba6cc53c2e0f9c153e820fcc8d0/berlin-Brandenburg-Gate-1112x630.jpg"},
    {id: 'p21', 'title': 'imagerie sattelite', src: "http://www.freedigitalphotos.net/images/category-images/131.jpg"},
    {id: 'p22', 'title': 'salut ca va?', src: "https://www.motel-one.com/fileadmin/_processed_/csm_Berlin_000031060192Small_buehne_02a566561c.jpg"},
    {id: 'p23', 'title': 'dvalamou?', src: "https://depts.washington.edu/biowww/images/seattle_kerry_park.png"},
    {id: 'p24', 'title': 'okcécombien?', src: "http://www.layoverguide.com/wp-content/uploads/2010/03/Seattle-skyline-across-Pier-66-waterfront.jpg"},
    {id: 'p25', 'title': 'merci', src: "http://www.seattlefinancial.com/wp-content/uploads/2015/01/cropped-Seattle-Washington-USA.jpg"},
    {id: 'p26', 'title': 'à bientôt', src: "http://images.fineartamerica.com/images-medium-5/seattle-washington-skyline-michael-tompsett.jpg"},
    {id: 'p27', 'title': 'dur dur', src: "http://i164.photobucket.com/albums/u8/hemi1hemi/COLOR/COL9-6.jpg"},
    {id: 'p28', 'title': 'chez moi', src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"},
    {id: 'p29', 'title': 'rouler du ****', src: "http://all4desktop.com/data_images/original/4237679-images.jpg"},
    {id: 'p30', 'title': 'kicéka', src: "http://www.gettyimages.fr/gi-resources/images/frontdoor/creative/Embed/hero_dog_482206371.jpg"}
    // {id: 'p31', 'title': 'pas moi', src: ""},
    // {id: 'p32', 'title': 'moi non plus', src: ""}
      ];

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
