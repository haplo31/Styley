/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/qqrequests              ->  index
 * POST    /api/qqrequests              ->  create
 * GET     /api/qqrequests/:id          ->  show
 * PUT     /api/qqrequests/:id          ->  update
 * DELETE  /api/qqrequests/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Qqrequest from './qqrequest.model';
import User from './../user/user.model';
import QqSystem from './../qqsystem';
function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Qqrequests
export function index(req, res) {
  Qqrequest.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Qqrequest from the DB
export function show(req, res) {
  Qqrequest.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Qqrequest in the DB
export function create(req, res) {
  Qqrequest.createAsync(req.body)
    .then(function (resp){
      User.findOne({name: resp.owner}).exec(function (err, user) {
        user.pendingqqrequest.push(resp._id);
        user.save();
        QqSystem.QQNewRequest(req.body)
      }).then(respondWithResult(res, 201))
    })
    .catch(handleError(res));
}

// Updates an existing Qqrequest in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Qqrequest.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Qqrequest from the DB
export function destroy(req, res) {
  Qqrequest.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
