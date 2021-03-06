'use strict';

var express = require('express');
var router = express.Router();
router.post('/responseartist', responseArtist);
router.post('/responseclient', responseClient);
router.post('/resultartist', resultArtist);
router.post('/payartist', payArtist);
import Qqartist from './../qqartist/qqartist.model';
import QqRequest from './../qqrequest/qqrequest.model';
import currentRequest from './../currentrequest/currentrequest.model'
import publicRequest from './../publicrequest/publicrequest.model'
import privateRequest from './../privaterequest/privaterequest.model'
import User from './../user/user.model'
import main from './../../app.js';
var QQNewRequest = exports.QQNewRequest = function (newrequest) {
	console.log('newrequest')
	var modvalue='gskills.'+newrequest.modtype+'.value'
    var modrating='gskills.'+newrequest.modtype+'.rating'
	Qqartist.find().where(modvalue).equals(newrequest.quality).where(modrating).in(newrequest.rating).sort({ date : 'asc'}).limit(1).exec(function (err, designer) {
        if (designer.length>0){
          var data={};
          data.rating=designer[0].gskills[newrequest.modtype].rating
          data.artistname=designer[0].name;
          data.artistsocket=designer[0].socket;
          data.request = newrequest;
          designer[0].remove();
          main.socketio.sockets.to(designer[0].socket).emit('qqartistprop', data);
          QqRequest.findOne({ src: newrequest.src },function(err,request){
          	request.available=false;
          	request.save()
          	return;
          })
        }
        return;
    });  
}
var QQNewArtist = exports.QQNewArtist = function(newartist) {
	console.log('newartist')
	//Need optimizing
	QqRequest.find().where('available').equals(true).sort({ date : 'asc'}).limit(100).exec(function (err, requests) {
		if (requests.length>0){
			for (var i = 0; i < requests.length; i++) {
				if ((requests[i].quality===newartist.gskills[requests[i].modtype].value)&&(requests[i].rating.indexOf(newartist.gskills[requests[i].modtype].rating)>=0)){
          var data={};
          data.rating=newartist.gskills[requests[i].modtype].rating
          data.request=requests[i];
          data.artistsocket = newartist.socket;
          data.artistname = newartist.name
          main.socketio.sockets.to(newartist.socket).emit('qqartistprop', data);
          requests[i].available=false;
          requests[i].save()
		      return;
				} else if (i == requests.length-1){
					Qqartist.createAsync(newartist)
					return;
				}
			};
		}else{
			Qqartist.createAsync(newartist)
			return;
		}
  });  
}
function responseArtist(req, res) {
  console.log("client response received")
  if (req.body.response == 'accept'){
	  var socketList = Object.keys(main.socketio.engine.clients)
	  User.findOne().where('name').equals(req.body.data.request.owner).exec(function(err,owner){
	  	if (owner.socket){
			  if (socketList.indexOf(owner.socket.slice(2))>=0){
			  	main.socketio.sockets.to(owner.socket).emit('qqclientvalidation',req.body.data);
			  }
			  else{
			  	//SEND MAIL
			  }  			
	  	}
	  	else{
	  		//SEND MAIL
	  	}
	  })
	}
	else if (req.body.response == 'refuse'){
		QqRequest.findOne({src:req.body.data.request.src},function(err,request){
			request.available=true;
			request.save();
			QQNewRequest(req.body.data.request)
		})
	}
  return res.status(200).json({});
}

