'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var timestamps = require('mongoose-timestamp');
var CurrentrequestSchema = new mongoose.Schema({
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
CurrentrequestSchema.plugin(timestamps);
export default mongoose.model('Currentrequest', CurrentrequestSchema);
