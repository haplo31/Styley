/**
 * Privaterequest model events
 */

'use strict';

import {EventEmitter} from 'events';
var Privaterequest = require('./privaterequest.model');
var PrivaterequestEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PrivaterequestEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Privaterequest.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PrivaterequestEvents.emit(event + ':' + doc._id, doc);
    PrivaterequestEvents.emit(event, doc);
  }
}

export default PrivaterequestEvents;
