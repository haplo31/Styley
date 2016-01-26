/**
 * Qqartist model events
 */

'use strict';

import {EventEmitter} from 'events';
var Qqartist = require('./qqartist.model');
var QqartistEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
QqartistEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Qqartist.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    QqartistEvents.emit(event + ':' + doc._id, doc);
    QqartistEvents.emit(event, doc);
  }
}

export default QqartistEvents;
