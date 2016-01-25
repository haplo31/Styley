'use strict';

angular.module('styleyApp')
  .controller('CreateArtistCtrl', function ($scope) {
    $scope.step=1;
    var stepsName=['Account Informations','Generic Skills','QQ Explanation','Specific Skills','Skill Validation' ];
    $scope.progressBarStep=[{value:"20",text:stepsName[0]}];
    $scope.QQAutoLogin="false";
    $scope.nextStep = function(){
    	$scope.progressBarStep.push({value:"20",text:stepsName[$scope.step]})
      $scope.step++;
    };
    
    $scope.previousStep = function(){
    	$scope.progressBarStep.splice($scope.progressBarStep.length-1,1)
      $scope.step--;
    };
  });
