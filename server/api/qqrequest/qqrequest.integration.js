'use strict';

var app = require('../..');
import request from 'supertest';

var newQqrequest;

describe('Qqrequest API:', function() {

  describe('GET /api/qqrequests', function() {
    var qqrequests;

    beforeEach(function(done) {
      request(app)
        .get('/api/qqrequests')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          qqrequests = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      qqrequests.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/qqrequests', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/qqrequests')
        .send({
          name: 'New Qqrequest',
          info: 'This is the brand new qqrequest!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newQqrequest = res.body;
          done();
        });
    });

    it('should respond with the newly created qqrequest', function() {
      newQqrequest.name.should.equal('New Qqrequest');
      newQqrequest.info.should.equal('This is the brand new qqrequest!!!');
    });

  });

  describe('GET /api/qqrequests/:id', function() {
    var qqrequest;

    beforeEach(function(done) {
      request(app)
        .get('/api/qqrequests/' + newQqrequest._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          qqrequest = res.body;
          done();
        });
    });

    afterEach(function() {
      qqrequest = {};
    });

    it('should respond with the requested qqrequest', function() {
      qqrequest.name.should.equal('New Qqrequest');
      qqrequest.info.should.equal('This is the brand new qqrequest!!!');
    });

  });

  describe('PUT /api/qqrequests/:id', function() {
    var updatedQqrequest;

    beforeEach(function(done) {
      request(app)
        .put('/api/qqrequests/' + newQqrequest._id)
        .send({
          name: 'Updated Qqrequest',
          info: 'This is the updated qqrequest!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedQqrequest = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedQqrequest = {};
    });

    it('should respond with the updated qqrequest', function() {
      updatedQqrequest.name.should.equal('Updated Qqrequest');
      updatedQqrequest.info.should.equal('This is the updated qqrequest!!!');
    });

  });

  describe('DELETE /api/qqrequests/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/qqrequests/' + newQqrequest._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when qqrequest does not exist', function(done) {
      request(app)
        .delete('/api/qqrequests/' + newQqrequest._id)
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
