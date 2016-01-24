'use strict';
import multer from 'multer';
import sharp from 'sharp'
var express = require('express');
var app= require ("../../app.js")
var router = express.Router();



var busboy = require('connect-busboy');
var fs = require('fs-extra');
//var lwip=require('lwip');
var upload = multer({ //multer settings
	dest: __dirname +'./../../uploads/qqrequest/originals'
});
router.post('/',upload.single('file'), function (req, res) {
	sharp(__dirname+'/../../uploads/qqrequest/originals/'+req.file.filename).resize(400, null).toFile(__dirname+'/../../uploads/qqrequest/samples/'+req.file.filename, function(err) {
         if (err) {
           throw err;
         }
         res.json({filename: req.file.filename});
    });
})

module.exports = router;