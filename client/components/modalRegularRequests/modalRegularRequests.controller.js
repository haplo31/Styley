'use strict';

angular.module('styleyApp')
  .controller('ModalRegularRequestsCtrl', function ($scope,item,$timeout) {
    $scope.message = 'Hello';

    $scope.item = item;
    $scope.imgPos=0;
    $scope.recapPos=0;
    for (var i = 0; i < item.addinfos.length; i++) {
    	console.log(item.addinfos[i].color)
    	switch(item.addinfos[i].color){
    		case "red": 
    			$scope.redInfos=item.addinfos[i].infos;
    			$scope.redtype=item.addinfos[i].type
    		break;
    		case "blue": 
    			$scope.blueInfos=item.addinfos[i].infos;
    			$scope.bluetype=item.addinfos[i].type
    		break;
    		case "green": 
    			$scope.greenInfos=item.addinfos[i].infos;
    			$scope.greentype=item.addinfos[i].type
    		break;
    		case "purple": 
    			$scope.purpleInfos=item.addinfos[i].infos;
    			$scope.purpletype=item.addinfos[i].type
    		break;
    	}
    };
    	$timeout(function(){
		$scope.btnCurrent = [];
		if(item.src.length>1){
        var imgWidth = angular.element(document.querySelector('#picturezonemult')).prop('width');
	    var posImgLeft = angular.element(document.querySelector('#picturezonemult')).prop('offsetLeft');
	    var posImgTop = angular.element(document.querySelector('#picturezonemult')).prop('offsetTop');
	    var posBlockLeft = 0;
	    var posBlockTop = 0;			
		}
		else{
        var imgWidth = angular.element(document.querySelector('#picturezone')).prop('width');
	    var posImgLeft = angular.element(document.querySelector('#picturezone')).prop('offsetLeft');
	    var posImgTop = angular.element(document.querySelector('#picturezone')).prop('offsetTop');
	    var posBlockLeft = angular.element(document.querySelector('#divImg')).prop('offsetLeft');
	    var posBlockTop = angular.element(document.querySelector('#divImg')).prop('offsetTop');				
		}
	    var ratio 
	    for (var i = 0; i < item.modinfos.length; i++) {
	    	ratio = imgWidth / item.modinfos[i].width
	    	$scope.btnCurrent.push({posTop: posImgTop - posBlockTop + item.modinfos[i].posTop*ratio, posLeft: posImgLeft - posBlockLeft + item.modinfos[i].posLeft*ratio,imgPos: item.modinfos[i].imgPos,color:item.modinfos[i].color})
	    };
	},500)
  });
