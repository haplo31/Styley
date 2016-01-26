'use strict';

var app = require('../..');
import request from 'supertest';

var newQqartist;

describe('Qqartist API:', function() {

  describe('GET /api/qqartists', function() {
    var qqartists;

    beforeEach(function(done) {
      request(app)
        .get('/api/qqartists')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          qqartists = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      qqartists.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/qqartists', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/qqartists')
        .send({
          name: 'New Qqartist',
          info: 'This is the brand new qqartist!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newQqartist = res.body;
          done();
        });
    });

    it('should respond with the newly created qqartist', function() {
      newQqartist.name.should.equal('New Qqartist');
      newQqartist.info.should.equal('This is the brand new qqartist!!!');
    });

  });

  describe('GET /api/qqartists/:id', function() {
    var qqartist;

    beforeEach(function(done) {
      request(app)
        .get('/api/qqartists/' + newQqartist._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          qqartist = res.body;
          done();
        });
    });

    afterEach(function() {
      qqartist = {};
    });

    it('should respond with the requested qqartist', function() {
      qqartist.name.should.equal('New Qqartist');
      qqartist.info.should.equal('This is the brand new qqartist!!!');
    });

  });

  describe('PUT /api/qqartists/:id', function() {
    var updatedQqartist;

    beforeEach(function(done) {
      request(app)
        .put('/api/qqartists/' + newQqartist._id)
        .send({
          name: 'Updated Qqartist',
          info: 'This is the updated qqartist!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedQqartist = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedQqartist = {};
    });

    it('should respond with the updated qqartist', function() {
      updatedQqartist.name.should.equal('Updated Qqartist');
      updatedQqartist.info.should.equal('This is the updated qqartist!!!');
    });

  });

  describe('DELETE /api/qqartists/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/qqartists/' + newQqartist._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when qqartist does not exist', function(done) {
      request(app)
        .delete('/api/qqartists/' + newQqartist._id)
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