function responseClient(req,res){
  console.log("client response received")
  if (req.body.response == 'accept'){
	  var socketList = Object.keys(main.socketio.engine.clients)
  	if (socketList.indexOf(req.body.data.artistsocket.slice(2))>=0){
		  main.socketio.sockets.to(req.body.data.artistsocket).emit('qqrequestvalidated',req.body.data);
	  	QqRequest.findOne({src:req.body.data.request.src},function(err,request){
	  		request.artist=req.body.data.artistname
	  		request.rating=req.body.data.rating
	  		request.price=req.body.data.request.price[req.body.data.request.rating.indexOf(req.body.data.rating)]
	  		currentRequest.createAsync(request)
	  		.then(function (resp){
		      User.findOne().where('name').equals(request.owner).exec(function (err, user) {
		        user.currentrequests.push(request._id);
		        user.save();
		      })
		      .then(function (resp){
		        User.findOne().where('name').equals(request.artist).exec(function (err, user) {
		          user.currentrequests.push(request._id);
		        	user.save();
		        })
      		})
    		})
				request.remove();
			})		  
  	}
  	else{
  		User.findOne().where('name').equals(req.body.data.request.owner).exec(function(err,owner){
		  	if (owner.socket){
				  if (socketList.indexOf(owner.socket.slice(2))>=0){
				  	main.socketio.sockets.to(owner.socket).emit('qqclientartistoffline',req.body.data);
				  	QqRequest.findOne({src:req.body.data.request.src},function(err,request){
							request.available=true;
							request.save();
							QQNewRequest(req.body.data.request)
						})
				  }
				  else{
				  	//SEND MAIL
				  }  			
		  	}
		  	else{
		  		//SEND MAIL
		  	}
		  })
  	}
	}
	else if (req.body.response == 'refuse'){
		main.socketio.sockets.to(req.body.data.artistsocket).emit('qqrequestrefused');
  	QqRequest.findOne({src:req.body.data.request.src},function(err,request){
			request.available=true;
			request.save();
			QQNewRequest(req.body.data.request)
		})

	}
	return res.status(200).json({});
}

function resultArtist(req,res){
	console.log("result artist received")
	console.log(req.body.request)
	currentRequest.findOne().where('_id').equals(req.body.request._id).exec(function(err,request){
		request.resultsrc=req.body.request.resultsrc;
		request.save();
	})
  User.findOne().where('name').equals(req.body.request.owner).exec(function(err,owner){
  	if (owner.socket){
  		var socketList = Object.keys(main.socketio.engine.clients)
		  if (socketList.indexOf(owner.socket.slice(2))>=0){
		  	main.socketio.sockets.to(owner.socket).emit('qqclientresultvalidation',req.body.request);
		  }
		  else{
		  	//SEND MAIL
		  }  			
  	}
  	else{
  		//SEND MAIL
  	}
  	return res.status(200).json({});
  })
}

function payArtist(req,res){
	console.log(req.body)
	currentRequest.findOne().where('_id').equals(req.body.request._id).exec(function(err,request){
		if (req.body.visibility=== 'public'){
		  publicRequest.createAsync(request)
			.then(function (resp){
		    User.findOne().where('name').equals(request.owner).exec(function (err, user) {
		      user.currentrequests.splice( user.currentrequests.indexOf(request._id),1);
		      user.archivedrequests.push({request:request._id,visibility:'public'})
		      user.save();
		  	})
			  .then(function (resp){
			    User.findOne().where('name').equals(request.artist).exec(function (err, user) {
			      user.currentrequests.splice(user.currentrequests.indexOf(request._id),1);
			      user.archivedrequests.push({request:request._id,visibility:'public'})
			    	user.save();
			    })
			    .then(function(resp){
			    	request.remove();
			    })
				})
			})
		}
		else{
		  privateRequest.createAsync(request)
			.then(function (resp){
		    User.findOne().where('name').equals(request.owner).exec(function (err, user) {
		      user.currentrequests.splice( user.currentrequests.indexOf(request._id),1);
		      user.archivedrequests.push({request:request._id,visibility:'private'})
		      user.save();
		  	})
			  .then(function (resp){
			    User.findOne().where('name').equals(request.artist).exec(function (err, user) {
			      user.currentrequests.splice(user.currentrequests.indexOf(request._id),1);
			      user.archivedrequests.push({request:request._id,visibility:'private'})
			    	user.save();
			    })
			    .then(function(resp){
			    	request.remove();
			    })
				})
			})			
		}
	})
	return res.status(200).json({});
}
exports.router = router