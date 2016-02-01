'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CurrentrequestSchema = new mongoose.Schema({
	owner: String,
	artist: String,
	modtype: String,
	vote : Number,
	src : String,
	modinfos: [],
	addinfos: [],
	quality: String,
	rating: String,
	price:String,
	available: Boolean
});

export default mongoose.model('Currentrequest', CurrentrequestSchema);
