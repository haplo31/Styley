'use strict';

angular.module('styleyApp')
  .controller('customCtrl', function ($scope,$timeout,$http,Auth,Upload,$modalInstance) {
  	$scope.isLoggedIn = Auth.isLoggedIn
    $scope.step=1;
    $scope.completedStep=1;
		$scope.sliderSrc1 = '../../../assets/images/rem1.png';
  	$scope.sliderSrc2 = '../../../assets/images/rem2.png';	
  	$timeout(function(){$('.slider').slider(); }, 500);
		
    $scope.nextStep = function(){
      $scope.step++;
    };
    
    $scope.previousStep = function(){
      $scope.step--;
    };
		
		$scope.files=[]
		$scope.imgPos=0;
		$scope.recapPos=0;
    $scope.loadFiles = function(file, errFiles) {
  	  if (file){
  	    $scope.imageAsk=true;
  	    $scope.files.push(file);
  	    if ($scope.files.length>1){
  	    	$scope.imgPos++;
  	    } 
  	  }
		}
		$scope.setSelected = function (idSelected) {
   		$scope.keyPicSelected = idSelected;
		};

    $scope.select= function(color){
    	console.log(typeof color)
    	switch (color){
				case "red": $scope.redPointer = true;$scope.bluePointer = false;$scope.greenPointer = false;$scope.purplePointer = false; break;
				case "blue": $scope.redPointer = false;$scope.bluePointer = true;$scope.greenPointer = false;$scope.purplePointer = false; break;
				case "green": $scope.redPointer = false;$scope.bluePointer = false;$scope.greenPointer = true;$scope.purplePointer = false; break;
				case "purple": $scope.redPointer = false;$scope.bluePointer = false;$scope.greenPointer = false;$scope.purplePointer = true; break;    		
    	}
      return false;
    }
    $scope.btnPlaced = [];
    $scope.btnCurrent = [];
    var posTop,posLeft,imgWidth,imgHeight;
    $scope.nbRed=0;
    $scope.nbBlue=0;
    $scope.nbGreen=0;
    $scope.nbPurple=0;
    $scope.clickOnImg = function(event){
      if (($scope.redPointer===true)||($scope.bluePointer===true)||($scope.greenPointer===true)||($scope.purplePointer===true)){
        posTop = event.offsetY;
        posLeft =  event.offsetX;
        var pointercolor
        if ($scope.redPointer === true){pointercolor = 'red'; $scope.nbRed++;}
        if ($scope.bluePointer === true){pointercolor = 'blue'; $scope.nbBlue++;}
        if ($scope.greenPointer === true){pointercolor = 'green'; $scope.nbGreen++;}
        if ($scope.purplePointer === true){pointercolor = 'purple'; $scope.nbPurple++;}
        if ($scope.files.length>1){
        	imgWidth = angular.element(document.querySelector('#picturezonemult')).prop('width');
        	imgHeight = angular.element(document.querySelector('#picturezonemult')).prop('height');
        $scope.btnCurrent.push({'posTop': angular.element(document.querySelector('#picturezonemult')).prop('offsetTop') + posTop, 
          'posLeft': angular.element(document.querySelector('#picturezonemult')).prop('offsetLeft') + posLeft,'imgPos' : $scope.imgPos, 'color' : pointercolor});
        }
        else{
        	imgWidth = angular.element(document.querySelector('#picturezone')).prop('width');
        	imgHeight = angular.element(document.querySelector('#picturezone')).prop('height');
        	$scope.btnCurrent.push({'posTop': angular.element(document.querySelector('#picturezone')).prop('offsetTop') + posTop, 
          'posLeft': angular.element(document.querySelector('#picturezone')).prop('offsetLeft') + posLeft,'imgPos' : $scope.imgPos, 'color' : pointercolor});
        }
        $scope.btnPlaced.push({'posTop': posTop,'posLeft': posLeft,'width': imgWidth, 'height': imgHeight,'imgPos' : $scope.imgPos, 'color' : pointercolor});
        $scope.redPointer = false;
        $scope.bluePointer = false;
        $scope.greenPointer = false;
        $scope.purplePointer = false;
        if ($scope.completedStep<2)
          $scope.completedStep = 2;
      }
    };
    $scope.removePlaced = function(index){
    	switch ($scope.btnPlaced[index].color){
    		case "red": $scope.nbRed --;
    		case "green": $scope.nbGreen --;
    		case "blue": $scope.nbBlue --;
    		case "purple": $scope.nbPurple --;

    	}
      $scope.btnPlaced.splice(index,1);
      $scope.btnCurrent.splice(index,1);
      if ($scope.btnPlaced.length === 0){
        $scope.completedStep=1;
      }
    };
    $scope.meanings = ['Remove','Add','Improve','Colorize','Custom']

    $scope.submitRequest = function(){
    	var addinfos = [];
    	if ($scope.nbRed>0) addinfos.push({'type':$scope.redmeaning,'infos':$scope.infosRed,'color':'red'})
    	if ($scope.nbBlue>0) addinfos.push({'type':$scope.bluemeaning,'infos':$scope.infosBlue,'color':'blue'})
    	if ($scope.nbGreen>0) addinfos.push({'type':$scope.greenmeaning,'infos':$scope.infosGreen,'color':'green'})
    	if ($scope.nbPurple>0) addinfos.push({'type':$scope.purplemeaning,'infos':$scope.infosPurple,'color':'purple'})
    	console.log(addinfos)
    	var imgSrcs = [];
    	var imgTempSrc = [];
    	var nbresp = 0;
      if ($scope.files && $scope.files.length) {
        for (var i = 0; i < $scope.files.length; i++) {
        	imgTempSrc.push($scope.files[i].name);
          Upload.upload({url: 'api/updatefile',data: {file:$scope.files[i]}})
          .then(function(resp){
          	imgSrcs.push({'src':resp.data.filename, 'num': imgTempSrc.indexOf(resp.config.data.file.name)})
          	nbresp++;
          	if (nbresp==$scope.files.length){
			        $http.post('/api/regularrequests/',{ 	owner:Auth.getCurrentUser().name,
			                                      				modtype:"creation",
			                                      				src:imgSrcs,
			                                      				modinfos:$scope.btnPlaced,
			                                      				addinfos:addinfos
																									})
			        .success(function(){
			          $modalInstance.close();
			        }); 
			      }
          });
        }
      }
      // Upload.upload({
      //     url: 'api/updatefile',
      //     data: {file:$scope.file}
      // }).then(function (resp) {
      //     $http.post('/api/qqrequests/',{ owner:Auth.getCurrentUser().name,
      //                                   artist:"",
      //                                   modtype:"remPers",
      //                                   vote:0,
      //                                   src:[resp.data.filename],
      //                                   modinfos:$scope.btnPlaced,
      //                                   addinfos:[$scope.infos],
      //                                   quality:$scope.radioModel,
      //                                   rating:ratingSelected,
      //                                   price: finalPrices,
      //                                   available:"true"})
      //     .success(function(){
      //       $modalInstance.close();
      //     });      
      // });
    }   
	});
