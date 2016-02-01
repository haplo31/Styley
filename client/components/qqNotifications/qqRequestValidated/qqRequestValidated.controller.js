'use strict';

angular.module('styleyApp')
  .controller('qqRequestValidated', function ($scope,data,$timeout,$http,$modalInstance) {
    $scope.message = 'Hello';
    $scope.data = data
    $scope.reput = data.rating
    $scope.quality = data.request.quality
    $scope.price = data.request.price[data.request.rating.indexOf(data.rating)]
    $scope.nbmods= data.request.modinfos.length;
    $scope.namefile= data.request.owner + data.request.src
	$timeout(function(){
		$scope.btnCurrent = [];
	    var imgWidth = angular.element(document.querySelector('#image')).prop('width');
	    var posImgLeft = angular.element(document.querySelector('#image')).prop('offsetLeft');
	    var posImgTop = angular.element(document.querySelector('#image')).prop('offsetTop');
	    var posBlockLeft = angular.element(document.querySelector('#imageblock')).prop('offsetLeft');
	    var posBlockTop = angular.element(document.querySelector('#imageblock')).prop('offsetTop');
	    var ratio = imgWidth / data.request.modinfos[0].width
	    for (var i = 0; i < data.request.modinfos.length; i++) {
	    	$scope.btnCurrent.push({posTop: posImgTop - posBlockTop + data.request.modinfos[i].posTop*ratio, posLeft: posImgLeft - posBlockLeft + data.request.modinfos[i].posLeft*ratio})
	    };
	},500)


  });
