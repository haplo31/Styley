'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var timestamps = require('mongoose-timestamp');
var RegularrequestSchema = new mongoose.Schema({
	owner: String,
	artist: String,
	modtype: String,
	src:[],
	modinfos: [],
	addinfos: [],
  	active: Boolean
});
RegularrequestSchema.plugin(timestamps);
export default mongoose.model('Regularrequest', RegularrequestSchema);
