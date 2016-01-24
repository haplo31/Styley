/**
 * Qqrequest model events
 */

'use strict';

import {EventEmitter} from 'events';
var Qqrequest = require('./qqrequest.model');
var QqrequestEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
QqrequestEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Qqrequest.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    QqrequestEvents.emit(event + ':' + doc._id, doc);
    QqrequestEvents.emit(event, doc);
  }
}

export default QqrequestEvents;
