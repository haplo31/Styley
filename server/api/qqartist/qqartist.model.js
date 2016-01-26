'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var QqartistSchema = new mongoose.Schema({
  name: String,
  gskills: {},
  date:String,
  socket: String
});

export default mongoose.model('Qqartist', QqartistSchema);
