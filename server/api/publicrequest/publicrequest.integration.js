'use strict';

var app = require('../..');
import request from 'supertest';

var newPublicrequest;

describe('Publicrequest API:', function() {

  describe('GET /api/publicrequests', function() {
    var publicrequests;

    beforeEach(function(done) {
      request(app)
        .get('/api/publicrequests')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          publicrequests = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      publicrequests.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/publicrequests', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/publicrequests')
        .send({
          name: 'New Publicrequest',
          info: 'This is the brand new publicrequest!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPublicrequest = res.body;
          done();
        });
    });

    it('should respond with the newly created publicrequest', function() {
      newPublicrequest.name.should.equal('New Publicrequest');
      newPublicrequest.info.should.equal('This is the brand new publicrequest!!!');
    });

  });

  describe('GET /api/publicrequests/:id', function() {
    var publicrequest;

    beforeEach(function(done) {
      request(app)
        .get('/api/publicrequests/' + newPublicrequest._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          publicrequest = res.body;
          done();
        });
    });

    afterEach(function() {
      publicrequest = {};
    });

    it('should respond with the requested publicrequest', function() {
      publicrequest.name.should.equal('New Publicrequest');
      publicrequest.info.should.equal('This is the brand new publicrequest!!!');
    });

  });

  describe('PUT /api/publicrequests/:id', function() {
    var updatedPublicrequest;

    beforeEach(function(done) {
      request(app)
        .put('/api/publicrequests/' + newPublicrequest._id)
        .send({
          name: 'Updated Publicrequest',
          info: 'This is the updated publicrequest!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPublicrequest = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPublicrequest = {};
    });

    it('should respond with the updated publicrequest', function() {
      updatedPublicrequest.name.should.equal('Updated Publicrequest');
      updatedPublicrequest.info.should.equal('This is the updated publicrequest!!!');
    });

  });

  describe('DELETE /api/publicrequests/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/publicrequests/' + newPublicrequest._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when publicrequest does not exist', function(done) {
      request(app)
        .delete('/api/publicrequests/' + newPublicrequest._id)
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
