'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var qqrequestCtrlStub = {
  index: 'qqrequestCtrl.index',
  show: 'qqrequestCtrl.show',
  create: 'qqrequestCtrl.create',
  update: 'qqrequestCtrl.update',
  destroy: 'qqrequestCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var qqrequestIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './qqrequest.controller': qqrequestCtrlStub
});

describe('Qqrequest API Router:', function() {

  it('should return an express router instance', function() {
    qqrequestIndex.should.equal(routerStub);
  });

  describe('GET /api/qqrequests', function() {

    it('should route to qqrequest.controller.index', function() {
      routerStub.get
        .withArgs('/', 'qqrequestCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/qqrequests/:id', function() {

    it('should route to qqrequest.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'qqrequestCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/qqrequests', function() {

    it('should route to qqrequest.controller.create', function() {
      routerStub.post
        .withArgs('/', 'qqrequestCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/qqrequests/:id', function() {

    it('should route to qqrequest.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'qqrequestCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/qqrequests/:id', function() {

    it('should route to qqrequest.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'qqrequestCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/qqrequests/:id', function() {

    it('should route to qqrequest.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'qqrequestCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
