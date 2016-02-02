'use strict';

var app = require('../..');
import request from 'supertest';

var newPrivaterequest;

describe('Privaterequest API:', function() {

  describe('GET /api/privaterequests', function() {
    var privaterequests;

    beforeEach(function(done) {
      request(app)
        .get('/api/privaterequests')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          privaterequests = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      privaterequests.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/privaterequests', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/privaterequests')
        .send({
          name: 'New Privaterequest',
          info: 'This is the brand new privaterequest!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPrivaterequest = res.body;
          done();
        });
    });

    it('should respond with the newly created privaterequest', function() {
      newPrivaterequest.name.should.equal('New Privaterequest');
      newPrivaterequest.info.should.equal('This is the brand new privaterequest!!!');
    });

  });

  describe('GET /api/privaterequests/:id', function() {
    var privaterequest;

    beforeEach(function(done) {
      request(app)
        .get('/api/privaterequests/' + newPrivaterequest._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          privaterequest = res.body;
          done();
        });
    });

    afterEach(function() {
      privaterequest = {};
    });

    it('should respond with the requested privaterequest', function() {
      privaterequest.name.should.equal('New Privaterequest');
      privaterequest.info.should.equal('This is the brand new privaterequest!!!');
    });

  });

  describe('PUT /api/privaterequests/:id', function() {
    var updatedPrivaterequest;

    beforeEach(function(done) {
      request(app)
        .put('/api/privaterequests/' + newPrivaterequest._id)
        .send({
          name: 'Updated Privaterequest',
          info: 'This is the updated privaterequest!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPrivaterequest = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPrivaterequest = {};
    });

    it('should respond with the updated privaterequest', function() {
      updatedPrivaterequest.name.should.equal('Updated Privaterequest');
      updatedPrivaterequest.info.should.equal('This is the updated privaterequest!!!');
    });

  });

  describe('DELETE /api/privaterequests/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/privaterequests/' + newPrivaterequest._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when privaterequest does not exist', function(done) {
      request(app)
        .delete('/api/privaterequests/' + newPrivaterequest._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
