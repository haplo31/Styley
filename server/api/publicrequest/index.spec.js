'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var publicrequestCtrlStub = {
  index: 'publicrequestCtrl.index',
  show: 'publicrequestCtrl.show',
  create: 'publicrequestCtrl.create',
  update: 'publicrequestCtrl.update',
  destroy: 'publicrequestCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var publicrequestIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './publicrequest.controller': publicrequestCtrlStub
});

describe('Publicrequest API Router:', function() {

  it('should return an express router instance', function() {
    publicrequestIndex.should.equal(routerStub);
  });

  describe('GET /api/publicrequests', function() {

    it('should route to publicrequest.controller.index', function() {
      routerStub.get
        .withArgs('/', 'publicrequestCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/publicrequests/:id', function() {

    it('should route to publicrequest.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'publicrequestCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/publicrequests', function() {

    it('should route to publicrequest.controller.create', function() {
      routerStub.post
        .withArgs('/', 'publicrequestCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/publicrequests/:id', function() {

    it('should route to publicrequest.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'publicrequestCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/publicrequests/:id', function() {

    it('should route to publicrequest.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'publicrequestCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/publicrequests/:id', function() {

    it('should route to publicrequest.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'publicrequestCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
