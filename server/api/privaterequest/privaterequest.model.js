'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PrivaterequestSchema = new mongoose.Schema({
	owner: String,
	artist: String,
	modtype: String,
	vote : Number,
	src : [],
	modinfos: [],
	addinfos: [],
	quality: String,
	rating: String,
	price:String,
	resultsrc:[]
});

export default mongoose.model('Privaterequest', PrivaterequestSchema);
