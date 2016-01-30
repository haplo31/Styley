'use strict';
import multer from 'multer';
import sharp from 'sharp';
import crypto from 'crypto';
import path from 'path';
var express = require('express');
var app= require ("../../app.js")
var router = express.Router();



var busboy = require('connect-busboy');
var fs = require('fs-extra');
//var lwip=require('lwip');

var storageRequestImg = multer.diskStorage({ //multer settings
    destination: __dirname +'./../../uploads/qqrequest/originals',
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
           cb(null, raw.toString('hex') + path.extname(file.originalname))
        });
    }
});
var uploadRequestImg = multer({ storage: storageRequestImg });
router.post('/',uploadRequestImg.single('file'), function (req, res) {
	sharp(__dirname+'/../../uploads/qqrequest/originals/'+req.file.filename).resize(400, null).toFile(__dirname+'/../../uploads/qqrequest/samples/'+req.file.filename, function(err) {
         if (err) {
           throw err;
         }
         res.json({filename: req.file.filename});
    });		
})

var storageArtistSkillImg = multer.diskStorage({ //multer settings
	destination: __dirname +'./../../uploads/artistskillimage/originals',
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
           cb(null, raw.toString('hex') + path.extname(file.originalname))
        });
    }
});
var uploadArtistSkillImg= multer({ storage: storageArtistSkillImg });
router.post('/artistskillimage',uploadArtistSkillImg.single('file'), function (req, res) {
    console.log(req.file)
	sharp(__dirname+'/../../uploads/artistskillimage/originals/'+req.file.filename).resize(400, null).toFile(__dirname+'/../../uploads/artistskillimage/samples/'+req.file.filename, function(err) {
         if (err) {
           throw err;
         }
         res.json({filename: req.file.filename,pos: req.body.pos});
    });	
})

module.exports = router;