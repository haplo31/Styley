'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var currentrequestCtrlStub = {
  index: 'currentrequestCtrl.index',
  show: 'currentrequestCtrl.show',
  create: 'currentrequestCtrl.create',
  update: 'currentrequestCtrl.update',
  destroy: 'currentrequestCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var currentrequestIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './currentrequest.controller': currentrequestCtrlStub
});

describe('Currentrequest API Router:', function() {

  it('should return an express router instance', function() {
    currentrequestIndex.should.equal(routerStub);
  });

  describe('GET /api/currentrequests', function() {

    it('should route to currentrequest.controller.index', function() {
      routerStub.get
        .withArgs('/', 'currentrequestCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/currentrequests/:id', function() {

    it('should route to currentrequest.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'currentrequestCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/currentrequests', function() {

    it('should route to currentrequest.controller.create', function() {
      routerStub.post
        .withArgs('/', 'currentrequestCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/currentrequests/:id', function() {

    it('should route to currentrequest.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'currentrequestCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/currentrequests/:id', function() {

    it('should route to currentrequest.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'currentrequestCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/currentrequests/:id', function() {

    it('should route to currentrequest.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'currentrequestCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
