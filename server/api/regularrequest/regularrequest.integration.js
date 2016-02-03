'use strict';

var app = require('../..');
import request from 'supertest';

var newRegularrequest;

describe('Regularrequest API:', function() {

  describe('GET /api/regularrequests', function() {
    var regularrequests;

    beforeEach(function(done) {
      request(app)
        .get('/api/regularrequests')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          regularrequests = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      regularrequests.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/regularrequests', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/regularrequests')
        .send({
          name: 'New Regularrequest',
          info: 'This is the brand new regularrequest!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newRegularrequest = res.body;
          done();
        });
    });

    it('should respond with the newly created regularrequest', function() {
      newRegularrequest.name.should.equal('New Regularrequest');
      newRegularrequest.info.should.equal('This is the brand new regularrequest!!!');
    });

  });

  describe('GET /api/regularrequests/:id', function() {
    var regularrequest;

    beforeEach(function(done) {
      request(app)
        .get('/api/regularrequests/' + newRegularrequest._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          regularrequest = res.body;
          done();
        });
    });

    afterEach(function() {
      regularrequest = {};
    });

    it('should respond with the requested regularrequest', function() {
      regularrequest.name.should.equal('New Regularrequest');
      regularrequest.info.should.equal('This is the brand new regularrequest!!!');
    });

  });

  describe('PUT /api/regularrequests/:id', function() {
    var updatedRegularrequest;

    beforeEach(function(done) {
      request(app)
        .put('/api/regularrequests/' + newRegularrequest._id)
        .send({
          name: 'Updated Regularrequest',
          info: 'This is the updated regularrequest!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedRegularrequest = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRegularrequest = {};
    });

    it('should respond with the updated regularrequest', function() {
      updatedRegularrequest.name.should.equal('Updated Regularrequest');
      updatedRegularrequest.info.should.equal('This is the updated regularrequest!!!');
    });

  });

  describe('DELETE /api/regularrequests/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/regularrequests/' + newRegularrequest._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when regularrequest does not exist', function(done) {
      request(app)
        .delete('/api/regularrequests/' + newRegularrequest._id)
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
