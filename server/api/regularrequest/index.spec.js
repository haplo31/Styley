'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var regularrequestCtrlStub = {
  index: 'regularrequestCtrl.index',
  show: 'regularrequestCtrl.show',
  create: 'regularrequestCtrl.create',
  update: 'regularrequestCtrl.update',
  destroy: 'regularrequestCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var regularrequestIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './regularrequest.controller': regularrequestCtrlStub
});

describe('Regularrequest API Router:', function() {

  it('should return an express router instance', function() {
    regularrequestIndex.should.equal(routerStub);
  });

  describe('GET /api/regularrequests', function() {

    it('should route to regularrequest.controller.index', function() {
      routerStub.get
        .withArgs('/', 'regularrequestCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/regularrequests/:id', function() {

    it('should route to regularrequest.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'regularrequestCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/regularrequests', function() {

    it('should route to regularrequest.controller.create', function() {
      routerStub.post
        .withArgs('/', 'regularrequestCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/regularrequests/:id', function() {

    it('should route to regularrequest.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'regularrequestCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/regularrequests/:id', function() {

    it('should route to regularrequest.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'regularrequestCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/regularrequests/:id', function() {

    it('should route to regularrequest.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'regularrequestCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
