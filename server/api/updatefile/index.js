'use strict';

var express = require('express');

var router = express.Router();

router.post('/', uploadFile);

var busboy = require('connect-busboy');
var fs = require('fs-extra');
//var lwip=require('lwip');

function uploadFile(req, res) {
  req.pipe(req.busboy);
  req.busboy.on('file', function (fieldname, file, filename) {
    var stream = fs.createWriteStream(__dirname + '/uploads/' + filename);
    file.pipe(stream);
    stream.on('close', function () {
	    console.log('File ' + filename + ' is uploaded');
	    //USE EASYIMAGE module//
			// lwip.open(__dirname +'/uploads/'+filename, function(err, image){
			//   // check err...
			//   // define a batch of manipulations and save to disk as JPEG:
			//   var imgRatio = image.height()/image.width();
			//   var tempHeight = 285*imgRatio
			//   if ((285*imgRatio)>570){
			//   	image.batch()
			//   	.resize(570/imgRatio,570)
			//     .writeFile(__dirname +'/uploads/samples/'+filename, function(err){
			//     	console.log("resample done");
			//     });
			//   }
			//   else{
			//   	image.batch()
			//   	.resize(285,285*imgRatio)
			//     .writeFile(__dirname +'/uploads/samples/'+filename, function(err){
			//     	console.log("resample done");
			//     });
			//   }
			// });
      res.json({
        filename: filename
      });
    });
  });
}

module.exports = router;