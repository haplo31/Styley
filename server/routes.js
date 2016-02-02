/**
 * Main application routes
 */

'use strict';
import express from 'express';
import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/privaterequests', require('./api/privaterequest'));
  app.use('/api/publicrequests', require('./api/publicrequest'));
  app.use('/api/currentrequests', require('./api/currentrequest'));
  app.use('/api/qqartists', require('./api/qqartist'));
  app.use('/api/qqrequests', require('./api/qqrequest'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/getprice', require('./api/getprice'));
  app.use('/api/updatefile', require('./api/updatefile'));
  app.use('/api/qqsystem', require('./api/qqsystem').router);
  app.use('/auth', require('./auth'));
  app.use("/qqrequest", express.static(__dirname +"/uploads/qqrequest"));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  //All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
