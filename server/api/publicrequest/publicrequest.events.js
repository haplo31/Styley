/**
 * Publicrequest model events
 */

'use strict';

import {EventEmitter} from 'events';
var Publicrequest = require('./publicrequest.model');
var PublicrequestEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PublicrequestEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Publicrequest.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PublicrequestEvents.emit(event + ':' + doc._id, doc);
    PublicrequestEvents.emit(event, doc);
  }
}

export default PublicrequestEvents;
