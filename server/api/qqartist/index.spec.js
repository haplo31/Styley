'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var qqartistCtrlStub = {
  index: 'qqartistCtrl.index',
  show: 'qqartistCtrl.show',
  create: 'qqartistCtrl.create',
  update: 'qqartistCtrl.update',
  destroy: 'qqartistCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var qqartistIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './qqartist.controller': qqartistCtrlStub
});

describe('Qqartist API Router:', function() {

  it('should return an express router instance', function() {
    qqartistIndex.should.equal(routerStub);
  });

  describe('GET /api/qqartists', function() {

    it('should route to qqartist.controller.index', function() {
      routerStub.get
        .withArgs('/', 'qqartistCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/qqartists/:id', function() {

    it('should route to qqartist.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'qqartistCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/qqartists', function() {

    it('should route to qqartist.controller.create', function() {
      routerStub.post
        .withArgs('/', 'qqartistCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/qqartists/:id', function() {

    it('should route to qqartist.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'qqartistCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/qqartists/:id', function() {

    it('should route to qqartist.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'qqartistCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/qqartists/:id', function() {

    it('should route to qqartist.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'qqartistCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
