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
    {id: 'p13', 'title': 'josiane', src: "http://idata.over-blog.com/3/69/76/43/evenements/Novela-2010/r135_c_toulouse_1280.jpg"}
    //,
    // {id: 'p14', 'title': 'ccado', src: ""},
    // {id: 'p15', 'title': 'gros', src: ""},
    // {id: 'p16', 'title': 'moche', src: ""},
    // {id: 'p17', 'title': 'joli', src: ""},
    // {id: 'p18', 'title': 'amour', src: ""},
    // {id: 'p19', 'title': 'gloire', src: ""},
    // {id: 'p20', 'title': 'beauté', src: ""},
    // {id: 'p21', 'title': 'imagerie sattelite', src: ""},
    // {id: 'p22', 'title': 'salut ca va?', src: ""},
    // {id: 'p23', 'title': 'dvalamou?', src: ""},
    // {id: 'p24', 'title': 'okcécombien?', src: ""},
    // {id: 'p25', 'title': 'merci', src: ""},
    // {id: 'p26', 'title': 'à bientôt', src: ""},
    // {id: 'p27', 'title': 'dur dur', src: ""},
    // {id: 'p28', 'title': 'chez moi', src: ""},
    // {id: 'p29', 'title': 'rouler du ****', src: ""},
    // {id: 'p30', 'title': 'kicéka', src: ""},
    // {id: 'p31', 'title': 'pas moi', src: ""},
    // {id: 'p32', 'title': 'moi non plus', src: ""}
      ];


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
