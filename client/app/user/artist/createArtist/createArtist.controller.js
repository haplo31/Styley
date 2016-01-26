'use strict';

angular.module('styleyApp')
  .controller('CreateArtistCtrl', function ($scope,Upload,Auth,$location) {
  	$scope.addPersonPrice="17€";
    $scope.remPersonPrice="13€";
    $scope.impPrice="18€";
    $scope.addPersonPriceBronze="19€";
    $scope.remPersonPriceBronze="14€";
    $scope.impPriceBronze="20€";
    $scope.addPersonPriceSilver="20€";
    $scope.remPersonPriceSilver="17€";
    $scope.impPriceSilver="22€";
    $scope.addPersonPriceGold="24€";
    $scope.remPersonPriceGold="19€";
    $scope.impPriceGold="26€";


    $scope.step=1;
    var stepsName=['Account Informations','Generic Skills','QQ Explanation','Specific Skills','Skill Validation' ];
    $scope.progressBarStep=[{value:"20",text:stepsName[0]}];

    $scope.QQAutoLogin="false";

    $scope.skills=[];
    $scope.addSkill = function(){
      $scope.skills.push({name:"",tags:"",price:""});
    }
    $scope.remSkill = function(key){
      console.log(key)
      $scope.skills.splice(key,1);
    }

    $scope.loadFiles = function(index, file, errFiles) {
  	  if (file){
  	    $scope.imageAsk=true;
  	    $scope.skills[index].file=file
  	  }
		};

    $scope.nextStep = function(){
    	$scope.progressBarStep.push({value:"20",text:stepsName[$scope.step]})
      $scope.step++;
    };
    
    $scope.previousStep = function(){
    	$scope.progressBarStep.splice($scope.progressBarStep.length-1,1)
      $scope.step--;
    };

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        if ($scope.skills.length>0){
          for (var i = 0; i < $scope.skills.length; i++) {
            if ($scope.skills[i].file){
            	var nbUpload=0;
              Upload.upload({
                url: 'api/updatefile/artistskillimage',
                data: {file: $scope.skills[i].file, pos:i}
              }).then(function (resp) {
              	nbUpload++
              	$scope.skills[resp.data.pos].src=resp.data.filename;
              	if (nbUpload==$scope.skills.length){
              		Auth.createUser({
  				          name: $scope.user.name,
  				          firstname: $scope.user.firstname,
  				          lastname: $scope.user.lastname,
  				          email: $scope.user.email,
  				          password: $scope.user.password,
  				          type: "artist",
  				          qqautolog: $scope.QQAutoLogin,
  				          gskills: {addPers: {value: $scope.addpers || '0', rating:0},
  				                    remPers: {value: $scope.rempers || '0', rating:0},
  				                    addObj:  {value: $scope.addobj  || '0', rating:0},
  				                    remObj:  {value: $scope.addobj  || '0', rating:0},
  				                    enh:     {value: $scope.enh     || '0', rating:0},
  				                    incr:    {value: $scope.incr    || '0', rating:0}},
  				          sskills: $scope.skills
  				        })
  				        .then( function() {
  				          // Account created, redirect to designer home
  				          $location.path('main');
  				        })
  				        .catch( function(err) {
  				          err = err.data;
  				          $scope.errors = {};
  				          $scope.step=1;
  				          $scope.progressBarStep=[{value:"20",text:"Account Informations"}];
  				          // Update validity of form fields that match the mongoose errors
  				          angular.forEach(err.errors, function(error, field) {
  				            form[field].$setValidity('mongoose', false);
  				            $scope.errors[field] = error.message;
  				          });
  				        });
              	}
              })
            }
          };
        }
        else{
          Auth.createUser({
            name: $scope.user.name,
            firstname: $scope.user.firstname,
            lastname: $scope.user.lastname,
            email: $scope.user.email,
            password: $scope.user.password,
            type: "artist",
            qqautolog: $scope.QQAutoLogin,
            gskills: {addPers: {value: $scope.addpers || '0', rating:0},
                      remPers: {value: $scope.rempers || '0', rating:0},
                      addObj:  {value: $scope.addobj  || '0', rating:0},
                      remObj:  {value: $scope.addobj  || '0', rating:0},
                      enh:     {value: $scope.enh     || '0', rating:0},
                      incr:    {value: $scope.incr    || '0', rating:0}}
          })
          .then( function() {
            // Account created, redirect to designer home
            $location.path('main');
          })
          .catch( function(err) {
            err = err.data;
            $scope.errors = {};
            $scope.step=1;
            $scope.progressBarStep=[{value:"20",text:"Account Informations"}];
            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              $scope.errors[field] = error.message;
            });
          });
        }
      }
      else{
        $scope.step=1;
        $scope.progressBarStep=[{value:"20",text:"Account Informations"}];
      }
    };
  });
