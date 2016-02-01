'use strict';

var app = require('../..');
import request from 'supertest';

var newCurrentrequest;

describe('Currentrequest API:', function() {

  describe('GET /api/currentrequests', function() {
    var currentrequests;

    beforeEach(function(done) {
      request(app)
        .get('/api/currentrequests')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          currentrequests = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      currentrequests.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/currentrequests', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/currentrequests')
        .send({
          name: 'New Currentrequest',
          info: 'This is the brand new currentrequest!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newCurrentrequest = res.body;
          done();
        });
    });

    it('should respond with the newly created currentrequest', function() {
      newCurrentrequest.name.should.equal('New Currentrequest');
      newCurrentrequest.info.should.equal('This is the brand new currentrequest!!!');
    });

  });

  describe('GET /api/currentrequests/:id', function() {
    var currentrequest;

    beforeEach(function(done) {
      request(app)
        .get('/api/currentrequests/' + newCurrentrequest._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          currentrequest = res.body;
          done();
        });
    });

    afterEach(function() {
      currentrequest = {};
    });

    it('should respond with the requested currentrequest', function() {
      currentrequest.name.should.equal('New Currentrequest');
      currentrequest.info.should.equal('This is the brand new currentrequest!!!');
    });

  });

  describe('PUT /api/currentrequests/:id', function() {
    var updatedCurrentrequest;

    beforeEach(function(done) {
      request(app)
        .put('/api/currentrequests/' + newCurrentrequest._id)
        .send({
          name: 'Updated Currentrequest',
          info: 'This is the updated currentrequest!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCurrentrequest = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCurrentrequest = {};
    });

    it('should respond with the updated currentrequest', function() {
      updatedCurrentrequest.name.should.equal('Updated Currentrequest');
      updatedCurrentrequest.info.should.equal('This is the updated currentrequest!!!');
    });

  });

  describe('DELETE /api/currentrequests/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/currentrequests/' + newCurrentrequest._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when currentrequest does not exist', function(done) {
      request(app)
        .delete('/api/currentrequests/' + newCurrentrequest._id)
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
