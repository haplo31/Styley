'use strict';

angular.module('styleyApp')
  .controller('qqClientValidation', function ($scope,data,$timeout,$http,$modalInstance) {
    $scope.message = 'Hello';
    console.log(data)
    $scope.data = data
    $scope.reput = data.rating
    $scope.quality = data.request.quality
    $scope.price = data.request.price[data.request.rating.indexOf(data.rating)]
    $scope.nbmods= data.request.modinfos.length;
    $scope.artist= data.artistname;
	$timeout(function(){
	$scope.btnCurrent = [];
	    var imgWidth = angular.element(document.querySelector('#image')).prop('width');
	    var posImgLeft = angular.element(document.querySelector('#image')).prop('offsetLeft');
	    var posImgTop = angular.element(document.querySelector('#image')).prop('offsetTop');
	    var posBlockLeft = angular.element(document.querySelector('#imageblock')).prop('offsetLeft');
	    var posBlockTop = angular.element(document.querySelector('#imageblock')).prop('offsetTop');
	    var posRequestBlockLeft = angular.element(document.querySelector('.requestBlock')).prop('offsetLeft');
	    var posRequestBlockTop = angular.element(document.querySelector('.requestBlock')).prop('offsetTop');
	    var ratio = imgWidth / data.request.modinfos[0].width
	    console.log(posImgLeft)
	    console.log(posImgTop)
	    console.log(posBlockLeft)
	    console.log(posBlockTop)
	    console.log(posRequestBlockLeft)
	    console.log(posRequestBlockTop)
	    for (var i = 0; i < data.request.modinfos.length; i++) {
	    	$scope.btnCurrent.push({posTop: posImgTop + data.request.modinfos[i].posTop*ratio-24, posLeft: posImgLeft + data.request.modinfos[i].posLeft*ratio-24})
	    };
	},500)
  });
