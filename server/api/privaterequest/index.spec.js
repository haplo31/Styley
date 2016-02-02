'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var privaterequestCtrlStub = {
  index: 'privaterequestCtrl.index',
  show: 'privaterequestCtrl.show',
  create: 'privaterequestCtrl.create',
  update: 'privaterequestCtrl.update',
  destroy: 'privaterequestCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var privaterequestIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './privaterequest.controller': privaterequestCtrlStub
});

describe('Privaterequest API Router:', function() {

  it('should return an express router instance', function() {
    privaterequestIndex.should.equal(routerStub);
  });

  describe('GET /api/privaterequests', function() {

    it('should route to privaterequest.controller.index', function() {
      routerStub.get
        .withArgs('/', 'privaterequestCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/privaterequests/:id', function() {

    it('should route to privaterequest.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'privaterequestCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/privaterequests', function() {

    it('should route to privaterequest.controller.create', function() {
      routerStub.post
        .withArgs('/', 'privaterequestCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/privaterequests/:id', function() {

    it('should route to privaterequest.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'privaterequestCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/privaterequests/:id', function() {

    it('should route to privaterequest.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'privaterequestCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/privaterequests/:id', function() {

    it('should route to privaterequest.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'privaterequestCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
