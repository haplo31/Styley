'use strict';

// var express = require('express');

// var router = express.Router();
import Qqartist from './../qqartist/qqartist.model';
import QqRequest from './../qqrequest/qqrequest.model';
import main from './../../app.js'
exports.QQNewRequest = function (newrequest) {
	var modvalue='gskills.'+newrequest.modtype+'.value'
    var modrating='gskills.'+newrequest.modtype+'.rating'
	Qqartist.find().where(modvalue).equals(newrequest.quality).where(modrating).in(newrequest.rating).sort({ date : 'asc'}).limit(1).exec(function (err, designer) {
        if (designer.length>0){
          var data={};
          data.rating=designer[0].gskills[newrequest.modtype].rating
          data.artist=designer;
          data.request = newrequest;
          console.log(data)
          main.socketio.sockets.to(designer[0].socket).emit('qqartistprop', data);
          QqRequest.findOne({ src: newrequest.src },function(err,request){
          	request.available=false;
          	request.save()
          })
        }
    });  
}
exports.QQNewArtist = function(newartist) {
	console.log(newartist)
	//Need optimizing
	QqRequest.find().sort({ date : 'asc'}).limit(100).exec(function (err, requests) {
		for (var i = 0; i < requests.length; i++) {
			if ((requests[i].quality===newartist.gskills[requests[i].modtype].value)&&(requests[i].rating.indexOf(newartist.gskills[requests[i].modtype].rating)>0)){
	          var data={};
	          data.rating=newartist.gskills[requests[i].modtype].rating
	          data.request=requests[i];
	          data.artist = newartist;
	          main.socketio.sockets.to(newartist.socket).emit('qqartistprop', data);
	          requests[i].available=false;
	          requests[i].save()
	          return;
			}
		};
    });  
}