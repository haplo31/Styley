/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/publicrequests              ->  index
 * POST    /api/publicrequests              ->  create
 * GET     /api/publicrequests/:id          ->  show
 * PUT     /api/publicrequests/:id          ->  update
 * DELETE  /api/publicrequests/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Publicrequest from './publicrequest.model';

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
//Get Most Voted Pics
exports.mostVotedPics = function(req, res) {
  Publicrequest.find().sort({ vote : 'desc'}).limit(50).exec(function (err, pictures) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(pictures);
  });
};
//Get last 50 pics
exports.last50Pics = function(req, res) {
  Publicrequest.find().sort({ createdAt : 'desc'}).limit(50).exec(function (err, pictures) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(pictures);
  });
};
// Gets a list of Publicrequests
export function index(req, res) {
  Publicrequest.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Publicrequest from the DB
export function show(req, res) {
  Publicrequest.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Publicrequest in the DB
export function create(req, res) {
  Publicrequest.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Publicrequest in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Publicrequest.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Publicrequest from the DB
export function destroy(req, res) {
  Publicrequest.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
