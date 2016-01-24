'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var QqrequestSchema = new mongoose.Schema({
	owner: String,
	artist: String,
	modtype: String,
	vote : Number,
	src : String,
	modinfos: [],
	addinfos: String,
	quality: String,
	rating: [],
	price:[],
	available: Boolean
});

export default mongoose.model('Qqrequest', QqrequestSchema);
