'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var RegularrequestSchema = new mongoose.Schema({
	owner: String,
	artist: String,
	modtype: String,
	src:[],
	modinfos: [],
	addinfos: [],
  	active: Boolean
});

export default mongoose.model('Regularrequest', RegularrequestSchema);
