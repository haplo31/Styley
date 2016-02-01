/**
 * Currentrequest model events
 */

'use strict';

import {EventEmitter} from 'events';
var Currentrequest = require('./currentrequest.model');
var CurrentrequestEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CurrentrequestEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Currentrequest.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    CurrentrequestEvents.emit(event + ':' + doc._id, doc);
    CurrentrequestEvents.emit(event, doc);
  }
}

export default CurrentrequestEvents;
